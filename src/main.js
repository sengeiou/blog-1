import { createApp } from 'vue'
import App from './App.vue'

//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser,faSearch,faGripHorizontal,faPoll,faCog,faCloudSunRain,
    faTasks,faCommentDots,faMapMarkerAlt,faExchangeAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faUser,faSearch,faGripHorizontal,faPoll,faCog,faCloudSunRain,
     faTasks,faCommentDots,faMapMarkerAlt,faExchangeAlt)

//Vue Router
import router from './router'

//element UI
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(ElementPlus).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
