/**
 * Created by ADMIN on 2017/7/4.
 */
$(function(){

    closePage();

    //表单，日历, 上传
    layui.use(['form', 'layedit', 'laydate','upload'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
    })

});

function closePage(){
    $('.cancel').click(function(){
        window.location.href="./productionGuiding.html"
    })
}
