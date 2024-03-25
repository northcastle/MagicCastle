---
title : JWT 的使用
---

# Java 中使用 JWT

> 本文介绍一下Java中使用JJWT生成/校验token的操作。<br>


## token简介
```
1、token是服务端生成并返回给客户端的一串加密字符串，可以保存一些信息；
2、token拥有有效期属性，可以实现会话控制；
3、token中可以携带用户信息，用于识别用户的身份；
4、token需要客户端手动添加在请求报文中（一般是在请求头中），发送到服务端。
```

## JWT 简单认识
> `JWT (JsonWebToken)` : 是一种标准，用于各方之间以json对象的形式进行信息的传输。<br>

> JWT 由三部分组成 ：`Header.Payload.Signature` : `[标头].[载荷].[签名]`<br>
> 三部分之间用 `.` 隔开。


> `Header` : 主要包含两部分 ： 签名的算法(alg)、令牌的类型(typ)
```json
{
    "alg":"HS256"，
    "typ":"JWT"
}
```
> `Payload` : 信息/数据内容(手动添加进来) + 到期时间(设置后自己添加进来)
```json
{
    "key1" : "value1",
    "key2" : "value2"
    ......
}
```
> `Signature` : 签名，使用Header中指定的加密方式，对 Header + Payload 进行编码与签名。
```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

下面，对在Java中使用JJWT的操作进行演示。

## 添加依赖
```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.5</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.5</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.5</version>
</dependency>
```

## 生成token
```java
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;

public class CreateToken {
    public static void main(String[] args) {

        //1、准备要加密的数据map
        HashMap<String, Object> claimMap = new HashMap<>();
        claimMap.put("keya","valuea");
        claimMap.put("keyb",100);
        claimMap.put("keyc",false);
        claimMap.put("id","xxxbbbnnnsdfadfadfa");


        // 2、签名加密的key,这个加密的字符串要长一些,32个字符
        SecretKey secretKey = Keys.hmacShaKeyFor("12345678$453223423tedfbsfdgjSHG1".getBytes());

        // 3、生成token
        String token = Jwts.builder()
                .setSubject("tokenuser") // 设置主题，即令牌的持有者
                .setHeaderParam("myheader","abc") // 设置一个自定义的头部
                .setClaims(claimMap) // 设置要加密的内容
                .setIssuer("Northcastle") // 设置发行者 (可选)
                .setIssuedAt(new Date()) // 设置发行时间 (可选)
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 设置到期时间是 1小时 （可选）
                .signWith(secretKey, SignatureAlgorithm.HS256) // 签名加密
                .compact();

        // 4、输出一下生成的token
        System.out.println(token);

    }
}

```

```
输出的token ： 
eyJteWhlYWRlciI6ImFiYyIsImFsZyI6IkhTMjU2In0.eyJrZXlhIjoidmFsdWVhIiwia2V5YiI6MTAwLCJrZXljIjpmYWxzZSwiaWQiOiJ4eHhiYmJubm5zZGZhZGZhZGZhIiwiaXNzIjoiTm9ydGhjYXN0bGUiLCJpYXQiOjE3MTEzNzUzMzIsImV4cCI6MTcxMTM3ODkzMn0.CzKWVMdU_hVzyIxd4vtrBa9JUSvMfa2Emx7EGt7EHVE
```
## 校验token
```java
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;

import javax.crypto.SecretKey;

public class ReadToken {

    public static void main(String[] args) {

        // 要被读取的token
        String token = "eyJteWhlYWRlciI6ImFiYyIsImFsZyI6IkhTMjU2In0.eyJrZXlhIjoidmFsdWVhIiwia2V5YiI6MTAwLCJrZXljIjpmYWxzZSwiaWQiOiJ4eHhiYmJubm5zZGZhZGZhZGZhIiwiaXNzIjoiTm9ydGhjYXN0bGUiLCJpYXQiOjE3MTEzNzQ1ODgsImV4cCI6MTcxMTM3ODE4OH0.Xpqi4wXp1TqpwHMI2VjJuE1Q_4gy5SXO-1uRipC28B8";

        // 2、签名加密的key,这个加密的字符串要长一些,32个字符
        SecretKey secretKey = Keys.hmacShaKeyFor("12345678$453223423tedfbsfdgjSHG1".getBytes());

        // 读取内容
        try {
            Jws<Claims> claimsJws = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token);
            System.out.println("claimsJws = " + claimsJws);

            // 分别读取相关的内容 ： header、payload、signature
            JwsHeader header = claimsJws.getHeader();
            Claims body = claimsJws.getBody();
            String signature = claimsJws.getSignature();

            Object keya = body.get("keya");
            System.out.println("keya = " + keya);

            // 读取其他的相关属性
            Long exp = body.get("exp", Long.class);
            System.out.println("过期时间 ： "+exp);
        }catch (ExpiredJwtException e){
            System.out.println("token 超时");
            e.printStackTrace();
        }catch (SignatureException e){
            System.out.println("签名校验异常");
            e.printStackTrace();
        }catch (Exception e){
            System.out.println("token 异常");
            e.printStackTrace();
        }

    }
}

```

```
运行结果如下：
claimsJws = header={myheader=abc, alg=HS256},body={keya=valuea, keyb=100, keyc=false, id=xxxbbbnnnsdfadfadfa, iss=Northcastle, iat=1711374588, exp=1711378188},signature=Xpqi4wXp1TqpwHMI2VjJuE1Q_4gy5SXO-1uRipC28B8
keya = valuea
过期时间 ： 1711378188
```

## 简单的封装工具类
```java

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.Map;

public class JWTUtils {


    /**
     * 生成token
     * @param key 签名的key
     * @param body 载荷的内容
     * @param expireTime 超时时间
     * @return
     */
    public static String generateToken(String key, Map body,Long expireTime){
        // 2、签名加密的key,这个加密的字符串要长一些,32个字符
        SecretKey secretKey = Keys.hmacShaKeyFor(key.getBytes());

        // 3、生成token
        String token = Jwts.builder()
                .setClaims(body)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expireTime))
                //.setSubject("tokenuser")
                //.setHeaderParam("myheader","abc")
                //.setIssuer("Northcastle")
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();

        return token;
    }


    /**
     * 读取 token
     * @param key 签名的密钥
     * @param token 待解析的token
     * @return
     */
    public static Jws<Claims> readToken(String key,String token){

        // 2、签名加密的key,这个加密的字符串要长一些,32个字符
        SecretKey secretKey = Keys.hmacShaKeyFor(key.getBytes());

        // 读取内容
        try {
            Jws<Claims> claimsJws = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token);
            System.out.println("claimsJws = " + claimsJws);

            return claimsJws;
        }catch (ExpiredJwtException e){
            System.out.println("token 超时");
            e.printStackTrace();
        }catch (SignatureException e){
            System.out.println("签名校验异常");
            e.printStackTrace();
        }catch (Exception e){
            System.out.println("token 异常");
            e.printStackTrace();
        }

        return null;
    }

}

```

:::tip 注意
1、加密的密钥要准备一个32位的字符串；
2、在生成token 和 校验token 时，需要使用相同的加密密钥；
:::

> 至此，在 Java 中使用 JJWT 进行token验证的操作就完成了。<br>
> 想要了解更多，可以参考 gitee 上的官方文档 [JJWT官方文档](https://gitee.com/zzz163/JJWT)