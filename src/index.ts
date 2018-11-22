import fs from "fs";
import { getEmitFiles } from "./getEmitFiles";
import { parseConfig } from "./parseConfig";

const basePath = process.cwd();

const { options, fileNames } = parseConfig(basePath);

getEmitFiles({ options, fileNames }).forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
});
