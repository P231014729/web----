# HTML

## HTML是什么

HTML（HyperText Markup Language，超文本标记语言）是为“网页创建和其它可在网页浏览器中看到的信息”设计的一种标记语言。

## Web 标准

Web 标准常常指的是将网页中的内容、表现、行为三者相分离的思想和相关的实现方法。按照 Web 标准，构建精良的 Web 文档应该有三层各自分离的资料层，详见下图：

![Web 标准](https://oss-yangjh.oss-cn-chengdu.aliyuncs.com/images/202411092330711.png)

## HTML核心相关概念

### HTML结构

```html
<!DOCTYPE html>
<html>
	<head>
	  <meta charset="utf-8" />
	  <title>文档标题</title>
	</head>
	<body>
	这是正文
	</body>
</html>
```

### 标签

标签以“`<`​”开始，以“`>`​”结束，

#### 起始标签

标签中没有“`/`​”

#### 结束标签

结束标签中含有“`/`​”

### 元素

元素由起始标签、内容和结束标签构成。元素名称就是起始标签中的第一部分。多数元素可以嵌套使用

​`<title>文档标题</title>`​

元素可以分为块元素和行内元素，区别在于是否会另起一行。

#### 属性

属性应写在起始标签，是HTML元素中必要的特性，比如图片的大小。一个元素可以有很多属性，而且属性可以自定义。多个属性、值之间，用空格隔开，没有顺序区别。

‍

#### 属性值

​`<meta charset="utf-8" />`​

属性的取值，多用引号包裹。

### 案例

```html
  <div id="root" class="root">
    <div class="search-title">正在搜索...</div>
  </div>
  <div id="browser-support"></div>
```

## 常用元素

### 文档元数据元素

html、head、title

### 区块元素

body、h1…h6

### 内容组织元素

p、ol、ul、li、div

### 文本语义元素

a、br、span

### 嵌入内容元素

img、iframe、svg、audio、video

### 表格元素

table、tr、th、td

### 表单元素

form 、input 、lable、button

## 如何在浏览器中查看当前页面html源代码

打开浏览器中的`开发者工具`​，通常是`F12`​
