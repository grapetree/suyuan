/**
 * Created by ADMIN on 2017/7/4.
 */
$(function(){
    //表单，日历
    layui.use(['form', 'laydate','laypage'], function() {
        var form = layui.form();
        var laydate = layui.laydate;
        var laypage = layui.laypage;

        laypage({
            cont: 'layerPage',
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
        laypage({
            cont: 'layerPage2',
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
    });

    popOut(); //投入品禁限用目录
    popOut2(); //推荐/不推荐投入品弹出框
    slideToggle(); //进行指导  编辑指导  取消  提交
});

function popOut(){
    //投入品禁限用目录
    $('.inputsCata').on('click', function(){
        layer.open({
            type: 1,
            title: '推荐/不推荐投入品',
            area: ['914px', '620px'],
            btn: ['确定','取消'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box')
        });
    });
    $('.tabNavItem ').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
}
function popOut2(){
    //推荐/不推荐投入品弹出框
    $('.tuijianCata').on('click', function(){
        layer.open({
            type: 1,
            title: '推荐/不推荐投入品',
            area: ['914px', '620px'],
            btn: ['确定','取消'],
            shadeClose: true, //点击遮罩关闭
            content: $('#editLayer_box2')
        });
    });
    $('.tabNavItem ').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
}
function slideToggle(){
    //进行指导
    $(".guideBtn").click(function() {
        $(this).parent().next('.form-item').slideDown();
        // var oForm ='<div class="form-item" style="display: block;">'+
        //         '<form class="layui-form">'+
        //             '<ul class="cf">'+
        //                 '<li class="one cf">' +
        //                     '<span class="l-title fl">化肥名称：</span>' +
        //                     '<textarea class="c-area fl"></textarea>' +
        //                 '</li>'+
        //                 '<li class="oneHarf">' +
        //                     '<span class="l-title">指导人：</span>' +
        //                     '<input class="c-input guider" type="text" placeholder="">' +
        //                 '</li>'+
        //                 '<li class="oneHarf cf">' +
        //                     '<span class="l-title fl">指导日期：</span>'+
        //                         '<div class="start fl">' +
        //                             '<input class="c-input guideDate" type="text" onclick="layui.laydate({elem: this,  istime: true, format: "YYYY-MM-DD "})">' +
        //                             '<i class="cal"></i>' +
        //                         '</div>'+
        //                 '</li>'+
        //             '</ul>'+
        //             '<div class="save-cancel">' +
        //                 '<span class="search save" lay-submit="lay-submit">提交</span>' +
        //                 '<span class="add cancel">取消</span>' +
        //             '</div>'+
        //         '</form>'+
        //     '</div>';
        // $(this).parent().after(oForm);

    });
    //编辑指导
    $(".editBtn").click(function() {
        var operator=$(this).parent().siblings('.guidance').find('.guider').html();
        var guideDate=$(this).parent().siblings('.guidance').find('.guideDate').html();
        $(this).parent().next('.form-item').slideDown();
        $(this).parent().next('.form-item').find('.guider').val(operator);
        $(this).parent().next('.form-item').find('.guideDate').val(guideDate);
    });
    //取消
    $('.cancel').click(function() {
        $(this).parent().parent().parent().slideUp();
    });
    //提交
    $('.save').click(function() {
        var guider=$(this).parent().siblings().find('.guider').val();
        var guideDate=$(this).parent().siblings().find('.guideDate').val();
        $(this).parent().parent().parent().siblings('.guidance').find('.guider').html(guider);
        $(this).parent().parent().parent().siblings('.guidance').find('.guideDate').html(guideDate);
        $(this).parent().parent().parent().slideUp();

        var oDiv= ' <div class="cf guidance">' +
                '<span class="fl">指导意见</span>'+
                '<ul class="suggestsList fl cf">'+
                    '<li class="listItem fl">'+
                        '<div>' +
                            '<span>指导人：</span>' +
                            '<span class="guider">'+guider+'</span>' +
                        '</div>'+
                    '</li>'+
                    '<li class="listItem fl">'+
                        '<div>' +
                            '<span>指导时间：</span>' +
                            '<span class="guideDate">'+guideDate+'</span>' +
                        '</div>'+
                    '</li>'+
                    '<li class="listItem fl w60per">'+
                        '<div>' +
                            '<span class="pesticideReason">农药的生产厂家有问题，建议更换农药</span>' +
                        '</div>'+
                    '</li>'+
                '</ul>'+
            '</div>';

            $(this).parent().parent().parent('.form-item').after(oDiv);

            // var n=$(this).parent('.suggestsConItem').children('.guidance').length;
            // console.log(n)

    });
}

