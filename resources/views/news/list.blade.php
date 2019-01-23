<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0043)https://www.y3600.co/hanguo/hanguomingxing/ -->
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script src="/js/ex" async=""></script>
    <script src="/js/push.js.下载"></script>
    <script async="" src="/js/analytics.js.下载"></script>
    <script src="/js/hm.js.下载"></script>
    <script type="text/javascript" charset="gbk" id="tanx-s-mm_35164828_181500345_80874550183" async="" src="/js/ex(1)"></script>
    <script type="text/javascript" charset="gbk" id="tanx-s-mm_35164828_181500345_80874550183" async="" src="/js/ex(1)"></script>
    <script src="/js/ex(2)" async=""></script>
    <script charset="utf-8" async="" src="/js/tanxssp.js.下载"></script>
    <script src="/js/osd.js.下载"></script>
    <script src="/js/ca-pub-1626852468493169.js.下载"></script>
    <script type="text/javascript" async="" src="/js/pr.js.下载"></script>
    <script type="text/javascript" charset="gbk" id="tanx-s-mm_35164828_181500345_52177500172" async="" src="/js/ex(3)"></script>

    <title>{{$dangqian_fenlei['fenlei_name']}}</title>
    <meta name="keywords" content="韩国明星,明星图片,韩剧网">
    <meta name="description" content="热播网韩国明星栏目为您提供最及时的韩国明星动态和韩剧明星生活,韩国歌星,童星,主持人等的档案资料和新闻。">
    <link rel="alternate" media="only screen and(max-width: 640px)" href="https://m.y3600.co/60/index.html">
    <meta http-equiv="mobile-agent" content="format=html5; url=https://m.y3600.co/60/index.html">
    <meta http-equiv="mobile-agent" content="format=xhtml; url=https://m.y3600.co/60/index.html">
    <link href="/css/style2014.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="/js/jquery.min.js.下载"></script>
    <script type="text/javascript" src="/js/jquery.cookie.js.下载"></script>
    <link rel="preload" href="/js/f.txt" as="script">
    <script type="text/javascript" src="/js/f.txt"></script>
    <link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/r20190114/r20180604/show_ads_impl.js" as="script">
</head>

<body>
    <link href="https://www.y3600.co/favicon.ico" rel="SHORTCUT ICON">
    @include('gong.head')
    <script>
        try {
            var nowid = "c60";
            document.getElementById(nowid).className = "b";
        } catch (e) {
            $(".Mainnav a").each(function (i) {
                if (this.href == location.href) this.className = "b";
            });
        }
        if (murl) document.getElementById("murl").href = murl;
        var playtable = $.cookie('playtable');
        if (playtable) {
            playtable = playtable.split(",");
            playtable = playtable.reverse();
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
            if (now < 0) now = 0;
            $(o).css("background-color", "#ff" + now.toString(16) + "00");
        });
    </script>
    <div class="B12">
        <div class="newsleft">
            <ul class="wz"><a href="/">首页</a>&nbsp;&gt;&nbsp;<a
                    href="/fenlei/{{$dangqian_fenlei['id']}}"><b>{{$dangqian_fenlei['fenlei_name']}}</b></a></ul>
            <div class="tabbar2" style="">
                <ul style="" class="c58 c60 c0 c97">
                    <a href="https://www.y3600.co/news/" title="最新新闻">最新News</a>
                   

                </ul>
            </div>
            <script>
                var obj = $("." + nowid);
                if (obj.length) {
                    obj.show();
                    $(".tabbar2").show();
                }
                $(".tabbar2 a").each(function (i) {
                    if (this.href == location.href) this.className = "on";
                });
            </script>
            <div class="fm_b2 p20 mt10" id="list">
                <?php 
                    $article = \DB::Table('article6s')->orderBy('id','desc')->where('fenlei_id',$dangqian_fenlei['id'])->paginate(10);
                ?>
                <div class="CleanBoth "></div>
                @foreach($article as $v)
                <div class="wdls">
                    <ul class="img"><i><a href="/article/{{$v->id}}" title="{{$v->title}}"
                                target="_blank"><img style="_width: true; _height: true" src="{{$v->news_pic}}"></a></i></ul>
                    <ul class="a3">
                        <ol><a href="/article/{{$v->id}}" title="{{$v->title}}"
                                target="_blank">{{$v->title}}</a></ol>
                        <li>{{mb_substr(preg_replace('/<.*?>/','',$v->content),0,260)}}</li><em>[{{$v->create_time}}]</em>
                    </ul>
                </div>
                @endforeach
                <div class="CleanBoth "></div>
            </div>
            <div class="pages mt20">&nbsp;{{$article->appends(request()->all())->links()}}</div>
        </div>
        <div class="newsright">
            <script>
                var tagname = "韩国明星,明星图片,韩剧网";
                tagname = tagname.split(",");
                var keyname = ["韩剧", "韩国", "韩式"];

                function init_tag_ad() {
                    var i = 0;
                    $(".tag_ad").each(function (e) {
                        var tptag = (tagname[e] ? tagname[e] : keyname[i++]);
                        $(this).attr("biz-keyword", tptag);
                    });
                }

                // ****** 选项卡切换 ******
                function MM(id, menu, Txt, cln) {
                    var QuickLinkList = document.getElementsByName(Txt),
                        i = 0;
                    for (i = 0; i <= QuickLinkList.length - 1; i++) {
                        if (i == id) QuickLinkList[i].style.display = '';
                        else QuickLinkList[i].style.display = 'none';
                    }
                    var TSMenuList = document.getElementsByName(menu),
                        i = 0;
                    var clnIn;
                    for (i = 0; i <= TSMenuList.length - 1; i++) {
                        clnIn = TSMenuList[i].className;
                        if (i == id) TSMenuList[i].className = clnIn.replace(cln + 'Off', cln + 'On');
                        else TSMenuList[i].className = clnIn.replace(cln + 'On', cln + 'Off');
                    }
                }
            </script>

            <script src="/images/29.js.下载"></script>
            <div class="rb mb20">
                <h3 class="fm2"><b>点击排行</b></h3>
                <?php 
                    $hot_article = \DB::Table('article6s')->orderBy('dianji','desc')->where('fenlei_id',$dangqian_fenlei['id'])->limit(10)->get();
                ?>
                <div class="fm_b2">
                    <ul>
                        @foreach($hot_article as $v)
                        <li class="gray"><span><a href="/article/{{$v->id}}" target="_blank"
                                    title="{{$v->title}}">{{$v->title}}</a></li>
                        @endforeach
                    </ul>
                </div>
            </div>

            <div class="zx mt20">
                <div class="fm_b2">
                    <h4 class="fm3"><span>
                            <a href="" title="编辑推荐" id="M0" name="M0"
                                onmouseover="MM(0,&#39;M0&#39;,&#39;B0&#39;,&#39;&#39;);" class="On">编辑推荐</a>
                            
                        </span></h4>
                    <div id="B0" name="B0" alt="" class="B0">
                        <?php 
                            $tuijian = \DB::Table('article6s')->orderBy('dianji','desc')->limit(4)->get();
                        ?>
                        @foreach($tuijian as $v)
                        <div class="sd2">
                            <div class="img"><i><a href="/article/{{$v->id}}"
                                        title="{{$v->title}}" target="_blank"><img style="_width: true; _height: true"
                                            src="{{$v->news_pic}}"></a></i></div>
                            <div class="a4">
                                <h3><a href="/article/{{$v->id}}" title="{{$v->title}}"
                                        target="_blank">{{$v->title}}</a></h3>
                                <p>{{preg_replace('/<.*?>/','',$v->content)}}</p>
                            </div>
                        </div>
                        @endforeach
                    </div>
                    <div id="B0" name="B0" style="display:none;" class="B0">
                    </div>
                </div>
            </div>
            <script>
                $(".B0").each(function (i, o) {
                    if ($("a", o).length > 0) {
                        MM(i, 'M0', 'B0', '');
                        return false;
                    } else document.getElementsByName('M0')[i].style.display = "none";
                });
            </script>

            <div class="mt20">
                <script src="/images/11.js.下载"></script>
                <div class="mb20"></div>
                <div id="adv_push" style="position: fixed; bottom: 0px; left: auto; z-index: 2147483647; width: 300px; height: 250px; cursor: pointer; right: 0px; background-color: rgb(228, 228, 228);"><span
                        onclick="document.getElementById(&#39;adv_push&#39;).style.display=&#39;none&#39;;" style="position: absolute; top: -15px; right: 0; height: 15px; width: 44px; cursor: pointer; background: #CCC url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAPCAYAAACfvC2ZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADqSURBVHja7JZLCsMwDERHpZ99z9NcIQdp7t3uvChk0ZQy3ThghPxL7UWhAhMsj8yzLCILSfyS7TrsyUL/pkztDd8LwBPAkog7AjgBOBhr4mFEwUlGFzuA5DK8AHgAGAGcjTH69dSBJDO3/GIM455IPRzJC8mb/4Zrq3/wOh1bYqHWik/No8AwoENYRIBzAOgJHEJeFWxL4NRNVAPDw75JThldjXXP8ETyrmq6dUmwVQ0PwTyEdoWwLADmtxlO/SVWaFeZvZIDbQKeI7Aaeq4sA7YoCTHeEls7HTNNQmuY0DLWdOT/+OlsnwEAHn+cEcizBxkAAAAASUVORK5CYII=) no-repeat"></span>
                    <div class="focus_300">
                        <script async="" src="/images/f(1).txt"></script><ins class="adsbygoogle" style="display: inline-block; width: 300px; height: 250px;"
                            data-ad-client="ca-pub-1626852468493169" data-ad-slot="1524158030" data-adsbygoogle-status="done"><ins
                                id="aswift_1_expand" style="display:inline-table;border:none;height:250px;margin:0;padding:0;position:relative;visibility:visible;width:300px;background-color:transparent;"><ins
                                    id="aswift_1_anchor" style="display:block;border:none;height:250px;margin:0;padding:0;position:relative;visibility:visible;width:300px;background-color:transparent;"><iframe
                                        width="300" height="250" frameborder="0" marginwidth="0" marginheight="0"
                                        vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true"
                                        onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}"
                                        id="aswift_1" name="aswift_1" style="left:0;position:absolute;top:0;border:0px;width:300px;height:250px;"
                                        src="/images/saved_resource(2).html"></iframe></ins></ins></ins>
                        <script>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                    </div>
                    <div class="focus_300_fix" style="display:none;">
                        <script type="text/javascript">
                            document.write(
                                '<a style="display:none!important" id="tanx-a-mm_35164828_181500345_80874550183"></a>'
                            );
                            tanx_s = document.createElement("script");
                            tanx_s.type = "text/javascript";
                            tanx_s.charset = "gbk";
                            tanx_s.id = "tanx-s-mm_35164828_181500345_80874550183";
                            tanx_s.async = true;
                            tanx_s.src = "//p.tanx.com/ex?i=mm_35164828_181500345_80874550183";
                            tanx_h = document.getElementsByTagName("head")[0];
                            if (tanx_h) tanx_h.insertBefore(tanx_s, tanx_h.firstChild);
                        </script><ins style="display:inline-block;padding:0;margin:0;width:300px;height:250px;*zoom:1;*display:inline; position:relative;"
                            id="tanxssp-outer-conmm_35164828_181500345_80874550183">
                            <div id="tanxssp_con_mm_35164828_181500345_80874550183" style="overflow:hidden;display:inline-block;position:relative;width:300px;height:250px;*display:inline;*zoom:1;font:12px/1.5 tahoma,&#39;Hiragino Sans GB&#39;,&#39;microsoft yahei&#39;,sans-serif;"><iframe
                                    id="tanxssp-tuwen-iframemm_35164828_181500345_80874550183" src="/images/creation-3354V76q1GX2xO01-13827984.html"
                                    style="width:300px;height:250px" border="0" frameborder="0" marginwidth="0"
                                    marginheight="0" scrolling="no" allowtransparency="true"></iframe><a id="iconmm_35164828_181500345_80874550183"
                                    title="我也要申请橱窗推广" target="_blank" href="https://www.alimama.com/" style="overflow:hidden;width:15px;height:13px;right:20px;bottom:0px;display:block;position:absolute;cursor:pointer;z-index:250;">
                                    <span id="icon_smallmm_35164828_181500345_80874550183" style="border-right:2px solid #eee;float:none;width:13px;display:block;height:13px;box-sizing:content-box"><img
                                            src="/images/TB1DmcoJXXXXXavXpXXXXXXXXXX-26-26.png" border="0" style="width:13px;height:13px;margin:auto;display:block;"></span>
                                    <span id="icon_bigmm_35164828_181500345_80874550183" style="float:none;width:60px;height:13px;display: none;"><img
                                            src="/images/TB1Lt7aJXXXXXcjXVXXXXXXXXXX-117-26.png" style="width:60px;height:13px;margin:auto;display:block;"
                                            border="0/"></span></a><a id="sxmm_35164828_181500345_80874550183" href="javascript:;"
                                    style="width:20px;height:13px;right:0px;bottom:0px;display:block;position:absolute;cursor:pointer;z-index:250;margin:0;">
                                    <span id="sx1mm_35164828_181500345_80874550183" style="float:none;width:20px;display:block;height:13px;"><img
                                            src="/images/TB1tWvVJFXXXXc_aXXXXXXXXXXX-40-26.png" style="width:20px;height:13px;margin:auto;display:block;min-height:13px;"
                                            border="0/"></span>
                                    <div id="sxtipmm_35164828_181500345_80874550183" style="display:none;position:absolute;left:-38px;bottom:13px;"><img
                                            src="/images/TB1upAiJXXXXXa5aXXXXXXXXXXX-116-30.png" style="width:58px;height:15px;margin:auto;display:block;min-height:15px;"
                                            border="0"></div>
                                </a></div>
                        </ins><a style="display:none!important" id="tanx-a-mm_35164828_181500345_80874550183"></a>
                    </div>
                </div>
            </div>
            <div class="CleanBoth"></div>
        </div>
    </div><iframe id="google_osd_static_frame_7154781813805" name="google_osd_static_frame" style="display: none; width: 0px; height: 0px;"
        src="/images/saved_resource(3).html"></iframe>
    <script>
        jQuery.support.cors= true;
var loading = 0;
var page = 1;
var container = $('#list');

function list_loading() {
loading = 1;
nextHref = $(".next").attr("href"); 
if (typeof(nextHref) == "undefined") return;
// $("#page_loading").show("slow");
$.ajax({
  url: nextHref,
  success: function(data){
if (typeof(data) ==  "undefined") return;
result = $(data).find("#list .wdls");

next = $(data).find(".pages");
$(".pages").replaceWith(next);

container.append(result);

if (page < 3) loading = 0;
page++;
}
});
}

  $(function(){
$(window).bind("scroll",function(){    
if( $(document).scrollTop() + $(window).height() > $(document).height() - 304 ) {       
if (loading == 0) list_loading();
}
  });
  });
</script>
    <script src="/images/31.js.下载"></script>
    <style type="text/css">
        @media screen and (max-width:1400px) {
            #adv_push {
                display: none !important;
            }
        }
    </style>
    <div id="adv_push" style="position: fixed; bottom: 0px; right: 0px; z-index: 2147483647; width: 300px; height: 250px; cursor: pointer; left: auto; background-color: rgb(228, 228, 228);"><span
            onclick="document.getElementById(&#39;adv_push&#39;).style.display=&#39;none&#39;;" style="position: absolute; top: -15px; right: 0; height: 15px; width: 44px; cursor: pointer; background: #CCC url(data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAPCAYAAACfvC2ZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADqSURBVHja7JZLCsMwDERHpZ99z9NcIQdp7t3uvChk0ZQy3ThghPxL7UWhAhMsj8yzLCILSfyS7TrsyUL/pkztDd8LwBPAkog7AjgBOBhr4mFEwUlGFzuA5DK8AHgAGAGcjTH69dSBJDO3/GIM455IPRzJC8mb/4Zrq3/wOh1bYqHWik/No8AwoENYRIBzAOgJHEJeFWxL4NRNVAPDw75JThldjXXP8ETyrmq6dUmwVQ0PwTyEdoWwLADmtxlO/SVWaFeZvZIDbQKeI7Aaeq4sA7YoCTHeEls7HTNNQmuY0DLWdOT/+OlsnwEAHn+cEcizBxkAAAAASUVORK5CYII=) no-repeat"></span>
        <div class="focus_300">
            <script async="" src="/images/f(1).txt"></script><ins class="adsbygoogle" style="display: inline-block; width: 300px; height: 0px;"
                data-ad-client="ca-pub-1626852468493169" data-ad-slot="1524158030" data-adsbygoogle-status="done"><ins
                    id="aswift_2_expand" style="display: inline-table; border: none; height: 0px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 300px; background-color: transparent;"><ins
                        id="aswift_2_anchor" style="display: block; border: none; height: 0px; margin: 0px; padding: 0px; position: relative; visibility: visible; width: 300px; background-color: transparent; overflow: hidden; opacity: 0;"><iframe
                            width="300" height="250" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0"
                            allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}"
                            id="aswift_2" name="aswift_2" style="left:0;position:absolute;top:0;border:0px;width:300px;height:250px;"
                            src="/images/saved_resource(4).html"></iframe></ins></ins></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
        <div class="focus_300_fix" style="display:none;">
            <script type="text/javascript">
                document.write('<a style="display:none!important" id="tanx-a-mm_35164828_181500345_80874550183"></a>');
                tanx_s = document.createElement("script");
                tanx_s.type = "text/javascript";
                tanx_s.charset = "gbk";
                tanx_s.id = "tanx-s-mm_35164828_181500345_80874550183";
                tanx_s.async = true;
                tanx_s.src = "//p.tanx.com/ex?i=mm_35164828_181500345_80874550183";
                tanx_h = document.getElementsByTagName("head")[0];
                if (tanx_h) tanx_h.insertBefore(tanx_s, tanx_h.firstChild);
            </script><a style="display:none!important" id="tanx-a-mm_35164828_181500345_80874550183"></a>
        </div>
    </div>
    <script src="/images/36.js.下载"></script>
    <script src="/images/39.js.下载"></script>
    <script>
        try {
            (function () {
                focusAd("focus_728");
                focusAd("focus_300");
            })();

            function focusAd(id) {
                $(".adsbygoogle").each(function (i) {
                    if (!this.innerHTML) this.parentNode.innerHTML = "";
                });
                $("." + id).each(function (i) {
                    if (!this.innerHTML) {
                        var fix = $("." + id + "_fix:eq(" + i + ")");
                        if (fix.length == 0) fix = $("#" + id + "_" + i);
                        if (fix.length == 0) fix = $("#" + id);
                        var objt = fix.html();
                        if (objt.length > 100) {
                            this.innerHTML = objt;
                        }
                    }
                });
                $("." + id + " div").each(function (i) {
                    this.style.zIndex = "0";
                });
            }
        } catch (e) {}
    </script>
    @include('gong.footer')
    <div style="display:none">
        <script src="/images/saved_resource"></script>
    </div>
    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?5550e6f871d64d0f3c4adad2b866f4a3";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
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
    <script src="/images/11.0.1.js.下载" id="sozz"></script>
    <script charset="utf-8" src="/images/ab77b6ea7f3fbf79.js.下载"></script>

</body><iframe id="google_shimpl" style="display: none;" src="/images/saved_resource(5).html"></iframe><iframe id="google_esf"
    name="google_esf" src="/images/zrt_lookup.html" data-ad-client="ca-pub-1626852468493169" style="display: none;"></iframe>

</html>