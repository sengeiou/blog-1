import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faSitemap, faUser, faGripHorizontal, faTasks, faCog, faSearch, faBell, faCommentDots} from '@fortawesome/free-solid-svg-icons'

library.add(faSitemap, faUser, faGripHorizontal, faTasks, faCog, faSearch, faBell, faCommentDots)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
