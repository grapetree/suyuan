/**
 * Created by ADMIN on 2017/7/4.
 */
$(function(){
    changeNavTo('追溯监管', '生产环节监管','生产指导');

    //分页，表单，日历
    layui.use(['laypage','form', 'layedit', 'laydate'], function() {
        var laypage = layui.laypage;
        var form = layui.form();
        var laydate = layui.laydate;

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
        laypage({
            cont: 'layerPage',
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

        //弹出框
        $('.dispatch').on('click', function(){
            layer.open({
                type: 1,
                title: '请选择接收企业',
                area: ['793px', '565px'],
                btn: ['确定','取消'],
                shadeClose: true, //点击遮罩关闭
                content: $('#editLayer_box')
            });
        });

    });



});



