$(function(){
    changeNavTo('质量安全检测', '企业自检监管');

    //分页，表单，上传，日历，弹出框
    layui.use(['form','laydate','laypage'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
        var laypage = layui.laypage;


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
    });

    //点击查看按钮跳转到详情页面
    $(".check").click(function(){
        window.location.href="./companyOwnCheck-details.html";
    })
});
