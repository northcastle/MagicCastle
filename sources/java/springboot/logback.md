---
title: logback 日志配置
---

# logback 的日志配置
在springboot2.0/3.0 中，默认使用的就是 logback的日志依赖。


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
:::tip 补充
日志的配置文件，官方比较推荐使用 `logback-spring.xml` 作为文件名。<br>
不过，直接使用`logback.xml`也是没啥问题的。
:::

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

## 补充操作1-xsd文件
> 可以添加一个 `logback.xsd` 文件，<br>
> 这样在编写 `logback-spring.xml` 文件的时候，就会有提示。

:::warning 注意
添加了 logback.xsd 文件之后，就不要在 logback-spring.xml 文件中定义变量了，<br>
由于 xsd 文件的校验，会导致 ${xxx} 的变量使用格式有错误提示。
:::

### logback-spring.xml 文件头修改
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration
        xmlns="http://ch.qos.logback/xml/ns/logback"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://ch.qos.logback/xml/ns/logback
        https://raw.githubusercontent.com/enricopulatzo/logback-XSD/master/src/main/xsd/logback.xsd"
        debug="false">

        ......
        正常的配置


</configuration>
```
### logback.xsd 文件内容
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--
   logback.xml schema,
      https://github.com/enricopulatzo/logback-XSD
      https://github.com/nkatsar/logback-XSD
-->
<xsd:schema targetNamespace="http://ch.qos.logback/xml/ns/logback"
            xmlns="http://ch.qos.logback/xml/ns/logback"
            xmlns:xsd="http://www.w3.org/2001/XMLSchema"
            elementFormDefault="qualified"
            attributeFormDefault="unqualified"
            version="1.1">

    <xsd:element name="configuration" type="Configuration"/>
    <xsd:element name="included" type="Configuration"/>

    <xsd:complexType name="Configuration">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element name="shutdownHook" minOccurs="0" maxOccurs="1" type="ShutdownHook"/>
            <xsd:element name="statusListener" minOccurs="0" maxOccurs="unbounded" type="StatusListener"/>
            <xsd:element name="contextListener" minOccurs="0" maxOccurs="unbounded" type="ContextListener"/>
            <xsd:element name="jmxConfigurator" minOccurs="0" maxOccurs="1" type="JmxConfigurator"/>
            <xsd:element name="conversionRule" minOccurs="0" maxOccurs="unbounded" type="ConversionRule"/>
            <xsd:element name="include" minOccurs="0" maxOccurs="unbounded" type="Include"/>
            <xsd:element name="contextName" minOccurs="0" maxOccurs="1" type="xsd:string"/>
            <xsd:element name="define" minOccurs="0" maxOccurs="unbounded" type="Define"/>
            <xsd:element name="timestamp" minOccurs="0" maxOccurs="1" type="Timestamp"/>
            <xsd:element name="if" minOccurs="0" maxOccurs="unbounded" type="If"/>
            <xsd:element name="property" minOccurs="0" maxOccurs="unbounded" type="Property"/>
            <xsd:element name="appender" minOccurs="0" maxOccurs="unbounded" type="Appender"/>
            <xsd:element name="logger" minOccurs="0" maxOccurs="unbounded" type="Logger"/>
            <xsd:element name="root" minOccurs="0" maxOccurs="1" type="Root"/>
            <xsd:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded"/>
        </xsd:choice>
        <xsd:attribute name="debug" type="xsd:boolean" use="optional"/>
        <xsd:attribute name="scan" type="xsd:boolean" use="optional" default="false"/>
        <xsd:attribute name="scanPeriod" type="xsd:string" use="optional" default="1 minute"/>
        <xsd:attribute name="packagingData" type="xsd:boolean" use="optional" default="false"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="ShutdownHook">
        <xsd:attribute name="class" type="xsd:string" use="optional"
                       default="ch.qos.logback.core.hook.DelayingShutdownHook"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="ConversionRule">
        <xsd:attribute name="conversionWord" type="xsd:string"/>
        <xsd:attribute name="converterClass" type="xsd:string"/>
    </xsd:complexType>

    <xsd:complexType name="StatusListener">
        <xsd:attribute name="class" type="xsd:string" use="optional"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="ContextListener">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element name="resetJUL" type="xsd:boolean"/>
            <xsd:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded"/>
        </xsd:choice>
        <xsd:attribute name="class" type="xsd:string"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="Include">
        <xsd:attribute name="file" use="optional" type="xsd:string"/>
        <xsd:attribute name="resource" use="optional" type="xsd:string"/>
        <xsd:attribute name="url" use="optional" type="xsd:string"/>
        <xsd:attribute name="optional" use="optional" type="xsd:boolean"/>
    </xsd:complexType>

    <xsd:complexType name="Define">
        <xsd:sequence>
            <xsd:any minOccurs="0" maxOccurs="unbounded"/>
        </xsd:sequence>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="Timestamp">
        <xsd:sequence>
            <xsd:any minOccurs="0" maxOccurs="unbounded"/>
        </xsd:sequence>
        <xsd:attribute name="key" type="xsd:string" use="optional"/>
        <xsd:attribute name="datePattern" type="xsd:string" use="optional"/>
        <xsd:attribute name="timeReference" type="xsd:string" use="optional"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="RollingPolicy">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element name="fileNamePattern" minOccurs="1" maxOccurs="1" type="xsd:string"/>
            <xsd:element name="maxHistory" minOccurs="0" maxOccurs="1" type="xsd:int"/>
            <xsd:element name="minIndex" minOccurs="0" maxOccurs="1" type="xsd:int"/>
            <xsd:element name="maxIndex" minOccurs="0" maxOccurs="1" type="xsd:int"/>
            <xsd:element name="timeBasedFileNamingAndTriggeringPolicy" minOccurs="0" maxOccurs="1" type="TriggeringPolicy"/>
            <xsd:element name="cleanHistoryOnStart" minOccurs="0" maxOccurs="1" type="xsd:boolean"/>
            <xsd:element name="maxFileSize" minOccurs="0" maxOccurs="1" type="FileSize"/>
            <xsd:element name="totalSizeCap" minOccurs="0" maxOccurs="1" type="FileSize"/>
        </xsd:choice>
        <xsd:attribute name="class" type="xsd:string" use="required"/>
    </xsd:complexType>

    <xsd:simpleType name="FileSize">
        <xsd:restriction base="xsd:string">
            <xsd:pattern value="[1-9][0-9]*(KB|MB|GB)?"/>
        </xsd:restriction>
    </xsd:simpleType>

    <xsd:complexType name="TriggeringPolicy">
        <xsd:sequence>
            <xsd:element name="maxFileSize" minOccurs="0" maxOccurs="1" type="FileSize"/>
        </xsd:sequence>
        <xsd:attribute name="class" type="xsd:string" use="required"/>
    </xsd:complexType>

    <xsd:complexType name="If">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element type="Configuration" name="then"/>
            <xsd:element type="Configuration" name="else"/>
            <xsd:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded"/>
        </xsd:choice>
        <xsd:attribute name="condition" type="xsd:string"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="Property">
        <xsd:sequence>
            <xsd:any minOccurs="0" maxOccurs="unbounded"/>
        </xsd:sequence>
        <xsd:attribute name="scope" type="xsd:string" use="optional"/>
        <xsd:attribute name="name" type="xsd:string" use="optional"/>
        <xsd:attribute name="value" type="xsd:string" use="optional"/>
        <xsd:attribute name="file" type="xsd:string" use="optional"/>
        <xsd:attribute name="resource" type="xsd:string" use="optional"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="Appender">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element name="target" minOccurs="0" maxOccurs="1" type="Target"/>
            <xsd:element name="file" minOccurs="0" maxOccurs="1" type="xsd:string"/>
            <xsd:element name="withJansi" minOccurs="0" maxOccurs="1" type="xsd:boolean"/>
            <xsd:element name="encoder" minOccurs="0" maxOccurs="1" type="Encoder"/>
            <xsd:element name="filter" minOccurs="0" maxOccurs="1" type="Filter"/>
            <xsd:element name="append" minOccurs="0" maxOccurs="1" type="xsd:boolean"/>
            <xsd:element name="prudent" minOccurs="0" maxOccurs="1" type="xsd:boolean"/>
            <xsd:element name="layout" minOccurs="0" maxOccurs="1" type="Layout"/>
            <xsd:element name="rollingPolicy" minOccurs="0" maxOccurs="1" type="RollingPolicy"/>
            <xsd:element name="connectionSource" minOccurs="0" maxOccurs="1" type="ConnectionSource"/>
            <xsd:element name="triggeringPolicy" minOccurs="0" maxOccurs="1" type="TriggeringPolicy"/>
            <xsd:element name="appender-ref" minOccurs="0" maxOccurs="1" type="AppenderRef"/>
            <xsd:any namespace="##other" processContents="skip" minOccurs="0" maxOccurs="unbounded"/>
        </xsd:choice>
        <xsd:attribute name="name" type="xsd:string" use="required"/>
        <xsd:attribute name="class" type="xsd:string" use="required"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:simpleType name="Target">
        <xsd:restriction base="xsd:string">
            <xsd:enumeration value="System.out"/>
            <xsd:enumeration value="System.err"/>
        </xsd:restriction>
    </xsd:simpleType>

    <xsd:complexType name="Filter">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element name="level" minOccurs="0" maxOccurs="unbounded" type="LoggerLevel"/>
            <xsd:element name="onMatch" minOccurs="0" maxOccurs="unbounded" type="MatchValue"/>
            <xsd:element name="onMismatch" minOccurs="0" maxOccurs="unbounded" type="MatchValue"/>
            <xsd:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded"/>
        </xsd:choice>
        <xsd:attribute name="class" type="xsd:string" use="optional"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:simpleType name="MatchValue">
        <xsd:restriction base="xsd:string">
            <xsd:enumeration value="ACCEPT"/>
            <xsd:enumeration value="DENY"/>
            <xsd:enumeration value="NEUTRAL"/>
        </xsd:restriction>
    </xsd:simpleType>

    <xsd:complexType name="Layout">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element name="pattern" minOccurs="0" maxOccurs="1" type="xsd:string"/>
            <xsd:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded"/>
        </xsd:choice>
        <xsd:attribute name="class" type="xsd:string" use="optional"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="Logger">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element name="appender-ref" minOccurs="0" maxOccurs="unbounded" type="AppenderRef"/>
            <xsd:any namespace="##other" processContents="lax" minOccurs="0" maxOccurs="unbounded"/>
        </xsd:choice>
        <xsd:attribute name="name" type="xsd:string" use="required"/>
        <xsd:attribute name="level" type="LoggerLevel" use="optional"/>
        <xsd:attribute name="additivity" type="xsd:boolean" use="optional" default="true"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="Encoder">
        <xsd:choice maxOccurs="unbounded">
            <xsd:element name="charset" type="xsd:string" minOccurs="0" maxOccurs="1"/>
            <xsd:element name="immediateFlush" type="xsd:boolean" minOccurs="0" maxOccurs="1"/>
            <xsd:element name="layout" minOccurs="0" maxOccurs="1" type="Layout"/>
            <xsd:element name="outputPatternAsHeader" type="xsd:boolean" minOccurs="0" maxOccurs="1"/>
            <xsd:element name="pattern" type="xsd:string" minOccurs="0" maxOccurs="1"/>
        </xsd:choice>
        <xsd:attribute name="class" type="xsd:string" use="optional"
                       default="ch.qos.logback.classic.encoder.PatternLayoutEncoder"
        />
    </xsd:complexType>

    <xsd:complexType name="Root">
        <xsd:sequence>
            <xsd:element name="appender-ref" minOccurs="0" maxOccurs="unbounded" type="AppenderRef"/>
        </xsd:sequence>
        <xsd:attribute name="level" use="required" type="LoggerLevel"/>
        <xsd:anyAttribute/>
    </xsd:complexType>

    <xsd:complexType name="AppenderRef">
        <xsd:attribute name="ref" type="xsd:string"/>
    </xsd:complexType>

    <xsd:simpleType name="LoggerLevel">
        <xsd:union>
            <xsd:simpleType>
                <xsd:restriction base="xsd:string">
                    <xsd:enumeration value="OFF"/>
                    <xsd:enumeration value="off"/>
                    <xsd:enumeration value="ALL"/>
                    <xsd:enumeration value="all"/>
                    <xsd:enumeration value="INHERITED"/>
                    <xsd:enumeration value="inherited"/>
                    <xsd:enumeration value="NULL"/>
                    <xsd:enumeration value="null"/>
                    <xsd:enumeration value="ERROR"/>
                    <xsd:enumeration value="error"/>
                    <xsd:enumeration value="WARN"/>
                    <xsd:enumeration value="warn"/>
                    <xsd:enumeration value="INFO"/>
                    <xsd:enumeration value="info"/>
                    <xsd:enumeration value="DEBUG"/>
                    <xsd:enumeration value="debug"/>
                    <xsd:enumeration value="TRACE"/>
                    <xsd:enumeration value="trace"/>
                </xsd:restriction>
            </xsd:simpleType>
            <xsd:simpleType>
                <xsd:restriction base="xsd:string">
                    <xsd:pattern value="($\{.+:-)?[Oo][Ff]{2}\}?"/>
                    <xsd:pattern value="($\{.+:-)?[Aa][Ll]{2}\}?"/>
                    <xsd:pattern value="($\{.+:-)?[Ii][Nn][Hh][Ee][Rr][Ii][Tt][Ee][Dd]\}?"/>
                    <xsd:pattern value="($\{.+:-)?[Nn][Uu][Ll]{2}\}?"/>
                    <xsd:pattern value="($\{.+:-)?[Ee][Rr]{2}[Oo][Rr]\}?"/>
                    <xsd:pattern value="($\{.+:-)?[Ww][Aa][Rr][Nn]\}?"/>
                    <xsd:pattern value="($\{.+:-)?[Ii][Nn][Ff][Oo]\}?"/>
                    <xsd:pattern value="($\{.+:-)?[Dd][Ee][Bb][Uu][Gg]\}?"/>
                    <xsd:pattern value="($\{.+:-)?[Tt][Rr][Aa][Cc][Ee]\}?"/>
                    <xsd:pattern value="\$\{.+\}"/>
                </xsd:restriction>
            </xsd:simpleType>
        </xsd:union>
    </xsd:simpleType>

    <xsd:complexType name="JmxConfigurator"/>

    <xsd:complexType name="ConnectionSource">
        <xsd:sequence>
            <xsd:element name="driverClass" type="xsd:string"/>
            <xsd:element name="url" type="xsd:string"/>
            <xsd:element name="user" type="xsd:string"/>
            <xsd:element name="password" type="xsd:string"/>
        </xsd:sequence>
        <xsd:attribute name="class" type="xsd:string" use="required"/>
    </xsd:complexType>

</xsd:schema>

```

## 补充操作2- logger子节点
> logback 中可以配置 logger 自节点，用来特殊配置日志级别。<br>


> 例1 ： 配置一下 mybatis 的日志级别是 debug.
```xml
    <!-- 常用的日志级别的配置   -->
    <logger name="org.apache.ibatis" level="DEBUG"/>
    <logger name="java.sql.Connection" level="DEBUG"/>
    <logger name="java.sql.Statement" level="DEBUG"/>
    <logger name="java.sql.PreparedStatement" level="DEBUG"/>
```

> 例2 ： 配置某个包的日志级别
```xml
   <logger name="com.example.demo01.controller" 
            additivity="false" level="warn">
        <appender-ref ref="STDOUT" />
        <appender-ref ref="STDOUT"></appender-ref>
        <appender-ref ref="INFO_FILE"></appender-ref>
        <appender-ref ref="WARN_FILE"></appender-ref>
        <appender-ref ref="ERROR_FILE"></appender-ref>
   </logger>
```