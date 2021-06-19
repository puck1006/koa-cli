# koa-cli开发

## 开发

1.  用`fs`模块 创建`dir` 以及 `index.js` 、 `package.json`
2. 使用 `ejs` 进行条件渲染js代码
3. 生成`inputconfig`数据结构来控制 `ejs`代码生成
4. 使用 `inquirer`库让用户自定义inputconfig
5. 使用`execa` 来安装依赖 
```javascript
execa("yarn", {
  cwd: getRoot(),  //getroot()为项目的根路径
  stdio: [2, 2, 2], //  显示安装进度条
});
```

6.  引入`prettier` 来格式化代码

```javascript
prettier.format(r, { //r 为将要被格式化的代码, 指定代码解析器
    parser: "babel",
});
  
```
### 注意点
- 如果使用esm 来开发 nodejs 需要在package.json 设置type:"module"
- 如果需要使用到__dirname 需要自己拼接一个

```javascript
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(import.meta.url);
//此时的__dirname为文件路径. 需要../出去
```
  

## 发布

1. 在package.json 中配置bin 以及 files
```json
  "files": [  //指定上传到npm上的文件
    "bin", 
    "package.json"
  ],
  "bin": "./bin/index.js",
```
2. 把项目代码移到bin目录下 
3. 项目执行文件index.js的顶部需要配置 `#!/usr/bin/env node` 来告诉系统用node来解析
4. npm link
5. npm login --registry http://registry.npmjs.org 
6. npm publish --registry http://registry.npmjs.org 

npm -g install eventproxy表示用全局模式安装包，但是不代表你可以在任何地方require到这个包，在Linux下它其实把包安装到/usr/local/lib/node_modules下，然后通过软连接的方式把包中bin目录下的可执行文件链接到/usr/local/bin下面（和node一个目录）。


