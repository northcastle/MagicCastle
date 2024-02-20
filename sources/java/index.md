---
title: Java常用工具
---

# WelCome To Java

欢迎来到Java的世界，本章节将会记录和分享一些Java中常用的工具类和工具方法。
大家可以在学习和工作中直接使用。

<br />

## 示例
下面是一个【字符串转十六进制】的代码示例，可以直接copy使用【💯】。
```java
    /**
     * 字符串 转 十六进制
     * @param b
     * @return 返回大写的十六进制字符串
     */
    public static String byte2hex(byte[] b) {
        String hs = "";
        String stmp = "";
        for (int n = 0; n < b.length; n++) {
            stmp = (java.lang.Integer.toHexString(b[n] & 0XFF));
            if (stmp.length() == 1) {
                hs = hs + "0" + stmp;
            } else {
                hs = hs + stmp;
            }
        }
        return hs.toUpperCase();
    }
```

## 接下来干啥
是不是很方便，下面继续去探索这迷人的Java世界吧【🛫】！
::: tip 提示一下
更多关于Java的资料，请查阅
[Java官网](https://www.oracle.com/cn/java/)
:::