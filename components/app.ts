import * as Vue from 'vue'
import Component from "vue-class-component"
import {SampleTemplate} from "./sample-template"

@Component({
  props: {
    propMessage: String
  },
  components:{
    "sample-template": SampleTemplate
  }
})
export class App extends Vue {
  propMessage: string
  msg: number

  // return initial data
  data () {
    return {
      msg: 123
    }
  }

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    //alert('greeting: ' + this.msg)
  }

  render (h: Vue.CreateElement) {
    return (
      h('div', [
        h('input', {
          domProps: { value: this.msg },
          on: {
            input: (event: any) => {
              this.msg = event.target.value
            }
          }
        }),
        h("sample-template"),
        h('p', ['prop: ', this.propMessage]),
        h('p', ['msg: ', this.msg]),
        h('p', ['computed msg: ', this.computedMsg]),
        h('button', { on: { click: this.greet }}, ['Greet'])
      ])
    )
  }
}