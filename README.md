## hexo-theme-Quiet
一个简单的hexo主题
正在持续开发、测试中

## 预览
预览图在 ```/source/images/preview``` 中

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
```
### 创建标签云页面：

1.首先新建 tags 页面
``` hexo new page "tags" ```

2.然后编辑新建的 ```index.md```
```
title: 所有标签
type: "tag-cloud"
---
```
