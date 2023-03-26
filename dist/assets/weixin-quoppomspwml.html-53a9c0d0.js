const l=JSON.parse('{"key":"v-16ac8eee","path":"/nice-article/weixin-quoppomspwml.html","title":"去 OPPO 面试, 被问麻了。。。","lang":"zh-CN","frontmatter":{"title":"去 OPPO 面试, 被问麻了。。。","shortTitle":"去 OPPO 面试, 被问麻了。。。","author":"捡田螺的小男孩","category":["优质文章"],"description":"前言 大家好，我是鱼皮。 最近有粉丝私信说被oppo的后端面试问麻了,所以今天给大家推荐一篇整理了16道oppo面试真题答案的文章。希望对大家有帮助哈，一起学习，一起进步。 聊聊你印象最深刻的项目，或者做了什么优化。 你项目提到分布式锁，你们是怎么使用分布式锁的? 常见分布式事务解决方案 你们的接口幂等是如何保证的？ 你们的MySQL架构是怎样的？ 常见的索引结构有？哈希表结构属于哪种场景？ 给你ab,ac,abc字段，你是如何加索引的？ 数据库隔离级别是否了解？你们的数据库默认隔离级别是？为什么选它？ RR隔离级别实现原理，它是如何解决不可重复读的？ 你们项目使用了RocketMQ对吧？那你知道如何保证消息不丢失吗？ 事务消息是否了解？场景题：比如下单清空购物车，你是如何设计的？ 如何快速判断一个数是奇数还是偶数，除开对2取余呢。 Spring声明式事务原理？哪些场景事务会失效？ 你们是微服务架构嘛？如果你来设计一个类似淘宝的系统，你怎么划分微服务？ 你们是怎么分库分表的？分布式ID如何生成？ 所有异常的共同祖先是？运行时异常有哪几个？","head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin-quoppomspwml.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"去 OPPO 面试, 被问麻了。。。"}],["meta",{"property":"og:description","content":"前言 大家好，我是鱼皮。 最近有粉丝私信说被oppo的后端面试问麻了,所以今天给大家推荐一篇整理了16道oppo面试真题答案的文章。希望对大家有帮助哈，一起学习，一起进步。 聊聊你印象最深刻的项目，或者做了什么优化。 你项目提到分布式锁，你们是怎么使用分布式锁的? 常见分布式事务解决方案 你们的接口幂等是如何保证的？ 你们的MySQL架构是怎样的？ 常见的索引结构有？哈希表结构属于哪种场景？ 给你ab,ac,abc字段，你是如何加索引的？ 数据库隔离级别是否了解？你们的数据库默认隔离级别是？为什么选它？ RR隔离级别实现原理，它是如何解决不可重复读的？ 你们项目使用了RocketMQ对吧？那你知道如何保证消息不丢失吗？ 事务消息是否了解？场景题：比如下单清空购物车，你是如何设计的？ 如何快速判断一个数是奇数还是偶数，除开对2取余呢。 Spring声明式事务原理？哪些场景事务会失效？ 你们是微服务架构嘛？如果你来设计一个类似淘宝的系统，你怎么划分微服务？ 你们是怎么分库分表的？分布式ID如何生成？ 所有异常的共同祖先是？运行时异常有哪几个？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-10T09:58:21.000Z"}],["meta",{"property":"article:author","content":"捡田螺的小男孩"}],["meta",{"property":"article:modified_time","content":"2022-06-10T09:58:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"去 OPPO 面试, 被问麻了。。。\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-10T09:58:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"捡田螺的小男孩\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1. 聊聊你印象最深刻的项目，或者做了什么优化。","slug":"_1-聊聊你印象最深刻的项目-或者做了什么优化。","link":"#_1-聊聊你印象最深刻的项目-或者做了什么优化。","children":[]},{"level":2,"title":"2. 你项目提到分布式锁，你们是怎么使用分布式锁的?","slug":"_2-你项目提到分布式锁-你们是怎么使用分布式锁的","link":"#_2-你项目提到分布式锁-你们是怎么使用分布式锁的","children":[]},{"level":2,"title":"3. 常见分布式事务解决方案","slug":"_3-常见分布式事务解决方案","link":"#_3-常见分布式事务解决方案","children":[]},{"level":2,"title":"4. 你们的接口幂等是如何保证的？","slug":"_4-你们的接口幂等是如何保证的","link":"#_4-你们的接口幂等是如何保证的","children":[]},{"level":2,"title":"5. 你们的mySQL架构是怎样的？","slug":"_5-你们的mysql架构是怎样的","link":"#_5-你们的mysql架构是怎样的","children":[{"level":3,"title":"5.1 双机主备","slug":"_5-1-双机主备","link":"#_5-1-双机主备","children":[]},{"level":3,"title":"5.2 一主一从","slug":"_5-2-一主一从","link":"#_5-2-一主一从","children":[]},{"level":3,"title":"5.3 一主多从","slug":"_5-3-一主多从","link":"#_5-3-一主多从","children":[]},{"level":3,"title":"5.4 MariaDB同步多主机集群","slug":"_5-4-mariadb同步多主机集群","link":"#_5-4-mariadb同步多主机集群","children":[]},{"level":3,"title":"5.5 数据库中间件","slug":"_5-5-数据库中间件","link":"#_5-5-数据库中间件","children":[]}]},{"level":2,"title":"6. 常见的索引结构有？哈希表结构属于哪种场景？","slug":"_6-常见的索引结构有-哈希表结构属于哪种场景","link":"#_6-常见的索引结构有-哈希表结构属于哪种场景","children":[]},{"level":2,"title":"7.给你ab,ac,abc字段，你是如何加索引的？","slug":"_7-给你ab-ac-abc字段-你是如何加索引的","link":"#_7-给你ab-ac-abc字段-你是如何加索引的","children":[]},{"level":2,"title":"8. 数据库隔离级别是否了解？你们的数据库默认隔离级别是？为什么选它？","slug":"_8-数据库隔离级别是否了解-你们的数据库默认隔离级别是-为什么选它","link":"#_8-数据库隔离级别是否了解-你们的数据库默认隔离级别是-为什么选它","children":[{"level":3,"title":"8.1 为什么MySQL的默认隔离离别是RR?","slug":"_8-1-为什么mysql的默认隔离离别是rr","link":"#_8-1-为什么mysql的默认隔离离别是rr","children":[]},{"level":3,"title":"我们的数据库隔离级别最后选的是读已提交（RC）。","slug":"我们的数据库隔离级别最后选的是读已提交-rc-。","link":"#我们的数据库隔离级别最后选的是读已提交-rc-。","children":[]}]},{"level":2,"title":"9. RR隔离级别实现原理，它是如何解决不可重复读的？","slug":"_9-rr隔离级别实现原理-它是如何解决不可重复读的","link":"#_9-rr隔离级别实现原理-它是如何解决不可重复读的","children":[{"level":3,"title":"9.1 什么是不可重复读","slug":"_9-1-什么是不可重复读","link":"#_9-1-什么是不可重复读","children":[]},{"level":3,"title":"9.2 undo log版本链 + Read View可见性规则","slug":"_9-2-undo-log版本链-read-view可见性规则","link":"#_9-2-undo-log版本链-read-view可见性规则","children":[]},{"level":3,"title":"9.3 RR 如何解决不可重复读","slug":"_9-3-rr-如何解决不可重复读","link":"#_9-3-rr-如何解决不可重复读","children":[]}]},{"level":2,"title":"10. 你们项目使用了RocketMQ对吧？那你知道如何保证消息不丢失吗？","slug":"_10-你们项目使用了rocketmq对吧-那你知道如何保证消息不丢失吗","link":"#_10-你们项目使用了rocketmq对吧-那你知道如何保证消息不丢失吗","children":[{"level":3,"title":"10.1 生产者保证不丢消息","slug":"_10-1-生产者保证不丢消息","link":"#_10-1-生产者保证不丢消息","children":[]},{"level":3,"title":"10.2 存储端不丢消息","slug":"_10-2-存储端不丢消息","link":"#_10-2-存储端不丢消息","children":[]},{"level":3,"title":"10.3 消费阶段不丢消息","slug":"_10-3-消费阶段不丢消息","link":"#_10-3-消费阶段不丢消息","children":[]}]},{"level":2,"title":"11. 事务消息是否了解？场景题：比如下单清空购物车，你是如何设计的？","slug":"_11-事务消息是否了解-场景题-比如下单清空购物车-你是如何设计的","link":"#_11-事务消息是否了解-场景题-比如下单清空购物车-你是如何设计的","children":[]},{"level":2,"title":"12. 如何快速判断一个数是奇数还是偶数，除开对2取余呢。","slug":"_12-如何快速判断一个数是奇数还是偶数-除开对2取余呢。","link":"#_12-如何快速判断一个数是奇数还是偶数-除开对2取余呢。","children":[]},{"level":2,"title":"13. Spring声明式事务原理？哪些场景事务会失效？","slug":"_13-spring声明式事务原理-哪些场景事务会失效","link":"#_13-spring声明式事务原理-哪些场景事务会失效","children":[{"level":3,"title":"13.1 声明式事务原理","slug":"_13-1-声明式事务原理","link":"#_13-1-声明式事务原理","children":[]},{"level":3,"title":"13.2 spring声明式事务哪些场景会失效","slug":"_13-2-spring声明式事务哪些场景会失效","link":"#_13-2-spring声明式事务哪些场景会失效","children":[]}]},{"level":2,"title":"14. 你们是微服务架构嘛？如果你来设计一个类似淘宝的系统，你怎么划分微服务？","slug":"_14-你们是微服务架构嘛-如果你来设计一个类似淘宝的系统-你怎么划分微服务","link":"#_14-你们是微服务架构嘛-如果你来设计一个类似淘宝的系统-你怎么划分微服务","children":[]},{"level":2,"title":"15. 你们是怎么分库分表的？分布式ID如何生成？","slug":"_15-你们是怎么分库分表的-分布式id如何生成","link":"#_15-你们是怎么分库分表的-分布式id如何生成","children":[]},{"level":2,"title":"16. 所有异常的共同的祖先是？运行时异常有哪几个？","slug":"_16-所有异常的共同的祖先是-运行时异常有哪几个","link":"#_16-所有异常的共同的祖先是-运行时异常有哪几个","children":[]}],"git":{"createdTime":1654855101000,"updatedTime":1654855101000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":26.72,"words":8017},"filePathRelative":"nice-article/weixin-quoppomspwml.md","localizedDate":"2022年6月10日","excerpt":"<h2> 前言</h2>\\n<p>大家好，我是<strong>鱼皮。</strong></p>\\n<p>最近有粉丝私信说被oppo的后端面试问麻了,所以今天给大家推荐一篇整理了16道oppo面试真题答案的文章。希望对大家有帮助哈，一起学习，一起进步。</p>\\n<ol>\\n<li>聊聊你印象最深刻的项目，或者做了什么优化。</li>\\n<li>你项目提到分布式锁，你们是怎么使用分布式锁的?</li>\\n<li>常见分布式事务解决方案</li>\\n<li>你们的接口幂等是如何保证的？</li>\\n<li>你们的MySQL架构是怎样的？</li>\\n<li>常见的索引结构有？哈希表结构属于哪种场景？</li>\\n<li>给你ab,ac,abc字段，你是如何加索引的？</li>\\n<li>数据库隔离级别是否了解？你们的数据库默认隔离级别是？为什么选它？</li>\\n<li>RR隔离级别实现原理，它是如何解决不可重复读的？</li>\\n<li>你们项目使用了RocketMQ对吧？那你知道如何保证消息不丢失吗？</li>\\n<li>事务消息是否了解？场景题：比如下单清空购物车，你是如何设计的？</li>\\n<li>如何快速判断一个数是奇数还是偶数，除开对2取余呢。</li>\\n<li>Spring声明式事务原理？哪些场景事务会失效？</li>\\n<li>你们是微服务架构嘛？如果你来设计一个类似淘宝的系统，你怎么划分微服务？</li>\\n<li>你们是怎么分库分表的？分布式ID如何生成？</li>\\n<li>所有异常的共同祖先是？运行时异常有哪几个？</li>\\n</ol>","autoDesc":true}');export{l as data};
