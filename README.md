# Electron 应用模板

## Prerequisite

+ [Node.js](https://nodejs.org/en/) 10+
+ [Yarn](https://yarnpkg.com/en/) 1.12+

## Install

```shell
git clone <this-project>
# 安装依赖
yarn
```

## Usage

### 基本命令

```shell
# 开始开发服务器, 将使用webpack编译程序, 并运行electron
yarn start

# 构建生产环境代码
yarn build

# 打包electron程序
yarn package
```

### 技术栈

+ [Typescript](https://www.typescriptlang.org) 支持类型检查的Javascript超集
+ [Electron](https://electronjs.org/docs/tutorial/application-debugging)
+ [React](https://react.docschina.org) 前端视图框架
+ [Yarn](https://yarnpkg.com/en/) Node包管理工具

### 基本目录结构

```shell
  dist/        # 编译输出目录
  src/         # 源代码
    main/      # 主进程
      index.ts
    index.tsx  # index页面入口
    login.tsx  # login页面入口 
    page.json  # 页面配置
```

### 页面定义

renderer页面在`src/page.json`中定义, 例如:

```json
{
  "index": {
    "width": 360,
    "minWidth": 360,
    "height": 780,
    "minHeight": 500,
    "frame": false,
    "minimizable": false,
    "maximizable": false,
    "alwaysOnTop": true,
    "skipTaskbar": true
  },
  "login": {},
  "webview": {}
}
```

根字段名表示*页面名称*, 属性值是窗口([`BrowserWindow`](https://electronjs.org/docs/api/browser-window))的配置参数.
每一个页面必须在`src`目录下有一个对应的Javascript入口文件.

## 了解更多

本项目使用[`jm-cli`](https://gdjiami.github.io/jm-cli/docs/electron)进行代码构建. `jm-cli`是mygzb前端
项目的构建工具.