import { createApp } from 'vue'
import App from './App.vue'

//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser, faGripHorizontal, faTasks,
    faCog, faSearch, faBell, faCommentDots, faPoll} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faGripHorizontal, faTasks,
    faCog, faSearch, faBell, faCommentDots, faPoll)

//Vue Router
import router from './router'

//echarts

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
