

//数据3
var dataSet = [{
    "name": "九次方大数据信息集团有限公司",
    "upPrice": 3180000,
    
    "downPrice": 180000.344,
    "children": [{
        "name": "海淀菊园1052号仓库2",
        "upPrice": 18000,
        "downPrice": 18000,
        "children": [{
            "name": "北京超市发连锁股份有限公司3",
            "upPrice": 18000,
            "downPrice": 18000,
            "children": [{
                "name": "北京超市发连锁股份有限公司333",
                "upPrice": 18000,
                "choose":true,
                "downPrice": 18000,
                "children": []
            }, {
                "name": "北京超市发连锁股份有限公司444",
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }, {
                "name": "北京超市发连锁股份有限公司555",
                "upPrice": 78000,
                "downPrice": 18000,
                "children": [{
                    "name": "北京超市发连锁股份有限公司555",
                    "upPrice": 78000,
                    "downPrice": 18000,
                    "children": []
                }]
            }]
        }, {
            "name": "北京超市发连锁股份有限公司3 - 1",
            "upPrice": 68000,
            "downPrice": 18000,
            "children": []
        }]
    }, {
        "name": "北京超市发连锁股份有限公司2-only",
        "upPrice": 58000,
        "downPrice": 18000,
        "children": []

    }, {
        "name": "海淀菊园1052号仓库2",
        "upPrice": 48000,
        "downPrice": 18000,
        "children": [{
            "name": "北京超市发连锁股份有限公司3-black",
            "upPrice": 78000,
            "downPrice": 18000,
            "children": [{
                "name": "北京超市发连锁股份有限公司4-black",
                "upPrice": 38000,
                "downPrice": 18000,
                "children": []
            }, {
                "name": "北京超市发连锁股份有限公司4-black",
                "upPrice": 18100,
                "downPrice": 17000,
                "children": []
            }]
        }]
    }, {
        "name": "北京超市发连锁股份有限公司2●",
        "upPrice": 18000,
        "downPrice": 18000,
        "children": [{
            "name": "北京超市发连锁股份有限公司3●",
            "upPrice": 18000,
            "downPrice": 18000,
            "children": [{
                "name": "北京超市发连锁股份有限公司4",
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }]
        }, {
            "name": "北京超市发连锁股份有限公司3-red●",
            "upPrice": 18000,
            "downPrice": 18000,
            "children": [{
                "name": "北京超市发连锁股份有限公司4-red●",
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }, {
                "name": "北京超市发连锁股份有限公司4-red●",
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }]
        }]
    }]
}];

//测试
var dom = document.getElementById("container");
var option = {
    itemWidth: 350, //公司与公司的横向距离,不设置默认为350
    itemHeight: 150, //公司与公司的纵向距离,不设置默认为150
    imageCity: "../../../img/city.png", //图片路径,不设置默认为./images/city.png
    imageUp: "../../../img/upArrow.png", //图片路径,不设置默认为./images/upArrow.png
    imageDown: "../../../img/downArrow.png", //图片路径,不设置默认为./images/downArrow.png
    imageCityRed:"../../../img/cityRed.png"
};
createTreeCharts(dom, dataSet, option);
//createTreeCharts(document.getElementById("container"), dataSet);