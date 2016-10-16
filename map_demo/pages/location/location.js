var app = getApp()
Page({
  data:{
    point:{
      latitude: 37.423997,
      longitude: -122.092481
    },
    markers: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log( '地图定位接口getLocation还不能正常获取用户位置！' )
    var that = this;
    wx.getLocation({
        type: 'wgs84',
        success: function(res) {
            console.log("got it!")
            var latitude = res.latitude
            var longitude = res.longitude
            var speed = res.speed
            var accuracy = res.accuracy
            //var point = {
            //    latitude: latitude,
            //    longitude: longitude
            //}
            var markers = [{
                latitude: this.data.point.latitude,
                longitude: this.data.point.longitude,
                name: "地图定位",
                desc: "my current position"
            }]
            that.setData(markers)
            that.setData(point)
        }
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