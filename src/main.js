import { createApp } from 'vue'
import App from './App.vue'

//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faSitemap, faUser, faGripHorizontal, faTasks, faCog, faSearch, faBell, faCommentDots} from '@fortawesome/free-solid-svg-icons'

library.add(faSitemap, faUser, faGripHorizontal, faTasks, faCog, faSearch, faBell, faCommentDots)

//Vue Router
import router from './router'

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
