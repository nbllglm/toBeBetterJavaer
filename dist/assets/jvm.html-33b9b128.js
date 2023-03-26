const l=JSON.parse('{"key":"v-35406b06","path":"/sidebar/sanfene/jvm.html","title":"面渣逆袭（Java 虚拟机-JVM面试题八股文）必看👍","lang":"zh-CN","frontmatter":{"title":"面渣逆袭（Java 虚拟机-JVM面试题八股文）必看👍","shortTitle":"面渣逆袭-JVM","category":["面渣逆袭"],"tag":["面渣逆袭"],"description":"图文详解 50 道Java虚拟机高频面试题，这次面试，一定吊打面试官","head":[["meta",{"name":"keywords","content":"Java,Java虚拟机,JVM,Java面试题,JVM面试题,java虚拟机面试题,八股文,java"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/sidebar/sanfene/jvm.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"面渣逆袭（Java 虚拟机-JVM面试题八股文）必看👍"}],["meta",{"property":"og:description","content":"图文详解 50 道Java虚拟机高频面试题，这次面试，一定吊打面试官"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:tag","content":"面渣逆袭"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面渣逆袭（Java 虚拟机-JVM面试题八股文）必看👍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、引言","slug":"一、引言","link":"#一、引言","children":[{"level":3,"title":"1.什么是 JVM?","slug":"_1-什么是-jvm","link":"#_1-什么是-jvm","children":[]}]},{"level":2,"title":"二、内存管理","slug":"二、内存管理","link":"#二、内存管理","children":[{"level":3,"title":"2.能说一下 JVM 的内存区域吗？","slug":"_2-能说一下-jvm-的内存区域吗","link":"#_2-能说一下-jvm-的内存区域吗","children":[]},{"level":3,"title":"3.说一下 JDK1.6、1.7、1.8 内存区域的变化？","slug":"_3-说一下-jdk1-6、1-7、1-8-内存区域的变化","link":"#_3-说一下-jdk1-6、1-7、1-8-内存区域的变化","children":[]},{"level":3,"title":"4.为什么使用元空间替代永久代作为方法区的实现？","slug":"_4-为什么使用元空间替代永久代作为方法区的实现","link":"#_4-为什么使用元空间替代永久代作为方法区的实现","children":[]},{"level":3,"title":"5.对象创建的过程了解吗？","slug":"_5-对象创建的过程了解吗","link":"#_5-对象创建的过程了解吗","children":[]},{"level":3,"title":"6.什么是指针碰撞？什么是空闲列表？","slug":"_6-什么是指针碰撞-什么是空闲列表","link":"#_6-什么是指针碰撞-什么是空闲列表","children":[]},{"level":3,"title":"7.JVM 里 new 对象时，堆会发生抢占吗？JVM 是怎么设计来保证线程安全的？","slug":"_7-jvm-里-new-对象时-堆会发生抢占吗-jvm-是怎么设计来保证线程安全的","link":"#_7-jvm-里-new-对象时-堆会发生抢占吗-jvm-是怎么设计来保证线程安全的","children":[]},{"level":3,"title":"8.能说一下对象的内存布局吗？","slug":"_8-能说一下对象的内存布局吗","link":"#_8-能说一下对象的内存布局吗","children":[]},{"level":3,"title":"9.对象怎么访问定位？","slug":"_9-对象怎么访问定位","link":"#_9-对象怎么访问定位","children":[]},{"level":3,"title":"10.内存溢出和内存泄漏是什么意思？","slug":"_10-内存溢出和内存泄漏是什么意思","link":"#_10-内存溢出和内存泄漏是什么意思","children":[]},{"level":3,"title":"11.能手写内存溢出的例子吗？","slug":"_11-能手写内存溢出的例子吗","link":"#_11-能手写内存溢出的例子吗","children":[]},{"level":3,"title":"12.内存泄漏可能由哪些原因导致呢？","slug":"_12-内存泄漏可能由哪些原因导致呢","link":"#_12-内存泄漏可能由哪些原因导致呢","children":[]},{"level":3,"title":"13.如何判断对象仍然存活？","slug":"_13-如何判断对象仍然存活","link":"#_13-如何判断对象仍然存活","children":[]},{"level":3,"title":"14.Java 中可作为 GC Roots 的对象有哪几种？","slug":"_14-java-中可作为-gc-roots-的对象有哪几种","link":"#_14-java-中可作为-gc-roots-的对象有哪几种","children":[]},{"level":3,"title":"15.说一下对象有哪几种引用？","slug":"_15-说一下对象有哪几种引用","link":"#_15-说一下对象有哪几种引用","children":[]},{"level":3,"title":"16.finalize()方法了解吗？有什么作用？","slug":"_16-finalize-方法了解吗-有什么作用","link":"#_16-finalize-方法了解吗-有什么作用","children":[]},{"level":3,"title":"17.Java 堆的内存分区了解吗？","slug":"_17-java-堆的内存分区了解吗","link":"#_17-java-堆的内存分区了解吗","children":[]},{"level":3,"title":"18.垃圾收集算法了解吗？","slug":"_18-垃圾收集算法了解吗","link":"#_18-垃圾收集算法了解吗","children":[]},{"level":3,"title":"19.说一下新生代的区域划分？","slug":"_19-说一下新生代的区域划分","link":"#_19-说一下新生代的区域划分","children":[]},{"level":3,"title":"20.Minor GC/Young GC、Major GC/Old GC、Mixed GC、Full GC 都是什么意思？","slug":"_20-minor-gc-young-gc、major-gc-old-gc、mixed-gc、full-gc-都是什么意思","link":"#_20-minor-gc-young-gc、major-gc-old-gc、mixed-gc、full-gc-都是什么意思","children":[]},{"level":3,"title":"21.Minor GC/Young GC 什么时候触发？","slug":"_21-minor-gc-young-gc-什么时候触发","link":"#_21-minor-gc-young-gc-什么时候触发","children":[]},{"level":3,"title":"22.什么时候会触发 Full GC？","slug":"_22-什么时候会触发-full-gc","link":"#_22-什么时候会触发-full-gc","children":[]},{"level":3,"title":"23.对象什么时候会进入老年代？","slug":"_23-对象什么时候会进入老年代","link":"#_23-对象什么时候会进入老年代","children":[]},{"level":3,"title":"24.知道有哪些垃圾收集器吗？","slug":"_24-知道有哪些垃圾收集器吗","link":"#_24-知道有哪些垃圾收集器吗","children":[]},{"level":3,"title":"25.什么是 Stop The World ? 什么是 OopMap ？什么是安全点？","slug":"_25-什么是-stop-the-world-什么是-oopmap-什么是安全点","link":"#_25-什么是-stop-the-world-什么是-oopmap-什么是安全点","children":[]},{"level":3,"title":"26.能详细说一下 CMS 收集器的垃圾收集过程吗？","slug":"_26-能详细说一下-cms-收集器的垃圾收集过程吗","link":"#_26-能详细说一下-cms-收集器的垃圾收集过程吗","children":[]},{"level":3,"title":"27.G1 垃圾收集器了解吗？","slug":"_27-g1-垃圾收集器了解吗","link":"#_27-g1-垃圾收集器了解吗","children":[]},{"level":3,"title":"28.有了 CMS，为什么还要引入 G1？","slug":"_28-有了-cms-为什么还要引入-g1","link":"#_28-有了-cms-为什么还要引入-g1","children":[]},{"level":3,"title":"29.你们线上用的什么垃圾收集器？为什么要用它？","slug":"_29-你们线上用的什么垃圾收集器-为什么要用它","link":"#_29-你们线上用的什么垃圾收集器-为什么要用它","children":[]},{"level":3,"title":"30.垃圾收集器应该如何选择？","slug":"_30-垃圾收集器应该如何选择","link":"#_30-垃圾收集器应该如何选择","children":[]},{"level":3,"title":"31.对象一定分配在堆中吗？有没有了解逃逸分析技术？","slug":"_31-对象一定分配在堆中吗-有没有了解逃逸分析技术","link":"#_31-对象一定分配在堆中吗-有没有了解逃逸分析技术","children":[]}]},{"level":2,"title":"三、JVM 调优","slug":"三、jvm-调优","link":"#三、jvm-调优","children":[{"level":3,"title":"32.有哪些常用的命令行性能监控和故障处理工具？","slug":"_32-有哪些常用的命令行性能监控和故障处理工具","link":"#_32-有哪些常用的命令行性能监控和故障处理工具","children":[]},{"level":3,"title":"33.了解哪些可视化的性能监控和故障处理工具？","slug":"_33-了解哪些可视化的性能监控和故障处理工具","link":"#_33-了解哪些可视化的性能监控和故障处理工具","children":[]},{"level":3,"title":"34.JVM 的常见参数配置知道哪些？","slug":"_34-jvm-的常见参数配置知道哪些","link":"#_34-jvm-的常见参数配置知道哪些","children":[]},{"level":3,"title":"35.有做过 JVM 调优吗？","slug":"_35-有做过-jvm-调优吗","link":"#_35-有做过-jvm-调优吗","children":[]},{"level":3,"title":"36.线上服务 CPU 占用过高怎么排查？","slug":"_36-线上服务-cpu-占用过高怎么排查","link":"#_36-线上服务-cpu-占用过高怎么排查","children":[]},{"level":3,"title":"37.内存飙高问题怎么排查？","slug":"_37-内存飙高问题怎么排查","link":"#_37-内存飙高问题怎么排查","children":[]},{"level":3,"title":"38.频繁 minor gc 怎么办？","slug":"_38-频繁-minor-gc-怎么办","link":"#_38-频繁-minor-gc-怎么办","children":[]},{"level":3,"title":"39.频繁 Full GC 怎么办？","slug":"_39-频繁-full-gc-怎么办","link":"#_39-频繁-full-gc-怎么办","children":[]},{"level":3,"title":"40.有没有处理过内存泄漏问题？是如何定位的？","slug":"_40-有没有处理过内存泄漏问题-是如何定位的","link":"#_40-有没有处理过内存泄漏问题-是如何定位的","children":[]},{"level":3,"title":"41.有没有处理过内存溢出问题？","slug":"_41-有没有处理过内存溢出问题","link":"#_41-有没有处理过内存溢出问题","children":[]}]},{"level":2,"title":"四、虚拟机执行","slug":"四、虚拟机执行","link":"#四、虚拟机执行","children":[{"level":3,"title":"42.能说一下类的生命周期吗？","slug":"_42-能说一下类的生命周期吗","link":"#_42-能说一下类的生命周期吗","children":[]},{"level":3,"title":"43.类加载的过程知道吗？","slug":"_43-类加载的过程知道吗","link":"#_43-类加载的过程知道吗","children":[]},{"level":3,"title":"44.类加载器有哪些？","slug":"_44-类加载器有哪些","link":"#_44-类加载器有哪些","children":[]},{"level":3,"title":"45.什么是双亲委派机制？","slug":"_45-什么是双亲委派机制","link":"#_45-什么是双亲委派机制","children":[]},{"level":3,"title":"46.为什么要用双亲委派机制？","slug":"_46-为什么要用双亲委派机制","link":"#_46-为什么要用双亲委派机制","children":[]},{"level":3,"title":"47.如何破坏双亲委派机制？","slug":"_47-如何破坏双亲委派机制","link":"#_47-如何破坏双亲委派机制","children":[]},{"level":3,"title":"48.历史上有哪几次双亲委派机制的破坏？","slug":"_48-历史上有哪几次双亲委派机制的破坏","link":"#_48-历史上有哪几次双亲委派机制的破坏","children":[]},{"level":3,"title":"49.你觉得应该怎么实现一个热部署功能？","slug":"_49-你觉得应该怎么实现一个热部署功能","link":"#_49-你觉得应该怎么实现一个热部署功能","children":[]},{"level":3,"title":"50.Tomcat 的类加载机制了解吗？","slug":"_50-tomcat-的类加载机制了解吗","link":"#_50-tomcat-的类加载机制了解吗","children":[]}]}],"git":{"createdTime":1646801254000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":13},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":56.67,"words":17002},"filePathRelative":"sidebar/sanfene/jvm.md","localizedDate":"2022年3月9日","excerpt":"<blockquote>\\n<p>图文详解 50 道Java虚拟机高频面试题，这次面试，一定吊打面试官，整理：沉默王二，戳<a href=\\"https://mp.weixin.qq.com/s/bHhqhl8mH3OAPt3EkaVc8Q\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">转载链接</a>，作者：三分恶，戳<a href=\\"https://mp.weixin.qq.com/s/XYsEJyIo46jXhHE1sOR_0Q\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">原文链接</a>。</p>\\n</blockquote>"}');export{l as data};
