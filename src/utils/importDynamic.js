import { resolve } from "path";
import { pathToFileURL } from "url";

const importDynamic = async function (baseFolderName, options) {
  let commandFullPath = "src/";

  if (options.subGroup) {
    commandFullPath +=
      baseFolderName +
      "/" +
      options.baseCommand +
      "/" +
      options.subGroup +
      "/" +
      options.subCommand +
      ".js";
  } else if (options.subCommand) {
    commandFullPath +=
      baseFolderName +
      "/" +
      options.baseCommand +
      "/" +
      options.subCommand +
      ".js";
  } else {
    commandFullPath += baseFolderName + "/" + options.baseCommand + ".js";
  }

  return import(pathToFileURL(resolve(commandFullPath)));
};

export default importDynamic;
