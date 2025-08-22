var posts=["posts/737bd1f1.html","posts/86ca1ebf.html","posts/9364694a.html","posts/64713927.html","posts/fd78689d.html","posts/8a7f580b.html","posts/1ac0459a.html","posts/117243ce.html","posts/8f16d66d.html","posts/14c55757.html","posts/6d19eff3.html","posts/1a1edf65.html","posts/95434f20.html","posts/7932df39.html","posts/a842e41b.html","posts/8ff72993.html","posts/9219c8ef.html","posts/1b0b3fd5.html","posts/4dfb8713.html","posts/d7318f12.html","posts/ab8ad312.html","posts/ca0632d3.html","posts/763fb490.html","posts/f59ddb87.html","posts/90fae0c1.html","posts/68460d35.html","posts/2e5c1b6c.html","posts/8187673c.html","posts/4d3c3453.html","posts/5bd2dc50.html","posts/f6d845be.html","posts/aa9b3bfe.html","posts/9a8dd726.html","posts/b469c355.html","posts/ae4759ab.html","posts/8134c5ac.html","posts/23652f0e.html","posts/da1743b8.html","posts/ff99f411.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"安知鱼,安知鱼的博客，这是一个分享前端知识与代码设计生活的博客，生活明朗,万物可爱。落霞与孤鹜齐飞，秋水共长天一色。","siteshot":null},{"name":"🚇开往(随机前往)","link":"https://www.travellings.cn/go.html","avatar":"https://cdn.jsdelivr.net/gh/travellings-link/travellings@master/public/assets/favicon.png","descr":"让传统友链“活跃”，让网页相互接力，让流量相互流动，让网络开放起来","siteshot":null},{"name":"Hexo","link":"https://hexo.io/zh-cn/","avatar":"https://hexo.io/logo.png","descr":"快速、简洁且高效的博客框架","siteshot":null},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akiblog@1.0.2/img/siteicon/favicon.png","descr":"流水幽吟绕耳边，煦风馨语抚心弦，挥臂欲揽冰钩月，银星斟酌醉人涎。","siteshot":null},{"name":"Eurkon","link":"https://blog.eurkon.com/","avatar":"https://npm.elemecdn.com/eurkon-cdn/hexo/images/user/avatar.jpg","descr":"(ECharts大神)在这里我将记录学习过程中的笔记、分享一些经验与想法。希望能够帮助到您！","siteshot":null},{"name":"姓王者","link":"https://xingwangzhe.fun/","avatar":"https://xingwangzhe.fun/images/avatar.png","descr":"因为我姓王，所以姓王者","siteshot":null},{"name":"Big_Cake","link":"https://www.lihaoyu.cn/","avatar":"https://blog-api.lihaoyu.cn/images/profile/avatar-128x.webp","descr":"也许我们会分别，但我们将永远不会忘记彼此","siteshot":null},{"name":"Pinpe","link":"https://blog.pinpe.top/","avatar":"https://pinpe.top/head.jpg","descr":"—— 什么是孤独？—— 心里明明空荡荡的，却什么也装不下。","siteshot":null},{"name":"皓子","link":"https://howiehz.top/","avatar":"https://howiehz.top/upload/ico.ico","descr":"互联网是一片海洋，网站犹如一座座孤岛漂浮在其上，唯有超链接将它们联系起来。而此处恰好就是一座小岛，欢迎访问皓子的小站。","siteshot":null},{"name":"正如的部落格","link":"https://blog.zhengru.top/","avatar":"https://blog.zhengru.top/img/512.png","descr":"前后端开发问题相关的技术博客","siteshot":null},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://blog.zhheo.com/img/favicon4.0.webp","descr":"杂食小店","siteshot":null}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };