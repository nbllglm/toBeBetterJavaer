const e=JSON.parse('{"key":"v-f8642b66","path":"/thread/thread-group-and-thread-priority.html","title":"线程组是什么？线程优先级如何设置？","lang":"zh-CN","frontmatter":{"title":"线程组是什么？线程优先级如何设置？","shortTitle":"线程组和线程优先级","description":"线程组是什么？线程优先级如何设置？","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,线程组,线程优先级"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/thread-group-and-thread-priority.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"线程组是什么？线程优先级如何设置？"}],["meta",{"property":"og:description","content":"线程组是什么？线程优先级如何设置？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程组是什么？线程优先级如何设置？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"线程组(ThreadGroup)","slug":"线程组-threadgroup","link":"#线程组-threadgroup","children":[]},{"level":2,"title":"线程的优先级","slug":"线程的优先级","link":"#线程的优先级","children":[]},{"level":2,"title":"线程组的常用方法及数据结构","slug":"线程组的常用方法及数据结构","link":"#线程组的常用方法及数据结构","children":[{"level":3,"title":"线程组的常用方法","slug":"线程组的常用方法","link":"#线程组的常用方法","children":[]},{"level":3,"title":"线程组的数据结构","slug":"线程组的数据结构","link":"#线程组的数据结构","children":[]}]}],"git":{"createdTime":1648037338000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":6}]},"readingTime":{"minutes":7.86,"words":2358},"filePathRelative":"thread/thread-group-and-thread-priority.md","localizedDate":"2022年3月23日","excerpt":"<h1> 线程组是什么？线程优先级如何设置？</h1>\\n<h2> 线程组(ThreadGroup)</h2>\\n<p>Java中用ThreadGroup来表示线程组，我们可以使用线程组对线程进行批量控制。</p>\\n<p>ThreadGroup和Thread的关系就如同他们的字面意思一样简单粗暴，每个Thread必然存在于一个ThreadGroup中，Thread不能独立于ThreadGroup存在。执行main()方法线程的名字是main，如果在new Thread时没有显式指定，那么默认将父线程（当前执行new Thread的线程）线程组设置为自己的线程组。</p>\\n<p>示例代码：</p>\\n"}');export{e as data};
