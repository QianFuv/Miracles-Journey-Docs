---
prev: false
next: false
---
# 贡献指南

> 由于整合包所有的文件均托管于 Github，因此通过代码托管平台独有的 Pull request 功能可以让想对整合包做出贡献的朋友尽一己之力；应内测群友要求，现编辑贡献教程供各位朋友学习。

## 第 0 步 - 注册 Github 账户

> 如果您已有可正常使用的 Github 账户，请跳过此步直接进入第 1 步。

1. 进入 [Github 官方网站](https://github.com/)，点击屏幕中央输入框输入邮箱，点击 `Sign up for Github`
2. 在下一页中依次输入密码、用户名等信息，点击 `Continue` 继续
3. 通过人机认证后使用邮箱 + 密码登录 Github 即可

## 第 1 步 - Fork 整合包仓库

1. 进入整合包的 [Github 仓库](https://github.com/Qian-F/Miracles-Journey)，点击右上角的 `Fork` 按钮
1. 取消勾选 `Copy the home branch only` 选项
1. 点击 `Create fork` 按钮创建独属于你的 Fork

## 第 2 步 - 了解仓库各分支结构

目前，本整合包仓库共有 4 个不同作用的分支，请根据你的贡献目的选择正确的分支。

它们分别为：

- `home`：整合包 Github 主页、协议、赞助列表集合
- `docs`：整合包 Wiki 资源文件集合，使用 `Vitepress + Vercel` 实现高性能自动部署
- `i18n`：整合包汉化资源包文件集合，搭配自建 Github 镜像与客户端汉化更新脚本实现半自动即时汉化更新
- `pack`：整合包本体文件集合，开发版下载处

## 第 3 步 - 什么是正确的贡献姿势？

对于简单的、不需要本地测试的修改（例如汉化和文档的修改和优化），可以直接在 Github 网站上进行修改并提交 Pull request，这部分被称为`小幅度修改`；而对于较为复杂的、需要进行大量本地测试的修改（例如整合包的相关修改），则需要克隆仓库至本地待修改后提交到 Fork 仓库再进行 Pull request，这部分被称为`大幅度修改`。

下面将详细叙述两种修改的一般步骤：

### 小幅度修改

1. 在相关分支编辑或者创建需要修改或者新建的文件；新建文件可以通过点击 Add file 按钮上传本地文件或者新建文件，编辑文件可以点击右上方的✏按钮进行在线编辑
2. 编辑完成后点击 `Commit changes` 按钮，选择 `Commit directly to the xxx branch` 选项，如需添加描述请编辑 `Commit message` 和 `Extended description` 框内的内容，确认无误后点击 `Commit changes` 提交更改（你可以多次使用这种方式提交更改）
3. 转到你提交更改的分支，点击 `Contribute` 下拉菜单，Github 会自动比较你与整合包仓库的差异并且显示出来，点击 `Open pull request` 按钮进入提交 Pull request 界面
4. 编辑 `Add a title` 和 `Add a description` 框内的内容，写明你做出了什么更改
5. 勾选 `Allow edits by maintainers` 选项框
6. 确认无误后，点击 `Create pull request` 按钮提交，等待作者 Review
7. 根据作者 Review 的内容更改你的分支内容，更改完成后在 Pull request 评论区告知已修改完成
8. 如果没有问题的话，你的 Pull request 将会被合并进入主仓库，恭喜你成为奇迹之旅的一位贡献者！你的账户将被加入[贡献者列表](https://github.com/Qian-F/Miracles-Journey/blob/home/CONTRIBUTING.md)以示感谢
