$(function(){
    changeNavTo('系统管理', '用户管理');
	layui.use('form');
	$('.cancel').click(function () {
      location.href='./usersManagement.html';
      return false;
    })
});
