$(function () {

  //找回密码下一步
  $('.next-btn1 .layui-btn').click(function () {

    $(this).closest('.ver-box').hide().siblings('.select-way').show();
  })
  //切换到选择手机短信验证方式
  $('.select-mobile').click(function () {
    $('.step.cf li').eq(0).removeClass('current').next().addClass('current');
    $(this).parent().hide().siblings('.mobile-mess').show();
  });
  //切换到选择邮箱验证方式
  $('.select-email').click(function () {
    $('.step.cf li').eq(0).removeClass('current').next().addClass('current');
    $(this).parent().hide().siblings('.email-mess').show();
  });
  //切换到选择验证方式后下一步
  $('.next-btn2 .layui-btn').click(function () {
    $('.step.cf li').eq(1).removeClass('current').next().addClass('current');
    $(this).parent().parent().hide().siblings('.new-password').show();
  });
  //修改完密码返回登录页确定按钮
  $('.next-btn3 .layui-btn').click(function () {
    alert('返回登录');
    location.href="./login.html";
  })
})