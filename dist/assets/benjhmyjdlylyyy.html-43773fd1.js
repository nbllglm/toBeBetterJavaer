const e=JSON.parse('{"key":"v-1a47b9fc","path":"/nice-article/cnblog/benjhmyjdlylyyy.html","title":"本机号码一键登录原理与应用","lang":"zh-CN","frontmatter":{"title":"本机号码一键登录原理与应用","shortTitle":"本机号码一键登录原理与应用","author":"Frankada","category":["博客园"],"description":"前言 很多 APP 目前都支持“本机号码一键登录”功能。本机号码一键登录是基于运营商独有网关认证能力推出的账号认证产品。用户只需一键授权，即可实现以本机号码注册/登录，相比先前的短信验证码流程体验更优。 目前市面上有很多厂商提供三网验证的服务，只不过是对三大运营商的包装。要了解具体的原理可直接看三大运营商相关的介绍。 中国移动 中国移动号码认证服务支持移动、联通、电信三网号码。主要产品功能： 一键登录：依托运营商的移动通信网络，采用通信网关取号技术，准确识别用户流量卡归属的手机号码。在获得用户授权后，App 端（适配 iOS 和 Android）可使用本机号码实现一键免密登录。 本机号码校验：通过 SDK/JSSDK 提供的本机号码校验功能，调用网关鉴权方式，验证用户输入的手机号码或后台绑定的手机号码是否为本机流量卡归属号码，保证机卡不分离，用于快捷登入和安全风控等场景。本机号码校验现已适配 iOS、Android、H5、小程序、快应用。","head":[["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/nice-article/cnblog/benjhmyjdlylyyy.html"}],["meta",{"property":"og:site_name","content":"Java进阶之路"}],["meta",{"property":"og:title","content":"本机号码一键登录原理与应用"}],["meta",{"property":"og:description","content":"前言 很多 APP 目前都支持“本机号码一键登录”功能。本机号码一键登录是基于运营商独有网关认证能力推出的账号认证产品。用户只需一键授权，即可实现以本机号码注册/登录，相比先前的短信验证码流程体验更优。 目前市面上有很多厂商提供三网验证的服务，只不过是对三大运营商的包装。要了解具体的原理可直接看三大运营商相关的介绍。 中国移动 中国移动号码认证服务支持移动、联通、电信三网号码。主要产品功能： 一键登录：依托运营商的移动通信网络，采用通信网关取号技术，准确识别用户流量卡归属的手机号码。在获得用户授权后，App 端（适配 iOS 和 Android）可使用本机号码实现一键免密登录。 本机号码校验：通过 SDK/JSSDK 提供的本机号码校验功能，调用网关鉴权方式，验证用户输入的手机号码或后台绑定的手机号码是否为本机流量卡归属号码，保证机卡不分离，用于快捷登入和安全风控等场景。本机号码校验现已适配 iOS、Android、H5、小程序、快应用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T13:49:42.000Z"}],["meta",{"property":"article:author","content":"Frankada"}],["meta",{"property":"article:modified_time","content":"2022-12-26T13:49:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"本机号码一键登录原理与应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T13:49:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Frankada\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"中国移动","slug":"中国移动","link":"#中国移动","children":[]},{"level":2,"title":"取号方法","slug":"取号方法","link":"#取号方法","children":[]},{"level":2,"title":"本机号码校验","slug":"本机号码校验","link":"#本机号码校验","children":[]},{"level":2,"title":"中国电信","slug":"中国电信","link":"#中国电信","children":[]},{"level":2,"title":"中国联通","slug":"中国联通","link":"#中国联通","children":[{"level":3,"title":"号码认证","slug":"号码认证","link":"#号码认证","children":[]},{"level":3,"title":"应用场景：","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"匿名设备标识","slug":"匿名设备标识","link":"#匿名设备标识","children":[]},{"level":2,"title":"匿名用户标识","slug":"匿名用户标识","link":"#匿名用户标识","children":[]},{"level":2,"title":"空号识别","slug":"空号识别","link":"#空号识别","children":[]},{"level":2,"title":"二次号验证","slug":"二次号验证","link":"#二次号验证","children":[]},{"level":2,"title":"三要素验证","slug":"三要素验证","link":"#三要素验证","children":[]}],"git":{"createdTime":1666756358000,"updatedTime":1672062582000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":9.86,"words":2958},"filePathRelative":"nice-article/cnblog/benjhmyjdlylyyy.md","localizedDate":"2022年10月26日","excerpt":"<h2> 前言</h2>\\n<p>很多 APP 目前都支持“本机号码一键登录”功能。本机号码一键登录是基于运营商独有网关认证能力推出的账号认证产品。用户只需一键授权，即可实现以本机号码注册/登录，相比先前的短信验证码流程体验更优。</p>\\n<p>目前市面上有很多厂商提供三网验证的服务，只不过是对三大运营商的包装。要了解具体的原理可直接看三大运营商相关的介绍。</p>\\n<h2> 中国移动</h2>\\n<p>中国移动号码认证服务支持移动、联通、电信三网号码。主要产品功能：</p>\\n<ul>\\n<li>一键登录：依托运营商的移动通信网络，采用通信网关取号技术，准确识别用户流量卡归属的手机号码。在获得用户授权后，App 端（适配 iOS 和 Android）可使用本机号码实现一键免密登录。</li>\\n<li>本机号码校验：通过 SDK/JSSDK 提供的本机号码校验功能，调用网关鉴权方式，验证用户输入的手机号码或后台绑定的手机号码是否为本机流量卡归属号码，保证机卡不分离，用于快捷登入和安全风控等场景。本机号码校验现已适配 iOS、Android、H5、小程序、快应用。</li>\\n</ul>","autoDesc":true}');export{e as data};
