import Vue from 'vue'
import Router from 'vue-router'
import Content from '../Views/Content.vue'
import search from '../Views/SongSearch.vue'
import defaultlist from '../Views/defaultlist.vue'
import playmv from '../Views/playmv.vue'
// import newmv from '../Views/newMV.vue'
import newProducts from '../Views/newProducts.vue'
// import radio from '../Views/radio.vue'
// import wallpaper from '../Views/wallpaper.vue'
import thememarket from '../Views/thememarket.vue'
import designerarea from '../Views/designerarea.vue'
import Playlist from '../Views/PlaylistDetails.vue'
import Leaderboard from '../Views/Leaderboard.vue'
import newLeaderboard from '../Views/newLeaderboard.vue'
// import singerlist from '../Views/singerlist.vue'
import fashionclothing from '../Views/fashionclothing.vue'
import trendfront from '../Views/trendfront.vue'
import album from '../Views/album.vue'
// import dayrec from '../Views/dayrec.vue'
import todayhotstyle from '../Views/todayhotstyle.vue'
import goldlist from '../Views/goldlist.vue'
import trendyshoes from '../Views/trendyshoes.vue'
import product from "../components/product";
import cart from "../Views/cart";
import order from "../Views/order";
import followed from "../Views/followed";
import footprint from "../Views/footprint";
import return_good from "../Views/return_good"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/content',
      name: 'Content',
      component: Content,
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      props: true,
    },
    {
      path: '/defaultlist',
      name: 'defaultlist',
      component: defaultlist
    },
    {
      path: '/playmv',
      name: 'playmv',
      component: playmv
    },
    {
      path: '/newProducts',
      name: 'newProducts',
      component: newProducts
    },
    {
      path: '/thememarket',
      name: 'thememarket',
      component: thememarket
    },
    {
      path: '/designerarea',
      name: 'designerarea',
      component: designerarea
    },
    {
      path: '/Playlist',
      name: 'Playlist',
      component: Playlist
    },
    {
      path: '/Leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    },
    {
      path: '/fashionclothing',
      name: 'fashionclothing',
      component: fashionclothing
    },
    {
      path: '/album',
      name: 'album',
      component: album
    },
    {
      path: '/todayhotstyle',
      name: 'todayhotstyle',
      component: todayhotstyle
    },
    {
      path: '/trendyshoes',
      name: 'trendyshoes',
      component: trendyshoes
    },
    {
      path: '/newLeaderboard',
      name: 'newLeaderboard',
      component: newLeaderboard
    },
    {
      path: '/trendfront',
      name: 'trendfront',
      component: trendfront
    },
    {
      path: '/goldlist',
      name: 'goldlist',
      component: goldlist
    },
    {
      path: '/product/:name',
      name: 'product',
      component: product
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/followed',
      name: 'followed',
      component: followed
    },
    {
      path: '/footprint',
      name: 'footprint',
      component: footprint
    },
    {
      path: '/return_good',
      name: 'return_good',
      component: return_good
    }
  ]
})
