let flag = true;
Page({
  data:{
    // text:"这是一个页面"
    color: "text-red"
  },
  click: function() {
      let color;
      console.log(flag)
      if (flag) {
          flag = false
          color = "text-red"
      } else {
          flag = true
          color = "text"
      }
      this.setData({
          color
      });
      console.log("我点")
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})