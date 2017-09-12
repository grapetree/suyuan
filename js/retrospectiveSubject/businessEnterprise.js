$(function(){
    changeNavTo('追溯主体', '电商企业');

    //分页，表单，日历
    layui.use(['laypage','form', 'layedit', 'laydate','layer'], function() {
        var laypage = layui.laypage;
        var form = layui.form();
        var laydate = layui.laydate;
        var layer = layui.layer;

        //调用分页
        laypage({
            cont: 'page',
            pages: 100,
            groups:3,
            skin: '#28a96c',
            skip: true,
            // 触发分页后的回调，函数返回两个参数。
            //obj是一个object类型。包括了分页的所有配置信息。
            //first一个Boolean类，检测页面是否初始加载。非常有用，可避免无限刷新。
            jump: function(obj, first){
                //得到了当前页，用于向服务端请求对应数据
                var curr = obj.curr;
            }
        });
        //设置企业弹窗
        $('.showBox').click(function(){
            layer.open({
                type: 1,
                title: '请选择您要监管的企业',
                skin: 'demo-class', //加上边框
                area: ['900px', '564px'], //宽高
                content: $("#show-box")
            });
        });
        //加入黑名单弹窗
        $('.icon-quxiaoguanzhuren').click(function(){
            layer.open({
                type: 1,
                title: '请填写加入黑名单的信息：',
                skin: 'demo-class', //加上边框
                area: ['530px', '720px'], //宽高
                content: $("#black-list")
            });
        });
        laypage({
            cont: 'set-page',
            pages: 80,
            groups:3,
            skin: '#26a0fe',
            skip: true,
            first: false,
            last: false,
            // 触发分页后的回调，函数返回两个参数。
            //obj是一个object类型。包括了分页的所有配置信息。
            //first一个Boolean类，检测页面是否初始加载。非常有用，可避免无限刷新。
            jump: function(obj, first){
                //得到了当前页，用于向服务端请求对应数据
                var curr = obj.curr;
            }
        });
        $('.set-box .iconfont').click(function(){
            if( $(this).hasClass('icon-quxiao') ){
                $(this).removeClass('icon-quxiao').addClass('icon-tianjia');
                $(this).parent().siblings('.state').addClass('close-state').removeClass('open-state').text('未监管');
            }else{
                $(this).addClass('icon-quxiao').removeClass('icon-tianjia');
                $(this).parent().siblings('.state').addClass('open-state').removeClass('close-state').text('已监管');
            }
        });
        $(".content-r .icon-chakan").click(function(){
            window.location.href="../electricitySupplierDetails/electricitySupplierDetails.html";
        });
    });
});