$(function(){
    changeNavTo('系统管理', '角色权限');


     layui.use('form');
    //滚动条配置参数
    $('.treeCon').niceScroll({
        cursorcolor:"#b4ceec",
        cursorwidth:'10px',
        grabcursorenabled:'leave',
        railpadding: { top:0, right:0, left:-10, bottom:0 }
    });
    var setting = {
        view: {
            selectedMulti: false
        },
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        callback: {
            onCheck: onCheck
        }
    };
    var zNodes =[
        { id:1, pId:0, name:"全部", open:true},
        { id:11, pId:1, name:"生产管理",open:true},
        { id:111, pId:11, name:"生产计划管理", open:true},
        { id:112, pId:11, name:"农业活动管理", checked:true, open:true},
        { id:1111, pId:111, name:"生产计划维护", open:true},
        { id:11111, pId:1111, name:"增"},
        { id:11112, pId:1111, name:"删"},
        { id:11113, pId:1111, name:"改"},
        { id:11114, pId:1111, name:"查"},
        { id:1112, pId:111, name:"生产计划历史", open:true},
        { id:11111, pId:1112, name:"增"},
        { id:11112, pId:1112, name:"删"},
        { id:11113, pId:1112, name:"改"},
        { id:11114, pId:1112, name:"查"},
        { id:1113, pId:111, name:"生产计划日历", open:true},
        { id:11111, pId:1113, name:"增"},
        { id:11112, pId:1113, name:"删"},
        { id:11113, pId:1113, name:"改"},
        { id:11114, pId:1113, name:"查"},
        { id:1121, pId:112, name:"农事操作分类", open:true},
        { id:11211, pId:1121, name:"增"},
        { id:11212, pId:1121, name:"删"},
        { id:11213, pId:1121, name:"改"},
        { id:11214, pId:1121, name:"查"},
    ];
    var clearFlag = false;
    function onCheck(e, treeId, treeNode) {
        count();
        if (clearFlag) {
            clearCheckedOldNodes();
        }
    }
    function clearCheckedOldNodes() {
        var zTree = $.fn.zTree.getZTreeObj("operatTree"),
            nodes = zTree.getChangeCheckedNodes();
        for (var i=0, l=nodes.length; i<l; i++) {
            nodes[i].checkedOld = nodes[i].checked;
        }
    }
    function count() {
        var zTree = $.fn.zTree.getZTreeObj("operatTree"),
            checkCount = zTree.getCheckedNodes(true);
        var dataObj = [];
        $.each(checkCount,function(i,v){
            dataObj.push(v.name)
        });
        console.log(dataObj)
    }
    function createTree() {
        $.fn.zTree.init($("#operatTree"), setting, zNodes);
        count();
        clearFlag = $("#last").attr("checked");
    }

    $(document).ready(function(){
        createTree();
        $("#init").bind("change", createTree);
        $("#last").bind("change", createTree);
    });
    //取消新建
  $('.cancel').click(function () {
    location.href='./role-index.html';
    return false;
  })
});


