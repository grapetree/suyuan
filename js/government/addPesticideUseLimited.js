/**
 * Created by yj on 2017/7/11.
 */
$(function(){

    closePage();

    //表单，日历, 上传
    layui.use(['form', 'layedit', 'laydate','upload'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
        form.on('submit', function(data){
            //返回form表单中的所有元素
            console.log(data);
        });
    })

});

function closePage(){
    $('.cancel').click(function(){
        window.location.href="./pesticideUseLimited.html"
    })
}

