const t=JSON.parse('{"key":"v-4456fc72","path":"/springboot/quartz.html","title":"Spring Boot 整合Quartz实现编程喵定时发布文章","lang":"zh-CN","frontmatter":{"title":"Spring Boot 整合Quartz实现编程喵定时发布文章","shortTitle":"整合Quartz","category":["Java企业级开发"],"tag":["Spring Boot"],"description":"前言 编程喵🐱实战项目中需要做一个定时发布文章的功能，于是我就很自然地想到了 Quartz，这是一个老而弥坚的开源任务调度框架。 记得我在 14 年开发大宗期货交易平台的时候就用到了它，每天凌晨定时需要统计一波交易数据，生成日报报表，「配合 Cron 表达式」（上一节有讲）用起来非常自洽。","head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/springboot/quartz.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"Spring Boot 整合Quartz实现编程喵定时发布文章"}],["meta",{"property":"og:description","content":"前言 编程喵🐱实战项目中需要做一个定时发布文章的功能，于是我就很自然地想到了 Quartz，这是一个老而弥坚的开源任务调度框架。 记得我在 14 年开发大宗期货交易平台的时候就用到了它，每天凌晨定时需要统计一波交易数据，生成日报报表，「配合 Cron 表达式」（上一节有讲）用起来非常自洽。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-25T05:40:29.000Z"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:modified_time","content":"2023-02-25T05:40:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Boot 整合Quartz实现编程喵定时发布文章\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-25T05:40:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":3,"title":"关于 Quartz","slug":"关于-quartz","link":"#关于-quartz","children":[]},{"level":3,"title":"整合 Quartz","slug":"整合-quartz","link":"#整合-quartz","children":[]},{"level":3,"title":"业务梳理","slug":"业务梳理","link":"#业务梳理","children":[]},{"level":3,"title":"源码路径","slug":"源码路径","link":"#源码路径","children":[]}],"git":{"createdTime":1655092375000,"updatedTime":1677303629000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":7.83,"words":2348},"filePathRelative":"springboot/quartz.md","localizedDate":"2022年6月13日","excerpt":"<h3> 前言</h3>\\n<p>编程喵🐱实战项目中需要做一个定时发布文章的功能，于是我就很自然地想到了 Quartz，这是一个老而弥坚的开源任务调度框架。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/quartz-39e31fbf-5546-4627-9d49-651beeb961c1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>记得我在 14 年开发大宗期货交易平台的时候就用到了它，每天凌晨定时需要统计一波交易数据，生成日报报表，「配合 Cron 表达式」（上一节有讲）用起来非常自洽。</p>","autoDesc":true}');export{t as data};
