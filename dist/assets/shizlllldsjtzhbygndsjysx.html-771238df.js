const e=JSON.parse('{"key":"v-1176bc2e","path":"/nice-article/weixin/shizlllldsjtzhbygndsjysx.html","title":"电商系统中的红包雨如何设计和实现？","lang":"zh-CN","frontmatter":{"title":"电商系统中的红包雨如何设计和实现？","shortTitle":"红包雨如何设计和实现？","description":"红包雨是一个典型的高并发场景，短时间内有海量请求访问服务端。","author":"勇哥","category":["微信公众号"],"head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/shizlllldsjtzhbygndsjysx.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"电商系统中的红包雨如何设计和实现？"}],["meta",{"property":"og:description","content":"红包雨是一个典型的高并发场景，短时间内有海量请求访问服务端。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:author","content":"勇哥"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"电商系统中的红包雨如何设计和实现？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"勇哥\\"}]}"]]},"headers":[{"level":2,"title":"1 整体流程","slug":"_1-整体流程","link":"#_1-整体流程","children":[]},{"level":2,"title":"2 红包 Redis 设计","slug":"_2-红包-redis-设计","link":"#_2-红包-redis-设计","children":[]},{"level":2,"title":"3 事务原理","slug":"_3-事务原理","link":"#_3-事务原理","children":[]},{"level":2,"title":"4 事务的ACID","slug":"_4-事务的acid","link":"#_4-事务的acid","children":[{"level":3,"title":"4.1 原子性","slug":"_4-1-原子性","link":"#_4-1-原子性","children":[]},{"level":3,"title":"4.2 隔离性","slug":"_4-2-隔离性","link":"#_4-2-隔离性","children":[]},{"level":3,"title":"4.3 持久性","slug":"_4-3-持久性","link":"#_4-3-持久性","children":[]},{"level":3,"title":"4.4 一致性","slug":"_4-4-一致性","link":"#_4-4-一致性","children":[]},{"level":3,"title":"4.5 总结","slug":"_4-5-总结","link":"#_4-5-总结","children":[]}]},{"level":2,"title":"5 Lua 脚本","slug":"_5-lua-脚本","link":"#_5-lua-脚本","children":[{"level":3,"title":"5.1 简介","slug":"_5-1-简介","link":"#_5-1-简介","children":[]},{"level":3,"title":"5.2 EVAL 命令","slug":"_5-2-eval-命令","link":"#_5-2-eval-命令","children":[]},{"level":3,"title":"5.3 EVALSHA 命令","slug":"_5-3-evalsha-命令","link":"#_5-3-evalsha-命令","children":[]},{"level":3,"title":"5.4 事务 VS Lua 脚本","slug":"_5-4-事务-vs-lua-脚本","link":"#_5-4-事务-vs-lua-脚本","children":[]}]},{"level":2,"title":"6 实战准备","slug":"_6-实战准备","link":"#_6-实战准备","children":[]},{"level":2,"title":"7 抢红包脚本","slug":"_7-抢红包脚本","link":"#_7-抢红包脚本","children":[]},{"level":2,"title":"8 异步任务","slug":"_8-异步任务","link":"#_8-异步任务","children":[]},{"level":2,"title":"9 写到最后","slug":"_9-写到最后","link":"#_9-写到最后","children":[]}],"git":{"createdTime":1668561545000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":19.26,"words":5777},"filePathRelative":"nice-article/weixin/shizlllldsjtzhbygndsjysx.md","localizedDate":"2022年11月16日","excerpt":"<p>当你加入一家电商公司的话，很有可能会被问到“红包雨🧧如何设计和实现”这个问题，今天就来和球友们聊一聊。</p>\\n<p>所谓的红包雨，就是指在某次活动中，红包会以<strong>雨滴</strong>的形式落下，用户点击屏幕上落下的红包，若抢到红包，红包会以现金的形式进入用户账户。</p>\\n<p>红包雨是一个典型的高并发场景，短时间内有海量请求访问服务端，为了让系统运行顺畅，抢红包一般会采用基于 <strong>Redis + Lua 脚本</strong>的设计方案。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-shizlllldsjtzhbygndsjysx-c1fd7dd9-3974-41e8-a22c-4a4d25f80e73.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{e as data};
