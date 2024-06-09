---
prev: false
next: false
---

# 分支目录树

下面是关于每个仓库文件结构的具体解释：（文件树已给出，部分分支解释稍后补充）

## home

```
- home - .github - ISSUE_TEMPLATE
                 | - xxxxxx.yml
                 | - ......
                 - FUNDING.yml
                 - pull_request_template.md
       - .all-contributorsrc
       - CODE_OF_CONDUCT.md
       - CONTRIBUTING.md
       - LICENSE.md
       - README.md
       - SECURITY.md
```

## docs

```
- docs - .vitepress 
       | - theme
       | - config.mts
       - posts
       | - xxxxxx.md
       | - ......
       - .gitignore
       - index.md
       - package.json
       - package-lock.json
       - vercel.json
```

## i18n

```
- i18n - assets              --- 资源包文件目录
       | - xxxxxx            --- 模组命名空间
         | - lang            --- 模组语言文件目录
           | - en_us.json    --- 英语语言文件
           | - zh_cn.json    --- 中文语言文件
       | - ......
       - .gitignore          --- Git 忽略文件
       - pack.mcmeta         --- 资源包样式文件
       - README.md           --- 分支自述文件
```

## pack

```
- pack - GraalvmJDK21
       | - GraalvmDownload.bat
       - PCL
       | - Setup.ini
       - config
       | - xxxxxx
         | - xxxxxx.json/toml/...
       | - xxxxxx.json/toml/...
       | - ......
       - defaultconfigs
       | - xxxxxx.json/toml/...
       - kubejs
       | - assets
         | - xxxxxx.png/jpg/svg/...
         | - ......
       | - client_scripts
         | - xxxxxx.js
         | - ......
       | - config
         | - xxxxxx.properties/json/...
         | - ......
       | - server_scripts
         | - xxxxxx.js
         | - ......
       | - startup_scripts
         | - xxxxxx.js
         | - ......
       | - jsconfig.json
       - launcher
       | - .minecraft
         | - assets
         | - libraries
         | - versions
           | - Miracles Journey
         | - PCL.ini
       | - PCL
         | - Setup.ini
       | - Plain Craft Launcher 2.exe
       - mods
       | - xxxxxx.jar/disabled
       | - ......
       - resourcepacks
       | - xxxxxx
         | - ......
       | - ......
       | - xxxxxx.zip
       | - ......
       - shaderpacks
       | - xxxxxx
         | - ......
       | - ......
       | - xxxxxx.zip
       | - xxxxxx.txt
       | - ......
       - versions
       | - x.x.x
         | - changelog.txt
       | - ......
       - .gitignore
       - CHANGELOG.md
       - Custom.xaml
       - DISCLAIMER.md
       - Miracles Journey.jar
       - Miracles Journey.json
       - TODO.md
       - TrashSlotSaveState.json
       - Version.txt
       - meta.json
       - options.txt
```

