import{_ as e,W as p,X as c,Y as n,a0 as s,Z as t,a1 as o,C as l}from"./framework-bb7be5cb.js";const i={},u=o(`<h3 id="path-接口与paths-类" tabindex="-1"><a class="header-anchor" href="#path-接口与paths-类" aria-hidden="true">#</a> Path 接口与Paths 类</h3><p>Path 是 Java NIO.2 中的一个类，用于表示文件系统中的路径。它提供了一种平台无关的方式来操作文件系统中的路径，包括创建、修改、查询和删除文件或目录等操作。</p><h4 id="创建-path-对象" tabindex="-1"><a class="header-anchor" href="#创建-path-对象" aria-hidden="true">#</a> 创建 Path 对象</h4><p>可以使用名为 Paths.get() 创建 Path 实例，get()方法是 Path 实例的工厂方法，一个示例如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用绝对路径创建</span>
<span class="token class-name">Path</span> absolutePath <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/Users/username/test/1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用相对路径创建</span>
<span class="token class-name">Path</span> relativePath <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>absolutePath<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>relativePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Paths 类只有2个方法：</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>static Path get(String first, String... more)</td><td>将路径字符串或在连接时形成路径字符串的字符串序列转换为路径。</td></tr><tr><td>static Path (URI uri)</td><td>将给定URI转换为路径对象。</td></tr></tbody></table><p>Path 接口部分方法：</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>boolean endsWith(Path other)</td><td>测试此路径是否以给定路径结束。</td></tr><tr><td>boolean equals(Object other)</td><td>取决于文件系统的实现。一般不区分大小写，有时区分。 不访问文件系统。</td></tr><tr><td>Path normalize()</td><td>返回一个路径，该路径消除了冗余的名称元素，比如&#39;.&#39;， &#39;..&#39;</td></tr><tr><td>Path toAbsolutePath()</td><td>返回绝对路径。</td></tr><tr><td>File toFile()</td><td>转换为 File 对象。</td></tr><tr><td>String toString()</td><td>返回的路径字符串。</td></tr></tbody></table><blockquote><p>注意，假如路径为 <code>D:\\\\..\\\\..\\\\.\\\\p2\\\\core\\\\cache\\\\binary</code>，normalize 返回 <code>D:\\\\p2\\\\core\\\\cache\\\\binary</code></p></blockquote><h2 id="files-类" tabindex="-1"><a class="header-anchor" href="#files-类" aria-hidden="true">#</a> Files 类</h2><p>NIO 文件类(java.nio.file.Files)为操作文件系统中的文件提供了几种方法，File 类与 java.nio.file.Path 类一起工作，需要了解 Path 类，然后才能使用 Files 类。</p><h3 id="判断文件是否存在" tabindex="-1"><a class="header-anchor" href="#判断文件是否存在" aria-hidden="true">#</a> 判断文件是否存在</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">exists</span><span class="token punctuation">(</span><span class="token class-name">Path</span> path<span class="token punctuation">,</span> <span class="token class-name">LinkOption</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>options 参数用于指示，在文件是符号链接的情况下，如何处理该符号链接，默认是处理符号链接的。其中 LinkOption 对象是一个枚举类，定义如何处理符号链接的选项。整个类只有一个 <code>NOFOLLOW_LINKS;</code> 常量，代表不跟随符号链接。</p><blockquote><p>符号链接（软链接、Symbolic link）是一类特殊的文件， 其包含有一条以绝对路径或者相对路径的形式指向其它文件或者目录的引用。一个符号链接文件仅包含有一个文本字符串，其被操作系统解释为一条指向另一个文件或者目录的路径。它是一个独立文件，其存在并不依赖于目标文件。如果删除一个符号链接，它指向的目标文件不受影响。如果目标文件被移动、重命名或者删除，任何指向它的符号链接仍然存在，但是它们将会指向一个不复存在的文件。这种情况被有时被称为被遗弃。</p></blockquote><h3 id="createdirectory-path-path-创建目录" tabindex="-1"><a class="header-anchor" href="#createdirectory-path-path-创建目录" aria-hidden="true">#</a> createDirectory(Path path) 创建目录</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Path</span> output <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\test\\\\output&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Path</span> newDir <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">createDirectory</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Files.createDirectories(output); </span>
<span class="token comment">// 这个方法可以一并创建不存在的父目录</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>output <span class="token operator">==</span> newDir<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果创建目录成功，则返回指向新创建的路径的 Path 实例，此实例和参数是同一个实例。</p><p>如果该目录已存在，则抛出 FileAlreadyExistsException 。 如果出现其他问题，可能会抛出IOException ，例如，如果所需的新目录的父目录不存在。</p><h3 id="复制文件" tabindex="-1"><a class="header-anchor" href="#复制文件" aria-hidden="true">#</a> 复制文件</h3><p>一共有 3 个复制方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">Path</span> source<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> out<span class="token punctuation">)</span>；
<span class="token keyword">static</span> <span class="token class-name">Path</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">Path</span> source<span class="token punctuation">,</span> <span class="token class-name">Path</span> target<span class="token punctuation">,</span> <span class="token class-name">CopyOption</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> options<span class="token punctuation">)</span>；
<span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">,</span> <span class="token class-name">Path</span> target<span class="token punctuation">,</span> <span class="token class-name">CopyOption</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 CopyOption 选项可以选择指定复制模式，一般是其子枚举类 StandardCopyOption 提供选项，有 3 种模式，第二个参数是可变形参，可以多个组合一起使用：</p><ol><li><code>ATOMIC_MOVE</code> :原子复制，不会被线程调度机制打断的操作；一旦开始，就一直运行到结束;</li><li><code>COPY_ATTRIBUTES</code> ：同时复制属性，默认是不复制属性的;</li><li><code>REPLACE_EXISTING</code> ：重写模式，会覆盖已存在的目的文件;</li></ol><p>一个例子如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Path</span> sourcePath <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\test\\\\source.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 源文件必须先存在</span>
<span class="token class-name">Path</span> desPath <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\test\\\\des.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 目的文件可以不存在</span>
<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>sourcePath<span class="token punctuation">,</span> desPath<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 默认情况，如果目的文件已存在则抛出异常</span>
<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span>sourcePath<span class="token punctuation">,</span> desPath<span class="token punctuation">,</span> <span class="token class-name">StandardCopyOption</span><span class="token punctuation">.</span><span class="token constant">REPLACE_EXISTING</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 覆盖模式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：复制文件夹的时候，只能复制空文件夹，如果文件夹非空，需要递归复制，否则只能得到一个空文件夹，而文件夹里面的文件不会被复制。</p><h3 id="移动文件-文件夹" tabindex="-1"><a class="header-anchor" href="#移动文件-文件夹" aria-hidden="true">#</a> 移动文件/文件夹</h3><p>只有 1 个移动文件或文件夹的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">Path</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token class-name">Path</span> source<span class="token punctuation">,</span> <span class="token class-name">Path</span> target<span class="token punctuation">,</span> <span class="token class-name">CopyOption</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果文件是符号链接，则移动符号链接本身，而不是符号链接指向的实际文件。</p><p>和移动文件一样，也存在第三个可选参数 CopyOption ，参考上述。如果移动文件失败，可能会抛出 IOException，例如，如果文件已存在于目标路径中，并且遗漏了覆盖选项，或者要移动的源文件不存在等。</p><p>和复制文件夹不一样，如果文件夹里面有内容，复制只会复制空文件夹，而移动会把文件夹里面的所有东西一起移动过去，以下是一个移动文件夹的示例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 移动 s 目录到一个不存在的新目录</span>
<span class="token class-name">Path</span> s <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Path</span> d <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\test\\\\test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">createDirectories</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 Linux mv 命令一样，重命名文件与移动文件方式相同，移动文件还可以将文件移动到不同的目录并可以同时更改其名称。 另外 java.io.File 类也可以使用它的 renameTo() 方法来实现移动文件，但现在 java.nio.file.Files 类中也有文件移动功能。</p><h3 id="删除文件-文件夹" tabindex="-1"><a class="header-anchor" href="#删除文件-文件夹" aria-hidden="true">#</a> 删除文件/文件夹</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Path</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">deleteIfExists</span><span class="token punctuation">(</span><span class="token class-name">Path</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果文件被此方法删除则返回 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果文件是目录，则该目录必须为空才能删除。</p><h3 id="files-walkfiletree-静态方法" tabindex="-1"><a class="header-anchor" href="#files-walkfiletree-静态方法" aria-hidden="true">#</a> Files.walkFileTree() 静态方法</h3><p>删除和复制文件夹的时候，如果文件夹为空，那么会删除失败或者只能复制空文件夹，此时可以使用 walkFileTree() 方法进行遍历文件树，然后在 FileVisitor 对象的 visitFile() 方法中执行删除或复制文件操作。</p><p>Files 类有 2 个重载的 walkFileTree() 方法，如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">Path</span> <span class="token function">walkFileTree</span><span class="token punctuation">(</span><span class="token class-name">Path</span> start<span class="token punctuation">,</span>
                                <span class="token class-name">FileVisitor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">Path</span><span class="token punctuation">&gt;</span></span> visitor<span class="token punctuation">)</span>；

<span class="token keyword">static</span> <span class="token class-name">Path</span> <span class="token function">walkFileTree</span><span class="token punctuation">(</span><span class="token class-name">Path</span> start<span class="token punctuation">,</span>
                                <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">FileVisitOption</span><span class="token punctuation">&gt;</span></span> options<span class="token punctuation">,</span>
                                <span class="token keyword">int</span> maxDepth<span class="token punctuation">,</span>
                                <span class="token class-name">FileVisitor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">Path</span><span class="token punctuation">&gt;</span></span> visitor<span class="token punctuation">)</span>；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 Path 实例和 FileVisitor 作为参数，walkfiletree() 方法可以递归遍历目录树。Path 实例指向要遍历的目录。在遍历期间调用 FileVisitor ，首先介绍 FileVisitor 接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">FileVisitor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    
    <span class="token class-name">FileVisitResult</span> <span class="token function">preVisitDirectory</span><span class="token punctuation">(</span><span class="token class-name">T</span> dir<span class="token punctuation">,</span> <span class="token class-name">BasicFileAttributes</span> attrs<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>

    <span class="token class-name">FileVisitResult</span> <span class="token function">visitFile</span><span class="token punctuation">(</span><span class="token class-name">T</span> file<span class="token punctuation">,</span> <span class="token class-name">BasicFileAttributes</span> attrs<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>
    
    <span class="token class-name">FileVisitResult</span> <span class="token function">visitFileFailed</span><span class="token punctuation">(</span><span class="token class-name">T</span> file<span class="token punctuation">,</span> <span class="token class-name">IOException</span> exc<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>
    
    <span class="token class-name">FileVisitResult</span> <span class="token function">postVisitDirectory</span><span class="token punctuation">(</span><span class="token class-name">T</span> dir<span class="token punctuation">,</span> <span class="token class-name">IOException</span> exc<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>必须自己实现 FileVisitor 接口，并将其实现的实例传递给 walkFileTree() 方法。在目录遍历期间，将在不同的时间调用 FileVisitor 实现的 4 个方法，代表对遍历到的文件或目录进行什么操作。如果不需要使用到所有方法，可以扩展 SimpleFileVisitor 类，该类包含 FileVisitor 接口中所有方法的默认实现。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">walkFileTree</span><span class="token punctuation">(</span>inputPath<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">FileVisitor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Path</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 访问文件夹之前调用此方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FileVisitResult</span> <span class="token function">preVisitDirectory</span><span class="token punctuation">(</span><span class="token class-name">Path</span> dir<span class="token punctuation">,</span> <span class="token class-name">BasicFileAttributes</span> attrs<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;pre visit dir:&quot;</span> <span class="token operator">+</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">FileVisitResult</span><span class="token punctuation">.</span><span class="token constant">CONTINUE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 访问的每个文件都会调用此方法，只针对文件，不会对目录执行</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FileVisitResult</span> <span class="token function">visitFile</span><span class="token punctuation">(</span><span class="token class-name">Path</span> file<span class="token punctuation">,</span> <span class="token class-name">BasicFileAttributes</span> attrs<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FileVisitResult</span><span class="token punctuation">.</span><span class="token constant">CONTINUE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 访问文件失败会调用此方法，只针对文件，不会对目录执行</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FileVisitResult</span> <span class="token function">visitFileFailed</span><span class="token punctuation">(</span><span class="token class-name">Path</span> file<span class="token punctuation">,</span> <span class="token class-name">IOException</span> exc<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FileVisitResult</span><span class="token punctuation">.</span><span class="token constant">CONTINUE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 访问文件夹之后会调用此方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FileVisitResult</span> <span class="token function">postVisitDirectory</span><span class="token punctuation">(</span><span class="token class-name">Path</span> dir<span class="token punctuation">,</span> <span class="token class-name">IOException</span> exc<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FileVisitResult</span><span class="token punctuation">.</span><span class="token constant">CONTINUE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这四个方法都返回一个 FileVisitResult 枚举实例。FileVisitResult 枚举包含以下四个选项：</p><ul><li>CONTINUE ： 继续</li><li>TERMINATE ： 终止</li><li>SKIP_SIBLINGS ： 跳过兄弟节点，然后继续</li><li>SKIP_SUBTREE ： 跳过子树（不访问此目录的条目），然后继续，仅在 preVisitDirectory 方法返回时才有意义，除此以外和 CONTINUE 相同。</li></ul><p>通过返回其中一个值，被调用的方法可以决定文件遍历时接下来应该做什么。</p><h3 id="搜索文件" tabindex="-1"><a class="header-anchor" href="#搜索文件" aria-hidden="true">#</a> 搜索文件</h3><p>walkFileTree() 方法还可以用于搜索文件，下面这个例子扩展了 SimpleFileVisitor 来查找一个名为 input.txt 的文件：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Path</span> rootPath <span class="token operator">=</span> <span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> fileToFind <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">.</span>separator <span class="token operator">+</span> <span class="token string">&quot;input.txt&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">walkFileTree</span><span class="token punctuation">(</span>rootPath<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">SimpleFileVisitor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Path</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">FileVisitResult</span> <span class="token function">visitFile</span><span class="token punctuation">(</span><span class="token class-name">Path</span> file<span class="token punctuation">,</span> <span class="token class-name">BasicFileAttributes</span> attrs<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> fileString <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">toAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;pathString: &quot;</span> <span class="token operator">+</span> fileString<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>fileString<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span>fileToFind<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;file found at path: &quot;</span> <span class="token operator">+</span> fileString<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">FileVisitResult</span><span class="token punctuation">.</span><span class="token constant">TERMINATE</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token class-name">FileVisitResult</span><span class="token punctuation">.</span><span class="token constant">CONTINUE</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，删除有内容的目录时，可以重写 visitFile() 方法，并在里面执行删除文件操作，重写 postVisitDirectory() 方法，并在里面执行删除目录操作即可。</p><h3 id="files-类中的其他方法" tabindex="-1"><a class="header-anchor" href="#files-类中的其他方法" aria-hidden="true">#</a> Files 类中的其他方法</h3>`,55),k={href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Files.html",target:"_blank",rel:"noopener noreferrer"},r=n("hr",null,null,-1),d=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),m={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"111"),s(" 即可免费领取。")],-1),h=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function b(g,f){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,n("p",null,[s("Files 类包含许多其他有用的函数，例如用于创建符号链接，确定文件大小，设置文件权限等的函数。有关java.nio.file.Files 类的详细信息，请查看 "),n("a",k,[s("JavaDoc"),t(a)])]),r,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),d,s(" 等等等等……详情戳："),n("a",m,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),t(a)])]),v,h])}const P=e(i,[["render",b],["__file","paths-files.html.vue"]]);export{P as default};
