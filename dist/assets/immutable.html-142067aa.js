import{_ as e,W as o,X as c,Y as n,a0 as s,Z as t,a1 as p,C as l}from"./framework-bb7be5cb.js";const i={},u=p(`<h1 id="_4-4-java字符串及不可变性" tabindex="-1"><a class="header-anchor" href="#_4-4-java字符串及不可变性" aria-hidden="true">#</a> 4.4 Java字符串及不可变性</h1><p>我正坐在沙发上津津有味地读刘欣大佬的《码农翻身》——Java 帝国这一章，门铃响了。起身打开门一看，是三妹，她从学校回来了。</p><p>“三妹，你回来的真及时，今天我们打算讲 Java 中的字符串呢。”等三妹换鞋的时候我说。</p><p>“哦，可以呀，哥。听说字符串的细节特别多，什么字符串常量池了、字符串不可变性了、字符串拼接了、字符串长度限制了等等，你最好慢慢讲，否则我可能一时半会消化不了。”三妹的态度显得很诚恳。</p><p>“嗯，我已经想好了，今天就只带你大概认识一下字符串，再说说为什么 String 是不可变的，其他的细节咱们后面再慢慢讲，保证你能及时消化。”</p><p>“好，那就开始吧。”三妹已经准备好坐在了电脑桌的边上。</p><p>我应了一声后走到电脑桌前坐下来，顺手打开 Intellij IDEA，并找到了 String 的源码。</p><h3 id="关于-string-类" tabindex="-1"><a class="header-anchor" href="#关于-string-类" aria-hidden="true">#</a> 关于 String 类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Stable</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span> coder<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> hash<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“第一，String 类是 final 的，意味着它不能被子类继承。”</p><p>“第二，String 类实现了 Serializable 接口，意味着它可以序列化。”</p><p>“第三，String 类实现了 Comparable 接口，意味着最好不要用‘==’来比较两个字符串是否相等，而应该用 <code>compareTo()</code> 方法去比较。”</p><p>“第四，StringBuffer、StringBuilder 和 String 一样，都实现了 CharSequence 接口，所以它们仨属于近亲。由于 String 是不可变的，所以遇到字符串拼接的时候就可以考虑一下 String 的另外两个好兄弟，StringBuffer 和 StringBuilder，它俩是可变的。”</p>`,13),k={href:"https://tobebetterjavaer.com/basic-extra-meal/jdk9-char-byte-string.html",target:"_blank",rel:"noopener noreferrer"},r=p(`<p>“第六，每一个字符串都会有一个 hash 值，这个哈希值在很大概率是不会重复的，因此 String 很适合来作为 HashMap 的键值。”</p><h3 id="为什么string不可变" tabindex="-1"><a class="header-anchor" href="#为什么string不可变" aria-hidden="true">#</a> 为什么String不可变</h3><p>“String 可能是 Java 中使用频率最高的引用类型了，因此 String 类的设计者可以说是用心良苦。”</p><p>比如说 String 的不可变性。</p><ul><li>String 类被 final 关键字修饰，所以它不会有子类，这就意味着没有子类可以重写它的方法，改变它的行为。</li><li>String 类的数据存储在 <code>byte[]</code> 数组中，而这个数组也被 final 关键字修饰了，这就表示 String 对象是没法被修改的，只要初始化一次，值就确定了。</li></ul><p>“哥，为什么要这样设计呢？”三妹有些不解。</p><p>“我先简单来说下，三妹，能懂最好，不能懂后面再细说。”</p><p>第一，可以保证 String 对象的安全性，避免被篡改，毕竟像密码这种隐私信息一般就是用字符串存储的。</p><p>第二，保证哈希值不会频繁变更。毕竟要经常作为哈希表的键值，经常变更的话，哈希表的性能就会很差劲。</p><p>第三，可以实现字符串常量池。</p><p>“由于字符串的不可变性，String 类的一些方法实现最终都返回了新的字符串对象。”等三妹稍微缓了一会后，我继续说到。</p><p>“就拿 <code>substring()</code> 方法来说。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">substring</span><span class="token punctuation">(</span><span class="token keyword">int</span> beginIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>beginIndex <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">StringIndexOutOfBoundsException</span><span class="token punctuation">(</span>beginIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> subLen <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> beginIndex<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>subLen <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">StringIndexOutOfBoundsException</span><span class="token punctuation">(</span>subLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>beginIndex <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">isLatin1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token class-name">StringLatin1</span><span class="token punctuation">.</span><span class="token function">newString</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> beginIndex<span class="token punctuation">,</span> subLen<span class="token punctuation">)</span>
            <span class="token operator">:</span> <span class="token class-name">StringUTF16</span><span class="token punctuation">.</span><span class="token function">newString</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> beginIndex<span class="token punctuation">,</span> subLen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// StringLatin1.newString </span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">newString</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> val<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> index<span class="token punctuation">,</span> index <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token constant">LATIN1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// UTF16.newString</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">newString</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> val<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token constant">COMPACT_STRINGS</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token function">compress</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> index<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>buf <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token constant">LATIN1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> last <span class="token operator">=</span> index <span class="token operator">+</span> len<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOfRange</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> index <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">,</span> last <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">UTF16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>substring()</code> 方法用于截取字符串，不管是 Latin1 字符还是 UTF16 字符，最终返回的都是 new 出来的新字符串对象。</p><p>“还有 <code>concat()</code> 方法。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> olen <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>olen <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">coder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> str<span class="token punctuation">.</span><span class="token function">coder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> val <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> oval <span class="token operator">=</span> str<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> val<span class="token punctuation">.</span>length <span class="token operator">+</span> oval<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>oval<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> val<span class="token punctuation">.</span>length<span class="token punctuation">,</span> oval<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> coder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token class-name">StringUTF16</span><span class="token punctuation">.</span><span class="token function">newBytesFor</span><span class="token punctuation">(</span>len <span class="token operator">+</span> olen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getBytes</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">UTF16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> len<span class="token punctuation">,</span> <span class="token constant">UTF16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token constant">UTF16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>concat()</code> 方法用于拼接字符串，不管编码是否一致，最终也返回的是新的字符串对象。</p><p>“<code>replace()</code> 替换方法其实也一样，三妹，你可以自己一会看一下源码，也是返回新的字符串对象。”</p><p>“这就意味着，不管是截取、拼接，还是替换，都不是在原有的字符串上进行的，而是重新生成了新的字符串对象。也就是说，这些操作执行过后，<strong>原来的字符串对象并没有发生改变</strong>。”</p><p>“三妹，你记住，String 对象一旦被创建后就固定不变了，对 String 对象的任何修改都不会影响到原来的字符串对象，都会生成新的字符串对象。”</p><p>“嗯嗯，记住了，哥。”三妹很乖。</p><p>“那今天就先讲到这吧，后面我们再对每一个细分领域深入地展开一下。你可以找一些资料先预习下，我出去散会心。。。。。”</p><hr>`,23),d=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),v={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"111"),s(" 即可免费领取。")],-1),m=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function g(y,w){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("“第五，Java 9 以前，String 是用 char 型数组实现的，之后改成了 byte 型数组实现，并增加了 coder 来表示编码，可以戳"),n("a",k,[s("这篇了解详情"),t(a)]),s("。这样做的好处是在 Latin1 字符为主的程序里，可以把 String 占用的内存减少一半。当然，天下没有免费的午餐，这个改进在节省内存的同时引入了编码检测的开销。”")]),r,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),d,s(" 等等等等……详情戳："),n("a",v,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(a)])]),b,m])}const h=e(i,[["render",g],["__file","immutable.html.vue"]]);export{h as default};
