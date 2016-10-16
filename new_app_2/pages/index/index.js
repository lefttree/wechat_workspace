//index.js
//获取应用实例
var app = getApp()

Page({
  data:{
    // text:"这是一个页面"
    motto: 'Hello Xiang',
    userInfo: {}
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("index --- onLoad")
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
    console.log("index --- onReady")
  },
  onShow:function(){
    // 页面显示
    console.log("index --- onShow")
  },
  onHide:function(){
    // 页面隐藏
    console.log("index --- onHide")
  },
  onUnload:function(){
    // 页面关闭
    console.log("index --- onUnload")
  }
})