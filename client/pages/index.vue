<template>
  <div :class="$style['app']">
    <DrawFlow :height="innerHeight"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  public innerHeight!: number;

  public mounted() {
    this.innerHeight = window.innerHeight;
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>

<style lang="scss" module>
  .app {
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0;
  }
</style>
