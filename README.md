## Hexo theme v2: ON THE WAY

一个简单的hexo主题

历史主题请查看[releases](https://github.com/geekwen/hexo-theme/releases)。如有需要可自行下载，按照对应的readme说明使用。

## Screenshots

![1](https://raw.githubusercontent.com/geekwen/hexo-theme/master/screenshot/v2/1.jpg)

![2](https://raw.githubusercontent.com/geekwen/hexo-theme/master/screenshot/v2/2.jpg)

![3](https://raw.githubusercontent.com/geekwen/hexo-theme/master/screenshot/v2/3.jpg)

## DEMO

[geekwen.com](http://geekwen.com)

## 快速入门

### theme/_config.yml 设置说明

```
# 导航栏设置
menu:
  首页: /
  文章: /archives
  标签: /tags
  关于: /about

# 博客建设时间：显示在页脚
blog_since: 2015

# 网站链接：显示在首页左上角
site_url: geekwen.com

# 网站logo链接：显示在首页左上角
logo_url: /images/logo.png

# 首页正文内容：分别对应第一行和第二行
index_content:
  1: 岁 月 静 好
  2: 安 然 前 行

# 非首页页面侧边栏内容
# image_number 是侧边栏背景图片数量。侧边栏背景图片在source/images/sidebar-bg下，命名必须为"数字.jpg"
sidebar_content:
  1: GEEKWEN
  2: .com
  image_number: 16
```

### 关闭归档页面的分页功能

> 因为归档页面的设计是不需要分页的，也不需要年、月视图

需要在站点的 `_config.yml` 中添加：

```
archive_generator:
  yearly: 0
  monthly: 0
  per_page: 0
```

### 添加站点图标

直接把图标放到 ```hexo/source/``` 下即可（不是主题下面的souce）。文件名必须是 ```favicon.ico```

### 创建标签云页面：

1.首先新建 tags 页面
``` hexo new page tags ```

2.然后编辑新建的 ```index.md```
```
title: 所有标签
type: "tag-cloud"
---
```

3.并在主题的 ```_config.yml``` 中添加导航链接

### 创建关于页面

``` hexo new page about ```

并在主题的 ```_config.yml``` 中添加导航链接

### 修改页面的副标题

> 默认副标题是站点副标题

给页面添加一个 ```page_subtitle```。如：   

```
title: 关于
date: 2015-10-14 15:33:51
page_subtitle: "这是关于我的页面"
---
```

### 侧边栏背景图片自定义

给文章／页面添加一个 ```sidebar_bg```。如：   

```
title: 关于
date: 2015-10-14 15:33:51
sidebar_bg: /images/sidebar-bg/0.jpg 
---
```

如果需要修改侧边栏左下角图片的来源介绍，需要同时填写 ```sidebar_bg```（该图片的地址），```sidebar_bg_src```（该图片的来源地址），```sidebar_bg_info```（图片的介绍）

```
title: 关于
date: 2015-10-14 15:33:51
sidebar_bg: /images/sidebar-bg/0.jpg 
sidebar_bg_src: https://unsplash.com
sidebar_bg_info: Photo by unsplash
---
```

### 给站点添加订阅功能

首先安装插件：

```npm install hexo-generator-feed --save```

然后在根目录下的```_config.yml```中添加如下代码：

```
# Extensions
## Plugins: http://hexo.io/plugins/
#RSS订阅
plugin:
  hexo-generator-feed

#Feed Atom
feed:
  type: atom
  path: atom.xml
  limit: 20
```
## 最后

licence: [WTFPL](https://github.com/anak10thn/WTFPL)

希望能够保留页脚中hexo和开发者的注明（Powered by [hexo](http://hexo.io), [theme](https://github.com/geekwen/hexo-theme) by [Geekwen](http://geekwen.com). ），并保留相关链接。

祝生活愉快！
