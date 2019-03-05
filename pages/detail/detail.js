// pages/detail/detail.js
let listDatas = require('../../datas/list-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    isCollected: false
  },
  
  handleCollection(){
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })
    let title = isCollected ? '收藏成功' : '取消收藏';
    wx.showToast({
      title: title,
      icon: 'success',
      duration: 2000
    })
    let index =this.data.index;
    let obj = wx.getStorageSync('isCollected');
    obj = obj ? obj : {};
    obj[index] = isCollected;
    wx.setStorage({
      key: 'isCollected',
      data: obj
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index =options.index;
    this.setData({
      detailObj:listDatas.list_data[index],
      index
    })
    //读取数据到本地显示
    let oldObj = wx.getStorageSync('isCollected')
    if(oldObj[index]){
      this.setData({
        isCollected:true
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})