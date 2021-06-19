#!/usr/bin/env node
import fs from "fs";
import createIndexTemplate from "./createIndexTemplate.js";
import createPackjsonTemplate from "./createPackjsonTemplate.js";
import question from "./question/index.js";
import { createConfig } from "./config.js";
import execa from "execa";

const answer = await question();

const inputConfig = createConfig(answer);

// // //创建文件夹
fs.mkdirSync(getRoot());
//创建index.js

fs.writeFileSync(`${getRoot()}/index.js`, createIndexTemplate(inputConfig));

// // 创建package.json
fs.writeFileSync(
  `${getRoot()}/package.json`,
  createPackjsonTemplate(inputConfig)
);

function getRoot() {
  return "./wang";
}

// 安装依赖

execa("yarn", {
  cwd: getRoot(),
  stdio: [2, 2, 2],
});
