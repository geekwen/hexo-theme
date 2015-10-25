## hexo-theme-Quiet

一个简单的hexo主题

正在持续开发、测试中

## 预览

预览图在 ```/source/images/preview``` 中

## DEMO

[geekwen.com](http://geekwen.com)

## 快速入门

### 关闭归档页面的分页功能

> 因为归档页面的设计是不需要分页的

需要在站点的 `_config.yml` 中添加：

```
archive_generator:
  per_page: 0
```

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

### 修改页面的副标题

> 默认副标题是站点副标题

给页面添加一个 ```page_subtitle```。如：   

```
title: 关于
date: 2015-10-14 15:33:51
page_subtitle: "这是关于我的页面"
---
```
