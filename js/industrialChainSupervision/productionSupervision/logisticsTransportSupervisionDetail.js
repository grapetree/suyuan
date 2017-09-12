$(function () {
  changeNavTo('政府监督');
  var map = new BMap.Map("detilesMaps");
  map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
  map.enableScrollWheelZoom(true);
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