---
title: 配置仓库
---

# 项目中配置镜像仓库


## 使用背景
> 默认情况下，项目中的 `maven` 使用的是默认的仓库。<br>
> 如果没有做特殊的配置，则使用的`中央仓库`。<br>
> 这个仓库是国外的，我还是比较推荐使用的，毕竟是`官方的`。<br>
> 但是，它的主要缺点就是 `网速慢，容易下载失败`。<br>

::: tip 方案
为了解决【网速慢】的问题，可以使用我们国内的镜像源。<br>
我比较推荐的是直接在项目的【pom.xml】文件中进行配置。<br>
但是国内源的缺点是 ： 有些依赖包不全，还是通过官方源进行下载。<br>
:::

## 配置-依赖库
> 下面是配置的 `阿里云 的国内镜像源` 和 `国外的默认官方源`。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
 
   ......
   其他的正常配置

    <repositories>

        <!-- 国内阿里云的配置 -->
        <repository>
            <id>maven-ali-center</id>
<!--            <url>https://maven.aliyun.com/repository/public</url>-->
            <url>https://maven.aliyun.com/repository/central</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>true</enabled>
                <updatePolicy>interval:10000</updatePolicy>
            </snapshots>
        </repository>

        <!-- maven 官方的配置 -->
        <repository>
            <id>nexus</id>
            <url>http://repo.maven.apache.org/maven2</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>true</enabled>
                <updatePolicy>interval:10000</updatePolicy>
            </snapshots>
        </repository>

    </repositories>

</project>

```

## 配置-maven插件库
> 下面是配置的 `阿里云 的国内镜像源` 。
```xml

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
 
   ......
   其他的正常配置

     <pluginRepositories>

        <pluginRepository>
            <id>public</id>
            <name>aliyunrepo</name>
            <url>https://maven.aliyun.com/repository/public</url>
            <releases>
                <enabled>true</enabled>
            </releases>
            <snapshots>
                <enabled>false</enabled>
            </snapshots>
        </pluginRepository>

    </pluginRepositories>
    
</project>
```


## 使用经验
```
个人使用过程中，可以先使用默认的官方中央仓库；
如果下载过程中实在是卡住不动了，
可以配置上以上的国内镜像源，然后重新加载一下。
```