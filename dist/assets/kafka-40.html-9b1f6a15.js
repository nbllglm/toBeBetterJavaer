const e=JSON.parse('{"key":"v-de0bbde2","path":"/interview/kafka-40.html","title":"40 道精选 Kafka 面试题👍","lang":"zh-CN","frontmatter":{"title":"40 道精选 Kafka 面试题👍","shortTitle":"40 道精选 Kafka 面试题👍","author":"菜农","category":["求职面试"],"tag":["面试题&八股文"],"description":"Java程序员进阶之路，小白的零基础Java教程，40 道 Kafka 精选面试题👍","head":[["meta",{"name":"keywords","content":"Kafka,面试题,八股文"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/interview/kafka-40.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"40 道精选 Kafka 面试题👍"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，40 道 Kafka 精选面试题👍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:author","content":"菜农"}],["meta",{"property":"article:tag","content":"面试题&八股文"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"40 道精选 Kafka 面试题👍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"菜农\\"}]}"]]},"headers":[{"level":2,"title":"1、Kafka 的设计","slug":"_1、kafka-的设计","link":"#_1、kafka-的设计","children":[]},{"level":2,"title":"2、Kafka 性能高原因","slug":"_2、kafka-性能高原因","link":"#_2、kafka-性能高原因","children":[]},{"level":2,"title":"3、Kafka 文件高效存储设计原理","slug":"_3、kafka-文件高效存储设计原理","link":"#_3、kafka-文件高效存储设计原理","children":[]},{"level":2,"title":"4、Kafka 的优缺点","slug":"_4、kafka-的优缺点","link":"#_4、kafka-的优缺点","children":[]},{"level":2,"title":"5、Kafka 的应用场景","slug":"_5、kafka-的应用场景","link":"#_5、kafka-的应用场景","children":[]},{"level":2,"title":"6、Kafka 中分区的概念","slug":"_6、kafka-中分区的概念","link":"#_6、kafka-中分区的概念","children":[]},{"level":2,"title":"7、Kafka 中分区的原则","slug":"_7、kafka-中分区的原则","link":"#_7、kafka-中分区的原则","children":[]},{"level":2,"title":"8、Kafka 为什么要把消息分区","slug":"_8、kafka-为什么要把消息分区","link":"#_8、kafka-为什么要把消息分区","children":[]},{"level":2,"title":"9、Kafka 中生产者运行流程","slug":"_9、kafka-中生产者运行流程","link":"#_9、kafka-中生产者运行流程","children":[]},{"level":2,"title":"10、Kafka 中的消息封装","slug":"_10、kafka-中的消息封装","link":"#_10、kafka-中的消息封装","children":[]},{"level":2,"title":"11、Kafka 消息的消费模式","slug":"_11、kafka-消息的消费模式","link":"#_11、kafka-消息的消费模式","children":[]},{"level":2,"title":"12、Kafka 如何实现负载均衡与故障转移","slug":"_12、kafka-如何实现负载均衡与故障转移","link":"#_12、kafka-如何实现负载均衡与故障转移","children":[]},{"level":2,"title":"13、Kafka 中 Zookeeper 的作用","slug":"_13、kafka-中-zookeeper-的作用","link":"#_13、kafka-中-zookeeper-的作用","children":[]},{"level":2,"title":"14、Kafka 提供了哪些系统工具","slug":"_14、kafka-提供了哪些系统工具","link":"#_14、kafka-提供了哪些系统工具","children":[]},{"level":2,"title":"15、Kafka 中消费者与消费者组的关系与负载均衡实现","slug":"_15、kafka-中消费者与消费者组的关系与负载均衡实现","link":"#_15、kafka-中消费者与消费者组的关系与负载均衡实现","children":[]},{"level":2,"title":"16、Kafka 中消息偏移的作用","slug":"_16、kafka-中消息偏移的作用","link":"#_16、kafka-中消息偏移的作用","children":[]},{"level":2,"title":"17、 生产过程中何时会发生QueueFullExpection以及如何处理","slug":"_17、-生产过程中何时会发生queuefullexpection以及如何处理","link":"#_17、-生产过程中何时会发生queuefullexpection以及如何处理","children":[]},{"level":2,"title":"18、Consumer 如何消费指定分区消息","slug":"_18、consumer-如何消费指定分区消息","link":"#_18、consumer-如何消费指定分区消息","children":[]},{"level":2,"title":"19、Replica、Leader 和 Follower 三者的概念","slug":"_19、replica、leader-和-follower-三者的概念","link":"#_19、replica、leader-和-follower-三者的概念","children":[]},{"level":2,"title":"20、Replica 的重要性","slug":"_20、replica-的重要性","link":"#_20、replica-的重要性","children":[]},{"level":2,"title":"21、Kafka 中的 Geo-Replication 是什么","slug":"_21、kafka-中的-geo-replication-是什么","link":"#_21、kafka-中的-geo-replication-是什么","children":[]},{"level":2,"title":"22、Kafka 中 AR、ISR、OSR 三者的概念","slug":"_22、kafka-中-ar、isr、osr-三者的概念","link":"#_22、kafka-中-ar、isr、osr-三者的概念","children":[]},{"level":2,"title":"23、分区副本什么情况下会从 ISR 中剔出","slug":"_23、分区副本什么情况下会从-isr-中剔出","link":"#_23、分区副本什么情况下会从-isr-中剔出","children":[]},{"level":2,"title":"24、分区副本中的 Leader 如果宕机但 ISR 却为空该如何处理","slug":"_24、分区副本中的-leader-如果宕机但-isr-却为空该如何处理","link":"#_24、分区副本中的-leader-如果宕机但-isr-却为空该如何处理","children":[]},{"level":2,"title":"25、如何判断一个 Broker 是否还有效","slug":"_25、如何判断一个-broker-是否还有效","link":"#_25、如何判断一个-broker-是否还有效","children":[]},{"level":2,"title":"26、Kafka 可接收的消息最大默认多少字节，如何修改","slug":"_26、kafka-可接收的消息最大默认多少字节-如何修改","link":"#_26、kafka-可接收的消息最大默认多少字节-如何修改","children":[]},{"level":2,"title":"27、Kafka 的 ACK 机制","slug":"_27、kafka-的-ack-机制","link":"#_27、kafka-的-ack-机制","children":[]},{"level":2,"title":"28、Kafka 的 consumer 如何消费数据","slug":"_28、kafka-的-consumer-如何消费数据","link":"#_28、kafka-的-consumer-如何消费数据","children":[]},{"level":2,"title":"29、Kafka 提供的API有哪些","slug":"_29、kafka-提供的api有哪些","link":"#_29、kafka-提供的api有哪些","children":[]},{"level":2,"title":"30、Kafka 的Topic中 Partition 数据是怎么存储到磁盘的","slug":"_30、kafka-的topic中-partition-数据是怎么存储到磁盘的","link":"#_30、kafka-的topic中-partition-数据是怎么存储到磁盘的","children":[]},{"level":2,"title":"31、Kafka 创建Topic后如何将分区放置到不同的 Broker 中","slug":"_31、kafka-创建topic后如何将分区放置到不同的-broker-中","link":"#_31、kafka-创建topic后如何将分区放置到不同的-broker-中","children":[]},{"level":2,"title":"32、Kafka 的日志保留期与数据清理策略","slug":"_32、kafka-的日志保留期与数据清理策略","link":"#_32、kafka-的日志保留期与数据清理策略","children":[]},{"level":2,"title":"33、Kafka 日志存储的Message是什么格式","slug":"_33、kafka-日志存储的message是什么格式","link":"#_33、kafka-日志存储的message是什么格式","children":[]},{"level":2,"title":"34、Kafka 是否支持多租户隔离","slug":"_34、kafka-是否支持多租户隔离","link":"#_34、kafka-是否支持多租户隔离","children":[]},{"level":2,"title":"35、Kafka 的日志分段策略与刷新策略","slug":"_35、kafka-的日志分段策略与刷新策略","link":"#_35、kafka-的日志分段策略与刷新策略","children":[]},{"level":2,"title":"36、Kafka 中如何进行主从同步","slug":"_36、kafka-中如何进行主从同步","link":"#_36、kafka-中如何进行主从同步","children":[]},{"level":2,"title":"37、Kafka 中什么情况下会出现消息丢失/不一致的问题","slug":"_37、kafka-中什么情况下会出现消息丢失-不一致的问题","link":"#_37、kafka-中什么情况下会出现消息丢失-不一致的问题","children":[]},{"level":2,"title":"38、Kafka 作为流处理平台的特点","slug":"_38、kafka-作为流处理平台的特点","link":"#_38、kafka-作为流处理平台的特点","children":[]},{"level":2,"title":"39、消费者故障，出现活锁问题如何解决","slug":"_39、消费者故障-出现活锁问题如何解决","link":"#_39、消费者故障-出现活锁问题如何解决","children":[]},{"level":2,"title":"40、Kafa 中如何保证顺序消费","slug":"_40、kafa-中如何保证顺序消费","link":"#_40、kafa-中如何保证顺序消费","children":[]}],"git":{"createdTime":1669978392000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":25.45,"words":7634},"filePathRelative":"interview/kafka-40.md","localizedDate":"2022年12月2日","excerpt":"<p>今天给球友们分享一篇读者菜农投稿的文章：40 道精选 Kafka 面试题👍，已收录在《Java 面试指南》的《精选面试题篇》中，专栏托管在语雀平台上（更方便你沉浸式阅读和做笔记），访问地址和密码：<a href=\\"https://t.zsxq.com/6iuzn6I\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://t.zsxq.com/6iuzn6I</a></p>\\n<p>发车🚗</p>\\n<p>Kafka最初是由Linkedin公司开发的，是一个分布式的、可扩展的、容错的、支持分区的（Partition）、多副本的（replica）、基于Zookeeper框架的发布-订阅消息系统，Kafka适合离线和在线消息消费。它是分布式应用系统中的重要组件之一，也被广泛应用于大数据处理。Kafka是用Scala语言开发，它的Java版本称为Jafka。Linkedin于2010年将该系统贡献给了Apache基金会并成为顶级开源项目之一。</p>"}');export{e as data};
