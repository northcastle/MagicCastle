---
title: RSA 加密工具类
---

# RSA 加密工具类
本文介绍一下 RSA 加密的一个工具类。

::: tip 使用流程
1、初始化密钥对，生成【公钥】和【私钥】；<br>
2、公钥分发给客户，私钥服务端自己保存使用；<br>
3、客户端给服务端发送加密数据：<br>
  &nbsp;&nbsp;&nbsp;&nbsp;3.1、客户端使用【公钥】进行加密数据，发送给服务端；<br>
  &nbsp;&nbsp;&nbsp;&nbsp;3.2、服务端接收加密的数据，使用【私钥】进行解密查看。<br>
:::

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
:::tip 提示
  本工具类中包含了【公钥】和【私钥】 这一对密钥对的初始化方法。<br>
  在实际使用时，先调用该方法初始化【公钥】和【私钥】，替换类中现有的的值。<br>
  本工具类已经对超长的字符串进行了分段加密的优化，因此适用于所有的场景。
:::

```java

import org.apache.commons.codec.binary.Base64;
import sun.misc.BASE64Decoder;

import javax.crypto.Cipher;
import java.security.*;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Arrays;

/**
 * @Author: northcastle
 * @Description: 进行非对称加密的RSA工具方法 - 超出长度后进行分段加密
 */
public class RSAUtile {

    /**
     * 公钥参数 ： 生成后暴露给客户端使用
     */
    private static String publicKey =  "这是公钥";

    /**
     * 私钥参数 ： 由服务端保存
     */
    private static String privateKey = "这是私钥";

    /**
     * 生成密钥对时用到的随机种子参数
     */
    private String seedKey = "1*sdfD";

    public static String getPublicKey() {
        return publicKey;
    }

    public static String getPrivateKey() {
        return privateKey;
    }

    /**
     * 初始化密钥对的方法
     * @throws NoSuchAlgorithmException
     */
    private void initKeys() throws NoSuchAlgorithmException {
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
        keyPairGenerator.initialize(1024,new SecureRandom(seedKey.getBytes()));
        KeyPair keyPair = keyPairGenerator.generateKeyPair();
        RSAPublicKey rsaPublicKey = (RSAPublicKey) keyPair.getPublic();
        RSAPrivateKey rsaPrivateKey = (RSAPrivateKey) keyPair.getPrivate();

        // 打印一下生成的密钥对，分别赋值给 【publicKey】和【privateKey】
        System.out.println("public key is : " + Base64.encodeBase64String(rsaPublicKey.getEncoded()));
        System.out.println("private key is : " + Base64.encodeBase64String(rsaPrivateKey.getEncoded()));

    }

    /**
     * 字符串转公钥
     * @param key
     * @return
     * @throws Exception
     */
    private static PublicKey getPublicKey(String key) throws Exception {
        byte[] keyBytes;
        keyBytes = (new BASE64Decoder()).decodeBuffer(key);
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PublicKey publicKey = keyFactory.generatePublic(keySpec);
        return publicKey;
    }

    /**
     * 字符串转私钥
     * @param key
     * @return
     * @throws Exception
     */
    private static PrivateKey getPrivateKey(String key) throws Exception {
        byte[] keyBytes;
        keyBytes = (new BASE64Decoder()).decodeBuffer(key);
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PrivateKey privateKey = keyFactory.generatePrivate(keySpec);
        return privateKey;
    }


    /**
     * 私钥加密
     * @param data
     * @param privateKey
     * @return
     */
    public static String  privateKeyEncrypt(String data,String privateKey) throws Exception {

        PKCS8EncodedKeySpec pkcs8EncodedKeySpec = new PKCS8EncodedKeySpec(getPrivateKey(privateKey).getEncoded());
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PrivateKey privateKeyUse = keyFactory.generatePrivate(pkcs8EncodedKeySpec);
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, privateKeyUse);

        // 执行漂亮的分段加密
        byte[] inputArray = data.getBytes();
        int inputLength = inputArray.length;
        System.out.println("需要加密的数据的长度是 ："+inputLength);
        // 这个最大长度是 1024/8 - 11 ： （密钥长度/8 -11）
        int MAX_ENCRYPT_BLOCK = 117;
        // 标识
        int offSet = 0;
        byte[] resultBytes = {};
        byte[] cache = {};
        while (inputLength - offSet > 0) {
            if (inputLength - offSet > MAX_ENCRYPT_BLOCK) {
                cache = cipher.doFinal(inputArray, offSet, MAX_ENCRYPT_BLOCK);
                offSet += MAX_ENCRYPT_BLOCK;
            } else {
                cache = cipher.doFinal(inputArray, offSet, inputLength - offSet);
                offSet = inputLength;
            }
            resultBytes = Arrays.copyOf(resultBytes, resultBytes.length + cache.length);
            System.arraycopy(cache, 0, resultBytes, resultBytes.length - cache.length, cache.length);
        }

        return Base64.encodeBase64String(resultBytes);

        // 执行加密操作
        //byte[] result = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));

        //return Base64.encodeBase64String(result);
    }

    /**
     * 私钥解密
     * @param data
     * @param privateKey
     * @return
     * @throws Exception
     */
    public static String privateKeyDecrypt(String data,String privateKey) throws Exception{
        PKCS8EncodedKeySpec pkcs8EncodedKeySpec = new PKCS8EncodedKeySpec(getPrivateKey(privateKey).getEncoded());
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PrivateKey privateKeyUse = keyFactory.generatePrivate(pkcs8EncodedKeySpec);
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, privateKeyUse);

        // 下面进行漂亮的分段解密
        byte[] inputArray = Base64.decodeBase64(data.getBytes("UTF-8"));
        int inputLength = inputArray.length;
        System.out.println("目标解密字符串的长度是 : "+inputLength);
        // 最大解密字节数，超出最大字节数需要分组加密 1024 / 8 (密钥长度 / 8)
        int MAX_ENCRYPT_BLOCK = 128;
        // 标识
        int offSet = 0;
        byte[] resultBytes = {};
        byte[] cache = {};
        while (inputLength - offSet > 0) {
            if (inputLength - offSet > MAX_ENCRYPT_BLOCK) {
                cache = cipher.doFinal(inputArray, offSet, MAX_ENCRYPT_BLOCK);
                offSet += MAX_ENCRYPT_BLOCK;
            } else {
                cache = cipher.doFinal(inputArray, offSet, inputLength - offSet);
                offSet = inputLength;
            }
            resultBytes = Arrays.copyOf(resultBytes, resultBytes.length + cache.length);
            System.arraycopy(cache, 0, resultBytes, resultBytes.length - cache.length, cache.length);
        }
        return new String(resultBytes);

        //byte[] result = cipher.doFinal(Base64.decodeBase64(data));
        //return new String(result);
    }

    /**
     * 公钥加密
     * @param data
     * @param publicKey
     * @return
     * @throws Exception
     */
    public static String publicKeyEncrypt(String data,String publicKey) throws Exception {
        X509EncodedKeySpec x509EncodedKeySpec = new X509EncodedKeySpec(getPublicKey(publicKey).getEncoded());
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PublicKey publicKeyUse = keyFactory.generatePublic(x509EncodedKeySpec);
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, publicKeyUse);
        // 执行漂亮的分段加密
        byte[] inputArray = data.getBytes();
        int inputLength = inputArray.length;
        System.out.println("需要加密的数据的长度是 ："+inputLength);
        // 这个最大长度是 1024/8 - 11 ： （密钥长度/8 -11）
        int MAX_ENCRYPT_BLOCK = 117;
        // 标识
        int offSet = 0;
        byte[] resultBytes = {};
        byte[] cache = {};
        while (inputLength - offSet > 0) {
            if (inputLength - offSet > MAX_ENCRYPT_BLOCK) {
                cache = cipher.doFinal(inputArray, offSet, MAX_ENCRYPT_BLOCK);
                offSet += MAX_ENCRYPT_BLOCK;
            } else {
                cache = cipher.doFinal(inputArray, offSet, inputLength - offSet);
                offSet = inputLength;
            }
            resultBytes = Arrays.copyOf(resultBytes, resultBytes.length + cache.length);
            System.arraycopy(cache, 0, resultBytes, resultBytes.length - cache.length, cache.length);
        }

        return Base64.encodeBase64String(resultBytes);


    }


    /**
     * 公钥解密
     * @param data
     * @param publicKey
     * @return
     */
    public static String publicKeyDecrypt(String data,String publicKey) throws Exception {
        X509EncodedKeySpec x509EncodedKeySpec = new X509EncodedKeySpec(getPublicKey(publicKey).getEncoded());
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PublicKey publicKeyUse = keyFactory.generatePublic(x509EncodedKeySpec);
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, publicKeyUse);

        // 下面进行漂亮的分段解密
        byte[] inputArray = Base64.decodeBase64(data.getBytes("UTF-8"));
        int inputLength = inputArray.length;
        System.out.println("目标解密字符串的长度是 : "+inputLength);
        // 最大解密字节数，超出最大字节数需要分组加密 1024 / 8 (密钥长度 / 8)
        int MAX_ENCRYPT_BLOCK = 128;
        // 标识
        int offSet = 0;
        byte[] resultBytes = {};
        byte[] cache = {};
        while (inputLength - offSet > 0) {
            if (inputLength - offSet > MAX_ENCRYPT_BLOCK) {
                cache = cipher.doFinal(inputArray, offSet, MAX_ENCRYPT_BLOCK);
                offSet += MAX_ENCRYPT_BLOCK;
            } else {
                cache = cipher.doFinal(inputArray, offSet, inputLength - offSet);
                offSet = inputLength;
            }
            resultBytes = Arrays.copyOf(resultBytes, resultBytes.length + cache.length);
            System.arraycopy(cache, 0, resultBytes, resultBytes.length - cache.length, cache.length);
        }
        return new String(resultBytes);

        // 执行解密操作
        //byte[] result = cipher.doFinal(Base64.decodeBase64(data));
        //return new String(result);
    }

}

```
## 使用案例
下面的案例展示了 【客户端加密】、【服务端解密】的操作流程。
符合常规的使用场景。
```java
public class TestRSA{
    public static void main(String ...args){

        try {
            

            // 情景 ：客户端加密；服务端解密
            // 公钥加密；私钥解密

            // 源数据
            String  dd = "这是要加密的数据 This is the data which will be encrypted";

            // 1、客户端 ：调用公钥加密
            String s1 = RSAUtil.publicKeyEncrypt(dd, RSAUtil.getPublicKey());
            System.out.println("s1 = " + s1);

            // 2、服务端 ： 调用私钥解密
            String s2 = RSAUtil.privateKeyDecrypt(s1, RSAUtil.getPrivateKey());
            System.out.println("s2 = " + s2);
            System.out.println("dd = " + dd);


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
