---
title: "YKT Helper"
icon: carbon:tool-box
author: { name: "114514" }
---

## python 版

### Prerequisite

- Python3环境
- 命令行终端
- Chrome浏览器（本教程使用Arc，魔改Chrome）
- 单线程/多线程版本 刷课代码 [Github仓库](https://github.com/Cat1007/yuketangHelperSCUTLite?tab=readme-ov-file)

### Steps

#### 获取脚本启动所需用户信息

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


#### 启动刷课脚本

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

5. 如果对使用全局环境有担忧，可以尝试使用 [uv](https://docs.astral.sh/uv/)

    在文件头部加入如下注释，指明 requirement 中的依赖项。
  
    ```python
    # /// script
    # dependencies = [
    #     "requests<3",
    # ]
    # ///
    ```
  
    安装 uv 后，使用`uv run <script.py>`运行即可，uv 会接管依赖管理的工作。

::: tip
现在，你可以放心的去做其他事情了~
:::

## JavaScript 版

### 食材

- 只需要有一个浏览器就行了（以Edge浏览器为例）

### 食用方法

请务必使用`scut.yuketang.cn`，而不是其他雨课堂平台，如`changjiang.yuketang.cn`

1. 登录雨课堂网页版

2. 点击网址栏旁边的 `锁` 按钮，然后点击 `Cookie和站点数据`![image.png](https://s2.loli.net/2025/09/30/9lRqIvZGyBJDVM8.png)

3. 一路点下去找到名称为 `sessionid` 的 Cookie，将 `内容` 粘贴到脚本开头的对应位置![image.png](https://s2.loli.net/2025/09/30/sY2Mg3NoXv5p6kO.png)
![image.png](https://s2.loli.net/2025/09/30/1aoL9z8ZXktC2qr.png) 注意，要保留单引号

4. 在雨课堂页面中，按键盘上的 `F12` 打开开发者窗口，点击上方的 `控制台` 按钮

5. 输入脚本，回车，找到要刷的课的 `id`，输入 `selectCourse(id)` 来开始刷课![image.png](https://s2.loli.net/2025/09/30/wVuLaoydCizmWPE.png)


### ps
1. 想要退出脚本的话，直接刷新网页就行了
2. 脚本开头可以设置倍速
