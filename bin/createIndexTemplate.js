import ejs from "ejs";
import fs from "fs";
import path from "path";
import prettier from "prettier";
import { fileURLToPath } from "url";

export default (config) => {
  const __dirname = fileURLToPath(import.meta.url);
  console.log(__dirname);
  const indexTemplate = fs.readFileSync(
    path.resolve(__dirname, "../template/index.ejs")
  );

  const r = ejs.render(indexTemplate.toString(), {
    static: config.middleware.static,
    router: config.middleware.router,
  });

  return prettier.format(r, {
    parser: "babel",
  });
};
