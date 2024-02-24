---
title: HttpClient 发送请求
---


# HttpClient 请求
本文介绍一下 HttpClient 工具包发送http请求的使用方法。<br>
本文中省略了异常处理等操作的代码，重点突出了请求发送和相应处理的代码。

## 导入依赖
本工具类中使用到了 `httpclient`的依赖，可以在 pom.xml 文件中直接引入
```xml
<!-- httpclient 的依赖-->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpclient</artifactId>
    <version>4.5.14</version>
</dependency>
```

> tip : 如果项目中有用到 `json` 的依赖，也可以引入下面的依赖包

```xml
<!-- json 的依赖包 -->
<dependency>
  <groupId>com.alibaba.fastjson2</groupId>
  <artifactId>fastjson2</artifactId>
  <version>2.0.41</version>
</dependency>
```
> tip : 如果项目中有用到 `发送文件` 的依赖，也可以引入下面的依赖包

```xml
<!-- 请求中携带文件 时用到的依赖包 -->
<dependency>
    <groupId>org.apache.httpcomponents</groupId>
    <artifactId>httpmime</artifactId>
    <version>4.5.14</version>
</dependency>
```

## 发送GET请求
等待完善起来

## 发送POST请求
### 无参的普通post请求
```java
    // 获取 httpclient 客户端对象
    CloseableHttpClient closeableHttpClient = HttpClients.createDefault();
    // 声明请求地址URL
    String url = "http://xxx/xxx";
    // 创建 post 请求对象
    HttpPost httpPost = new HttpPost(url);
    // 声明 post 响应对象
    CloseableHttpResponse response = null;

    // 发送 post 请求,获取响应数据
    response = closeableHttpClient.execute(httpPost);
    // 解析响应数据
    StatusLine statusLine = response.getStatusLine();
    if (HttpStatus.SC_OK == statusLine.getStatusCode()){
        System.out.println("响应成功！");
        // 获取响应的 entity
        HttpEntity entity = response.getEntity();
        String responseStr = EntityUtils.toString(entity, StandardCharsets.UTF_8);
        System.out.println("responseStr = " + responseStr);
        // 确保响应数据被消费
        EntityUtils.consume(entity);

    }else{
        System.out.println("响应失败");
    }

```
### application/json格式的post请求
post请求，在携带参数时，用 `json` 格式的情景还是比较多的。<br>
在请求时，设置请求头 `“Content-Type”` 的值为 ： `“application/json;charset=utf-8”`
```java
    // 获取 httpclient 客户端对象
    CloseableHttpClient closeableHttpClient = HttpClients.createDefault();
    // 声明请求地址URL
    String url = "http://xxx/xxx";
    // 创建 post 请求对象
    HttpPost httpPost = new HttpPost(url);
    // 指定请求头格式为 application/json
    httpPost.setHeader("Content-Type","application/json;charset=utf-8");

    // 创建请求参数 - json格式的
    JSONObject bookJson = new JSONObject();
    bookJson.put("name","从httpclient过来的一本书");
    bookJson.put("price",10.08d);
    // 此处使用到的是 StringEntity 这个实现类
    StringEntity paramEntity = new StringEntity(bookJson.toString(), Consts.UTF_8);
    // entity 也可以设置格式
    paramEntity.setContentType("application/json;charset=gbk");
    // entity 也可以设置编码
    paramEntity.setContentEncoding(Consts.UTF_8.name());

    // 设置请求参数 ： 也是一个entity
   httpPost.setEntity(paramEntity);


    // 声明 post 响应对象
    CloseableHttpResponse response = null;


    // 发送 post 请求
    response = closeableHttpClient.execute(httpPost);
    // 解析响应数据
    StatusLine statusLine = response.getStatusLine();
    if (HttpStatus.SC_OK == statusLine.getStatusCode()){
        System.out.println("响应成功！");
        // 获取响应的 entity
        HttpEntity entity = response.getEntity();
        String responseStr = EntityUtils.toString(entity, StandardCharsets.UTF_8);
        System.out.println("responseStr = " + responseStr);
        // 确保响应数据被消费
        EntityUtils.consume(entity);

    }else{
        System.out.println("响应失败");
    }


```