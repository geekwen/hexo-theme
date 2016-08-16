## hexo-theme-Quiet

一个简单的hexo主题

## Screenshots

![1](https://raw.githubusercontent.com/geekwen/hexo-theme-Quiet/master/screenshot/1.png)

![2](https://raw.githubusercontent.com/geekwen/hexo-theme-Quiet/master/screenshot/2.png)

![3](https://raw.githubusercontent.com/geekwen/hexo-theme-Quiet/master/screenshot/3.png)

## DEMO

[geekwen.com](http://geekwen.com)

## 快速入门

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

### 配置导航链接

在主题的 `_config.yml` 中配置导航链接：

```
menu:
  首页: /
  标签: /tags
  归档: /archives
  关于: /about
```

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

### 给文章添加主题图片

添加一个 ```theme_image```， 后面接图片链接地址。如：
```
title: test
date: 2015-10-10
tags:
- test
theme_image: '/images/post-images/1.jpeg'
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

希望能够保留页脚中hexo和开发者的注明（Powered by hexo, theme by Geekwen. ），并保留相关链接。

祝生活愉快！
