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
import { IndentationText, Project, SyntaxKind, Writers } from "ts-morph";
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
        updateCreateItem(options),
        updateUpdateItem(options),
        updateApp(options),
        updateTrashCount(options),
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
    const project = new Project({
      manipulationSettings: { indentationText: IndentationText.TwoSpaces },
    });

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
    const project = new Project({
      manipulationSettings: { indentationText: IndentationText.TwoSpaces },
    });

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

      const expDec = srcFile.getExportDeclaration((exp) => {
        return exp.hasNamedExports();
      });
      expDec.insertNamedExports(0, [
        {
          name: `${classify(name)}Page`,
        },
        {
          name: `${classify(name)}TrashPage`,
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
    const filePath = join("src" as Path, "utils/routes/sidebar.ts");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project({
      manipulationSettings: { indentationText: IndentationText.TwoSpaces },
    });

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });
    const varDec = srcFile.getVariableDeclaration("routes");
    try {
      const init = varDec.getInitializerIfKindOrThrow(
        SyntaxKind.ArrayLiteralExpression
      );
      const subMenuArr = init.getFirstDescendantByKind(
        SyntaxKind.ArrayLiteralExpression
      );

      // Insert this object in the second routes array(which is a sub routes), in the last array position of those sub routes
      subMenuArr.insertElement(
        subMenuArr.getChildCount() - 1,
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
function updateCreateItem(options: ResourceOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const { name } = options;
    const filePath = join("src" as Path, "components/generics/CreateItem.tsx");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project({
      manipulationSettings: { indentationText: IndentationText.TwoSpaces },
    });

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });

    try {
      const impDec = srcFile.getImportDeclaration(
        (imp) => imp.getModuleSpecifier().getText() === '"@components"'
      );
      impDec.insertNamedImport(0, {
        name: `Create${singular(classify(name))}`,
      });

      const varDec = srcFile.getFirstDescendantByKind(
        SyntaxKind.ArrayLiteralExpression
      );
      varDec.insertElement(
        0,
        Writers.object({
          name: `"${name}"`,
          jsx: `<Create${singular(classify(name))} />`,
        })
      );
      tree.overwrite(filePath, srcFile.getFullText());
    } catch (e) {
      context.logger.error(e.message);
    }
  };
}
function updateUpdateItem(options: ResourceOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const { name } = options;
    const filePath = join("src" as Path, "components/generics/UpdateItem.tsx");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project({
      manipulationSettings: { indentationText: IndentationText.TwoSpaces },
    });

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });

    try {
      const impDec = srcFile.getImportDeclaration(
        (imp) => imp.getModuleSpecifier().getText() === '"@components"'
      );
      impDec.insertNamedImport(0, {
        name: `Update${singular(classify(name))}`,
      });

      const varDec = srcFile.getFirstDescendantByKind(
        SyntaxKind.ArrayLiteralExpression
      );
      varDec.insertElement(
        0,
        Writers.object({
          name: `"${name}"`,
          jsx: `<Update${singular(
            classify(name)
          )} id={id} onClose={onClose} isOpen={isOpen} />`,
        })
      );
      tree.overwrite(filePath, srcFile.getFullText());
    } catch (e) {
      context.logger.error(e.message);
    }
  };
}
function updateApp(options: ResourceOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const { name } = options;
    const filePath = join("src" as Path, "App.tsx");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project({
      manipulationSettings: { indentationText: IndentationText.TwoSpaces },
    });

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });

    try {
      const impDec = srcFile.getImportDeclaration(
        (imp) => imp.getModuleSpecifier().getText() === '"@pages"'
      );
      impDec.insertNamedImports(0, [
        {
          name: `${classify(name)}Page`,
        },
        {
          name: `${classify(name)}TrashPage`,
        },
      ]);

      const jsx = srcFile.getFirstDescendantByKind(
        SyntaxKind.JsxSelfClosingElement
      );

      srcFile.insertText(jsx.getStartLinePos(), (writer) => {
        writer.write(
          `<CustomRoute
            title="${classify(name)} | Videplacard"
            exact
            path="/${name}"
            isTable={true}
            component={${classify(name)}Page}
            layout={HomeLayout}
          />
          <CustomRoute
            title="${classify(name)} (Trash) | Videplacard"
            exact
            path="/${name}/trash"
            isTable={true}
            component={${classify(name)}TrashPage}
            layout={HomeLayout}
          />
          `
        );
      });
      srcFile.formatText();
      tree.overwrite(filePath, srcFile.getFullText());
    } catch (e) {
      context.logger.error(e.message);
    }
  };
}
function updateTrashCount(options: ResourceOptions): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const { name } = options;
    const filePath = join("src" as Path, "components/generics/TrashCount.tsx");
    const srcContent = tree.read(filePath).toString("utf-8");
    const project = new Project({
      manipulationSettings: { indentationText: IndentationText.TwoSpaces },
    });

    const srcFile = project.createSourceFile(filePath, srcContent, {
      overwrite: true,
    });

    try {
      const impDec = srcFile.getImportDeclaration(
        (imp) => imp.getModuleSpecifier().getText() === '"@adapters"'
      );
      impDec.insertNamedImport(0, {
        name: `useCount${classify(name)}Query`,
      });

      const varDec = srcFile.getFirstDescendantByKind(SyntaxKind.ArrowFunction);

      varDec.insertStatements(2, (writer) => {
        writer.write(
          `
const { data: ${name}Data, isLoading: ${name}IsLoading } = useCount${classify(
            name
          )}Query(
  {
    where: { isTrash: { equals: true } },
  },
  {
    enabled: component === "${name}",
  }
);
`
        );
      });

      const arrays = srcFile.getDescendantsOfKind(
        SyntaxKind.ArrayLiteralExpression
      );
      arrays[0].insertElement(
        0,
        Writers.object({
          name: `"${name}"`,
          loading: `${name}IsLoading`,
        })
      );
      arrays[1].insertElement(
        0,
        Writers.object({
          name: `"${name}"`,
          count: `"${name}Data && ${name}Data.count${classify(name)}"`,
        })
      );

      tree.overwrite(filePath, srcFile.getFullText());
    } catch (e) {
      context.logger.error(e.message);
    }
  };
}
