---
prev: false
next: false
---

# 安装教程

欢迎您查看安装教程！有任何问题请到奇迹之旅官方 Github 仓库提交 Issue 或者进入官方内测 QQ 群询问！

## 第 0 步 - 网络环境优化

> 如果您有 VPN 工具或者保证 Github 下载速度可以达到您的预期，请跳转到第 1 步继续查看教程。

目前整合包体积约 1.5G 左右，想要获取舒适的 Github 下载体验（小于等于 5 分钟）需要您的 Github 下载速度达到 `1.5*1000/5*60=5 mb/s` ，下面提供两种经测试最稳定高速的 Github 下载加速方法。

- DoGet 加速 + IDM 多线程加速

    > 注：如果不搭配 IDM 或者其他多线程下载器，下载加速效果将不会很显著！
    >
    > 友情链接：[IDM 官方下载地址](https://www.internetdownloadmanager.com/download.html) - [免费绿色版 IDM 下载地址 A](https://www.ghxi.com/pcidm.html) --- [免费绿色版 IDM 下载地址 B](https://www.uy5.net/idm/)
    >
    > 如有经济实力请支持正版！如有经济实力请支持正版！如有经济实力请支持正版！

    1. 访问 DoGet 加速站点：[点我即达](https://doget.nocsdn.com/)

    2. 粘贴你要下载的整合包版本链接

    3. 获取加速链接后复制

    4. 将加速链接粘贴至 IDM 内加速下载即可

- SwitchHosts + Github 最新 Host

    1. 下载 SwitchHosts 并安装
    
        官方 Github 仓库：[点我即达](https://github.com/oldj/SwitchHosts)
    
        最新版本（v4.2.0-beta）Windows 安装包下载直链：[点我即达](https://github.com/oldj/SwitchHosts/releases/download/v4.2.0-beta/SwitchHosts_windows_installer_4.2.0.6105.exe)
    
    2. 点击左上角 `+` 号添加远程链接为 `https://gitlab.com/ineo6/hosts/-/raw/master/next-hosts` 的 Host 更新文件，设置自动刷新时间为 1 小时
    
    3. 打开新增的 Host 配置开关，右键刷新获取最新 Host
    
    4. 直接下载你需要的整合包版本即可，无需其他加速方式 / 工具

如果您通过这两种方法仍然无法获得足够的下载速度，请尝试使用梯子或者拜托他人帮助下载！！！

## 第 1 步 - 版本选择 & 下载

> 在开始下载之前，您需要明确您将要游玩哪个版本。目前，整合包有三个版本可供选择，分别为：稳定版（发布版），测试版（预发布版）和开发版（源码下载版），接下来将介绍这几版之间的适用人群和下载方式。现在整合包还在测试中，推荐下载开发版。

各版本下载文件格式供参考：

- 稳定版 - 发布（Release）版：暂无
- 测试版 - 预发布（Pre-release）版：`Miracles-Journey-version-x.x.x.zip`（`version` 指发布版本，一般为 `release` / `beta`；`x`指版本，一般为数字）
- 开发版 - 源码下载（Code download）版：`Miracles-Journey-pack.zip`

### 稳定版 - 发布（Release）版

暂未发布，内测中......

### 测试版 - 预发布（Pre-release）版

**适用人群**：想尽早获得稳定的错误修复和新功能体验版本，且有一定的试错并反馈的能力和经验。

**下载方式**：

1. 打开整合包的发布页：[点我即达](https://github.com/Qian-F/Miracles-Journey/releases)

2. 选择右上角具有 `Pre-release` 标识的版本

3. 展开下方 `Assets` 列表，点击 `Source code(zip)` 直接下载或者右键复制下载链接


### 开发版 - 源码下载（Code download）版

**适用人群**：开发人员、贡献者和尝鲜体验用户，接受经历未知 Bug，有能力测试、复现并反馈错误。

**下载方式**：

1. 打开整合包 `pack` 分支首页：[点我即达](https://github.com/Qian-F/Miracles-Journey/tree/pack)

2. 点击右上角绿色 `Code` 按钮展开下载页面

3. 点击 `Download ZIP` 直接下载或者右键复制下载链接


## 第 2 步 - 文件解压指南

> 如果您已有免费好用的解压软件或者可以熟练运用 Windows 系统自带的解压工具，请解压文件到合适位置后跳转到第 3 步继续查看教程。

### Windows  自带解压工具

- 直接右键压缩包并点击 `全部解压缩` 以解压文件

- 或使用解压命令：`expand -r filename.zip destination_folder`

    `filename.zip`：压缩包文件名

    `destination_folder`：要解压到的目标文件夹路径

### 免费且好用的解压软件

- **7-Zip**：[官方主页](https://www.7-zip.org/) - [安装包直链](https://www.7-zip.org/a/7z2301-x64.exe)
- **WinRAR**：[官方主页](https://www.win-rar.com/) - [安装包直链](https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-700sc.exe)

请将下载好的压缩包解压至合适位置后再开始下一步，此目录将是您后续的游戏目录，请谨慎选择！

## 第 3 步 - Java 环境下载

> 本整合包借助 `GraalvmJDK` 提供的高性能优化方案和参数达到最大的优化效果，请您无论是否有安装过 Java 环境，都按照指南下载 `GraalvmJDK`。
>
> 本指南后续将整合包根目录称为 `/Pack/` 以便利描述。

进入 `/Pack/GraalvmJDK21` 文件夹，双击运行 `GraalvmDownload.bat` 下载脚本，等待运行完成即可，整个过程大概持续 5 分钟左右，出现“请按任意键继续”的提示后按任意键关闭窗口即可。

## 第 4 步 - 转移文件

剪切根目录下除 `/Pack/launcher` 文件夹外的所有文件，粘贴至 `/Pack/launcher/.minecraft/versions/Miracles Journey` 目录中即可。

## 第 5 步 - 启动器配置

1. 进入 `/Pack/launcher` 目录，启动 PCL 启动器，如有启动器更新提示请立即更新，这一般代表了最新错误修复和功能实现

2. 点击最上方的 `设置` 栏，在 `启动选项 - 游戏 Java` 选项中选择 `自动选择合适的 Java` 选项

3. 游戏默认分配 `12G` 内存用于游戏，如果您的内存不足请适当降低，建议最少不少于 `8G`。

4. 回到 `启动` 栏，点击 `登录` 选项并按照提示操作，登录正版账号后点击 `启动游戏` 按钮即可开始游戏。

    什么？您是离线版账户？离线登录选项好像被隐藏了！快找找看吧！或者......仅需 89 元即可入正哦！[点我进入官方正版购买链接](https://www.xbox.com/zh-CN/games/store/minecraft-java-bedrock-edition-for-pc/9nxp44l49shj?ocid=storeforweb)！！！
