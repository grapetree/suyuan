$(function(){

    changeNavTo('系统管理', '组织机构');

    layui.use('form');
    //滚动条
	$('.ztree-demo').niceScroll({cursorcolor:"#b3d5f3"});

	//  树形菜单
    $('span.remove').attr('title','删除');
    var setting = {
      edit: {
        enable: true,
        showRenameBtn: false
      },
      data: {
        simpleData: {
          enable: true
        }
      },
      callback: {
        beforeDrag: beforeDrag
      }
    };

    var zNodes =[
      { id:1, pId:0, name:"组织机构", open:true},
      { id:11, pId:1, name:"农业部",open:true},
      { id:12, pId:1, name:"市场监督局",open:true},
      { id:13, pId:1, name:"林业局",open:true},
      { id:111, pId:11, name:'生产一部'},
      { id:112, pId:11, name:"生产二部",},
      { id:121, pId:12, name:"市场一部"},
      { id:122, pId:12, name:"市场二部"},
      { id:123, pId:12, name:"市场三部"},
      { id:131, pId:13, name:"林业一部"},
      { id:132, pId:13, name:"林业二部"},
      { id:133, pId:13, name:"林业四部"}
    ];

    function beforeDrag(treeId, treeNodes) {
      return false;
    }

    $(document).ready(function(){
      $.fn.zTree.init($("#ztree"), setting, zNodes);
    });
});