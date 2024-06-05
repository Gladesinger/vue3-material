<template>
  <md-button class="md-speed-dial-target md-fab" v-bind="$attrs" @click="handleClick">
    <slot />
  </md-button>
</template>

<script>
  import MdButton from '@/components/MdButton/MdButton.vue'

  export default {
    
		name: 'MdSpeedDialTarget',

    components: {
      MdButton
    },
    
		inject: ['MdSpeedDial'],
    
		methods: {
      handleClick () {
        if (this.MdSpeedDial.event === 'click') {
          this.MdSpeedDial.active = !this.MdSpeedDial.active
        }
      }
    }
		
  }
</script>

<style lang="scss">
  @import "~/components/MdAnimation/variables.scss";

  .md-speed-dial-target {
    z-index: 1;
  }
</style>
