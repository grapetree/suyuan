$(function(){
    changeNavTo('追溯监管', '企业监管');

    //分页，表单，日历
    layui.use(['laypage','form', 'layedit', 'laydate','layer'], function() {
        var laypage = layui.laypage;
        var form = layui.form();
        var laydate = layui.laydate;
        var layer = layui.layer;

        //调用分页
        laypage({
            cont: 'page',
            pages: 100,
            groups:5,
            skin: '#26A0FE',
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
  console.log(new BMap.Map())
  var pointsData = {

    zz:[
      {
        sContent: 'xxx种植企业',
        point: [117.973468,40.193607],
        iconSize: [33, 40]
      }
    ],
    jg:[
      {
        sContent: 'xxx加工企业',
        point: [117.975965,40.19234],
        iconSize: [33, 40]
      },
      {
        sContent: 'xxx加工企业2',
        point: [117.975606,40.197134],
        iconSize: [33, 40]
      }
    ],
    pf:[
      {
        sContent: 'xxx批发企业',
        point: [117.975319,40.194406],
        iconSize: [33, 40]
      },
      {
        sContent: 'xxx批发企业2',
        point: [117.980206,40.195701],
        iconSize: [33, 40]
      }
    ],
    xs:[
      {
        sContent: 'xxx销售企业',
        point: [117.974492,40.192643],
        iconSize: [33, 40]
      }
    ],
    ds:[
      {
        sContent: 'xxx电商企业',
        point: [117.974887,40.193745],
        iconSize: [33, 40]
      }
    ]
  };
    var datas = {
        dom: 'myChart',
      centerPoint: [117.975175,40.193717],
      pointsData: pointsData

    };
    myChart(datas);

    //tab切换获取tab
  $('.select-type li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var selectType = $(this).text();
    alert(selectType);
  })

});

