const e=JSON.parse('{"key":"v-3d590e34","path":"/thread/ali-executors.html","title":"为什么阿里巴巴要禁用Executors创建线程池？","lang":"zh-CN","frontmatter":{"title":"为什么阿里巴巴要禁用Executors创建线程池？","shortTitle":"为什么禁用Executors创建线程池？","description":"为什么阿里巴巴要禁用Executors创建线程池？","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,Executors,线程池"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/ali-executors.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"为什么阿里巴巴要禁用Executors创建线程池？"}],["meta",{"property":"og:description","content":"为什么阿里巴巴要禁用Executors创建线程池？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么阿里巴巴要禁用Executors创建线程池？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"一、线程池的定义","slug":"一、线程池的定义","link":"#一、线程池的定义","children":[]},{"level":3,"title":"二、ThreadPoolExecutor 对象","slug":"二、threadpoolexecutor-对象","link":"#二、threadpoolexecutor-对象","children":[]},{"level":3,"title":"三、总结：","slug":"三、总结","link":"#三、总结","children":[]},{"level":3,"title":"四、如何定义线程池参数","slug":"四、如何定义线程池参数","link":"#四、如何定义线程池参数","children":[]}],"git":{"createdTime":1646012695000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":7.66,"words":2297},"filePathRelative":"thread/ali-executors.md","localizedDate":"2022年2月28日","excerpt":"<h1> 为什么阿里巴巴要禁用Executors创建线程池？</h1>\\n<p>看阿里巴巴开发手册并发编程这块有一条：<strong>线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式</strong>，今天我们来通过源码分析一下禁用的原因。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/ali-executors-1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{e as data};
