---
title: MD5 加密工具类
---
# MD5 加密
MD5加密，全称为Message-Digest Algorithm 5（消息摘要算法5），是一种被广泛使用的密码哈希函数，可以产生一个128位（16字节）的哈希值。<br>
本文使用Java原生的方法，实现MD5算法，封装一个工具类。
## 特性介绍
```tex
MD5加密的特点包括：

压缩性：任意长度的数据，算出的MD5值长度都是固定的。
容易计算：从原数据计算出MD5值很容易。
抗修改性：对原数据进行任何改动，哪怕只修改1个字节，所得到的MD5值都有很大区别。
强抗碰撞：两个不同的输入值很难产生相同的MD5哈希值。
```

:::tip
MD5加密在计算机安全领域有着广泛的应用，如数据完整性校验、数字签名等。<br>
然而，需要注意的是，MD5算法已被证明存在一些安全漏洞，如碰撞攻击、暴力破解等，因此在一些需要高度安全性的场合，可能需要使用更安全的加密算法，如SHA-256等。
:::

## 完整的类文件
> 本工具类设定了四个常规变量，用于指定响应结果的四种格式 ：<br>
> `32位大写`、`32位小写`、`16位大写`、 `16位小写` <br>
> 其中，16位的值为 32位的 进行`substring(8,24)`的部分。

```java
import java.security.MessageDigest;

/**
 * MD5 加密工具方法
 */
public class Md5Utils {

    /**
     * 返回32位大写
     */
    public static Integer RES_32_UPPER = 0;
    /**
     * 返回32位小写
     */
    public static Integer RES_32_LOWER = 1;
    /**
     * 返回16位大写
     */
    public static Integer RES_16_UPPER = 2;
    /**
     * 返回16位小写
     */
    public static Integer RES_16_LOWER = 3;

    /**
     * 计算md5
     * @param plainText 明文
     * @param resFormat 返回值格式，可以直接使用上面的格式
     * @return
     */
    public static String encryMD5(String plainText,Integer resFormat){
        String res = null;

        if (plainText != null){
            try{
                // 执行加密
                MessageDigest md5 = MessageDigest.getInstance("MD5");
                byte[] plainTextBytes = plainText.getBytes("utf-8");
                byte[] digestBytes = md5.digest(plainTextBytes);
                StringBuffer hexValue = new StringBuffer();
                for (int i = 0; i < digestBytes.length; i++) {
                    int val = digestBytes[i] & 0xFF;
                    if (val < 16) hexValue.append("0");
                    hexValue.append(Integer.toHexString(val));
                }
                // 处理加密结果
                switch (resFormat){
                    case 0:
                        res = hexValue.toString().toUpperCase();
                        break;
                    case 1:
                        res = hexValue.toString().toLowerCase();
                        break;
                    case 2:
                        res = hexValue.toString().toUpperCase().substring(8,24);
                        break;
                    case 3:
                        res = hexValue.toString().toLowerCase().substring(8,24);
                        break;
                    default:
                        res = null;
                        break;
                }
            }catch (Exception e){
                e.printStackTrace();
            }

        }

        return res;
    }
}
```

## 使用案例
```java
public class Md5Test {

    public static void main(String[] args) {
        // 原始明文
        String a = "admin大家好";
        // 32位大写
        String s0 = Md5Utils.encryMD5(a,Md5Utils.RES_32_UPPER);
        // 32位小写
        String s1 = Md5Utils.encryMD5(a,Md5Utils.RES_32_LOWER);
        // 16位大写
        String s2 = Md5Utils.encryMD5(a,Md5Utils.RES_16_UPPER);
        // 16位小写
        String s3 = Md5Utils.encryMD5(a,Md5Utils.RES_16_LOWER);
        // 输出加密结果看一下
        System.out.println("s0 = " + s0);
        System.out.println("s1 = " + s1);
        System.out.println("s2 = " + s2);
        System.out.println("s3 = " + s3);

    }
}

```
> 运行效果如下：

```tex
s0 = AC1A3C1194DD5724972A384EF1A1E1D2
s1 = ac1a3c1194dd5724972a384ef1a1e1d2
s2 = 94DD5724972A384E
s3 = 94dd5724972a384e
```

## 补充 : 在线MD5加密网站
这是一个在线的MD5加密网站，可以进行加密结果的验证。
[MD5在线加密](https://md5jiami.bmcx.com/)