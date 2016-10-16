var app = getApp()
app.globalData.timeline.data
Page({
  data:{
    // text:"这是一个页面"
    item: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
        item: app.globalData.timeline.data[Number(options.index)]
    })
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