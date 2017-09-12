$(function() {
    changeNavTo('政府监督');

    //分页，表单，日历
    layui.use(['laypage', 'form', 'layedit', 'laydate'], function() {
        var laypage = layui.laypage;
        var form = layui.form();
        var laydate = layui.laydate;


    })
//    查看更多
    $(".detiles-info-recalls").hide();
    $(".blacklist-candel-recall span").click(function(){
        $(".detiles-info-recalls").show();

    });
});/**
 * Created by admin on 2017/7/10.
 */
