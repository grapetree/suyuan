$(function(){
    changeNavTo('质量安全检测', '政府抽检监管');

    //分页，表单，上传，日历，弹出框
    layui.use(['form','laydate'], function() {
        var form = layui.form();
        var laydate = layui.laydate;

      form.on('select', function(data){
        console.log(data.value); //得到被选中的值
        data.value == '合格'?$('.textarea-disnone').hide():$('.textarea-disnone').show()
      });
    });

    //点击保存按钮跳转到政府抽检监管页面
    $(".save").click(function(){
        window.location.href="./governmentSamplingInspection.html";
    });
    //点击取消按钮跳转到政府抽检监管页面
    $(".cancel").click(function(){
        window.location.href="./governmentSamplingInspection.html";
    });
});
