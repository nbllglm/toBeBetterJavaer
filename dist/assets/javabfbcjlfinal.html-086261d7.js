const e=JSON.parse('{"key":"v-4df69189","path":"/nice-article/weixin/javabfbcjlfinal.html","title":"Java并发编程系列4 - final","lang":"zh-CN","frontmatter":{"title":"Java并发编程系列4 - final","shortTitle":"Java并发编程系列4 - final","description":"主要讲解final的内存语义和使用方式。","author":"楼仔","category":["微信公众号"],"head":[["meta",{"name":"description","content":"主要讲解final的内存语义和使用方式。"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/javabfbcjlfinal.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"Java并发编程系列4 - final"}],["meta",{"property":"og:description","content":"主要讲解final的内存语义和使用方式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-07-05T04:05:47.000Z"}],["meta",{"property":"article:author","content":"楼仔"}],["meta",{"property":"article:modified_time","content":"2022-07-05T04:05:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java并发编程系列4 - final\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-07-05T04:05:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"楼仔\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"final 禁止指令重排分析","slug":"final-禁止指令重排分析","link":"#final-禁止指令重排分析","children":[{"level":3,"title":"写 final 域的重排序规则","slug":"写-final-域的重排序规则","link":"#写-final-域的重排序规则","children":[]},{"level":3,"title":"读 final 域的重排序规则","slug":"读-final-域的重排序规则","link":"#读-final-域的重排序规则","children":[]},{"level":3,"title":"如果 final 域是引用类型","slug":"如果-final-域是引用类型","link":"#如果-final-域是引用类型","children":[]},{"level":3,"title":"为什么 final 引用不能从构造函数内“逸出”","slug":"为什么-final-引用不能从构造函数内-逸出","link":"#为什么-final-引用不能从构造函数内-逸出","children":[]}]},{"level":2,"title":"final 关键字有几种用法","slug":"final-关键字有几种用法","link":"#final-关键字有几种用法","children":[{"level":3,"title":"修饰普通变量","slug":"修饰普通变量","link":"#修饰普通变量","children":[]},{"level":3,"title":"修饰成员变量","slug":"修饰成员变量","link":"#修饰成员变量","children":[]},{"level":3,"title":"修饰方法","slug":"修饰方法","link":"#修饰方法","children":[]},{"level":3,"title":"修饰类","slug":"修饰类","link":"#修饰类","children":[]}]},{"level":2,"title":"final 和 static","slug":"final-和-static","link":"#final-和-static","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1656993947000,"updatedTime":1656993947000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":11.06,"words":3317},"filePathRelative":"nice-article/weixin/javabfbcjlfinal.md","localizedDate":"2022年7月5日","excerpt":"<figure><img src=\\"https://mmbiz.qpic.cn/mmbiz_png/sXFqMxQoVLHMGBBGMicblbAiaMia4Z9QH8Nrq8FaJQBlOBcKyaTibK0cJEnxHjtLW8snPk1mhOW9wvNibAhgeA9nYJA/640?wx_fmt=png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<blockquote>\\n<p>主要讲解 final 的内存语义和使用方式。</p>\\n</blockquote>\\n<h2> 前言</h2>\\n<p>看这篇文章前，建议先看完《Java 并发编程系列 1-基础知识》，因为相关知识有很强的依赖，这篇文章也是 Java 内存模型 JMM 相关文章的最后一篇。</p>"}');export{e as data};
