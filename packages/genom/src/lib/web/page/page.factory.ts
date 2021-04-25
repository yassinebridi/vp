import { join, Path, strings } from "@angular-devkit/core";
import { classify } from "@angular-devkit/core/src/utils/strings";
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  Source,
  template,
  Tree,
  url,
} from "@angular-devkit/schematics";
import * as pluralize from "pluralize";
import { Location, mergeSourceRoot, NameParser } from "../../../utils";
import { ResourceOptions } from "./page.schema";

export function main(options: ResourceOptions): Rule {
  options = transform(options);

  return (tree: Tree, context: SchematicContext) => {
    return branchAndMerge(
      chain([
        mergeSourceRoot(options),
        mergeWith(generatePage(options)),
        mergeWith(generateComponent(options)),
      ])
    )(tree, context);
  };
}

function transform(options: ResourceOptions): ResourceOptions {
  const target: ResourceOptions = Object.assign({}, options);
  if (!target.name) {
    throw new SchematicsException("Option (name) is required.");
  }

  const location: Location = new NameParser().parse(target);
  target.name = strings.dasherize(location.name);
  target.path = strings.dasherize(location.path);
  target.path = join(target.path as Path, target.name);

  return target;
}

function generatePage(options: ResourceOptions): Source {
  return (context: SchematicContext) => {
    return apply(url(join("./pages" as Path)), [
      template({
        ...strings,
        ...options,
        lowercased: (name: string) => {
          const classifiedName = classify(name);
          return (
            classifiedName.charAt(0).toLowerCase() + classifiedName.slice(1)
          );
        },
        singular: (name: string) => pluralize.singular(name),
      }),
      move(`src/pages`),
    ])(context);
  };
}
function generateComponent(options: ResourceOptions): Source {
  return (context: SchematicContext) => {
    return apply(url(join("./components" as Path)), [
      template({
        ...strings,
        ...options,
        lowercased: (name: string) => {
          const classifiedName = classify(name);
          return (
            classifiedName.charAt(0).toLowerCase() + classifiedName.slice(1)
          );
        },
        singular: (name: string) => pluralize.singular(name),
      }),
      move(`src/components`),
    ])(context);
  };
}
