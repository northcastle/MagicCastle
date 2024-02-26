---
title: logback 日志配置
---

# logback 的日志配置
在springboot2.0 中，默认使用的就是 logback的日志依赖。


## 配置文件位置
logback 的日志配置文件放在项目的  `resources` 下。

```java{7}
ProjectName
    | -- src
        | -- main
            | -- java
            | -- resources
                | -- application.yaml
                | -- logback.xml # 这个就是日志配置的文件
    | -- pom.xml
```

## 配置文件案例
下面展示一个实际开发中应用的日志配置的模板。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">

    <!--定义日志文件的存储地址,不要在 LogBack 的配置中使用相对路径，直接使用绝对路径 -->
    <property name="LOG_HOME" value="/Users/northcastle/work/xxx/log/xxxLog" />
    <!-- 定义文件滚动的最大大小 -->
    <property name="MAX_FILE_SIZE" value="10MB" />
    <!-- -->
    <property name="MAX_HISTORY" value="5" />

    <!-- 配置一个附加器 ：控制台输出内容   -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%date{yyyy-MM-dd HH:mm:ss.SSS} %class %line [%-5level] %msg%n</pattern>
        </encoder>
    </appender>

    <!-- 时间滚动输出 level为 INFO 日志 -->
    <appender name="INFO_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文件的路径及文件名 -->
        <file>${LOG_HOME}/log_info.log</file>
        <!--日志文件输出格式-->
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %class %line  [%-5level] %msg%n</pattern>
            <charset>UTF-8</charset>
        </encoder>
        <!-- 日志记录器的滚动策略，按日期，按大小记录 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>${LOG_HOME}/info/info_%d{yyyy-MM-dd}_%i.log</fileNamePattern>
            <maxFileSize>${MAX_FILE_SIZE}</maxFileSize>
            <cleanHistoryOnStart>true</cleanHistoryOnStart>
            <maxHistory>${MAX_HISTORY}</maxHistory>
        </rollingPolicy>
        <!-- 此日志文件只记录info级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>INFO</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <!-- 时间滚动输出 level为 WARN 日志 -->
    <appender name="WARN_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文件的路径及文件名 -->
        <file>${LOG_HOME}/log_warn.log</file>
        <!--日志文件输出格式-->
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %class %line  [%-5level] %msg%n</pattern>
            <charset>UTF-8</charset>  此处设置字符集
        </encoder>
        <!-- 日志记录器的滚动策略，按日期，按大小记录 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>${LOG_HOME}/warn/warn_%d{yyyy-MM-dd}_%i.log</fileNamePattern>
            <maxFileSize>${MAX_FILE_SIZE}</maxFileSize>
            <cleanHistoryOnStart>true</cleanHistoryOnStart>
            <maxHistory>${MAX_HISTORY}</maxHistory>
        </rollingPolicy>
        <!-- 此日志文件只记录warn级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>warn</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>


    <!-- 时间滚动输出 level为 ERROR 日志 -->
    <appender name="ERROR_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 正在记录的日志文件的路径及文件名 -->
        <file>${LOG_HOME}/log_error.log</file>
        <!--日志文件输出格式-->
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %class %line  [%-5level] %msg%n</pattern>
            <charset>UTF-8</charset>  此处设置字符集
        </encoder>
        <!-- 日志记录器的滚动策略，按日期，按大小记录 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <fileNamePattern>${LOG_HOME}/error/error_%d{yyyy-MM-dd}_%i.log</fileNamePattern>
            <maxFileSize>${MAX_FILE_SIZE}</maxFileSize>
            <cleanHistoryOnStart>true</cleanHistoryOnStart>
            <maxHistory>${MAX_HISTORY}</maxHistory>
        </rollingPolicy>
        <!-- 此日志文件只记录warn级别的 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>error</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>


    <root level="info" >
        <appender-ref ref="STDOUT"></appender-ref>
        <appender-ref ref="INFO_FILE"></appender-ref>
        <appender-ref ref="WARN_FILE"></appender-ref>
        <appender-ref ref="ERROR_FILE"></appender-ref>
    </root>

</configuration>
```

## 代码中使用
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/abc")
public class ABCController {

    private static Logger logger = LoggerFactory.getLogger(ABCController.class);

    @PostMapping("/sayHello")
    @ResponseBody
    public String sayHello(){
        logger.info("--- 请求成功进入到了 sayHello 方法中来 ---");
        return "HelloWorld";
    }

}

```
