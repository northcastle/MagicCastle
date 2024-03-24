import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.nmxbmZJh.js";const c=JSON.parse('{"title":"Session 的基本操作","description":"","frontmatter":{"title":"Session 的基本操作"},"headers":[],"relativePath":"sources/java/springboot/usesession.md","filePath":"sources/java/springboot/usesession.md","lastUpdated":1711112270000}'),p={name:"sources/java/springboot/usesession.md"},l=n(`<h1 id="session-的基本操作" tabindex="-1">Session 的基本操作 <a class="header-anchor" href="#session-的基本操作" aria-label="Permalink to &quot;Session 的基本操作&quot;">​</a></h1><h2 id="会话控制是什么" tabindex="-1">会话控制是什么 <a class="header-anchor" href="#会话控制是什么" aria-label="Permalink to &quot;会话控制是什么&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>会话控制，就是 【对会话进行控制】。</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>HTTP 是一种无状态的协议，它无法区分多次的请求是否来自于同一个客户端，即 ：【无法区分用户】。<br> 【会话控制】 就是在请求的过程中，对请求添加一些特殊的标记信息，从而实现对请求者身份的记录和验证。<br></p><p>【常见的会话控制技术有三种】：</p><ul><li>cookie</li><li>session</li><li>token</li></ul></div><blockquote><p>本文介绍一下 在 【SpringBoot】框架中进行 <code>Session</code> 操作的方式。</p></blockquote><h2 id="session简介" tabindex="-1">session简介 <a class="header-anchor" href="#session简介" aria-label="Permalink to &quot;session简介&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>session 是保存在【服务端的一块儿数据】，主要用来保存当前访问用户的相关信息。</li><li>因此，session可以用来识别用户的身份以及快速获取用户的相关信息，实现会话控制。</li></ul></div><h2 id="session流程" tabindex="-1">session流程（*） <a class="header-anchor" href="#session流程" aria-label="Permalink to &quot;session流程（*）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、客户端浏览器携带身份信息（用户名&amp;密码） 请求 服务端；</span></span>
<span class="line"><span>2、服务端进行 身份信息 校验；</span></span>
<span class="line"><span>3、校验通过，创建session对象，保存身份相关的数据，并生成一个sessionId 用来标识当前数据；</span></span>
<span class="line"><span>4、服务端 将sessionId 放入 cookie 中，返回给 客户端浏览器；</span></span>
<span class="line"><span>5、当客户端浏览器 下次再进行访问 服务端时，会自动携带cookie到服务端；</span></span>
<span class="line"><span>6、此时服务端可以根据cookie中的sessionId 获取对应的session，进而获取到用户的身份信息。</span></span></code></pre></div><blockquote><p>【注意】：<br> 默认情况下，存放到cookie中的sessionId 的 key 为 ： &quot;<strong>JSESSIONID</strong>&quot;。 <br> 默认情况下，session 的数据是存放在 【<strong>内存</strong>】中的。</p></blockquote><h2 id="核心类介绍" tabindex="-1">核心类介绍 <a class="header-anchor" href="#核心类介绍" aria-label="Permalink to &quot;核心类介绍&quot;">​</a></h2><blockquote><p><code>javax.servlet.http.HttpSession</code> : session的对象 <br><code>javax.servlet.http.HttpServletRequest</code> : http 请求对象类<br><code>javax.servlet.http.HttpServletResponse</code>: http 响应对象类</p></blockquote><h2 id="session对象的基本操作方法" tabindex="-1">session对象的基本操作方法 <a class="header-anchor" href="#session对象的基本操作方法" aria-label="Permalink to &quot;session对象的基本操作方法&quot;">​</a></h2><blockquote><p><code>HttpSession session = request.getSession();</code> : 获取session对象，如果不存在则创建；如果存在则直接使用<br><code>session.setMaxInactiveInterval(num);</code> : 设置session的有效时长，单位是 [秒]<br><code>session.getId()</code> : 获取session的ID<br><code>session.setAttribute(key,value);</code> : 往session对象中添加属性<br><code>session.getAttribute(key);</code> : 获取session中存的数据<br><code>session.isNew();</code> : 判断一个session是否是新创建的<br><code>session.invalidate();</code> : 销毁一个session<br></p></blockquote><h2 id="获取session对象" tabindex="-1">获取session对象 <a class="header-anchor" href="#获取session对象" aria-label="Permalink to &quot;获取session对象&quot;">​</a></h2><blockquote><p><code>HttpSession session = request.getSession();</code> : 获取session对象，如果不存在则创建；如果存在则直接使用<br></p></blockquote><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpServletResponse;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpSession;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestController</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/session&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SessionController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 创建session</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> request</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> response</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/createSession&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HttpServletRequest </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, HttpServletResponse </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; 创建 session begin  &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 获取当前会话的session，如果session不存在，则创建session</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HttpSession session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;keya&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;valuea&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 设置session的有效期，单位是 ：【秒】</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setMaxInactiveInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // sessionId 是自动生成的可以获取查看</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sessionId = &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id); </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 默认的名称是 JSESSIONID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...... 其他的业务逻辑</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;session 创建成功！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="移除session" tabindex="-1">移除session <a class="header-anchor" href="#移除session" aria-label="Permalink to &quot;移除session&quot;">​</a></h2><blockquote><p><code>session.invalidate();</code> : 销毁一个session<br></p></blockquote><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpServletResponse;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpSession;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestController</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/session&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SessionController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 移除session</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> request</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> response</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/removeSession&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HttpServletRequest </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, HttpServletResponse </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; 移除session begin  &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 获取当前会话的session，如果session不存在，则创建session</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HttpSession session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 移除session</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">invalidate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...... 其他的业务逻辑</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;session 移除成功！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="读取session对象" tabindex="-1">读取session对象 <a class="header-anchor" href="#读取session对象" aria-label="Permalink to &quot;读取session对象&quot;">​</a></h2><blockquote><p><code>session.getAttribute(key);</code> : 获取session中存的数据<br></p></blockquote><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark has-focused-lines vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RequestMapping;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpServletRequest;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpServletResponse;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> javax.servlet.http.HttpSession;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RestController</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/session&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SessionController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 读取session</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> request</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> response</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@return</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/readSession&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HttpServletRequest </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, HttpServletResponse </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; 读取 session begin  &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 获取当前会话的session，如果session不存在，则创建session</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HttpSession session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSession</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 判断session是否是一个新的session</span></span>
<span class="line has-focus"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aNew </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isNew</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当前session是否是一个新的session ： &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">aNew);  </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 查看sessionID</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        String id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;当前session 的 sessionId = &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id);  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 从cookie中获取当前session的sessionID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        Cookie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] cookies </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCookies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Arrays.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookies).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookie </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cookie.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; : &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cookie.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 读取session中的属性</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Object keya </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;keya&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;keya = &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> keya);  </span></span>
<span class="line"></span>
<span class="line has-focus"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 移除session中的属性</span></span>
<span class="line has-focus"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;keya&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...... 其他业务逻辑</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;session 读取成功！&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="cookie和session的区别" tabindex="-1">cookie和session的区别 <a class="header-anchor" href="#cookie和session的区别" aria-label="Permalink to &quot;cookie和session的区别&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1、cookie 存在浏览器端；session 存在服务端；</span></span>
<span class="line"><span>2、由于session是存在服务端的，所以数据安全性方面相对较高；</span></span>
<span class="line"><span>3、session由于是在cookie中只存了一个ID，所以数据传输方面要比在cookie中存数据小。</span></span></code></pre></div><blockquote><p>至此，在 SpringBoot 框架中 对 session 的基本操作就完成了。</p></blockquote>`,26),t=[l];function e(h,k,r,E,o,d){return a(),i("div",null,t)}const y=s(p,[["render",e]]);export{c as __pageData,y as default};
