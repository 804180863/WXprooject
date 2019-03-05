Page({
  data:{
    msg:'爱前端得大白'
  },
  onLoad:function(){
    setTimeout(() => {
      this.setData({
        msg: '你热爱前端'
      })
    }, 1000)
  },
  handleParent() {
    // 跳转页面到list
    wx.navigateTo({
      url: "/pages/list/list"
    })
  },
  onShareAppMessage: function () {
    alert('不允许')
  }
})
