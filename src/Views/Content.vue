<template lang="">
    <div class="main-container">
        <div class="main-header">
            <a class="menu-link-main" href="#">猜你喜欢</a>
            <div class="header-menu">
                <router-link to="/" active-class="is-active">发现</router-link>
                <router-link to="/Leaderboard" active-class="is-active">排行榜</router-link>
                <router-link to="/singerlist" active-class="is-active">关注</router-link>
                <!-- <router-link to="/dayrec" active-class="is-active">每日推荐</router-link> -->
            </div>
        </div>
    <div class="content-wrapper">
    <swiper/>
    </div>
            <div class="content-section">
                <div class="content-section-title">热门推荐</div>
                <div class="section">
                    <!-- <div class="section-title">{{item.name}}</div> -->
                    <practice :contentList="new_list"></practice>
                </div>
            </div>
            <div class="content-section">
                <div class="content-section-title">精选好物</div>
                <!-- <div class="apps-card">
                    <div class="block" v-for="item in indexsonglist" @click="openplaylist(item.id)">
                        <el-image class="songlistimg app-card" :src="item.coverImgUrl"></el-image>
                        <h5 class="songlisttext">{{item.name}}</h5>
                    </div>
                </div> -->
                <div class="section2">
                    <!-- <div class="section-title">{{item.name}}</div> -->
                    <practice :contentList="new_list2"></practice>
                </div>
                <!-- //分页
                <div class="block">
                    <el-pagination  @current-change="handleCurrentChange"
                        :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper"
                        :total="count" :background="true">
                    </el-pagination>
                </div> -->
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import { playMusicApi, getLyricApi, getdetailApi, getsongList, getnewmusic } from '../request/api.js'
   import swiper from '../components/swiper.vue'
   import practice from '../components/practice.vue'
    export default {
        components:{
           swiper,
           practice
        },
        data() {
            return {
                //歌单数据
                indexsonglist: [],
                //初始页
                currentPage: 1,
                count: "",
                //新歌曲推荐
                newmusic: [],
                // 歌曲数组
                musicList: [],
                // 歌曲地址
                musicUrl: "",
                DownloadSongUrl: "",
                activeName: 'second',
                //音乐地址
                songurladd: null,
                //歌词
                songlrc: "",
                // 热门推荐商品信息数据
                firstgoodsList: [
                    // 每一个对象中存储的都是一个商品的信息
                    { name : '这是第一个商品' , list : [ {name : '这是第一个商品的名字',price : 114514},{name : '这是第二个商品的名字',price : 114514},{name : '这是第三个商品的名字',price : 114514},{name : '这是第四个商品的名字',price : 114514},{name : '这是第五个商品的名字',price : 114514},{name : '这是第六个商品的名字',price : 114514},{name : '这是第七个商品的名字',price : 114514},{name : '这是第八个商品的名字',price : 114514},{name : '这是第九个商品的名字',price : 114514},{name : '这是第十个商品的名字',price : 114514},{name : '这是第十一个商品的名字',price : 114514},{name : '这是第1个商品的名字',price : 114514},{name : '这是第2个商品的名字',price : 114514},{name : '这是第3个商品的名字',price : 114514},{name : '这是第4个商品的名字',price : 114514},{name : '这是第5个商品的名字',price : 114514},{name : '这是第6个商品的名字',price : 114514},{name : '这是第7个商品的名字',price : 114514},{name : '这是第8个商品的名字',price : 114514},{name : '这是第9个商品的名字',price : 114514},{name : '这是第10个商品的名字',price : 114514},{name : '这是第11个商品的名字',price : 114514} ] }
                ],
                // 精选好物商品信息数据
                secondgoodsList: [
                    { name : '这是第一个商品' , list : [ {name : '这是第一个商品的名字',price : 114514},{name : '这是第二个商品的名字',price : 114514},{name : '这是第三个商品的名字',price : 114514},{name : '这是第四个商品的名字',price : 114514},{name : '这是第五个商品的名字',price : 114514},{name : '这是第六个商品的名字',price : 114514},{name : '这是第七个商品的名字',price : 114514},{name : '这是第八个商品的名字',price : 114514},{name : '这是第九个商品的名字',price : 114514},{name : '这是第十个商品的名字',price : 114514},{name : '这是第十一个商品的名字',price : 114514},{name : '这是第1个商品的名字',price : 114514},{name : '这是第2个商品的名字',price : 114514},{name : '这是第3个商品的名字',price : 114514},{name : '这是第4个商品的名字',price : 114514},{name : '这是第5个商品的名字',price : 114514},{name : '这是第6个商品的名字',price : 114514},{name : '这是第7个商品的名字',price : 114514},{name : '这是第8个商品的名字',price : 114514},{name : '这是第9个商品的名字',price : 114514},{name : '这是第10个商品的名字',price : 114514},{name : '这是第11个商品的名字',price : 114514} ] }
                ],
                // 热门推荐
                new_list : [],
                // 精选好物
                new_list2 : []

            }
        },
        created() {
            this.showsongList();
            this.newmusicc();
            this.randomNewListFirst(this.firstgoodsList[0].list);
            this.randomNewListSecond(this.secondgoodsList[0].list)
        },
        methods: {
            open4(messges) {
                this.$notify.error({
                    title: '错误',
                    message: `《${messges}》  该歌曲无版权，暂无法播放,或者重新点击播放！`
                });
            },
            //获取歌单
            showsongList(page = 1) {
                getsongList({
                    limit: 15,
                    offset: (page - 1) * 15
                }).then(res => {
                    this.indexsonglist = res.data.playlists;
                    this.count = res.data.total;
                    // console.log(this.count)
                    // console.log(this.indexsonglist)
                })
            },
            //新歌推荐
            newmusicc() {
                getnewmusic({
                }).then(res => {
                    this.newmusic = res.data.result;
                    // console.log(this.newmusic)
                    //计算歌曲时间
                    for (let i = 0; i < this.newmusic.length; i++) {
                        let min = parseInt(this.newmusic[i].song.duration / 1000 / 60)
                        let sec = parseInt((this.newmusic[i].song.duration / 1000) % 60)
                        if (min < 10) {
                            min = '0' + min
                        }
                        if (sec < 10) {
                            sec = '0' + sec
                        }
                        this.newmusic[i].song.duration = min + ":" + sec;
                        // console.log(this.newmusic[i].song.duration)
                    }
                })
            },

            //获取播放音乐链接
            playMusic(id) {
                return playMusicApi({
                    id
                })
            },
            getlr(id) {
                //获取歌词
                return getLyricApi({
                    id
                })
            },
            getdta(id) {
                // 获取歌曲信息
                return getdetailApi({
                    id
                })
            },


            runapi(id) {
                //歌曲不同步
                var _this = this;
                this.$axios.all([_this.playMusic(id), _this.getlr(id), _this.getdta(id)]).then(_this.$axios.spread(function (res1, res2, res3) {
                    let songurl = res1.data.data[0].url;
                    let songname = res3.data.songs[0].name
                    let songarname = res3.data.songs[0].ar[0].name
                    let songpicurl = res3.data.songs[0].al.picUrl
                    let musiclrc = res2.data.lrc.lyric;
                    // console.log("第一个" + res1);
                    // console.log("第二个" + res2);
                    // console.log("第三个" + res3);

                    if (songurl != null) {
                        _this.$store.commit("addsong", {
                            amount1: songname,
                            amount2: songarname,
                            amount3: songurl,
                            amount4: songpicurl,
                            amount5: musiclrc,
                        });
                        musiclrc = "",
                            songurl = null
                    } else {
                        _this.open4(songname);
                    }
                }))

            },




            DownloadSong(id) {
                playMusicApi({
                    id: id
                }).then(res => {
                    if (res.data.data[0].url != null) {
                        this.DownloadSongUrl = res.data.data[0].url;
                    } else {
                        alert("无版权，无法下载");
                    }
                });
            },
            playMV(mvid, page = 1) {
                //  this.$router.push({ path:'/search',query:{keyworks:this.searchvalue}})
                this.$router.push({ path: '/playmv', query: { mvid: mvid } })
            },
            openplaylist(playlistid) {
                this.$router.push({ path: '/Playlist', query: { playlistid: playlistid } })
            },
            flyawayar(id) {
                this.$router.push({ path: '/album', query: { sgingid: id } })
            },
            // 对数组进行随机排序
            shuffle(arr) {
                var len = arr.length;
                for (var i = 0; i < len - 1; i++) {
                var index = parseInt(Math.random() * (len - i));
                var temp = arr[index];
                arr[index] = arr[len - i - 1];
                arr[len - i - 1] = temp;
                }
                return arr;
            },
            // "热门推荐"中用于展示商品数据的数组
            randomNewListFirst(list) {
                let i = 0
                let list_value = ''
                let x = 0
                while (i<10){
                this.shuffle(list)
                list_value = ''
                x=Math.random() * 10
                list_value = list[Math.floor(x)]
                this.new_list.push(list_value)
                list.splice(Math.floor(x),1)
                i = i + 1
                }
                
            },
            // "精选好物"中用于展示商品数据的数组
            randomNewListSecond(list) {
                let i = 0
                let list_value = ''
                let x = 0
                while (i<10){
                this.shuffle(list)
                list_value = ''
                x=Math.random() * 10
                list_value = list[Math.floor(x)]
                this.new_list2.push(list_value)
                list.splice(Math.floor(x),1)
                i = i + 1
                }
                
            }
        },

    };
</script>
<style lang="">

</style>