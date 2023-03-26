const t=JSON.parse('{"key":"v-80e01c30","path":"/thread/shengchanzhe-xiaofeizhe.html","title":"从根上理解生产者-消费者模式","lang":"zh-CN","frontmatter":{"title":"从根上理解生产者-消费者模式","shortTitle":"从根上理解生产者-消费者模式","description":"从根上理解生产者-消费者模式","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,生产者-消费者"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/shengchanzhe-xiaofeizhe.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"从根上理解生产者-消费者模式"}],["meta",{"property":"og:description","content":"从根上理解生产者-消费者模式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从根上理解生产者-消费者模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"wait/notify的消息通知机制","slug":"wait-notify的消息通知机制","link":"#wait-notify的消息通知机制","children":[{"level":3,"title":"预备知识","slug":"预备知识","link":"#预备知识","children":[]},{"level":3,"title":"wait/notify消息通知潜在的一些问题","slug":"wait-notify消息通知潜在的一些问题","link":"#wait-notify消息通知潜在的一些问题","children":[]},{"level":3,"title":"wait/notifyAll实现生产者-消费者","slug":"wait-notifyall实现生产者-消费者","link":"#wait-notifyall实现生产者-消费者","children":[]}]},{"level":2,"title":"使用Lock中Condition的await/signalAll实现生产者-消费者","slug":"使用lock中condition的await-signalall实现生产者-消费者","link":"#使用lock中condition的await-signalall实现生产者-消费者","children":[{"level":3,"title":"针对wait方法","slug":"针对wait方法","link":"#针对wait方法","children":[]},{"level":3,"title":"针对notify方法","slug":"针对notify方法","link":"#针对notify方法","children":[]}]},{"level":2,"title":"使用BlockingQueue实现生产者-消费者","slug":"使用blockingqueue实现生产者-消费者","link":"#使用blockingqueue实现生产者-消费者","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":7}]},"readingTime":{"minutes":17.88,"words":5365},"filePathRelative":"thread/shengchanzhe-xiaofeizhe.md","localizedDate":"2022年3月23日","excerpt":"<p>生产者-消费者模式是一个十分经典的多线程并发协作的模式，弄懂生产者-消费者问题能够让我们对并发编程的理解加深。所谓生产者-消费者问题，实际上主要是包含了两类线程，一种是生产者线程用于生产数据，另一种是消费者线程用于消费数据，为了解耦生产者和消费者的关系，通常会采用共享的数据区域，就像是一个仓库，生产者生产数据之后直接放置在共享数据区中，并不需要关心消费者的行为；而消费者只需要从共享数据区中去获取数据，就不再需要关心生产者的行为。但是，这个共享数据区域中应该具备这样的线程间并发协作的功能：</p>\\n<ol>\\n<li>如果共享数据区已满的话，阻塞生产者继续生产数据放置入内；</li>\\n<li>如果共享数据区为空的话，阻塞消费者继续消费数据；</li>\\n</ol>"}');export{t as data};
