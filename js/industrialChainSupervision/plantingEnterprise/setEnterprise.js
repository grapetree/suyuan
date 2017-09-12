$(function(){
  changeNavTo('追溯监管', '企业监管');

  //分页，表单
  layui.use(['laypage','form','layer'], function() {
    var laypage = layui.laypage;
    var form = layui.form();
    var layer = layui.layer;
    //添加监管
    function add() {
        layer.open({
          type: 1,
          area: ['400px','310px'],
          title:'请选择企业类型',
          content: $('#select-type')
        });
    }
    laypage({
      cont: 'set-page',
      pages: 80,
      groups:3,
      skin: '#26a0fe',
      skip: true,
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
        add();  //引入添加监管
        $(this).addClass('icon-quxiao').removeClass('icon-tianjia');
        $(this).parent().siblings('.state').addClass('open-state').removeClass('close-state').text('已监管');
      }
    });
  });
});