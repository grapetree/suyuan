$(function(){
    changeNavTo('质量安全检测', '农残检测上报管理');

    //分页，表单，上传，日历，弹出框
    layui.use(['form','laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    });

    //点击提交按钮跳转到上报管理页面
    $(".save").click(function(){
        window.location.href="./reportManagement.html"
    });
    //点击取消按钮跳转到上报管理页面
    $(".cancel").click(function(){
        window.location.href="./reportManagement.html"
    })
});
