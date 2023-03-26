import{_ as r,W as o,X as i,Y as a,a0 as e,Z as t,a1 as p,C as s}from"./framework-bb7be5cb.js";const l={},c=p('<h1 id="_2-1-java简介" tabindex="-1"><a class="header-anchor" href="#_2-1-java简介" aria-hidden="true">#</a> 2.1 Java简介</h1><p>“二哥，到底什么是 Java？给我说说呗。”</p><p>“三妹啊，这就直奔主题了啊，先去给哥买包烟吧，哥先考验考验你的诚心。”</p><p>（五分钟过后）</p><p>“三妹啊，你怎么还不去？”</p><p>“二哥，掏钱啊。”</p><blockquote><p>真是亲妹啊，买包烟还得我掏钱，关键是还得给跑腿费。十分钟后，三妹从楼下小卖部买了一包熊猫回来了，我用 Zippo 火机点了一支——这火机是 21 岁生日的时候初恋女友送我的，质量确实不错，现在还在用。</p></blockquote><p>“三妹啊，听我慢慢来给你解释。”</p><h3 id="java-的由来" tabindex="-1"><a class="header-anchor" href="#java-的由来" aria-hidden="true">#</a> Java 的由来</h3><p>Java 是一门计算机编程语言，高级、健壮、面向对象，并且非常安全。它由 Sun 公司在 1995 年开发，主力开发叫 James Gosling，被称为 Java 之父，就是下图这位，头秃的厉害。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/one-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“三妹啊，你要不要再考虑考虑？做程序员不容易啊，很容易头秃的！”</p><p>“二哥，你咋没有秃呢？是因为你不够厉害吗？”</p><blockquote><p>这孩子，嘴咋这么损呢？</p></blockquote><p>Java 在叫“Java”之前，其实叫 Oak（橡树的意思，我感觉好像比 Java 好听一些）。怎么想到橡树的呢？James Gosling 坐在办公室，望向窗外，视野里出现了一颗橡树。不过，遗憾的是，Oak 已经被另外一家公司注册了，因此 1995 年 5 月 23 日，Oak 语言改名为 Java。</p><p>Java 这名字并不是 James Gosling 的首选，也不是命名团队的首选。团队其他人员更青睐 Silk（丝绸），但 Gosling 不喜欢，他本人喜欢的是 Lyric（抒情诗），但没通过律师这一关。最后，排在第四位的“Java”脱颖而出。是不是像极了婴儿没生下来之前，家人就着急着起名的那种感觉，这个你觉得不行，那个他觉得不行，最后叫了“狗蛋”（😆）。</p><p>James Gosling 回忆说，“Java”是一个叫 Mark Opperman 的人提议的，他是在一家咖啡店得到灵感的。奇妙的是，“Java”这个单词也是印度尼西亚爪哇岛的英文名，因生产咖啡而闻名，巧不巧？</p>',17),v={href:"https://wxmedit.github.io/zh_CN/",target:"_blank",rel:"noopener noreferrer"},J=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/one-02.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),d=a("p",null,"“二哥，能给我展示一段 Java 代码吗？我想近距离感受一下。”",-1),h=a("p",null,"“三妹啊，马上就来。”",-1),u={href:"https://tobebetterjavaer.com/overview/hello-world.html",target:"_blank",rel:"noopener noreferrer"},g=p(`<p>“好，你看，就这样子。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“二哥，这都什么跟什么啊，看得一头雾水。”</p><p>“三妹啊，先不要着急，Hello World 这段代码以后再慢慢消化，现在就是让它来给你打个招呼。”</p><p>“好吧。”</p><h3 id="java-是编译型语言还是解释型语言" tabindex="-1"><a class="header-anchor" href="#java-是编译型语言还是解释型语言" aria-hidden="true">#</a> Java 是编译型语言还是解释型语言</h3><p>“二哥，你之前给我看了 .class 文件和 .java 源代码，它们之间的关系是什么样的呢？”三妹还是挺喜欢学习的嘛，发现的问题都很关键。</p><p>“不错不错，都能挖掘到这个点了。”</p>`,8),b={href:"https://tobebetterjavaer.com/jvm/what-is-jvm.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tobebetterjavaer.com/jvm/how-run-java-code.html",target:"_blank",rel:"noopener noreferrer"},_=a("p",null,"上面👆🏻这篇文章会详细讲解运行的过程。",-1),f=a("p",null,"“三妹，这里再顺带给你讲一下，Java 是编译型语言还是解释型语言。”",-1),k=a("p",null,"“好啊，我正要问这个‘编译’到底是怎么回事呢？”",-1),j=a("p",null,"Java的第一道工序是通过javac命令把Java源码编译成字节码，之后，我们可以通过java命令运行字节码，此时就有2种处理方式了。",-1),S=a("li",null,"1、字节码由JVM逐条解释执行。",-1),x={href:"https://tobebetterjavaer.com/jvm/jit.html",target:"_blank",rel:"noopener noreferrer"},D=p('<p>也就是说，为了跨平台，Java源代码首先会编译成字节码，字节码不是机器语言，需要JVM来解释。有了JVM这个中间层，Java的运行效率就没有直接把源代码编译为机器码来得效率更高，这个应该能理解吗，多了中间商嘛。所以为了提高效率，JVM引入了 JIT 编译器，把一些经常执行的字节码直接搞成机器码。</p><p>所以，Java是解释和编译并存。但通常来说，我们会说“Java 是编译型语言”，尽管这样并不准确，主要是 JIT 是后面才出现的，“先入为主嘛”。</p><h3 id="java-发展简史" tabindex="-1"><a class="header-anchor" href="#java-发展简史" aria-hidden="true">#</a> Java 发展简史</h3><p>20 世纪 90 年代，单片式计算机系统诞生。单片式计算机系统不仅廉价（之前的计算机非常庞大，并且昂贵），而且功能强大，可以大幅度提升消费性电子产品的智能化程度。</p><p>Sun 公司为了抢占市场先机，在 1991 年成立了一个由詹姆斯·高斯林（James Gosling）领导的，名为“Green”的项目组，目的是开发一种能够在各种消费性电子产品上运行的程序架构。</p><p>项目组首先考虑的是采用 C++ 来编写程序，但 C++ 过于复杂和庞大，再加上消费电子产品所采用的嵌入式处理器芯片的种类繁杂，需要让编写的程序能够跨平台运行并不容易——C++ 在跨平台方面做得并不好。</p><p>思前想后，项目组最后决定：在 C++ 的基础上创建一种新的编程语言，既能够剔除 C++ 复杂的指针和内存管理，还能够兼容各种设备。这语言最初的名字叫做 <strong>Greentalk</strong>，文件扩展名为 <code>.gt</code>。这个名字叫的比较随意，就因为项目组叫 Green，没什么特殊的寓意。</p><p><strong>Oak</strong> 是“Java”的第二个名字，这次就有点意义了。Oak（橡树）是力量的象征，被美国、法国、德国等许多欧美国家选为国树。橡树长下面这样。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/two-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1992 年，Oak 的雏形有了，但项目组在向硬件生产商进行商演的时候，并没有获得认可，于是 Oak 就被搁置一旁了。</p><p>1994 年，项目组发现 Java 更适合进行 Internet 编程。随后，项目组用 Oak 语言研发了一种能将小程序嵌入到网页中执行的技术——Applet。Applet 不仅能嵌入网页，还能够随同网页在网络上进行传输。</p><p>不得不感慨一下，技术的更新迭代是真的快，Applet 拯救了 Oak，并使其蜕变成顶天立地的 Java，但 Applet 很早之前就被无情地拍死在了沙滩上。是不是很残酷？</p><p>1995 年，Oak 被重新命名为“Java”，因为 Oak 被别的公司注册过了。新的名字最好能够表达出技术的本质：dynamic（动态的）、revolutionary（革命性的）、Silk（像丝绸一样柔软的）、Cool（炫酷的）等等。另外，名字一定要容易拼写，念起来也比较有趣。</p><p>选来选去，项目组最后选择了“Java”，中文叫“爪哇”。细心的小伙伴可能会发现，Java 这个单词里有一个敏感词，所以有段时间微信（文章专辑名这块）为了禁敏感词，竟然把 Java 都禁了，我当时就只能用爪哇来代替 Java，手动狗头。</p><p>“Java”是印度尼西亚爪哇岛的英文名，因生产咖啡而闻名，所以，小伙伴也看到了，Java 这个单词经常和一杯冒着热气的咖啡一起出现。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/two-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>同年，Sun 公司在 SunWorld 大会上正式发布了 Java 1.0 版本，第一次提出了“Write Once, Run anywhere”的口号。《时代》杂志将 Java 评为 1995 年十大最佳产品之一。</p><p>1996 年 1 月 23 日，JDK 1.0 发布，Java 语言有了第一个正式版本的运行环境。JDK 1.0 是一个纯解释执行的 Java 虚拟机，代表技术有：Java 虚拟机、AWT（图形化界面）、Applet。</p><p>4 月，十个主要的操作系统和计算机供应商宣称将在产品中嵌入 Java 技术。9 月，已有大约 8.3 万网页应用采用了 Java 来制作。5 月底，第一届 JavaOne 大会在旧金山举行，从此，JavaOne 成为全世界数百万 Java 语言开发者的技术盛会。</p><p>1997 年 2 月 19 日，JDK 1.1 发布，代表技术有：JAR 文件格式、JDBC、JavaBeans、RMI（远程方法调用）。</p><p>1998 年 12 月 4 日，JDK 1.2 发布，这是一个里程碑式的版本。Sun 在这个版本中把 Java 拆分为三个方向：面向桌面开发的 J2SE、面向企业开发的 J2EE，面向移动开发的 J2ME。代表技术有：EJB、Swing。</p><p>2000 年 5 月 8 日，JDK 1.3 发布，对 Java 2D 做了大幅修改。</p><p>2002 年 2 月 13 日，JDK 1.4 发布，这是 Java 真正走向成熟的一个版本，IBM、富士通（二哥曾在这家世界 500 强的日企工作过三年半时间）等著名公司都有参与。代表技术有：正则表达式、NIO。</p><p>2004 年 9 月 30 日，JDK 5 发布，注意 Sun 把“1.x”的命名方式抛弃了。JDK 5 在 Java 语法的易用性上做出了非常大的改进，比如说：自动装箱、泛型、动态注解、枚举、可变参数、foreach 循环。</p><p>2006 年 12 月 11 日，JDK 6 发布，J2SE 变成了 Java SE 6，J2EE 变成了 Java EE 6，J2ME 变成了 Java ME 6。JDK 6 恐怕是 Java 历史上使用寿命最长的一个版本了。主要的原因有：代码复杂性的增加、世界经济危机、Oracle 对 Sun 的收购。</p><p>JDK 6 的最后一个升级补丁为 Java SE 6 Update 211， 于 2018 年 10 月 18 日发布——12 年的跨度啊！</p><p>2009 年 2 月 19 日，JDK 7 发布，但功能是阉割的。很多翘首以盼的功能都没有完成，比如说 Lambda 表达式。主要是因为 Sun 公司在商业上陷入了泥沼，已经无力推动 JDK 7 的研发工作。</p><p>2009 年 4 月 20 日，Oracle 以 74 亿美元的价格收购了市值曾超过 2000 亿美元的 Sun 公司——太阳终究还是落山了。对于 Java 语言这个孩子来说，可以说是好事，也可以说是坏事。好事是 Oracle 有钱，能够注入资金推动 Java 的发展；坏处就是 Oracle 是后爸，对 Java 肯定没有 Sun 那么亲，走的是极具商业化的道路。</p><p>2014 年 3 月 18 日，JDK 8 终于来了，步伐是那么蹒跚，但终究还是来了。带着最强有力的武器——Lambda 表达式而来。虽然 JDK 19 马上就发布了，但“新版任你发，我用 Java 8”的梗至今还流传着。</p><p>2017 年 9 月 21 日，JDK 9 发布。从此以后，JDK 更新版本的速度令开发者应接不暇，半年一个版本，虽然 Oracle 的目的是好的，为了避免因功能增加而引发的跳票风险，但不得不承认，版本更新的节奏实在是有点过于频繁。</p><p>这就导致一个问题，好不容易更新一个版本，用了六个月后，Oracle 不维护了。针对这个问题，Oracle 给出的解决方案挺奇葩的，每六个 JDK 大版本才会被长期支持（Long Term Support，LTS）。</p><p>JDK 8 是 LTS 版，2018 年 9 月 25 日发布的 JDK 11 是 LTS 版， 2018 年 3 月 20 日发布的 JDK 10 就可以一笔带过了。</p><p>2021 年发布的 JDK 17 是目前最新的 LTS 版本。</p><p>JDK 12、JDK 13、JDK 14、JDK 15、JDK 16、JDK 18、JDK 19 都是过渡产品，就好像是试验品一样，不太受开发者待见。</p><p>Java 发展到今天已经 20 多年了，作为一个编程语言确实不简单，Java 代表的面向对象思想确实给工程领域带来了革命性的变化，关键是 Java 一直在拥抱变化。</p><p>大数据方面，有 Apache Kafka、Apache Samza、Apache Storm、Apache Spark、Apache Flink，除了 Spark 是基于 JVM 的函数语言 Scala 编写的，其余都是 Java 编写的。</p><p>Java 在云时代面临着以 Go 语言为主的容器（Docker 等技术）生态圈的挑战，但是，Java 的大型分布式系统越来越多，Java 在云计算与分布式系统中还是扮演着主要角色，并且形成了一个大型的生态圈。</p><p>虽然 Java 和 C++，C 一样，都“老”了，被其他语言不断地挑战，但只有强者才有机会接受挑战，对吧？我相信，Java 的未来依然很光明。</p><h3 id="学-java-有钱途吗" tabindex="-1"><a class="header-anchor" href="#学-java-有钱途吗" aria-hidden="true">#</a> 学 Java 有钱途吗？</h3><p>“二哥，学 Java 到底有没有前途啊？我毕业以后能不能找到工作啊？”</p><p>“三妹啊，就目前来说，Java 不仅仅是一门编程语言，它还是一个由一系列计算机软件和规范组成的技术体系，这个技术体系提供了完整的用于软件开发和跨平台部署的支持环境，并广泛应用于以下这些场合。”</p><ul><li>1）桌面应用程序；</li><li>2）Web 应用程序；</li><li>3）企业应用程序，体现出了 Java 的安全性、负载均衡和集群的优势；</li><li>4）移动端应用程序，主要是安卓；</li><li>5）嵌入式系统；</li><li>6）机器人技术；</li><li>7）游戏。</li></ul><p>时至今日，Java 技术体系已经吸引了 1000 多万软件开发者（随着时间的推移，这数字会越来越大），是全球最大的软件开发团队。Java 能够获得如此广泛的认可，除了它是一门结构严谨、面向对象的编程语言之外，还有很多其他不可忽视的优点：</p><ul><li>摆脱了硬件平台的束缚，实现了“一次编写，处处运行”的理念；</li><li>内存管理相对安全，避免了绝大部分内存泄露和指针越界的问题；</li><li>实现了热点代码检测和运行时编译，使得 Java 应用能随着运行时间的增长而获得更高的性能；</li><li>有一套完善的应用程序接口，还有无数来自商业机构和开源社区的第三方类库。</li></ul><p>这一切的一切，都让软件开发的效率大大的提高。</p><p>下图是号称史上最惨的 2023 届秋招 Java 岗的薪资状况，像 22 届的薪资待遇远比这个好得多，但其实已经比很多其他行业好太多了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/what-is-java-d5e8b87c-741b-49c8-a6d9-7b8bb9ba803b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>24 届及以后的起薪肯定会比这个好得多，这上面大专、普本的案例比较少，是因为网上爆的人比较少，但其实这部分群体也是非常大的，所以，学习 Java 还是很有“<strong>钱秃</strong>”的。</p>',48),w={href:"https://tobebetterjavaer.com/",target:"_blank",rel:"noopener noreferrer"},K=p('<h3 id="java的特性" tabindex="-1"><a class="header-anchor" href="#java的特性" aria-hidden="true">#</a> Java的特性</h3><p>尽管 Java 已经 25 岁了，但仍然“宝刀未老”。在 Stack Overflow 2019 年流行编程语言调查报告中，Java 位居第 5 位，有 41% 的受调开发者认为 Java 仍然是一门受欢迎的编程语言。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/three-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>国内对 Java 的使用率远超国外，所以国内 Java 的市场占有率更大，不管是 2020 年还是 2021、2022、2023 年，短时间内，Java 的霸主地位很难撼动。</p><p>虽然这些年 Java 很卷的话，甚嚣尘上，我只能说这样的声音每年都有，听听就好了。</p><p>很多大型的互联网公司都在使用 Java，国内最有名的当属阿里巴巴，国外最有名的当属谷歌。那为什么 Java 如此流行呢？</p><h4 id="_1-简单性" tabindex="-1"><a class="header-anchor" href="#_1-简单性" aria-hidden="true">#</a> <strong>1）简单性</strong></h4><p>Java 为开发者提供了简单易用的用户体验，与其他面向对象编程语言相比，Java 的设计和生态库具有巨大的优势。Java 剔除了 C++ 中很少使用、难以理解、易混淆的特别，比如说指针运算、操作符重载，内存管理等。</p><p>Java 可以做到堆栈分配、垃圾回收和自动内存管理，在一定程度上为开发者减轻了入门的难度。</p><h4 id="_2-可移植性" tabindex="-1"><a class="header-anchor" href="#_2-可移植性" aria-hidden="true">#</a> <strong>2）可移植性</strong></h4><p>如果 Java 直接编译成操作系统能识的二进制码，可能一个标识在 Windows 操作系统下是1100，而 Linux 下是 1001，这样的话，在 Windows 操作系统下可以运行的程序到了 Linux 环境下就无法运行。</p><p>为了解决这个问题，Java 先编译生成字节码，再由 JVM（Java 虚拟机）来解释执行，目的就是将统一的字节码转成操作系统可以识别的二进制码，然后执行。而针对不同的操作系统，都有相应版本的 JVM，所以 Java 就实现了可移植性。</p><h4 id="_3-安全性" tabindex="-1"><a class="header-anchor" href="#_3-安全性" aria-hidden="true">#</a> <strong>3）安全性</strong></h4><p>Java 适用于网络/分布式环境，为了达到这个目标，在安全方面投入了巨大的精力。使用 Java 可以构建防病毒、防篡改的程序。</p><p>从一开始，Java 就设计了很多可以防范攻击的机制，比如说：</p><ul><li>运行时堆栈溢出，这是蠕虫病毒常用的攻击手段。</li><li>字节码验证，可以确保代码符合 JVM 规范并防止恶意代码破坏运行时环境。</li><li>安全的类加载，可以防止不受信任的代码干扰 Java 程序的运行。</li><li>全面的 API 支持广泛的加密服务，包括数字签名、消息摘要、（对称、非对称）密码、密钥生成器。</li><li>安全通信，支持 HTTPS、SSL，保护传输的数据完整性和隐私性。</li></ul><h4 id="_4-并发性" tabindex="-1"><a class="header-anchor" href="#_4-并发性" aria-hidden="true">#</a> <strong>4）并发性</strong></h4><p>Java 在多线程方面做得非常突出，只要操作系统支持，Java 中的线程就可以利用多个处理器，带来了更好的交互响应和实时行为。</p><h3 id="java-应用领域" tabindex="-1"><a class="header-anchor" href="#java-应用领域" aria-hidden="true">#</a> Java 应用领域</h3><p>“二哥，那 Java 还会继续流行下去吗？”三妹眨了眨她的长睫毛，对我说。</p><p>“当然！这主要得益于 Java 广泛的应用场景。”我斩钉截铁地回答到。</p><h4 id="大数据领域" tabindex="-1"><a class="header-anchor" href="#大数据领域" aria-hidden="true">#</a> <strong>大数据领域：</strong></h4><p>与 Python 一样，Java 在大数据领域占据着主导地位，很多用于处理大规模数据的框架都是基于 Java 开发的。</p><ul><li>Apache Hadoop，用于在分布式环境中处理大规模数据集。Hadoop 采用了主副架构模式，其中主节点负责控制整个分布式计算栈。Hadoop 在需要处理和分析大规模数据的公司当中很流行。</li><li>Apache Spark，大型的 ETL（数据仓库技术）、预测分析和报表程序经常使用到 Spark。</li><li>Apache Mahout，用于机器学习，比如分类、聚类和推荐。</li><li>JFreechart，用于可视化数据，可以用它制作各种图表，比如饼图、柱状图、线图、散点图、盒状图、直方图等等。</li><li>Deeplearning4j，用于构建各种类型的神经网络，可以与 Spark 集成，运行在 GPU（图形处理器）上。</li><li>Apache Storm，用于处理实时数据流，一个 Storm 节点可以在秒级处理数百万个作业。</li></ul><h4 id="物联网-iot-领域" tabindex="-1"><a class="header-anchor" href="#物联网-iot-领域" aria-hidden="true">#</a> <strong>物联网（IoT）领域：</strong></h4><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/three-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Oracle 表示，灵活性和流行度是 IoT 程序员选择 Java 的主要原因。Java 提供了大量的 API 库，可以很容易应用到嵌入式应用程序中。相比其他编程语言，比如 C 语言，Java 在切换平台时更加顺畅，不容易出错。</p><h4 id="金融服务领域" tabindex="-1"><a class="header-anchor" href="#金融服务领域" aria-hidden="true">#</a> <strong>金融服务领域：</strong></h4><ul><li>聊天机器人，由于可移植性、可维护性、可视化等诸多方面的因素，Java 成了开发聊天机器人最好的工具。</li><li>欺诈检测和管理，银行和金融公司使用 AI（人工智能）工具来进行金融欺诈和信用卡欺诈检测，而 Java 常用来开发这些 AI 工具。</li><li>交易系统，Java 虚拟机提供的动态运行时编译优化在很多情况下比编译型语言（如 C++）具有更好的性能，让交易系统运行得更顺畅。</li><li>移动钱包，基于 AI 和 Java 算法开发的移动钱包，可以帮助用户在花钱时做出更智能的决策。</li></ul><h4 id="web-领域" tabindex="-1"><a class="header-anchor" href="#web-领域" aria-hidden="true">#</a> <strong>Web 领域：</strong></h4><p>Java 技术对 Web 领域的发展注入了强大的动力，主流的 Java Web 开发框架有很多：</p><ul><li>Spring 框架，一个轻量级的控制反转（IoC）和面向切面（AOP）的容器框架，渗透了 Java EE 技术的方方面面，绝大部分 Java 应用都可以从 Spring 框架中受益。</li><li>Spring MVC 框架，是一种基于 Java 实现的 MVC（Model-View-Controller）设计模式的请求驱动类型的轻量级 Web 框架。</li><li>MyBatis 框架，一个优秀的数据持久层框架，可在实体类和 SQL 语句之间建立映射关系，是一种半自动化的 ORM（Object Relational Mapping，对象关系映射）实现。</li><li>JavaServer Faces 框架，由 Oracle 开发，能够将表示层与应用程序代码轻松连接，它提供了一个 API 集，用于表示和管理 UI 组件。</li></ul><p>总之，Oracle 宣称，Java 正运行在 97% 的企业计算机上——有点厉害的样子。</p><hr>',34),O=a("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),A={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},E=a("p",null,[e("微信搜 "),a("strong",null,"沉默王二"),e(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"111"),e(" 即可免费领取。")],-1),M=a("figure",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1);function y(C,I){const n=s("ExternalLinkIcon");return o(),i("div",null,[c,a("p",null,[e("使用十六进制编辑器（比如说 "),a("a",v,[e("wxMEdit"),t(n)]),e("）打开由 Java 源代码编译出的二进制文件（.class 文件，后面会详细介绍，先不着急），就可以看得到，最前面的 8 个字符是 CA FE BA BE（定义文件类型的魔数），即词组“CAFE BABE”（咖啡屋宝贝），是不是还挺有意思的？")]),J,d,h,a("blockquote",null,[a("p",null,[e("我噼里啪啦在键盘上一阵狂按，详细见"),a("a",u,[e("https://tobebetterjavaer.com/overview/hello-world.html"),t(n)])])]),g,a("p",null,[e(".java 是源代码，也就是我们开发人员可以看懂的，可以编写的；.class 是字节码文件，是经过 javac 编译后的文件，是交给 "),a("a",b,[e("JVM"),t(n)]),e(" 执行的文件。")]),a("p",null,[a("a",m,[e("JVM到底是如何运行Java代码的？"),t(n)])]),_,f,k,j,a("ul",null,[S,a("li",null,[e("2、部分字节码可能由 "),a("a",x,[e("JIT，即时编译，戳链接了解"),t(n)]),e(" 编译为机器指令直接执行。")])]),D,a("p",null,[e("“噢噢噢噢，那好吧，我先跟着《"),a("a",w,[e("Java程序员进阶之路"),t(n)]),e("》学起来！”")]),K,a("p",null,[e("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),O,e(" 等等等等……详情戳："),a("a",A,[e("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(n)])]),E,M])}const L=r(l,[["render",y],["__file","what-is-java.html.vue"]]);export{L as default};
