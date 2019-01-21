<div class="gtop Mainnav">
        <ul class="B12">
            <div class="new2"></div>
            <ol class="t">
                <a href="/" title="热播网">首页</a>
                @foreach($fenlei as $v)
                <a id="c58" href="/fenlei/{{$v['id']}}" title="{{$v['fenlei_name']}}">{{$v['fenlei_name']}}</a>
                @endforeach
            </ol>
        </ul>
    </div>