import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  template,
  mergeWith,
  branchAndMerge,
  move
} from "@angular-devkit/schematics";
import { Schema } from "./schema";

// @TODO Use parseJson from @angular-devkit/core
import { strings } from "@angular-devkit/core";
import { dasherize } from "@angular-devkit/core/src/utils/strings";

const setExclamation = (value: string) => {
  return value + "!";
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function service(_options: Schema): Rule {
  return (__tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url("./templates");
    const templateParams = { ...strings, ..._options, setExclamation  };

    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template(templateParams),
      move(dasherize(templateParams.name))
    ]);

    return branchAndMerge(mergeWith(sourceParametrizedTemplates));  };
}
