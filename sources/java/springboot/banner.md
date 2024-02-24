---
title: banner 图像
---

# banner.txt 文件
SpringBoot 项目的启动日志中可以通过自定义 `banner.txt` 文件的内容修改启动日志中的标识。
本文就展示一个作者比较喜欢的图标 ： 【老鹰】。


## 文件位置

`banner.txt` 文件在项目中的位置 ：
在项目的 `resources` 下。

```java{7}
ProjectName
    | -- src
        | -- main
            | -- java
            | -- resources
                | -- application.yaml
                | -- banner.txt # 这个就是我们要修改的文件
    | -- pom.xml
```

## 文件内容
将下面的内容直接复制到`banner.txt`中即可，在项目启动的时候就会展示了。

```text
          __  ______   __  __ _____ __     __ __  __ __ __ _ __ _  __
     .    _\\ '||'||    \\ |\\|'||' _\\    ||_||  _\\ \\|\\| ||,' ((_'   ,
     /\  /"`\\ || ||_./"`\\| \\ || /"`\\   ||"|| /"`\\ \| \| ||\\ ._))  /\
   _|H/`;    """" """'    ""  " ""' _______"" ""'    "" "  " "" "" ""','\H|_
  _\HH|  `-._                     ,'\_   _/`.                     _.-'  |HH/_
 _\HH\       ||".--.-....________,'/(v,-.v)\`.________....-,--,"HH       /HH/_
_\Hb\.       ?b  ?HHb  ?b_   `-.HH| _/_|_\_ |HH,-'   _dP  dHHP  dP       ,/dH/_
`?.HH`._       `  `oHb   `H.    \H\  \ V / //H/    ,H'   dHo'  '       _,'HH,P'
 `?.HHH`o._          ``-..__     |H\_ `-'.;'H|     __,,-''          _,o'HHH,P'
   `?.HHHH`o.__                 ,'H/   T'HH ?`.                 __,o'HHHH,P'
      `?HHHHHHH"o.___       _,odHH|  V |H^HH HHbo._       ___,o"HHHHHHH-'
         `?.HHHHHHHHbiooooidHHHHHH|    |HHHH HHHHHHbiooooidHHHHHHHH,P'
             `"?HHHHHHHHHHHHHHP' |H|  \|HHH d| `?HHHHHHHHHHHHHHP"'
                    "'"""""        X_}___{_X        """""`"
                              ,\}.("   |   ").{/.
                              (/' `\.  |  ,/' `\)
                              '\    `  |  '   ,/`
                          { }| ``.     |     ,'  |{ }
                         ,iH|-._  \    |    /  _.-|Hi.
                        ;oHH|"-._  |   |   |  _.-"|HHo;
                           `'|   ""|---|---|""   |`'
                              .   /    |    \   ,
                               \,'     |     `./
                                 `--.__|__.--'

                                  Magic-Castle
```

当然了，也可以自定义其他的文本图像。知道了如何修改后，各位小伙伴们就可以自由发挥啦。