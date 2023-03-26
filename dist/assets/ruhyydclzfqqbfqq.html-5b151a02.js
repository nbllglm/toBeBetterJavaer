const e=JSON.parse('{"key":"v-315e3504","path":"/nice-article/weixin/ruhyydclzfqqbfqq.html","title":"如何优雅地处理重复请求（并发请求）","lang":"zh-CN","frontmatter":{"title":"如何优雅地处理重复请求（并发请求）","shortTitle":"如何优雅地处理重复请求（并发请求）","description":"实战","category":["微信公众号"],"head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/weixin/ruhyydclzfqqbfqq.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"如何优雅地处理重复请求（并发请求）"}],["meta",{"property":"og:description","content":"实战"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-03T03:27:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-03T03:27:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何优雅地处理重复请求（并发请求）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-01-03T03:27:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"利用唯一请求编号去重","slug":"利用唯一请求编号去重","link":"#利用唯一请求编号去重","children":[]},{"level":2,"title":"业务参数去重","slug":"业务参数去重","link":"#业务参数去重","children":[{"level":3,"title":"计算请求参数的摘要作为参数标识","slug":"计算请求参数的摘要作为参数标识","link":"#计算请求参数的摘要作为参数标识","children":[]},{"level":3,"title":"继续优化，考虑剔除部分时间因子","slug":"继续优化-考虑剔除部分时间因子","link":"#继续优化-考虑剔除部分时间因子","children":[]}]},{"level":2,"title":"请求去重工具类，Java实现","slug":"请求去重工具类-java实现","link":"#请求去重工具类-java实现","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1665919325000,"updatedTime":1672716453000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":5.81,"words":1744},"filePathRelative":"nice-article/weixin/ruhyydclzfqqbfqq.md","localizedDate":"2022年10月16日","excerpt":"<p>对于一些用户请求，在某些情况下是可能重复发送的，如果是查询类操作并无大碍，但其中有些是涉及写入操作的，一旦重复了，可能会导致很严重的后果，例如交易的接口如果重复请求可能会重复下单。</p>\\n<p>重复的场景有可能是：</p>\\n<ol>\\n<li>黑客拦截了请求，重放</li>\\n<li>前端/客户端因为某些原因请求重复发送了，或者用户在很短的时间内重复点击了</li>\\n<li>网关重发</li>\\n<li>….</li>\\n</ol>\\n<p>本文讨论的是如何在服务端优雅地统一处理这种情况，如何禁止用户重复点击等客户端操作不在本文的讨论范畴。</p>\\n<h2> 利用唯一请求编号去重</h2>\\n<p>可能会想到的是，只要请求有唯一的请求编号，那么就能借用Redis做这个去重——只要这个唯一请求编号在redis存在，证明处理过，那么就认为是重复的</p>"}');export{e as data};
