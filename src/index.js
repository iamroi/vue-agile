import VueAgile from './Agile.vue'
import {longPress} from './directives/longPress'

const install = (Vue) => {
	Vue.component('agile', VueAgile)

    // Vue.directive('long-press', longPress)
    // Vue.use(longPress);

}

export default {
	install
}

export { VueAgile }
