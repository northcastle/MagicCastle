---
title: AES 加密工具类
---

# AES 加密工具类
本文介绍一下 AES加密的一个工具类。

> 本工具类用到的加密参数如下 ：<br />
> `加密算法` : `AES` <br />
> `加密模式` : `CBC` <br />
> `填充模式` : `PKCS5Padding` <br />
> `编码格式` : `UTF-8` <br />

## 依赖项准备
本工具类中使用到了 `commons-codec`依赖，可以在 pom.xml 文件中直接引入
```yaml
<!-- 工具类中需要的依赖 -->
<dependency>
    <groupId>commons-codec</groupId>
    <artifactId>commons-codec</artifactId>
    <version>1.10</version>
</dependency>
```

## 完整的类文件
下面是完整的类文件的内容
```java
import org.apache.commons.codec.binary.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.NoSuchAlgorithmException;

/**
 * @Author: northcastle
 * @Description: AES 加解密
 */
public class AESUtile {


    /**
     * 加密算法 AES
     * 加密模式 CBC
     * 填充模式 PKCS5Padding
     *
     * 编码格式 UTF-8
     */

    private final static String MODE = "AES/CBC/PKCS5Padding";

    private final static String AES = "AES";
    private final static String ENCODING = "UTF-8";


    /**
     * 密钥长度 ： 必须是 16位
     */
    private static final String KEY = "MH*DiqdcR38lRFSv";
    /**
     * 向量长度 ： 必须是 16位
     */
    private static final String IV = "nY5*qSRdca3GjuDA";

    /**
     * 加密
     * @param data 要加密的数据
     * @param key 加密密钥
     * @param iv 偏移量
     * @return
     * @throws Exception
     */
    public static String encrypt(String data,String key,String iv) throws Exception{
        byte[] dataByte = data.getBytes(ENCODING);
        byte[] keyByte = key.getBytes();
        //初始化一个密钥对象
        SecretKeySpec keySpec = new SecretKeySpec(keyByte ,AES);
        //初始化一个初始向量,不传入的话，则默认用全0的初始向量
        byte[] ivParam = iv.getBytes();
        IvParameterSpec ivSpec = new IvParameterSpec(ivParam);
        // 指定加密的算法、工作模式和填充方式
        Cipher cipher = Cipher.getInstance(MODE);
        cipher.init(Cipher.ENCRYPT_MODE, keySpec,ivSpec);
        byte[] encryptedBytes = cipher.doFinal(dataByte);
        String encodedString = Base64.encodeBase64String(encryptedBytes);
        return encodedString;
    }

    /**
     * 解密
     * @param data 密文
     * @param key 密钥
     * @param iv 偏移向量
     * @return
     */
    public static String decrypt(String data,String key,String iv) throws Exception, NoSuchAlgorithmException {
        byte[] dataByte = Base64.decodeBase64(data);
        byte[] keyByte = key.getBytes();
        //初始化一个密钥对象
        SecretKeySpec keySpec = new SecretKeySpec(keyByte ,AES);
        //初始化一个初始向量,不传入的话，则默认用全0的初始向量
        byte[] ivParam = iv.getBytes();
        IvParameterSpec ivSpec = new IvParameterSpec(ivParam);
        // 指定加密的算法、工作模式和填充方式
        Cipher cipher = Cipher.getInstance(MODE);
        cipher.init(Cipher.DECRYPT_MODE, keySpec,ivSpec);
        byte[] result  = cipher.doFinal(dataByte);
        return new String(result,ENCODING);
    }


    /**
     * 使用内部的静态变量 直接进行加密
     * @param data
     * @return
     * @throws Exception
     */
    public static String encrypt(String data) throws Exception{
       return encrypt(data,KEY,IV);
    }

    public static String decrypt(String data) throws Exception{
        return decrypt(data,KEY,IV);
    }

}

```

## 使用案例

下面是该工具类的一个简单使用案例

```java
public class TestAes {

    public static void main(String[] args) throws Exception {

        // 待加密的原字符串
        String data = "helloworld大家好";

        // 执行加密
        String encrypt = AESUtile.encrypt(data);
        System.out.println("encrypt = " + encrypt);

        // 执行解密
        String decrypt = AESUtile.decrypt(encrypt);
        System.out.println("data = " + data);
        System.out.println("decr = " + decrypt);
    }

}

```
