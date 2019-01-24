<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>厦门实创新闻</title>
    <meta name="keywords" content="韩剧TV,韩国电视剧,韩国综艺,韩剧网,最新韩剧,好看的韩剧,韩剧排行榜,热播韩剧网" />
    <meta name="description" content="韩剧热播网是一家提供韩剧排行榜,好看的韩剧,娱乐新闻,韩国电视剧,韩剧资料馆,剧情介绍,韩国明星,韩剧OST,明星图片" />
    <link rel="alternate" media="only screen and(max-width: 640px)" href="https://m.y3600.co/" />
    <meta http-equiv="mobile-agent" content="format=html5; url=https://m.y3600.co/">
    <meta http-equiv="mobile-agent" content="format=xhtml; url=https://m.y3600.co/">
    <link href="/css/style2014.css" rel="stylesheet" type="text/css" />
    <link href="/favicon.ico" rel="SHORTCUT ICON">
</head>

<body>
    @include('gong.head')
    <DIV class="Sec1 pt10">
        <Div class="B12">
            <UL style="width:680px;">
                <Div class="mainbanner">
                    <div class="arrow_l"></div>
                    <div class="arrow_r"></div>
                    <div class="slides">
                        <?php 
                            $lunbo = \DB::Table('article6s')->orderBy('id','desc')->where('news_pic','<>','')->limit(5)->get();
                        ?>
                        <ul class="slide-pic">
                            @foreach($lunbo as $v)
                            <li class="cur"><a href="/article/{{$v->id}}" title="{{$v->title}}" target="_blank"><img
                                        src="{{$v->news_pic}}" alt="{{$v->title}}" /></a></li>
                            @endforeach

                        </ul>
                        <ul class="slide-li slide-txt">
                            @foreach($lunbo as $v)
                            <li class="cur"><a href="/article/{{$v->id}}" title="{{$v->title}}" target="_blank">{{$v->title}}</a></li>
                            @endforeach
                        </ul>
                        <ul class="slide-li slide-num">
                            @foreach($lunbo as $v)
                            <li></li>
                            @endforeach
                        </ul>
                        <div class="alpha_bg"></div>
                    </div>
                </Div>
            </UL>
            <UL style="width:520px;">
                <Div class="focusnews">
                    <div id="monitor_4" class="headlineList">
                        <?php 
                            $article = \DB::Table('article6s')->orderBy('id','desc')->limit(8)->get();
                        ?>
                        @foreach($article as $v)
                        <h2><a href="/article/{{$v->id}}" title="{{$v->title}}" target="_blank">{{$v->title}}</a>
                        </h2>
                        @endforeach
                    </div>
                </Div>
            </UL>
        </Div>
    </DIV>
    <script type='text/javascript' src='/js/jquery.min.js'></script>
    <script type='text/javascript' src='/js/jquery.cookie.js'></script>
    <script type='text/javascript' src='/js/common.js'></script>
    <script type='text/javascript' src='/js/index.js'></script>
    <script type='text/javascript'>
        index_init();
        var playtable = $.cookie('playtable');
        if (playtable) {
            playtable = playtable.split(",");
            try {
                $.each(playtable, function (i, n) {
                    if (i == 0) $(".hislist dl").html('');
                    var tp = $.parseJSON($.cookie('playnow' + n));
                    $(".hislist dl").append('<dd><a href="' + tp.url + '"><span class="d1">' + tp.title +
                        '</span><span class="d2">[至 ' + tp.ftitle + ']</span><span class="d3">看到 ' + tp.text +
                        '</span></a></dd>');
                });
            } catch (e) {
                $.cookie('playtable', '', {
                    path: '/'
                });
            }
        } else playtable = [];

        $(".switch").hover(function () {
            $(".switch ol").show();
        }, function () {
            $(".switch ol").hide();
        });
        $("#histab").hover(function () {
            $("#playtable").show();
        }, function () {
            $("#playtable").hide();
        });
        $("#wx_order").hover(function () {
            $(".wm2").show();
        }, function () {
            $(".wm2").hide();
            $
        });
        $(".search").hover(function () {
            $(".searchkey").show();
        }, function () {
            $(".searchkey").hide();
        });
        $(".searchkey a").each(function (i, o) {
            var hot = $(o).attr("hot");
            var color = parseInt("be", 16);
            var now = color - parseInt(hot / 255);
            $(o).css("background-color", "#ff" + now.toString(16) + "00");
        });
    </script>
    <div class="B12 mt10">
        <script src="/190120/17.js"></script>
    </div>
    <script>
        $(".tit a").each(function (i, o) {
            if (o.innerText.indexOf("剪辑") > 0) $(".playico:eq(" + i + ")").before('<div class="edit"></div>');
        });
    </script>
    <Div class="B12 mt10">
        <script src="/190120/41.js"></script>
    </Div>
    <div class="B12"></div>
    <script type='text/javascript'>
        index_picnews_init();
    </script>
    <DIV class="Sec5 B12">
        @foreach($fenlei as $v)
        <div class="article">
            <h3><b>{{$v->fenlei_name}}</b><a href="/fenlei/{{$v['id']}}" title="" class="more" target="_blank">更多</a></h3>
            <div class="fm_b2">
                <?php 
                    $article2 = \DB::Table('article6s')->orderBy('id','desc')->where('fenlei_id',$v['id'])->where('news_pic','<>','')->limit(2)->get();
                    $article16 = \DB::Table('article6s')->orderBy('id','desc')->where('fenlei_id',$v['id'])->limit(16)->get();
                ?>
                <div class="pic">
                    @foreach($article2 as $val)
                    <ul class="k1">
                        <ol><i><a href="/article/{{$val->id}}" title="{{$val->title}}"
                                    target="_blank"><img src="{{$val->news_pic}}"
                                        alt="{{$val->title}}"></a></i></ol>
                        <li><a href="/article/{{$val->id}}" title="{{$val->title}}"
                                target="_blank">{{$val->title}}</a></li>
                    </ul>
                    @endforeach
                </div>
                <div class="list">
                    <ul>
                        @foreach($article16 as $val)
                        <li>·<a href="/article/{{$v->id}}" title="{{$val->title}}"
                                target="_blank">{{$val->title}}</a></li>
                        @endforeach
                        
                       
                    </ul>
                </div>
            </div>
        </div>
        @endforeach
        <script src="/190120/36.js"></script>
    </Div>
    <script src="/190120/42.js"></script>
    <script src="/190120/39.js"></script>
    @include('gong.footer')

    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-36797625-1', 'auto');
        ga('send', 'pageview');
    </script>
    <script>
        (function () {
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            if (curProtocol === 'https') {
                bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
            } else {
                bp.src = 'http://push.zhanzhang.baidu.com/push.js';
            }
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
        })();
    </script>
    <script>
        (function () {
            var src = (document.location.protocol == "http:") ?
                "http://js.passport.qihucdn.com/11.0.1.js?84b46077cd37bd6e207a1c2186912e0b" :
                "https://jspassport.ssl.qhimg.com/11.0.1.js?84b46077cd37bd6e207a1c2186912e0b";
            document.write('<sc' + 'ript src="' + src + '" id="sozz"><\/sc' + 'ript>');
        })();
    </script>
</body>

</html>