import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import prettier from 'prettier'

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  const packjsonTemplate = fs.readFileSync(
    path.resolve(__dirname, "../template/packjson.ejs")
  );

  const r = ejs.render(packjsonTemplate.toString(), {
    projectName: config.projectName,
    middleware: config.middleware,
  });

  return prettier.format(r,{
    parser:'json'
  });
};
