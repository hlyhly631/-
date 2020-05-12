// pages/Statistics/Statistic.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    studentdata:[],
    list: [],
    playcard:[],
    username:"",
    result:[]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var studentdata = wx.getStorageSync('studentdata')
    var playcard = wx.getStorageSync('playcard')
    var username = wx.getStorageSync('username')
    wx.request({
      url: 'http://127.0.0.1:8000/find_student_playcard/',	//获取服务器地址，此处为本地地址
      header: {
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "POST",
      data: {		//向服务器发送的信息
        username: username,
      },
      success: res => {
        console.log(username)
        if (res.statusCode == 200) {
          //转成json字符串
          // var r = res.data
          // var citystr = JSON.stringify(r)
          // wx.setStorageSync('username', this.data.username)

          // //转成json对象
          // var cityjson = JSON.parse(citystr);
          // wx.setStorageSync('studentdata', res.data.stud)
          // wx.setStorageSync('playcard', res.data.playcard)
          this.setData({
            result: res.data.playcard,	//服务器返回的结果
          })

          console.log(res.data.playcard)
        }
      }


    })

  // this.setData({
  //   playcard: playcard,
  //   studentdata: studentdata
  //     // list: cityjson
  //   })
  //   console.log(typeof(studentdata))
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