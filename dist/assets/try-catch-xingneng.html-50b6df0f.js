import{_ as c,W as p,X as o,Y as n,a0 as a,Z as t,a1 as e,C as i}from"./framework-bb7be5cb.js";const l={},u=e(`<h1 id="_8-5-try-catch会影响性能吗" tabindex="-1"><a class="header-anchor" href="#_8-5-try-catch会影响性能吗" aria-hidden="true">#</a> 8.5 try-catch会影响性能吗？</h1><p>“二哥，你看着这鬼代码，竟然在 for 循环里面搞了个 <code>try-catch</code>，不知道<code>try-catch</code>有性能损耗吗？” 老王煞有其事地指着屏幕里的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">try</span> <span class="token punctuation">{</span>
         dosth
     <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我探过头去看了眼代码，“那 老王你觉得该怎么改？”</p><p>“当然是把 <code>try-catch</code> 提到外面啊！” 老王脑子都不转一下，脱口而出。</p><p>“你是不是傻？且不说性能，这代码的目的明显是让循环内部单次调用出错不影响循环的运行，你移到外面，业务逻辑不就变了吗！”</p><p>老王挠了挠他的地中海，“好像也是啊！”</p><p>“回过头来，catch 整个 for 循环和在循环内部 catch，在不出错的情况下，其实性能差不多。” 我喝一口咖啡不经意地提到，准备在 老王前面秀一下。</p><p>“啥意思？” 老王有点懵地看着我，“<code>try-catch</code>是有性能损耗的，我可是看过网上资料的！”</p><p>果然， 老王上钩了，我二话不说直接打开 idea，一顿操作敲了以下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TryCatchTest</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用 @Benchmark 注解标记一个方法作为基准测试方法</span>
    <span class="token annotation punctuation">@Benchmark</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">tryfor</span><span class="token punctuation">(</span><span class="token class-name">Blackhole</span> blackhole<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 try-catch 语句包装一个 for 循环</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 在循环中调用 Blackhole.consume() 方法</span>
                blackhole<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 捕获异常并打印堆栈跟踪信息</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 用 @Benchmark 注解标记另一个方法作为基准测试方法</span>
    <span class="token annotation punctuation">@Benchmark</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fortry</span><span class="token punctuation">(</span><span class="token class-name">Blackhole</span> blackhole<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用 for 循环包装一个 try-catch 语句</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 在 try 块中调用 Blackhole.consume() 方法</span>
                blackhole<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 捕获异常并打印堆栈跟踪信息</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，请允许我补充一些概念，以便大家能更好的理解这段代码。</p>`,12),r=n("code",null,"@Benchmark",-1),d={href:"https://hezhiqiang8909.gitbook.io/java/docs/javalib/jmh",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"@Benchmark",-1),v=e(`<blockquote><p>第二个：在 JMH 进行基准测试时，为了避免 JIT 编译器优化掉测试代码中的某些操作，我们需要在测试代码中使用一些占位符，以便让编译器认为这些操作是有意义的，不应该被优化掉。<code>Blackhole.consume()</code> 方法就是这样的一个占位符。它用来占用一些 CPU 时间和内存空间，以确保测试结果的准确性和可靠性。</p></blockquote><p>“BB 不如 show code，看到没， 老王，我把 <code>try-catch</code> 从 for 循环里面提出来跟在for循环里面做个对比跑一下，你猜猜两个差多少？”</p><p>“切，肯定 tryfor 性能好，想都不用想，不是的话我倒立洗头！” 老王信誓旦旦道。</p><p>我懒得跟他BB，直接开始了 benchmark，跑的结果如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/studymore/try-catch-xingneng-20230326204136.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到，两者的性能（数字越大越好）其实差不多：551063.024 VS 551525.861。</p><p>在这里，简单普及一下 JMH 的使用指南。</p><blockquote><p>第一步，在 pom.xml 文件中加入依赖。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 引入 JMH 工具包 --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.openjdk.jmh&lt;/groupId&gt;
    &lt;artifactId&gt;jmh-core&lt;/artifactId&gt;
    &lt;version&gt;1.35&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;org.openjdk.jmh&lt;/groupId&gt;
    &lt;artifactId&gt;jmh-generator-annprocess&lt;/artifactId&gt;
    &lt;version&gt;1.35&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第二步，Intellij IDEA 中安装 JMH 插件。</p></blockquote><figure><img src="https://cdn.tobebetterjavaer.com/studymore/try-catch-xingneng-20230326200811.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>第三步，在代码编辑器中点击这个带有时间和运行的图标。然后静静等待结果就可以了，我本机（32G 内存 Intel i7 跑了 16 分钟，贼慢，因为 JMH 比较喜欢追求公平公正😂）</p></blockquote><figure><img src="https://cdn.tobebetterjavaer.com/studymore/try-catch-xingneng-20230326200922.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>老王一看傻了：“说好的性能影响呢？怎么没了？”</p><p>我直接一个javap，让 老王看看，其实两个实现在字节码层面没啥区别：</p><blockquote><p>tryfor 的字节码</p></blockquote><p>异常表记录的是 0 - 20 行，如果这些行里面的代码出现问题，直接跳到 23 行处理。</p><figure><img src="https://cdn.tobebetterjavaer.com/studymore/try-catch-xingneng-20230326202911.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>fortry 的字节码</p></blockquote><p>差别也就是异常表的范围小点，包的是 9-14 行，其它跟 tryfor 都差不多。</p><figure><img src="https://cdn.tobebetterjavaer.com/studymore/try-catch-xingneng-20230326203005.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>所以从字节码层面来看，没抛错两者的执行效率其实没啥差别。</p><p>“那为什么网上流传着<code>try-catch</code>会有性能问题的说法啊？” 老王觉得非常奇怪。</p><p>这个说法确实有，在《Effective Java》这本书里就提到了 <code>try-catch</code> 性能问题：</p><figure><img src="https://cdn.tobebetterjavaer.com/studymore/try-catch-xingneng-20230326203449.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>正所谓听话不能听一半，以前读书时候最怕的就是一知半解，因为完全理解选择题能选对，完全不懂蒙可能蒙对，一知半解必定选到错误的选项！</p><p>《Effective Java》书中说的其实是不要用 <code>try-catch</code> 来代替正常的代码，书中的举例了正常的 for 循环肯定这样实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token class-name">Mountain</span> m <span class="token operator">:</span> range <span class="token punctuation">)</span>
    m<span class="token punctuation">.</span><span class="token function">climb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但有个卧龙偏偏不这样实现，要通过  <code>try-catch</code> 拐着弯来实现循环：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">/* Horrible abuse of exceptions. Don&#39;t ever do this! */</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span> <span class="token boolean">true</span> <span class="token punctuation">)</span>
        range<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">climb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span> <span class="token class-name">ArrayIndexOutOfBoundsException</span> e <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这操作我只能说有点逆天，这两个实现的对比就有性能损耗了。</p><p>我们直接再跑下有<code>try-catch</code> 的代码和没 <code>try-catch</code>的 for 循环区别，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TryCatchTest1</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Benchmark</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fornotry</span><span class="token punctuation">(</span><span class="token class-name">Blackhole</span> blackhole<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            blackhole<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Benchmark</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">tryfor</span><span class="token punctuation">(</span><span class="token class-name">Blackhole</span> blackhole<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                blackhole<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/studymore/try-catch-xingneng-20230326210303.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>+-差不多，直接看前面的分数对比，没有 <code>ry-catch</code> 的性能确实好些，这也和书中说的 <code>try-catch</code> 会影响 JVM 一些特定的优化说法吻合，但是具体没有说影响哪些优化，我猜测可能是指令重排之类的。</p><p>好了，我再总结下有关 <code>try-catch</code> 性能问题说法：</p><ol><li><code>try-catch</code> 相比较没 <code>try-catch</code>，确实有一定的性能影响，但是旨在不推荐我们用 <code>try-catch</code> 来代替正常能不用 <code>try-catch</code> 的实现，而不是不让用 <code>try-catch</code>。</li><li>for循环内用  <code>try-catch</code> 和用 <code>try-catch</code> 包裹整个 for 循环性能差不多，但是其实两者本质上是业务处理方式的不同，跟性能扯不上关系，关键看你的业务流程处理。</li><li>虽然知道<code>try-catch</code>会有性能影响，但是业务上不需要避讳其使用，业务实现优先（只要不是书中举例的那种逆天代码就行），非特殊情况下性能都是其次，有意识地避免大范围的<code>try-catch</code>，只 catch 需要的部分即可（没把握全 catch 也行，代码安全执行第一）。</li></ol><p>“好了， 老王你懂了没？”</p><p>“行啊二哥，BB是一套一套的，走请你喝燕麦拿铁！” 老王一把拉起我，我直接一个挣脱，“少来，我刚喝过咖啡，你那个倒立洗头，赶紧的！”我立马意识到 老王想岔开话题。</p><p>“洗洗洗，我们先喝个咖啡，晚上回去给你洗！”</p>`,41),m={href:"https://mp.weixin.qq.com/s/H870jLz32oEI_HCMVt1m5Q",target:"_blank",rel:"noopener noreferrer"},b=n("hr",null,null,-1),g=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),h={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[a("微信搜 "),n("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"111"),a(" 即可免费领取。")],-1),f=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function _(x,w){const s=i("ExternalLinkIcon");return p(),o("div",null,[u,n("blockquote",null,[n("p",null,[a("第一个："),r,a(" 是一个来自于 JMH（Java Microbenchmark Harness）库的注解，用来标记一个方法作为基准测试方法。JMH 是一个专门用于编写 "),n("a",d,[a("Java 微基准测试"),t(s)]),a("的工具包，包含了一些用于测试 Java 代码性能和微调 JVM 的工具和库。使用 "),k,a(" 注解标记的方法将被 JMH 自动识别为基准测试方法，并在运行时进行基准测试。在基准测试期间，JMH 会运行被标记的方法多次，并测量方法的执行时间、吞吐量、延迟等指标，并生成统计结果。")])]),v,n("blockquote",null,[n("p",null,[a("转载链接："),n("a",m,[a("https://mp.weixin.qq.com/s/H870jLz32oEI_HCMVt1m5Q"),t(s)]),a("，出处：沉默王二，作者：yes，修订和优化：沉默王二")])]),b,n("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),g,a(" 等等等等……详情戳："),n("a",h,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(s)])]),y,f])}const B=c(l,[["render",_],["__file","try-catch-xingneng.html.vue"]]);export{B as default};
