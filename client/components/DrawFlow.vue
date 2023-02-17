<template>
  <div id="drawflow" ref="drawflow" :style="{ 'min-height': `${height}px` }"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Drawflow from 'drawflow';

import 'drawflow/dist/drawflow.min.css';
import '~/assets/scss/drawflow.scss';

@Component
export default class DrawFlow extends Vue {
  @Prop({ type: Number })
  public height!: number;

  private editor!: Drawflow;

  public initEditor() {
    this.editor.addNode('example1', 0, 1, 150, 300, '', {}, '<div>Example 1</div>', false);
    this.editor.addNode('example2', 1, 0, 400, 500, '', {}, '<div>Example 2</div>', false);
  }

  public mounted() {
    this.$nextTick(() => {
      this.editor = new Drawflow(this.$refs['drawflow'] as HTMLElement, Vue, this);
      this.editor.start();

      this.initEditor();
    });
  }
}
</script>
