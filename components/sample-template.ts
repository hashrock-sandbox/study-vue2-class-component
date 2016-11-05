import Component from 'vue-class-component'
import * as Vue from 'vue';

@Component({
  template: `
    <div style="background: blue;">{{msg}}</div>
  `
})
export class SampleTemplate extends Vue {
  msg: string;
  data(): any{
    return {
      msg: "Hello!"
    }
  }
  ready(){}
}