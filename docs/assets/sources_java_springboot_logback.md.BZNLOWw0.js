import{_ as s,c as a,o as n,a4 as i}from"./chunks/framework.nmxbmZJh.js";const d=JSON.parse('{"title":"logback 日志配置","description":"","frontmatter":{"title":"logback 日志配置"},"headers":[],"relativePath":"sources/java/springboot/logback.md","filePath":"sources/java/springboot/logback.md","lastUpdated":1708939301000}'),t={name:"sources/java/springboot/logback.md"},l=i(`<h1 id="logback-的日志配置" tabindex="-1">logback 的日志配置 <a class="header-anchor" href="#logback-的日志配置" aria-label="Permalink to &quot;logback 的日志配置&quot;">​</a></h1><p>在springboot2.0/3.0 中，默认使用的就是 logback的日志依赖。</p><h2 id="配置文件位置" tabindex="-1">配置文件位置 <a class="header-anchor" href="#配置文件位置" aria-label="Permalink to &quot;配置文件位置&quot;">​</a></h2><p>logback 的日志配置文件放在项目的 <code>resources</code> 下。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ProjectName</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> java</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> resources</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> application.yaml</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> logback.xml # 这个就是日志配置的文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    |</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pom.xml</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">补充</p><p>日志的配置文件，官方比较推荐使用 <code>logback-spring.xml</code> 作为文件名。<br> 不过，直接使用<code>logback.xml</code>也是没啥问题的。</p></div><h2 id="配置文件案例" tabindex="-1">配置文件案例 <a class="header-anchor" href="#配置文件案例" aria-label="Permalink to &quot;配置文件案例&quot;">​</a></h2><p>下面展示一个实际开发中应用的日志配置的模板。</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!--定义日志文件的存储地址,不要在 LogBack 的配置中使用相对路径，直接使用绝对路径 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LOG_HOME&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/Users/northcastle/work/xxx/log/xxxLog&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 定义文件滚动的最大大小 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MAX_FILE_SIZE&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10MB&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">property</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MAX_HISTORY&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 配置一个附加器 ：控制台输出内容   --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;STDOUT&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.core.ConsoleAppender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;%date{yyyy-MM-dd HH:mm:ss.SSS} %class %line [%-5level] %msg%n&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 时间滚动输出 level为 INFO 日志 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INFO_FILE&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 正在记录的日志文件的路径及文件名 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${LOG_HOME}/log_info.log&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!--日志文件输出格式--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} %class %line  [%-5level] %msg%n&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;UTF-8&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rollingPolicy</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fileNamePattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${LOG_HOME}/info/info_%d{yyyy-MM-dd}_%i.log&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fileNamePattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxFileSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${MAX_FILE_SIZE}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxFileSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cleanHistoryOnStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;true&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cleanHistoryOnStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${MAX_HISTORY}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rollingPolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 此日志文件只记录info级别的 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.classic.filter.LevelFilter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;INFO&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;ACCEPT&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMismatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;DENY&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMismatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 时间滚动输出 level为 WARN 日志 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WARN_FILE&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 正在记录的日志文件的路径及文件名 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${LOG_HOME}/log_warn.log&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!--日志文件输出格式--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} %class %line  [%-5level] %msg%n&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;UTF-8&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  此处设置字符集</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rollingPolicy</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fileNamePattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${LOG_HOME}/warn/warn_%d{yyyy-MM-dd}_%i.log&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fileNamePattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxFileSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${MAX_FILE_SIZE}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxFileSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cleanHistoryOnStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;true&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cleanHistoryOnStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${MAX_HISTORY}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rollingPolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 此日志文件只记录warn级别的 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.classic.filter.LevelFilter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;warn&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;ACCEPT&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMismatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;DENY&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMismatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 时间滚动输出 level为 ERROR 日志 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ERROR_FILE&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 正在记录的日志文件的路径及文件名 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${LOG_HOME}/log_error.log&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!--日志文件输出格式--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} %class %line  [%-5level] %msg%n&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;UTF-8&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;  此处设置字符集</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 日志记录器的滚动策略，按日期，按大小记录 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rollingPolicy</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fileNamePattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${LOG_HOME}/error/error_%d{yyyy-MM-dd}_%i.log&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">fileNamePattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxFileSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${MAX_FILE_SIZE}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxFileSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cleanHistoryOnStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;true&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cleanHistoryOnStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${MAX_HISTORY}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maxHistory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rollingPolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 此日志文件只记录warn级别的 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ch.qos.logback.classic.filter.LevelFilter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;error&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;ACCEPT&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMismatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;DENY&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">onMismatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">root</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;STDOUT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INFO_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WARN_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ERROR_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="代码中使用" tabindex="-1">代码中使用 <a class="header-anchor" href="#代码中使用" aria-label="Permalink to &quot;代码中使用&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.slf4j.Logger;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.slf4j.LoggerFactory;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.stereotype.Controller;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.PostMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.ResponseBody;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Controller</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ABCController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Logger logger </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LoggerFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ABCController.class);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PostMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/sayHello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ResponseBody</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sayHello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--- 请求成功进入到了 sayHello 方法中来 ---&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;HelloWorld&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="补充操作1-xsd文件" tabindex="-1">补充操作1-xsd文件 <a class="header-anchor" href="#补充操作1-xsd文件" aria-label="Permalink to &quot;补充操作1-xsd文件&quot;">​</a></h2><blockquote><p>可以添加一个 <code>logback.xsd</code> 文件，<br> 这样在编写 <code>logback-spring.xml</code> 文件的时候，就会有提示。</p></blockquote><div class="warning custom-block"><p class="custom-block-title">注意</p><p>添加了 logback.xsd 文件之后，就不要在 logback-spring.xml 文件中定义变量了，<br> 由于 xsd 文件的校验，会导致 \${xxx} 的变量使用格式有错误提示。</p></div><h3 id="logback-spring-xml-文件头修改" tabindex="-1">logback-spring.xml 文件头修改 <a class="header-anchor" href="#logback-spring-xml-文件头修改" aria-label="Permalink to &quot;logback-spring.xml 文件头修改&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://ch.qos.logback/xml/ns/logback&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        xmlns:xsi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        xsi:schemaLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://ch.qos.logback/xml/ns/logback</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        https://raw.githubusercontent.com/enricopulatzo/logback-XSD/master/src/main/xsd/logback.xsd&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        正常的配置</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="logback-xsd-文件内容" tabindex="-1">logback.xsd 文件内容 <a class="header-anchor" href="#logback-xsd-文件内容" aria-label="Permalink to &quot;logback.xsd 文件内容&quot;">​</a></h3><div class="language-xsd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xsd</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;!--</span></span>
<span class="line"><span>   logback.xml schema,</span></span>
<span class="line"><span>      https://github.com/enricopulatzo/logback-XSD</span></span>
<span class="line"><span>      https://github.com/nkatsar/logback-XSD</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;xsd:schema targetNamespace=&quot;http://ch.qos.logback/xml/ns/logback&quot;</span></span>
<span class="line"><span>            xmlns=&quot;http://ch.qos.logback/xml/ns/logback&quot;</span></span>
<span class="line"><span>            xmlns:xsd=&quot;http://www.w3.org/2001/XMLSchema&quot;</span></span>
<span class="line"><span>            elementFormDefault=&quot;qualified&quot;</span></span>
<span class="line"><span>            attributeFormDefault=&quot;unqualified&quot;</span></span>
<span class="line"><span>            version=&quot;1.1&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:element name=&quot;configuration&quot; type=&quot;Configuration&quot;/&gt;</span></span>
<span class="line"><span>    &lt;xsd:element name=&quot;included&quot; type=&quot;Configuration&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Configuration&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;shutdownHook&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;ShutdownHook&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;statusListener&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;StatusListener&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;contextListener&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;ContextListener&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;jmxConfigurator&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;JmxConfigurator&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;conversionRule&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;ConversionRule&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;include&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;Include&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;contextName&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;define&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;Define&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;timestamp&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;Timestamp&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;if&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;If&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;property&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;Property&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;appender&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;Appender&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;logger&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;Logger&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;root&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;Root&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:any namespace=&quot;##other&quot; processContents=&quot;lax&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;debug&quot; type=&quot;xsd:boolean&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;scan&quot; type=&quot;xsd:boolean&quot; use=&quot;optional&quot; default=&quot;false&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;scanPeriod&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot; default=&quot;1 minute&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;packagingData&quot; type=&quot;xsd:boolean&quot; use=&quot;optional&quot; default=&quot;false&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;ShutdownHook&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;</span></span>
<span class="line"><span>                       default=&quot;ch.qos.logback.core.hook.DelayingShutdownHook&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;ConversionRule&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;conversionWord&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;converterClass&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;StatusListener&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;ContextListener&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;resetJUL&quot; type=&quot;xsd:boolean&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:any namespace=&quot;##other&quot; processContents=&quot;lax&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Include&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;file&quot; use=&quot;optional&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;resource&quot; use=&quot;optional&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;url&quot; use=&quot;optional&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;optional&quot; use=&quot;optional&quot; type=&quot;xsd:boolean&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Define&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:sequence&gt;</span></span>
<span class="line"><span>            &lt;xsd:any minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:sequence&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Timestamp&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:sequence&gt;</span></span>
<span class="line"><span>            &lt;xsd:any minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:sequence&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;key&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;datePattern&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;timeReference&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;RollingPolicy&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;fileNamePattern&quot; minOccurs=&quot;1&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;maxHistory&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:int&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;minIndex&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:int&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;maxIndex&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:int&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;timeBasedFileNamingAndTriggeringPolicy&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;TriggeringPolicy&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;cleanHistoryOnStart&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:boolean&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;maxFileSize&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;FileSize&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;totalSizeCap&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;FileSize&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;required&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:simpleType name=&quot;FileSize&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:pattern value=&quot;[1-9][0-9]*(KB|MB|GB)?&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:restriction&gt;</span></span>
<span class="line"><span>    &lt;/xsd:simpleType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;TriggeringPolicy&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:sequence&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;maxFileSize&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;FileSize&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:sequence&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;required&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;If&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element type=&quot;Configuration&quot; name=&quot;then&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element type=&quot;Configuration&quot; name=&quot;else&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:any namespace=&quot;##other&quot; processContents=&quot;lax&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;condition&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Property&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:sequence&gt;</span></span>
<span class="line"><span>            &lt;xsd:any minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:sequence&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;scope&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;name&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;value&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;file&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;resource&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Appender&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;target&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;Target&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;file&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;withJansi&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:boolean&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;encoder&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;Encoder&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;filter&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;Filter&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;append&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:boolean&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;prudent&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:boolean&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;layout&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;Layout&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;rollingPolicy&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;RollingPolicy&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;connectionSource&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;ConnectionSource&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;triggeringPolicy&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;TriggeringPolicy&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;appender-ref&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;AppenderRef&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:any namespace=&quot;##other&quot; processContents=&quot;skip&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;name&quot; type=&quot;xsd:string&quot; use=&quot;required&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;required&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:simpleType name=&quot;Target&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:enumeration value=&quot;System.out&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:enumeration value=&quot;System.err&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:restriction&gt;</span></span>
<span class="line"><span>    &lt;/xsd:simpleType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Filter&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;level&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;LoggerLevel&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;onMatch&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;MatchValue&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;onMismatch&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;MatchValue&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:any namespace=&quot;##other&quot; processContents=&quot;lax&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:simpleType name=&quot;MatchValue&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:enumeration value=&quot;ACCEPT&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:enumeration value=&quot;DENY&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:enumeration value=&quot;NEUTRAL&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:restriction&gt;</span></span>
<span class="line"><span>    &lt;/xsd:simpleType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Layout&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;pattern&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:any namespace=&quot;##other&quot; processContents=&quot;lax&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Logger&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;appender-ref&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;AppenderRef&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:any namespace=&quot;##other&quot; processContents=&quot;lax&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;name&quot; type=&quot;xsd:string&quot; use=&quot;required&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;level&quot; type=&quot;LoggerLevel&quot; use=&quot;optional&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;additivity&quot; type=&quot;xsd:boolean&quot; use=&quot;optional&quot; default=&quot;true&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Encoder&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:choice maxOccurs=&quot;unbounded&quot;&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;charset&quot; type=&quot;xsd:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;immediateFlush&quot; type=&quot;xsd:boolean&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;layout&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot; type=&quot;Layout&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;outputPatternAsHeader&quot; type=&quot;xsd:boolean&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;pattern&quot; type=&quot;xsd:string&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;1&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:choice&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;optional&quot;</span></span>
<span class="line"><span>                       default=&quot;ch.qos.logback.classic.encoder.PatternLayoutEncoder&quot;</span></span>
<span class="line"><span>        /&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;Root&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:sequence&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;appender-ref&quot; minOccurs=&quot;0&quot; maxOccurs=&quot;unbounded&quot; type=&quot;AppenderRef&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:sequence&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;level&quot; use=&quot;required&quot; type=&quot;LoggerLevel&quot;/&gt;</span></span>
<span class="line"><span>        &lt;xsd:anyAttribute/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;AppenderRef&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;ref&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:simpleType name=&quot;LoggerLevel&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:union&gt;</span></span>
<span class="line"><span>            &lt;xsd:simpleType&gt;</span></span>
<span class="line"><span>                &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;OFF&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;off&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;ALL&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;all&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;INHERITED&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;inherited&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;NULL&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;null&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;ERROR&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;error&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;WARN&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;warn&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;INFO&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;info&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;DEBUG&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;debug&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;TRACE&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:enumeration value=&quot;trace&quot;/&gt;</span></span>
<span class="line"><span>                &lt;/xsd:restriction&gt;</span></span>
<span class="line"><span>            &lt;/xsd:simpleType&gt;</span></span>
<span class="line"><span>            &lt;xsd:simpleType&gt;</span></span>
<span class="line"><span>                &lt;xsd:restriction base=&quot;xsd:string&quot;&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Oo][Ff]{2}\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Aa][Ll]{2}\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Ii][Nn][Hh][Ee][Rr][Ii][Tt][Ee][Dd]\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Nn][Uu][Ll]{2}\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Ee][Rr]{2}[Oo][Rr]\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Ww][Aa][Rr][Nn]\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Ii][Nn][Ff][Oo]\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Dd][Ee][Bb][Uu][Gg]\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;($\\{.+:-)?[Tt][Rr][Aa][Cc][Ee]\\}?&quot;/&gt;</span></span>
<span class="line"><span>                    &lt;xsd:pattern value=&quot;\\$\\{.+\\}&quot;/&gt;</span></span>
<span class="line"><span>                &lt;/xsd:restriction&gt;</span></span>
<span class="line"><span>            &lt;/xsd:simpleType&gt;</span></span>
<span class="line"><span>        &lt;/xsd:union&gt;</span></span>
<span class="line"><span>    &lt;/xsd:simpleType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;JmxConfigurator&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;xsd:complexType name=&quot;ConnectionSource&quot;&gt;</span></span>
<span class="line"><span>        &lt;xsd:sequence&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;driverClass&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;url&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;user&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>            &lt;xsd:element name=&quot;password&quot; type=&quot;xsd:string&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/xsd:sequence&gt;</span></span>
<span class="line"><span>        &lt;xsd:attribute name=&quot;class&quot; type=&quot;xsd:string&quot; use=&quot;required&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/xsd:complexType&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/xsd:schema&gt;</span></span></code></pre></div><h2 id="补充操作2-logger子节点" tabindex="-1">补充操作2- logger子节点 <a class="header-anchor" href="#补充操作2-logger子节点" aria-label="Permalink to &quot;补充操作2- logger子节点&quot;">​</a></h2><blockquote><p>logback 中可以配置 logger 自节点，用来特殊配置日志级别。<br></p></blockquote><blockquote><p>例1 ： 配置一下 mybatis 的日志级别是 debug.</p></blockquote><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- 常用的日志级别的配置   --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">logger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;org.apache.ibatis&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DEBUG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">logger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;java.sql.Connection&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DEBUG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">logger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;java.sql.Statement&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DEBUG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">logger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;java.sql.PreparedStatement&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DEBUG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><blockquote><p>例2 ： 配置某个包的日志级别</p></blockquote><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">logger</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.example.demo01.controller&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            additivity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> level</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;warn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;STDOUT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;STDOUT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INFO_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;WARN_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ERROR_FILE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">appender-ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">logger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,24),p=[l];function e(h,k,o,u,E,r){return n(),a("div",null,p)}const c=s(t,[["render",e]]);export{d as __pageData,c as default};
