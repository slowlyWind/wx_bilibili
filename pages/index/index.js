Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设置当前选中下标
    currentIndexNav:0,

    //设置导航数据
    navList:[],

    //设置轮播图数据
    swiperList:[],

    //设置视频列表数据
    videosList:[]
  },

  //获取首页导航数据
  getNavList(){
    let that = this
    wx.request({
        url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
        success(res){
            if(res.data.code===0){
                that.setData({
                    navList:res.data.data.navList
                })
            }
        }
    })
  },

  //获取首页轮播图数据
  getSwiperList(){
      let that = this
      wx.request({
          url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
          success(res){
            if(res.data.code===0){
                that.setData({
                    swiperList:res.data.data.swiperList
                })
            }
          }
      })  
  },

  //获取视频列表数据
  getVideosList(){
      let that = this
      wx.request({
          url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
          success(res){
            if(res.data.code===0){
                that.setData({
                    videosList:res.data.data.videosList
                })
            }
          }
      })
  },

  //导航栏绑定点击事件
  activeNav(e){
      this.setData({
          currentIndexNav:e.target.dataset.index
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用导航数据函数
    this.getNavList()

    //调用轮播图数据
    this.getSwiperList()

    //调用视频列表数据
    this.getVideosList()
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