---
title: "YKT Helper"
icon: carbon:tool-box
author: { name: "114514" }
---

## Prerequisite

- Python3环境
- 命令行终端
- Chrome浏览器（本教程使用Arc，魔改Chrome）
- 单线程/多线程版本 刷课代码 [Github仓库](https://github.com/Cat1007/yuketangHelperSCUTLite?tab=readme-ov-file)

## Steps

### 获取脚本启动所需用户信息

1. 打开雨课堂官网，本教程以泥为例 [泥-雨课堂](https://scut.yuketang.cn/)

2. 扫码登录，来到这个熟悉的界面

![image.png](https://raw.githubusercontent.com/xiaolin2004/PicForMD/main/20240928220226.png)

3. 右键->检查（如果快捷键无冲突，F12是相同效果）

![image.png](https://raw.githubusercontent.com/xiaolin2004/PicForMD/main/20240928220334.png)

4. 进入开发人员界面

![image.png](https://raw.githubusercontent.com/xiaolin2004/PicForMD/main/20240928220420.png)

5. 在Elements的同级标签中，找到Application，进入该页面，在左侧Storage栏，找到Cookies

![image.png](https://raw.githubusercontent.com/xiaolin2004/PicForMD/main/20240928220621.png)

6. 注意，请点击与官网链接相同的标签，其他标签中无法找到稍后配置刷课代码的信息，本教程使用链接 https://scut.yuketang.cn/

7. 图中Key对应的Value are all you need

![image.png](https://raw.githubusercontent.com/xiaolin2004/PicForMD/main/20240928220838.png)


### 启动刷课脚本

1. 不要关闭浏览器，接下来，打开你的代码编辑器，打开刷课代码中主要逻辑所在文件，本文使用多线程版本，文件名为 `multi.py` 

![image.png](https://raw.githubusercontent.com/xiaolin2004/PicForMD/main/20240928221159.png)

2. 将步骤7中获得的值填入注释提示的变量中，刷课代码配置就已经完成

3. 对于崭新的python环境（[Python环境配置教程](https://realpython.com/installing-python/)），正确的启动顺序为

```bash
pip install requirements.txt
python3 multi.py ##主要逻辑所在文件
```

4. 对于重复启动用户，只需要运行命令

```bash
python3 multi.py ##主要逻辑所在文件
```

::: tip
现在，你可以放心的去做其他事情了~
:::
