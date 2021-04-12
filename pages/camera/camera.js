// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.onAccelerometerChange(({
      x,
      y,
      z
    }) => {
      if (Math.abs(x) > 0.2 || Math.abs(y) > 0.2) {
        wx.showToast({
          title: '请保持水平',
          duration: 300
        })
      } else {
        wx.showToast({
          title: '拍照参考线',
          icon: 'none',
          duration: 300
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.hideToast()
    wx.offAccelerometerChange()

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