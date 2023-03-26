import{_ as p,W as o,X as c,Y as n,a0 as s,Z as t,a1 as e,C as l}from"./framework-bb7be5cb.js";const i={},u=n("h1",{id:"_7-8-序列流-序列化和反序列化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-8-序列流-序列化和反序列化","aria-hidden":"true"},"#"),s(" 7.8 序列流(序列化和反序列化)")],-1),r=n("p",null,"Java 的序列流（ObjectInputStream 和 ObjectOutputStream）是一种可以将 Java 对象序列化和反序列化的流。",-1),k=n("code",null,"对象的数据",-1),d=n("code",null,"对象的类型",-1),m=n("code",null,"对象中存储的属性",-1),v={href:"https://tobebetterjavaer.com/io/Serializbale.html",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>反序列化是指将一个字节序列转换为一个对象，以便在程序中使用。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/serialize-20230323105551.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_01、objectoutputstream" tabindex="-1"><a class="header-anchor" href="#_01、objectoutputstream" aria-hidden="true">#</a> 01、ObjectOutputStream</h3><p><code>java.io.ObjectOutputStream</code> 继承自 OutputStream 类，因此可以将序列化后的字节序列写入到文件、网络等输出流中。</p><p>来看 ObjectOutputStream 的构造方法： <code>ObjectOutputStream(OutputStream out)</code></p><p>该构造方法接收一个 OutputStream 对象作为参数，用于将序列化后的字节序列输出到指定的输出流中。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;file.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个对象要想序列化，必须满足两个条件:</p>`,8),g={href:"https://tobebetterjavaer.com/io/Serializbale.html",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"java.io.Serializable",-1),h=n("code",null,"NotSerializableException",-1),w={href:"https://tobebetterjavaer.com/io/transient.html",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"transient",-1),j=e(`<p>使用示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">transient</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span> <span class="token comment">// transient瞬态修饰成员,不会被序列化</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，来聊聊 <code>writeObject (Object obj)</code> 方法，该方法是 ObjectOutputStream 类中用于将对象序列化成字节序列并输出到输出流中的方法，可以处理对象之间的引用关系、继承关系、静态字段和 transient 字段。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ObjectOutputStreamDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">FileOutputStream</span> fos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;logs/person.dat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ObjectOutputStream</span> oos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectOutputStream</span><span class="token punctuation">(</span>fos<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oos<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，首先创建了一个 Person 对象，然后使用 FileOutputStream 和 ObjectOutputStream 将 Person 对象序列化并输出到 person.dat 文件中。在 Person 类中，实现了 Serializable 接口，表示该类可以进行对象序列化。</p><h3 id="_02、objectinputstream" tabindex="-1"><a class="header-anchor" href="#_02、objectinputstream" aria-hidden="true">#</a> 02、ObjectInputStream</h3><p>ObjectInputStream 可以读取 ObjectOutputStream 写入的字节流，并将其反序列化为相应的对象（包含<code>对象的数据</code>、<code>对象的类型</code>和<code>对象中存储的属性</code>等信息）。</p><p>说简单点就是，序列化之前是什么样子，反序列化后就是什么样子。</p><p>来看一下构造方法：<code>ObjectInputStream(InputStream in)</code> ： 创建一个指定 InputStream 的 ObjectInputStream。</p><p>其中，ObjectInputStream 的 readObject 方法用来读取指定文件中的对象，示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> filename <span class="token operator">=</span> <span class="token string">&quot;logs/person.dat&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 待反序列化的文件名</span>
<span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">FileInputStream</span> fileIn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">ObjectInputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>fileIn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// 从指定的文件输入流中读取对象并反序列化</span>
     <span class="token class-name">Object</span> obj <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// 将反序列化后的对象强制转换为指定类型</span>
     <span class="token class-name">Person</span> p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
     <span class="token comment">// 打印反序列化后的对象信息</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Deserialized Object: &quot;</span> <span class="token operator">+</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> <span class="token operator">|</span> <span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们首先指定了待反序列化的文件名（前面通过 ObjectOutputStream 序列化后的文件），然后创建了一个 FileInputStream 对象和一个 ObjectInputStream 对象。接着我们调用 ObjectInputStream 的 readObject 方法来读取指定文件中的对象，并将其强制转换为 Person 类型。最后我们打印了反序列化后的对象信息。</p><h3 id="_03、kryo" tabindex="-1"><a class="header-anchor" href="#_03、kryo" aria-hidden="true">#</a> 03、Kryo</h3><p>实际开发中，很少使用 JDK 自带的序列化和反序列化，这是因为：</p>`,14),S=n("li",null,"可移植性差：Java 特有的，无法跨语言进行序列化和反序列化。",-1),f=n("li",null,"性能差：序列化后的字节体积大，增加了传输/保存成本。",-1),O={href:"https://cryin.github.io/blog/secure-development-java-deserialization-vulnerability/",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"Kryo 是一个优秀的 Java 序列化和反序列化库，具有高性能、高效率和易于使用和扩展等特点，有效地解决了 JDK 自带的序列化机制的痛点。",-1),I={href:"https://github.com/EsotericSoftware/kryo",target:"_blank",rel:"noopener noreferrer"},q=e(`<p>使用示例：</p><p>第一步，在 pom.xml 中引入依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 引入 Kryo 序列化工具 --&gt;
&lt;dependency&gt;
     &lt;groupId&gt;com.esotericsoftware&lt;/groupId&gt;
     &lt;artifactId&gt;kryo&lt;/artifactId&gt;
     &lt;version&gt;5.4.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，创建一个 Kryo 对象，并使用 <code>register()</code> 方法将对象进行注册。然后，使用 <code>writeObject()</code> 方法将 Java 对象序列化为二进制流，再使用 <code>readObject()</code> 方法将二进制流反序列化为 Java 对象。最后，输出反序列化后的 Java 对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KryoDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">FileNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Kryo</span> kryo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kryo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kryo<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">KryoParam</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">KryoParam</span> object <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KryoParam</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Output</span> output <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Output</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;logs/kryo.bin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kryo<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>output<span class="token punctuation">,</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>
        output<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Input</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Input</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;logs/kryo.bin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KryoParam</span> object2 <span class="token operator">=</span> kryo<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> <span class="token class-name">KryoParam</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>object2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        input<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">KryoParam</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">KryoParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">KryoParam</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;KryoParam{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_04、小结" tabindex="-1"><a class="header-anchor" href="#_04、小结" aria-hidden="true">#</a> 04、小结</h3><p>本节我们介绍了 Java 的序列化机制，并推荐了一款高性能的 Java 类库 Kryo 来取代 JDK 自带的序列化机制，已经在 Twitter、Groupon、Yahoo 以及多个著名开源项目（如 Hive、Storm）中广泛使用。</p><p>以上，希望能帮助到大家。</p><hr>`,9),K=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),P={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},z=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"111"),s(" 即可免费领取。")],-1),J=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function F(E,N){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[s("序列化是指将一个对象转换为一个字节序列（包含"),k,s("、"),d,s("和"),m,s("等信息），以便在网络上传输或保存到文件中，或者在程序之间传递。在 Java 中，序列化通过实现 java.io.Serializable 接口来实现，只有实现了 "),n("a",v,[s("Serializable 接口"),t(a)]),s("的对象才能被序列化。")]),b,n("ul",null,[n("li",null,[s("该类必须实现"),n("a",g,[y,s(" 接口"),t(a)]),s("，否则会抛出"),h,s(" 。")]),n("li",null,[s("该类的所有字段都必须是可序列化的。如果一个字段不需要序列化，则需要使用"),n("a",w,[_,s(" 关键字"),t(a)]),s("进行修饰。")])]),j,n("ul",null,[S,f,n("li",null,[s("安全问题：攻击者可以通过构造恶意数据来实现远程代码执行，从而对系统造成严重的安全威胁。相关阅读："),n("a",O,[s("Java 反序列化漏洞之殇"),t(a)]),s(" 。")])]),x,n("blockquote",null,[n("p",null,[s("GitHub 地址："),n("a",I,[s("https://github.com/EsotericSoftware/kryo"),t(a)])])]),q,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),K,s(" 等等等等……详情戳："),n("a",P,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(a)])]),z,J])}const V=p(i,[["render",F],["__file","serialize.html.vue"]]);export{V as default};
