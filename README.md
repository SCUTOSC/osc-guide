# 华南理工大学 OSC 学生指南
# [![License](https://img.shields.io/github/license/mistcoversmyeyes/osc-guide-ym)](LICENSE) 

osc-guide 是华工开源社区新生指南网页，旨在帮助新成员快速获取校内外学习资源，提升自己，参与社区活动当中。本仓库存放的是网页的内容和涉及到的各种静态资源，本项目使用 [VitePress](https://vitepress.dev/zh/) 搭建。


## Usage

You can view the webPage below to access `OSC-Guide` 
```plantext
https://guide.scutosc.cn/
```

## Contributiong

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please check you installation before your contributing by following the following guide:
### Check the installation of `node` 
Run the following command to check if node version is greater than `v18.xx`
```bash
node -v
```

If your node version is lower than `v18` ,run the following command to install nvm and manage node version.
```bash 
sudo apt update                 # update the package source of apt package manager
sudo apt-get install nvm        
```

then use nvm to install the newest stable version of `node`
```bash
nvm install node 
```

### Install `pnpm` 
VuePress use `pnpm` as node package manager ,you can use the following code to install `pnpm`,if you have already install `node.js`
```bash
npm install pnpm --global
```

### Install the related package with `pnpm`

```bash
pnpm install 
``` 

### Start the local Development Server
After installing the dependencies, you can start the local development server with the following command:
```bash
pnpm run docs:dev
```

Once started, the terminal will display the local access address (usually `http://localhost:8080`). Open this address in your browser to preview and develop your documentation website.

For more information about local uses of developping server, please read the official docs of [Vitepress Docs](https://vitepress.dev/zh/guide/what-is-vitepress)  

### Structure of this Project 
```
src/
├── .vuepress/        # VuePress 配置
│   ├── config.ts     # 主配置文件
│   ├── theme.ts      # 主题配置
│   ├── navbar.ts     # 导航栏配置
│   ├── sidebar.ts    # 侧边栏配置
│   └── ...
├── guide/            # 主要文档内容
├── demo/             # 演示内容
└── README.md         # 首页
```

To wirte articles, you can open the `guide/` directory and create a new mardown file in the right categories directory.


## License

[MIT](https://choosealicense.com/licenses/mit/)
