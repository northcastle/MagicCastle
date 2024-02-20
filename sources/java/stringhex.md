---
title: 字符串与十六进制互转
---

# 字符串与十六进制的互转
本文介绍一下【字符串与十六进制】的相互转换操作。不涉及原理，只有代码。
一看就懂，一用就会。非常的方便。
## 字符串转十六进制
作者在开发过程中，经常用到字符串转十六进制的有两种方法。
两种方法都很ok,但是相比较来说，【方法二】的执行效率较高，在进行大字符串转换的时候比较合适。
### 方法一
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

### 方法二
```java
    /**
     * 字符串 转 十六进制
     * @param bytes
     * @return 返回大写的十六进制字符串
     */
 public static String byte2hexNew(byte[] bytes) {
        StringBuilder hex = new StringBuilder();
        for (byte b : bytes) {
            String hexValue = Integer.toHexString(b & 0xff);
            if (hexValue.length() == 1) {
                hex.append('0');
            }
            hex.append(hexValue);
        }
        return hex.toString().toUpperCase();
    }
```

## 十六进制转字符串
十六进制转字符串是一个相反的过程，代码也比较简单。
```java
    /**
     * 十六进制转字符串
     * @param b
     * @return 源字符串
     */
    public static byte[] hex2byte(byte[] b) {
        if ((b.length % 2) != 0) {
            throw new IllegalArgumentException("长度不是偶数");
        }
        byte[] b2 = new byte[b.length / 2];
        for (int n = 0; n < b.length; n += 2) {
            String item = new String(b, n, 2);
            b2[n / 2] = (byte) Integer.parseInt(item, 16);
        }
        return b2;
    }
```

以上就是 `字符串`与`十六进制`相互转换的方法整理。