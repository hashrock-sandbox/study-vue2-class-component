import * as Vue from 'vue'
import Component from "vue-class-component"
import {App} from "./components/app"

// mount
new App({
  el: '#el',
  render: h => h(App, { props: { propMessage: 'Hello!' }})
})
