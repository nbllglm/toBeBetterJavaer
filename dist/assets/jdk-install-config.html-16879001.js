import{_ as o,W as r,X as c,Y as e,a0 as a,Z as n,a1 as i,C as d}from"./framework-bb7be5cb.js";const l={},s=i('<h1 id="_2-2-安装jdk" tabindex="-1"><a class="header-anchor" href="#_2-2-安装jdk" aria-hidden="true">#</a> 2.2 安装JDK</h1><p>因为Java程序必须运行在 JVM 之上，所以我们 Java 程序员在学习 Java 之前，要做的第一件事情就是安装JDK。</p><p>什么？</p><p>又是 JVM 又是 JDK 的，能不能讲清楚一点。</p><p>要扯清楚这两者之间的关系，就必须得再扯出另外一个名词 JRE，哈哈哈。</p><p>它们之间的关系可以用这幅图来表示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-6f6fdb4a-7a44-4e76-b4ea-71c070a5b220.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>真的是人生无常，大肠包小肠啊。</p><h3 id="jvm、jre、jdk-有什么关系" tabindex="-1"><a class="header-anchor" href="#jvm、jre、jdk-有什么关系" aria-hidden="true">#</a> JVM、JRE、JDK 有什么关系</h3><p>JDK（Java Development Kit）是用于开发 Java 应用程序的软件环境。里面包含运行时环境（JRE）和其他 Java 开发所需的工具，比如说解释器（java）、编译器（javac）、文档生成器（javadoc）等等。</p><p>JRE（Java Runtime Environment）是用于运行 Java 应用程序的软件环境。也就是说，如果只想运行 Java 程序而不需要开发 Java 程序的话，只需要安装 JRE 就可以了。</p><p>JVM (Java Virtual Machine) ，也就是 Java 虚拟机，由一套字节码指令集、一组寄存器、一个栈、一个垃圾回收堆和一个存储方法域等组成，屏蔽了不同操作系统（macOS、Windows、Linux）的差异性，使得Java能够“一次编译，到处运行”。</p><p>比如说我用 macOS 生成了一个 jar 包（里面是打包好的字节码——可以在Java虚拟机上运行的目标代码），可以丢给 Windows 用户直接运行，也可以直接上传到 Linux 服务器运行。</p><p>这是 Oracle 官方给出的 JDK、JRE、JVM 关系图。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-cbc87f87-6351-4356-936b-77850cc682d5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那针对不同的操作系统，官方也提供了不同的 JDK 安装包。如果你用谷歌去搜“JDK”关键字，能搜到官方的下载链接。</p>',16),g={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},p=i('<p>如果你用百度去搜，嗯。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-31e739ff-b69f-47b6-9db4-8843cd8a716a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>总之，是把官方给吃了。</p><p>好，如果你想安装 JDK ，到官方下载。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-e5b91a70-2a23-4ebd-896a-5ff19f0075b1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最新版是 JDK 18（短期版本），上一个长期支持版本是 JDK 17，推荐安装 JDK 8，哈哈哈哈，它升任它升，我用 Java 8。往下翻就能找到了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-a32db267-febe-4852-b528-deaacb43247d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下载完双击安装，然后配置环境变量就OK 了。</p><p>先说 Windows 用户，在电脑桌面 右键点击 “此电脑”的“属性”选项</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-a0a78e05-886f-425a-8ba9-d27314f7a21c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择“高级系统设置”选项</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-fdc94ada-ae44-4a93-ba0d-92860119ad9c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击下面的“环境变量”选项</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-919eb8f0-9869-450c-a6cb-50318dd3e2e5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击“系统变量”下面的”新建“选项</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-a4c05c3e-f305-4d6a-96d2-fe345e980c3b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在”变量名“处填上”Java_Home“，”变量值“为JDK安装路径，比如说”D:\\Program Files\\Java\\jdk1.8.0_91“</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-26be5706-036d-4fae-99fa-d5f14b7380d4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',18),b={href:"https://www.cnblogs.com/cnwutianhao/p/5487758.html",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"macOS 用户直接往后翻。",-1),f=e("p",null,"上面这种下载 JDK 安装配置的方式没啥技术含量，所以下面我给大家推荐两种高级的：",-1),m=e("h3",{id:"windows-用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-用户","aria-hidden":"true"},"#"),a(" Windows 用户")],-1),u=e("p",null,"Windows 用户建议先安装 Chocolatey，这是一个Windows下的命令行软件管理器，可以方便开发者像在Linux下使用yum命令来安装软件，或者像在macOS下使用brew 命令来安装软件，非常酷炫。",-1),h={href:"https://tobebetterjavaer.com/gongju/choco.html",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,[a("安装完成后，直接执行 "),e("code",null,"choco install jdk8"),a(" 就可以安装 JDK 8 了，并且会自动将Java加入到环境变量中，不用再去「我的电脑」「环境变量」中新建 JAVA_HOME 并复制 JDK 安装路径配置 PATH 变量了")],-1),_=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/choco-80a6ced8-c25d-4371-8096-b95be48af768",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),J=e("h3",{id:"macos-用户",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#macos-用户","aria-hidden":"true"},"#"),a(" macOS 用户")],-1),x=e("p",null,"macOS 用户建议先安装 Homebrew，这是一个 macOS 下的命令行软件管理器，可以通过一行命令安装 Apple（或 Linux 系统）没有预装但你需要的软件。",-1),w={href:"https://tobebetterjavaer.com/gongju/brew.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>安装完成后，直接执行 <code>brew install openjdk@8</code> 就可以安装 JDK 8 了。</p><p>如果需要在 macOS 安装多个版本的 JDK ，比如说 JDK 17，多个版本的 JDK 怎么管理呢？可以安装一下 jEnv，一个帮助我们管理 JAVA_HOME 的命令行工具，在 GitHub 上已经收获 4.3k 的 star。</p><p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install jenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;export PATH=&quot;$HOME/.jenv/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc
echo &#39;eval &quot;$(jenv init -)&quot;&#39; &gt;&gt; ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jenv add /usr/local/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-b126c35d-edab-48a9-9543-831cfd0a51c6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>JDK 的安装路径可以通过下图的位置查找。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-a32accec-4044-480c-a8c8-3781bc5048b5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>管理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jenv versions
jenv global 17.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-cc01fad8-53e9-4474-8923-08e97ac7090a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>是不是贼方便？再也不用整这 <code>echo &#39;export PATH=&quot;/usr/local/opt/openjdk@17/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</code> 玩意了！爽，实在是爽！</p><hr>`,16),D=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),K={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,[a("关注二哥的原创公众号 "),e("strong",null,"沉默王二"),a("，回复"),e("strong",null,"111"),a(" 即可免费领取。")],-1),z=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function E(O,H){const t=d("ExternalLinkIcon");return r(),c("div",null,[s,e("blockquote",null,[e("p",null,[e("a",g,[a("https://www.oracle.com/java/technologies/downloads/"),n(t)])])]),p,e("p",null,[a("参考链接："),e("a",b,[a("https://www.cnblogs.com/cnwutianhao/p/5487758.html"),n(t)])]),v,f,m,u,e("p",null,[e("a",h,[a("Chocolatey：Windows的命令行软件管理神器"),n(t)])]),j,_,J,x,e("p",null,[e("a",w,[a("Homebrew：macOS的命令行软件管理神器"),n(t)])]),k,e("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),D,a(" 等等等等……详情戳："),e("a",K,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),n(t)])]),y,z])}const S=o(l,[["render",E],["__file","jdk-install-config.html.vue"]]);export{S as default};
