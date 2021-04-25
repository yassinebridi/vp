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
import { Project, SyntaxKind, Writers } from "ts-morph";
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
        updateComponentsIndex(options),
        updatePagesIndex(options),
        updateRoutes(options),
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

function updateComponentsIndex(options: ResourceOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const { name } = options;
    const filePath = join("src" as Path, "components/index.ts");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project();

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });
    try {
      srcFile
        .addExportDeclaration({
          moduleSpecifier: `./${name}`,
        })
        .toNamespaceExport();

      tree.overwrite(filePath, srcFile.getFullText());
    } catch (e) {
      context.logger.error(e.message);
    }
  };
}

function updatePagesIndex(options: ResourceOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const { name } = options;
    const filePath = join("src" as Path, "pages/index.ts");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project();

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });
    try {
      srcFile.addImportDeclaration({
        defaultImport: `${classify(name)}Page`,
        moduleSpecifier: `./${name}/${name}`,
      });
      srcFile.addImportDeclaration({
        defaultImport: `${classify(name)}TrashPage`,
        moduleSpecifier: `./${name}/trash`,
      });
      srcFile.addExportDeclarations([
        {
          namedExports: [`${classify(name)}Page`],
        },
        {
          namedExports: [`${classify(name)}TrashPage`],
        },
      ]);

      tree.overwrite(filePath, srcFile.getFullText());
    } catch (e) {
      context.logger.error(e.message);
    }
  };
}

function updateRoutes(options: ResourceOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const { name } = options;
    console.log("name: ", name);
    const filePath = join("src" as Path, "utils/routes/sidebar.ts");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project();

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });
    const varDec = srcFile.getVariableDeclaration("routes");
    try {
      const init = varDec.getInitializerIfKindOrThrow(
        SyntaxKind.ArrayLiteralExpression
      );
      init.insertElement(
        0,
        Writers.object({
          path: `"/${name}"`,
          icon: "HomeIcon",
          name: `"${name}"`,
        })
      );
      tree.overwrite(filePath, srcFile.getFullText());
    } catch (e) {
      context.logger.error(e.message);
    }
  };
}