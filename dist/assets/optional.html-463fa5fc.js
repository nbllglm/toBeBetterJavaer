const t=JSON.parse('{"key":"v-aa8f9c32","path":"/java8/optional.html","title":"Java 8 Optional最佳指南","lang":"zh-CN","frontmatter":{"title":"Java 8 Optional最佳指南","shortTitle":"Optional最佳指南","category":["Java核心"],"tag":["Java新特性"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，Java 8 Optional最佳指南","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java入门,教程,java8,Optional"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/java8/optional.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"Java 8 Optional最佳指南"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，Java 8 Optional最佳指南"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"Java新特性"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 8 Optional最佳指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"01、没有 Optional 会有什么问题","slug":"_01、没有-optional-会有什么问题","link":"#_01、没有-optional-会有什么问题","children":[]},{"level":2,"title":"02、Optional 是如何解决这个问题的","slug":"_02、optional-是如何解决这个问题的","link":"#_02、optional-是如何解决这个问题的","children":[]},{"level":2,"title":"03、创建 Optional 对象","slug":"_03、创建-optional-对象","link":"#_03、创建-optional-对象","children":[]},{"level":2,"title":"04、判断值是否存在","slug":"_04、判断值是否存在","link":"#_04、判断值是否存在","children":[]},{"level":2,"title":"05、非空表达式","slug":"_05、非空表达式","link":"#_05、非空表达式","children":[]},{"level":2,"title":"06、设置（获取）默认值","slug":"_06、设置-获取-默认值","link":"#_06、设置-获取-默认值","children":[]},{"level":2,"title":"07、获取值","slug":"_07、获取值","link":"#_07、获取值","children":[]},{"level":2,"title":"08、过滤值","slug":"_08、过滤值","link":"#_08、过滤值","children":[]},{"level":2,"title":"09、转换值","slug":"_09、转换值","link":"#_09、转换值","children":[]}],"git":{"createdTime":1647355350000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":9.64,"words":2891},"filePathRelative":"java8/optional.md","localizedDate":"2022年3月15日","excerpt":"<p>想学习，永远都不晚，尤其是针对 Java 8 里面的好东西，Optional 就是其中之一，该类提供了一种用于表示可选值而非空引用的类级别解决方案。作为一名 Java 程序员，我真的是烦透了 NullPointerException（NPE），尽管和它熟得就像一位老朋友，知道它也是迫不得已——程序正在使用一个对象却发现这个对象的值为 null，于是 Java 虚拟机就怒发冲冠地把它抛了出来当做替罪羊。</p>\\n<p>当然了，我们程序员是富有责任心的，不会坐视不管，于是就有了大量的 null 值检查。尽管有时候这种检查完全没有必要，但我们已经习惯了例行公事。终于，Java 8 看不下去了，就引入了 Optional，以便我们编写的代码不再那么刻薄呆板。</p>"}');export{t as data};
