import Vue from 'vue'
import SvgIcon from '@/components/svg-icon.vue'

Vue.component('svg-icon', SvgIcon)
const req = require.context('./icons', true, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
