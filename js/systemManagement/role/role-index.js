/**
 * Created by ADMIN on 2017/7/10.
 */
$(function(){
    changeNavTo('系统管理', '角色权限');

    //分页
    layui.use(['laypage', 'layer'], function() {
        var laypage = layui.laypage;
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
    })

    //跳转到新增角色页面
    $('.add').click(function () {
        location.href = './role-addRole.html';
    });
    //跳转到修改角色页面
    $('.icon-xiazai48').click(function () {
        location.href = './changeRole.html';
    });

    //删除数据弹窗
    $('.del').on('click',function(){
      layer.confirm('您确定删除数据？', {
        title: '删除',
        btn: ['确定','取消'] //按钮
      }, function(){
        layer.closeAll();
      }, function(){
        layer.closeAll();
      });
    });
});


