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
import { singular } from "pluralize";
import { IndentationText, Project } from "ts-morph";
import { Location, mergeSourceRoot, NameParser } from "../../../utils";
import { ResourceOptions } from "./schema.schema";

export function main(options: ResourceOptions): Rule {
  options = transform(options);

  return (tree: Tree, context: SchematicContext) => {
    return branchAndMerge(
      chain([
        mergeSourceRoot(options),
        mergeWith(generateFiles(options)),
        updateIndex(options),
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

function generateFiles(options: ResourceOptions): Source {
  return (context: SchematicContext) => {
    return apply(url(join("./files" as Path)), [
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
      move(`src/schemas`),
    ])(context);
  };
}

function updateIndex(options: ResourceOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const { name } = options;
    const filePath = join("src" as Path, "schemas/index.ts");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project({
      manipulationSettings: { indentationText: IndentationText.TwoSpaces },
    });

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });
    try {
      srcFile
        .insertExportDeclaration(0, {
          moduleSpecifier: `./${singular(name)}.schema`,
        })
        .toNamespaceExport();

      tree.overwrite(filePath, srcFile.getFullText());
    } catch (e) {
      context.logger.error(e.message);
    }
  };
}
