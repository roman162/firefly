<template>
  <div
    class="icon__item-container"
    @click="downloaded"
  >
    <a
      class="icon__item"
      :class="isDownloaded ? 'icon__item--downloaded' : ''"
      :href="`/icons/${activeType}/${icon.title}.svg`"
      download
    >
      <div class="icon__image-container">
        <img
          :src="`/icons/${activeType}/${icon.title}.svg`"
          :alt="icon.title"
          class="icon__image"
        >
      </div>
      <p class="icon__title">
        {{ icon.title }}
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    },
    activeType: {
      type: String
    }
  },
  computed: {
    isDownloaded () {
      return this.$store.getters.GET_DOWNLOADED_ICONS.includes(this.icon.id)
    }
  },
  methods: {
    downloaded () {
      this.$store.commit('SET_DOWNLOADED', this.icon.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon__item-container{
    cursor: pointer;
    border-radius: 24px;
    background-color: #fff;
    transition-property: box-shadow;
    transition-duration: .2s;

    &:hover{
      box-shadow: 0px 12px 36px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.16);

      & .icon__item{
        top: -4px;
      }
    }
  }

  .icon__item{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #fff;
    top: 0;
    padding: 22px 4px;
    width: 100%;
    height: 100%;
    transition-property: top, box-shadow;
    transition-duration: .2s;
    box-shadow: none;
    border-radius: 24px;

    &--downloaded{
      border: 1px solid orange;
    }
  }

  .icon__image-container{
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon__title{
    text-align: center;
    min-height: 38px;
  }
</style>
