---
title: 文件复制
---

# JavaIO 中的文件复制工具类
本文介绍一个工具方法来实现文件的复制功能。<br>
使用的是 `字节流` 的方式完成文件的复制。<br>
在进行 `图片`、`视频` 等二进制文件的复制的时候可以使用，当然了`文本文件`也可以使用。

## 工具方法代码
以下的工具方法，可以直接copy进入自己的代码中进行使用。
```java
import java.io.*;

public class FileUtils{
    /**
     * 1.使用字节输入流和字节输出流完成文件的复制
     * 实现思路 ： 一边读，一边写
     * @param:sourceFilePath 源文件的路径
     * @param:targetFilePath 目标文件的路径
     */
    public static void fileCopy(String sourceFilePath,String targetFilePath){
        //1.两个文件 ：源文件和目标文件
        File fileSource = new File(sourceFilePath);
        File fileCopy = new File(targetFilePath);
        //2.声明输入流和输出流对象
        FileInputStream inputStream = null;
        FileOutputStream outputStream = null;
        //3.读取文件的缓存数组和长度记录
        byte[] buff = new byte[1024];
        int len = 0;

        try {
            //4.创建输入流和输出流对象
            inputStream = new FileInputStream(fileSource);
            outputStream = new FileOutputStream(fileCopy,true); // 追加写入文件

            //5.开始进行读写操作
            System.out.println("==> 复制文件 begin : "+System.currentTimeMillis()+"<==");
            while ((len = inputStream.read(buff)) != -1){ // 读
                outputStream.write(buff,0,len); // 写
            }
            System.out.println("==> 复制文件 end : "+System.currentTimeMillis()+"<==");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally{
            // 关闭两个流
            try {
                if (inputStream != null){
                    inputStream.close();
                }
                if (outputStream != null){
                    outputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
    }
}

```

## 使用案例
```java
public class FileUtileTest{
    public static void main(String[] args){
        // 源文件的路径
        String pathSource = "D:\\EDailyRoutine\\java-io-test\\aaa.JPG";
        // 目标文件的路径
        String pathTarget = "D:\\EDailyRoutine\\java-io-test\\aaa_copy02.jpg";
        // 执行文件复制的方法
        FileUtils.fileCopy(pathSource,pathTarget);
    }
}
```
使用`字节流`的文件复制方法就完成了。