<template>
  <div class="tab__container">
    <button
      class="tab__button"
      :class="activeButton === 'stroke' ? 'tab__button--active' : 'tab__button--inactive'"
      @click="changeActive()"
    >
      Stroke
    </button>
    <button
      class="tab__button"
      :class="activeButton === 'fill' ? 'tab__button--active' : 'tab__button--inactive'"
      @click="changeActive()"
    >
      Fill
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    activeButton () {
      return this.$store.getters.GET_ACTIVE_TYPE
    }
  },
  methods: {
    changeActive () {
      this.$store.commit('CHANGE_ACTIVE_TYPE')
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab__container{
    display: flex;
  }

  .tab__button{
    @include tab;
    margin-right: 8px;

    &:last-child{
      margin-right: 0;
    }

    &--inactive{
      @include tab-inactive;
    }

    &--active{
      @include tab-active;
    }
  }
</style>
