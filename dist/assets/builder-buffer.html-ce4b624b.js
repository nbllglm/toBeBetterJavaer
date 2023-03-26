import{_ as p,W as c,X as o,Y as n,a0 as s,Z as e,a1 as t,C as i}from"./framework-bb7be5cb.js";const l={},u=n("h1",{id:"_4-7-string、stringbuilder、stringbuffer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-7-string、stringbuilder、stringbuffer","aria-hidden":"true"},"#"),s(" 4.7 String、StringBuilder、StringBuffer")],-1),r={href:"https://tobebetterjavaer.com/string/intern.html",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"“好啊，它们之间的关系还真的是挺和谐的。”看着三妹好奇的样子，我感到学技术就应该是这个样子才对。",-1),k={href:"https://tobebetterjavaer.com/string/join.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"+",-1),m=t(`<p>于是 Java 就设计了一个专门用来解决此问题的 StringBuffer 类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">StringBuffer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">StringBuffer</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 其他方法</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),g={href:"https://tobebetterjavaer.com/thread/synchronized-1.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"synchronized",-1),h=t(`<p>于是 Java 就给 StringBuffer “生了个兄弟”，名叫 StringBuilder，说，“孩子，你别管线程安全了，你就在单线程环境下使用，这样效率会高得多，如果要在多线程环境下修改字符串，你到时候可以使用 <code>ThreadLocal</code> 来避免多线程冲突。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">StringBuilder</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractStringBuilder</span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">public</span> <span class="token class-name">StringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Create a copy, don&#39;t share the array</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了类名不同，方法没有加 synchronized，基本上完全一样。</p><p>实际开发中，StringBuilder 的使用频率也是远高于 StringBuffer，甚至可以这么说，StringBuilder 完全取代了 StringBuffer。</p>`,4),y={href:"https://tobebetterjavaer.com/overview/what-is-java.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"+",-1),w=n("code",null,'new String("二哥") + new String("三妹")',-1),S=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;三妹&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个过程是我们看不见的，但这正是 Java 的“智能”之处，它可以在编译的时候偷偷地帮我们做很多优化，这样既可以提高我们的开发效率（<code>+</code> 号写起来比创建 StringBuilder 对象便捷得多），也不会影响 JVM 的执行效率。</p>`,2),_={href:"https://tobebetterjavaer.com/jvm/bytecode.html",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,'new String("二哥") + new String("三妹")',-1),B=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0: new           #2                  // class java/lang/StringBuilder
3: dup
4: invokespecial #3                  // Method java/lang/StringBuilder.&quot;&lt;init&gt;&quot;:()V
7: new           #4                  // class java/lang/String
10: dup
11: ldc           #5                  // String 二哥
13: invokespecial #6                  // Method java/lang/String.&quot;&lt;init&gt;&quot;:(Ljava/lang/String;)V
16: invokevirtual #7                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
19: new           #4                  // class java/lang/String
22: dup
23: ldc           #8                  // String 三妹
25: invokespecial #6                  // Method java/lang/String.&quot;&lt;init&gt;&quot;:(Ljava/lang/String;)V
28: invokevirtual #7                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
31: invokevirtual #9                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
34: areturn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 Java 编译器将字符串拼接操作（<code>+</code>）转换为了 StringBuilder 对象的 append 方法，然后再调用 StringBuilder 对象的 toString 方法返回拼接后的字符串。</p><p>来看一下 StringBuilder 的 toString 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>value 是一个 char 类型的数组：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * The value is used for character storage.
 */</span>
<span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 StringBuilder 对象创建时，会为 value 分配一定的内存空间（初始容量 16），用于存储字符串。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Constructs a string builder with no characters in it and an
 * initial capacity of 16 characters.
 */</span>
<span class="token keyword">public</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),C={href:"https://tobebetterjavaer.com/collection/arraylist.html",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>继续来看 StringBuilder 的 toString 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>value 用于存储 StringBuilder 对象中包含的字符序列。count 是一个 int 类型的变量，表示字符序列的长度。toString() 方法会调用 <code>new String(value, 0, count)</code>，使用 value 数组中从 0 开始的前 count 个元素创建一个新的字符串对象，并将其返回。</p><p>再来看一下 append 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">StringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上是调用了 AbstractStringBuilder 中的 append(String str) 方法。在 AbstractStringBuilder 中，append(String str) 方法会检查当前字符序列中的字符是否够用，如果不够用则会进行扩容，并将指定字符串追加到字符序列的末尾。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Appends the specified string to this character sequence.
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * The characters of the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">String</span></span></span><span class="token punctuation">}</span> argument are appended, in order,
 * increasing the length of this sequence by the length of the argument.
 * If <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">str</span></span><span class="token punctuation">}</span> is <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">null</span></span></span><span class="token punctuation">}</span>, then the four characters <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token string">&quot;null&quot;</span></span></span><span class="token punctuation">}</span>
 * are appended.
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * Let <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> be the length of this character sequence just prior to
 * execution of the <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">append</span></span><span class="token punctuation">}</span> method. Then the character at index
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>k<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> in this character sequence is equal to the character at index
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>k<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> in the argument <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">str</span></span><span class="token punctuation">}</span>, if <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>k<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> is less than
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>; otherwise, it is equal to the character at index
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>k-n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> in the argument <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">str</span></span><span class="token punctuation">}</span>.
 *
 * <span class="token keyword">@param</span>   <span class="token parameter">str</span>   a string.
 * <span class="token keyword">@return</span>  a reference to this object.
 */</span>
<span class="token keyword">public</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">appendNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>count <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    str<span class="token punctuation">.</span><span class="token function">getChars</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">,</span> value<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    count <span class="token operator">+=</span> len<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>append(String str) 方法将指定字符串追加到当前字符序列中。如果指定字符串为 null，则追加字符串 &quot;null&quot;；否则会检查指定字符串的长度，然后根据当前字符序列中的字符数和指定字符串的长度来判断是否需要扩容。</p><p>如果需要扩容，则会调用 ensureCapacityInternal(int minimumCapacity) 方法进行扩容。扩容之后，将指定字符串的字符拷贝到字符序列中。</p><p>来看一下 ensureCapacityInternal 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span><span class="token keyword">int</span> minimumCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// overflow-conscious code</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>minimumCapacity <span class="token operator">-</span> value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token function">expandCapacity</span><span class="token punctuation">(</span>minimumCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">expandCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minimumCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> value<span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> minimumCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        newCapacity <span class="token operator">=</span> minimumCapacity<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minimumCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">OutOfMemoryError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        newCapacity <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    value <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ensureCapacityInternal(int minimumCapacity)</code> 方法用于确保当前字符序列的容量至少等于指定的最小容量 minimumCapacity。如果当前容量小于指定的容量，就会为字符序列分配一个新的内部数组。新容量的计算方式如下：</p><ul><li>如果指定的最小容量大于当前容量，则新容量为两倍的旧容量加上 2；</li><li>如果指定的最小容量小于等于当前容量，则不会进行扩容，直接返回当前对象。</li></ul><p>在进行扩容之前，<code>ensureCapacityInternal(int minimumCapacity)</code> 方法会先检查当前字符序列的容量是否足够，如果不足就会调用 <code>expandCapacity(int minimumCapacity)</code> 方法进行扩容。<code>expandCapacity(int minimumCapacity)</code> 方法首先计算出新容量，然后使用 <code>Arrays.copyOf(char[] original, int newLength)</code> 方法将原字符数组扩容到新容量的大小。</p>`,14),q={href:"https://tobebetterjavaer.com/collection/arraylist.html",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,"“我想，关于 String、StringBuilder、StringBuilder 之间的差别，你都搞清楚了吧？”我问。",-1),A=n("p",null,"“哥，你真棒！区别我是搞清楚了，你后面讲的源码扩容还没消化，我一会去加个餐，再细看一下。”三妹说。",-1),I=n("p",null,"“可以的，实际上，你现在只需要知道 StringBuilder 的用法就可以了。”喝了一口右手边的可口可乐（无糖）后，我感觉好爽快啊。",-1),M=n("hr",null,null,-1),V=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),z={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},J=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"111"),s(" 即可免费领取。")],-1),N=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function E(T,O){const a=i("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[s("“哥，"),n("a",r,[s("上一篇深入理解 String.intern()"),e(a)]),s(" 讲到了 StringBuilder，这一节我们就来聊聊吧！”三妹很期待。")]),d,n("p",null,[s("由于字符串是不可变的，所以当遇到"),n("a",k,[s("字符串拼接"),e(a)]),s("（尤其是使用"),v,s("号操作符）的时候，就需要考量性能的问题，你不能毫无顾虑地生产太多 String 对象，对珍贵的内存造成不必要的压力。")]),m,n("p",null,[s("不过，由于 StringBuffer 操作字符串的方法加了 "),n("a",g,[b,s(" 关键字"),e(a)]),s("进行了同步，主要是考虑到多线程环境下的安全问题，所以执行效率会比较低。")]),h,n("p",null,[n("a",y,[s("之前我们也曾聊过"),e(a)]),s("，Java 是一门解释型的编程语言，所以当编译器遇到 "),f,s(" 号这个操作符的时候，会将 "),w,s(" 这行代码编译为以下代码：")]),S,n("p",null,[s("当然了，如果我们使用 "),n("a",_,[s("javap"),e(a)]),s(" 反编译 "),j,s(" 的字节码的时候，也是能看出 StringBuilder 的影子的。")]),B,n("p",null,[s("随着字符串的拼接，value 数组的长度会不断增加，因此在 StringBuilder 对象的实现中，value 数组的长度是可以"),n("a",C,[s("动态扩展的，就像ArrayList那样"),e(a)]),s("。")]),x,n("p",null,[s("关于扩容，后面在讲"),n("a",q,[s("ArrayList"),e(a)]),s("的时候会再次说明，今天就先聊到这吧。")]),L,A,I,M,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),V,s(" 等等等等……详情戳："),n("a",z,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),e(a)])]),J,N])}const X=p(l,[["render",E],["__file","builder-buffer.html.vue"]]);export{X as default};
