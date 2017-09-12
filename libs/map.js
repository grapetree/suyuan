console.log(new BMap.Map())
var map;
function myChart(params) {
  console.log(params)
  map = new BMap.Map(params.dom,{enableMapClick:false});
  map.centerAndZoom(new BMap.Point(params.centerPoint[0],params.centerPoint[1]), 17);
  map.enableScrollWheelZoom();
  var myStyleJson=[
    {
      "featureType": "building",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#d0e5fd",
        "visibility": "on"
      }
    },
    {
      "featureType": "green",
      "elementType": "geometry",
      "stylers": {
        "color": "#d0e5fd"
      }
    },
    {
      "featureType": "land",
      "elementType": "geometry",
      "stylers": {
        "color": "#ffffff"
      }
    },
    {
      "featureType": "arterial",
      "elementType": "geometry",
      "stylers": {
        "color": "#cfe4fc"
      }
    },
    {
      "featureType": "all",
      "elementType": "labels",
      "stylers": {
        "color": "#ff0000",
        "visibility": "off"
      }
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": {
        "color": "#d0e5fd"
      }
    },
    {
      "featureType": "manmade",
      "elementType": "geometry.fill",
      "stylers": {
        "color": "#d0e5fd",
        "visibility": "on"
      }
    },
    {
      "featureType": "highway",
      "elementType": "geometry",
      "stylers": {
        "color": "#ffffff",
        "visibility": "on"
      }
    },
    {
      "featureType": "railway",
      "elementType": "geometry",
      "stylers": {
        "color": "#ffffff",
        "visibility": "on"
      }
    }

  ];
  map.setMapStyle({styleJson: myStyleJson });
  var pointsData = params.pointsData;
  addPoints(pointsData);
}
function addPoints(obt) {

  if(obt.zz){
    $.each(obt.zz,function(i,v){
      //添加用户王帅
      console.log(v)
      var sContent =
        "<div>"+v.sContent+"</div>";
      var icon = new BMap.Icon("../../../img/map1x40.png", new BMap.Size(33, 40));
      var point = new BMap.Point(v.point[0],v.point[1]);
      var marker = new BMap.Marker(point, {icon: icon});
      var infoWindow = new BMap.InfoWindow(sContent, {offset: new BMap.Size(-10, -10)});  // 创建信息窗口对象
      //当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件。
      map.addOverlay(marker);
      marker.addEventListener("mouseover", function () {
        //map.centerAndZoom(point, 11);
        this.openInfoWindow(infoWindow);
      });
      marker.addEventListener("mouseout", function () {
        //map.centerAndZoom(point, 11);
        this.closeInfoWindow(infoWindow);
      });
      marker.addEventListener("click", function () {
        // 跳转详情页面
        location.href="./enterpriseDetails.html";
      });
    })
  }
  if(obt.jg){
    $.each(obt.jg,function(i,v){
      //添加用户王帅
      var sContent =
        "<div>"+v.sContent+"</div>";
      var icon = new BMap.Icon("../../../img/map3x40.png", new BMap.Size(33, 40));
      var point = new BMap.Point(v.point[0],v.point[1]);
      var marker = new BMap.Marker(point, {icon: icon});
      var infoWindow = new BMap.InfoWindow(sContent, {offset: new BMap.Size(-10, -10)});  // 创建信息窗口对象
      //当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件。
      map.addOverlay(marker);
      marker.addEventListener("mouseover", function () {
        //map.centerAndZoom(point, 11);
        this.openInfoWindow(infoWindow);
      });
      marker.addEventListener("mouseout", function () {
        //map.centerAndZoom(point, 11);
        this.closeInfoWindow(infoWindow);
      });
      marker.addEventListener("click", function () {
        // 跳转详情页面
        location.href="./enterpriseDetails.html";
      });
    })
  }
  if(obt.pf){
    $.each(obt.pf,function(i,v){
      //添加用户王帅
      console.log(v)
      var sContent =
        "<div>"+v.sContent+"</div>";
      var icon = new BMap.Icon("../../../img/map5x40.png", new BMap.Size(33, 40));
      var point = new BMap.Point(v.point[0],v.point[1]);
      var marker = new BMap.Marker(point, {icon: icon});
      var infoWindow = new BMap.InfoWindow(sContent, {offset: new BMap.Size(-10, -10)});  // 创建信息窗口对象
      //当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件。
      map.addOverlay(marker);
      marker.addEventListener("mouseover", function (e) {
        //map.centerAndZoom(point, 11);
        console.log(e)
        var top = e.clientX,
          left = e.clientY;
        $(".BMap_pop").css({"top":top+"px!important","left":left+"px!important"})
        console.log(top,left)
        this.openInfoWindow(infoWindow);
      });
      marker.addEventListener("mouseout", function () {
        //map.centerAndZoom(point, 11);
        this.closeInfoWindow(infoWindow);
      });
      marker.addEventListener("click", function () {
        // 跳转详情页面
        location.href="./enterpriseDetails.html";
      });
    })
  }
  if(obt.xs){
    $.each(obt.xs,function(i,v){
      //添加用户王帅
      var sContent =
        "<div>"+v.sContent+"</div>";
      var icon = new BMap.Icon("../../../img/map4x40.png", new BMap.Size(33, 40));
      var point = new BMap.Point(v.point[0],v.point[1]);
      var marker = new BMap.Marker(point, {icon: icon});
      var infoWindow = new BMap.InfoWindow(sContent, {offset: new BMap.Size(-10, -10)});  // 创建信息窗口对象
      //当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件。
      map.addOverlay(marker);
      marker.addEventListener("mouseover", function () {
        //map.centerAndZoom(point, 11);
        this.openInfoWindow(infoWindow);
      });
      marker.addEventListener("mouseout", function () {
        //map.centerAndZoom(point, 11);
        this.closeInfoWindow(infoWindow);
      });
      marker.addEventListener("click", function () {
        // 跳转详情页面
        location.href="./enterpriseDetails.html";
      });
    })
  }
  if(obt.ds){
    $.each(obt.ds,function(i,v){
      //添加用户王帅
      var sContent =
        "<div>"+v.sContent+"</div>";
      var icon = new BMap.Icon("../../../img/map2x40.png", new BMap.Size(33, 40));
      var point = new BMap.Point(v.point[0],v.point[1]);
      var marker = new BMap.Marker(point, {icon: icon});
      var infoWindow = new BMap.InfoWindow(sContent, {offset: new BMap.Size(-10, -10)});  // 创建信息窗口对象
      //当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件。
      map.addOverlay(marker);
      marker.addEventListener("mouseover", function () {
        //map.centerAndZoom(point, 11);
        this.openInfoWindow(infoWindow);
      });
      marker.addEventListener("mouseout", function () {
        //map.centerAndZoom(point, 11);
        this.closeInfoWindow(infoWindow);
      });
      marker.addEventListener("click", function () {
        // 跳转详情页面
        location.href="./electricitySupplierDetails.html";
      });
    })
  }

}