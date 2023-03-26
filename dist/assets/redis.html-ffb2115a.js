const e=JSON.parse('{"key":"v-6f6524a3","path":"/sidebar/sanfene/redis.html","title":"面渣逆袭（Redis面试题八股文）必看👍","lang":"zh-CN","frontmatter":{"title":"面渣逆袭（Redis面试题八股文）必看👍","shortTitle":"面渣逆袭-Redis","description":"图文详解 53 道Redis面试高频题，这次吊打面试官，我觉得稳了（手动 dog）","author":"三分恶","category":["面渣逆袭"],"tag":["面渣逆袭"],"head":[["meta",{"name":"keywords","content":"Redis面试题,Redis,八股文,面试题"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/sidebar/sanfene/redis.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"面渣逆袭（Redis面试题八股文）必看👍"}],["meta",{"property":"og:description","content":"图文详解 53 道Redis面试高频题，这次吊打面试官，我觉得稳了（手动 dog）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:author","content":"三分恶"}],["meta",{"property":"article:tag","content":"面渣逆袭"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面渣逆袭（Redis面试题八股文）必看👍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三分恶\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[{"level":3,"title":"1.说说什么是Redis?","slug":"_1-说说什么是redis","link":"#_1-说说什么是redis","children":[]},{"level":3,"title":"2.Redis可以用来干什么？","slug":"_2-redis可以用来干什么","link":"#_2-redis可以用来干什么","children":[]},{"level":3,"title":"3.Redis 有哪些数据结构？","slug":"_3-redis-有哪些数据结构","link":"#_3-redis-有哪些数据结构","children":[]},{"level":3,"title":"4.Redis为什么快呢？","slug":"_4-redis为什么快呢","link":"#_4-redis为什么快呢","children":[]},{"level":3,"title":"5.能说一下I/O多路复用吗？","slug":"_5-能说一下i-o多路复用吗","link":"#_5-能说一下i-o多路复用吗","children":[]},{"level":3,"title":"6. Redis为什么早期选择单线程？","slug":"_6-redis为什么早期选择单线程","link":"#_6-redis为什么早期选择单线程","children":[]},{"level":3,"title":"7.Redis6.0使用多线程是怎么回事?","slug":"_7-redis6-0使用多线程是怎么回事","link":"#_7-redis6-0使用多线程是怎么回事","children":[]}]},{"level":2,"title":"持久化","slug":"持久化","link":"#持久化","children":[{"level":3,"title":"8.Redis持久化⽅式有哪些？有什么区别？","slug":"_8-redis持久化方式有哪些-有什么区别","link":"#_8-redis持久化方式有哪些-有什么区别","children":[]},{"level":3,"title":"9.RDB 和 AOF 各自有什么优缺点？","slug":"_9-rdb-和-aof-各自有什么优缺点","link":"#_9-rdb-和-aof-各自有什么优缺点","children":[]},{"level":3,"title":"10.RDB和AOF如何选择？","slug":"_10-rdb和aof如何选择","link":"#_10-rdb和aof如何选择","children":[]},{"level":3,"title":"11.Redis的数据恢复？","slug":"_11-redis的数据恢复","link":"#_11-redis的数据恢复","children":[]},{"level":3,"title":"12.Redis 4.0 的混合持久化了解吗？","slug":"_12-redis-4-0-的混合持久化了解吗","link":"#_12-redis-4-0-的混合持久化了解吗","children":[]}]},{"level":2,"title":"高可用","slug":"高可用","link":"#高可用","children":[{"level":3,"title":"13.主从复制了解吗？","slug":"_13-主从复制了解吗","link":"#_13-主从复制了解吗","children":[]},{"level":3,"title":"14.Redis主从有几种常见的拓扑结构？","slug":"_14-redis主从有几种常见的拓扑结构","link":"#_14-redis主从有几种常见的拓扑结构","children":[]},{"level":3,"title":"15.Redis的主从复制原理了解吗？","slug":"_15-redis的主从复制原理了解吗","link":"#_15-redis的主从复制原理了解吗","children":[]},{"level":3,"title":"16.说说主从数据同步的方式？","slug":"_16-说说主从数据同步的方式","link":"#_16-说说主从数据同步的方式","children":[]},{"level":3,"title":"17.主从复制存在哪些问题呢？","slug":"_17-主从复制存在哪些问题呢","link":"#_17-主从复制存在哪些问题呢","children":[]},{"level":3,"title":"18.Redis Sentinel（哨兵）了解吗？","slug":"_18-redis-sentinel-哨兵-了解吗","link":"#_18-redis-sentinel-哨兵-了解吗","children":[]},{"level":3,"title":"19.Redis Sentinel（哨兵）实现原理知道吗？","slug":"_19-redis-sentinel-哨兵-实现原理知道吗","link":"#_19-redis-sentinel-哨兵-实现原理知道吗","children":[]},{"level":3,"title":"20.领导者Sentinel节点选举了解吗？","slug":"_20-领导者sentinel节点选举了解吗","link":"#_20-领导者sentinel节点选举了解吗","children":[]},{"level":3,"title":"21.新的主节点是怎样被挑选出来的？","slug":"_21-新的主节点是怎样被挑选出来的","link":"#_21-新的主节点是怎样被挑选出来的","children":[]},{"level":3,"title":"22.Redis 集群了解吗？","slug":"_22-redis-集群了解吗","link":"#_22-redis-集群了解吗","children":[]},{"level":3,"title":"23.集群中数据如何分区？","slug":"_23-集群中数据如何分区","link":"#_23-集群中数据如何分区","children":[]},{"level":3,"title":"24.能说说Redis集群的原理吗？","slug":"_24-能说说redis集群的原理吗","link":"#_24-能说说redis集群的原理吗","children":[]},{"level":3,"title":"25.说说集群的伸缩？","slug":"_25-说说集群的伸缩","link":"#_25-说说集群的伸缩","children":[]}]},{"level":2,"title":"缓存设计","slug":"缓存设计","link":"#缓存设计","children":[{"level":3,"title":"26.什么是缓存击穿、缓存穿透、缓存雪崩？","slug":"_26-什么是缓存击穿、缓存穿透、缓存雪崩","link":"#_26-什么是缓存击穿、缓存穿透、缓存雪崩","children":[]},{"level":3,"title":"27.能说说布隆过滤器吗？","slug":"_27-能说说布隆过滤器吗","link":"#_27-能说说布隆过滤器吗","children":[]},{"level":3,"title":"28.如何保证缓存和数据库数据的⼀致性？","slug":"_28-如何保证缓存和数据库数据的一致性","link":"#_28-如何保证缓存和数据库数据的一致性","children":[]},{"level":3,"title":"29.如何保证本地缓存和分布式缓存的一致？","slug":"_29-如何保证本地缓存和分布式缓存的一致","link":"#_29-如何保证本地缓存和分布式缓存的一致","children":[]},{"level":3,"title":"30.怎么处理热key？","slug":"_30-怎么处理热key","link":"#_30-怎么处理热key","children":[]},{"level":3,"title":"31.缓存预热怎么做呢？","slug":"_31-缓存预热怎么做呢","link":"#_31-缓存预热怎么做呢","children":[]},{"level":3,"title":"32.热点key重建？问题？解决？","slug":"_32-热点key重建-问题-解决","link":"#_32-热点key重建-问题-解决","children":[]},{"level":3,"title":"33.无底洞问题吗？如何解决？","slug":"_33-无底洞问题吗-如何解决","link":"#_33-无底洞问题吗-如何解决","children":[]}]},{"level":2,"title":"Redis运维","slug":"redis运维","link":"#redis运维","children":[{"level":3,"title":"34.Redis报内存不足怎么处理？","slug":"_34-redis报内存不足怎么处理","link":"#_34-redis报内存不足怎么处理","children":[]},{"level":3,"title":"35.Redis的过期数据回收策略有哪些？","slug":"_35-redis的过期数据回收策略有哪些","link":"#_35-redis的过期数据回收策略有哪些","children":[]},{"level":3,"title":"36.Redis有哪些内存溢出控制/内存淘汰策略？","slug":"_36-redis有哪些内存溢出控制-内存淘汰策略","link":"#_36-redis有哪些内存溢出控制-内存淘汰策略","children":[]},{"level":3,"title":"37.Redis阻塞？怎么解决？","slug":"_37-redis阻塞-怎么解决","link":"#_37-redis阻塞-怎么解决","children":[]},{"level":3,"title":"38.大key问题了解吗？","slug":"_38-大key问题了解吗","link":"#_38-大key问题了解吗","children":[]},{"level":3,"title":"39.Redis常见性能问题和解决方案？","slug":"_39-redis常见性能问题和解决方案","link":"#_39-redis常见性能问题和解决方案","children":[]}]},{"level":2,"title":"Redis应用","slug":"redis应用","link":"#redis应用","children":[{"level":3,"title":"40.使用Redis 如何实现异步队列？","slug":"_40-使用redis-如何实现异步队列","link":"#_40-使用redis-如何实现异步队列","children":[]},{"level":3,"title":"41.Redis 如何实现延时队列?","slug":"_41-redis-如何实现延时队列","link":"#_41-redis-如何实现延时队列","children":[]},{"level":3,"title":"42.Redis 支持事务吗？","slug":"_42-redis-支持事务吗","link":"#_42-redis-支持事务吗","children":[]},{"level":3,"title":"43.Redis和Lua脚本的使用了解吗？","slug":"_43-redis和lua脚本的使用了解吗","link":"#_43-redis和lua脚本的使用了解吗","children":[]},{"level":3,"title":"44.Redis的管道了解吗？","slug":"_44-redis的管道了解吗","link":"#_44-redis的管道了解吗","children":[]},{"level":3,"title":"45.Redis实现分布式锁了解吗？","slug":"_45-redis实现分布式锁了解吗","link":"#_45-redis实现分布式锁了解吗","children":[]}]},{"level":2,"title":"底层结构","slug":"底层结构","link":"#底层结构","children":[{"level":3,"title":"46.说说Redis底层数据结构？","slug":"_46-说说redis底层数据结构","link":"#_46-说说redis底层数据结构","children":[]},{"level":3,"title":"47.Redis 的 SDS 和 C 中字符串相比有什么优势？","slug":"_47-redis-的-sds-和-c-中字符串相比有什么优势","link":"#_47-redis-的-sds-和-c-中字符串相比有什么优势","children":[]},{"level":3,"title":"48.字典是如何实现的？Rehash 了解吗？","slug":"_48-字典是如何实现的-rehash-了解吗","link":"#_48-字典是如何实现的-rehash-了解吗","children":[]},{"level":3,"title":"49.跳跃表是如何实现的？原理？","slug":"_49-跳跃表是如何实现的-原理","link":"#_49-跳跃表是如何实现的-原理","children":[]},{"level":3,"title":"50.压缩列表了解吗？","slug":"_50-压缩列表了解吗","link":"#_50-压缩列表了解吗","children":[]},{"level":3,"title":"51.快速列表 quicklist 了解吗？","slug":"_51-快速列表-quicklist-了解吗","link":"#_51-快速列表-quicklist-了解吗","children":[]}]},{"level":2,"title":"其他问题","slug":"其他问题","link":"#其他问题","children":[{"level":3,"title":"52.假如Redis里面有1亿个key，其中有10w个key是以某个固定的已知的前缀开头的，如何将它们全部找出来？","slug":"_52-假如redis里面有1亿个key-其中有10w个key是以某个固定的已知的前缀开头的-如何将它们全部找出来","link":"#_52-假如redis里面有1亿个key-其中有10w个key是以某个固定的已知的前缀开头的-如何将它们全部找出来","children":[]}]}],"git":{"createdTime":1652078956000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":75.63,"words":22690},"filePathRelative":"sidebar/sanfene/redis.md","localizedDate":"2022年5月9日","excerpt":"<blockquote>\\n<p>图文详解 53 道Redis面试高频题，这次吊打面试官，我觉得稳了（手动 dog）。整理：沉默王二，戳<a href=\\"https://mp.weixin.qq.com/s/19u34NXALB1nOlBCE6Eg-Q\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">转载链接</a>，作者：三分恶，戳<a href=\\"https://mp.weixin.qq.com/s/iJtNJYgirRugNBnzxkbB4Q\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">原文链接</a>。</p>\\n</blockquote>"}');export{e as data};
