$(function () {
    changeNavTo('追溯监管');
    $(".go-back .layui-btn").click(function(){
        window.location.href="../plantingEnterprise/plantingEnterprise.html";
    });
    var map = new BMap.Map("detilesMaps");
    map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
    map.enableScrollWheelZoom(true);
    //加入黑名单弹窗
    layui.use('layer',function () {
      $('.black-name-list').click(function(){
        layer.open({
          type: 1,
          title: '请填写加入黑名单的信息：',
          skin: 'demo-class', //加上边框
          area: ['530px', '721px'], //宽高
          content: $("#black-list")
        });
    })

  });

    });

    function theLocation(x,y) {
        if (x != "" && y != "") {
            map.clearOverlays();
            var new_point = new BMap.Point(x, y);
            var marker = new BMap.Marker(new_point); // 创建标注
            map.addOverlay(marker); // 将标注添加到地图中
            map.panTo(new_point);
        }
}