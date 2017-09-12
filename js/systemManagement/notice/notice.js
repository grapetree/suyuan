$(function(){
    changeNavTo('系统管理', '通知公告');

    //分页，表单，日历
    layui.use(['laypage','form','laydate','layer'], function() {
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
        //调用日历
        $('#startDate').click(function () {
            laydate({
                elem: this,
                istime: true,
                format: 'YYYY-MM-DD'
            });
        });
        $('#endData').click(function () {
            laydate({
                elem: this,
                istime: true,
                format: 'YYYY-MM-DD'
            });
        });
        //查看页面
        $('.icon-chakan').click(function () {
            location.href = "./noticeCheck.html";
        });
        //新增通知
        $('.add-mess').click(function () {
            location.href = "./newAdd.html";
            return false;
        });
        //删除数据弹窗
        $('.icon-shanchu').on('click',function(){
            layer.confirm('您确定删除数据？', {
              title:'删除',
              btn: ['确定','取消'] //按钮
            }, function(){
              layer.closeAll();
            }, function(){
              layer.closeAll();
            });
        });
        //发布弹窗
        $('.icon-tianjia').click(function(){
            layer.open({
                type: 1,
                title: '发布',
                skin: 'demo-class',
                area: ['800px', '600px'], //宽高
                content: $("#release-box")
            });
        });
        //滚动条
        // $(".tablewrap").niceScroll({cursorcolor:"#b3d5f3"});

        $('.set-box .iconfont').click(function(){
            if( $(this).hasClass('icon-quxiao') ){
                $(this).removeClass('icon-quxiao').addClass('icon-tianjia');
                $(this).parent().siblings('.state').addClass('close-state').removeClass('open-state').text('未监管');
            }else{
                $(this).addClass('icon-quxiao').removeClass('icon-tianjia');
                $(this).parent().siblings('.state').addClass('open-state').removeClass('close-state').text('已监管');
            }
        });

    });
});