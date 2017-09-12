/**
 * Created by yj on 2017/7/10.
 */
$(function() {
  changeNavTo('政府监督');

  //分页，表单，日历
  layui.use(['laypage', 'form', 'layedit', 'laydate'], function() {
    var laypage = layui.laypage;
    var form = layui.form();
  });
}) ;