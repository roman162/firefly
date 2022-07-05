<template>
  <div
    class="category__container"
  >
    <h3 class="category__title">
      {{ category.title }}
    </h3>
    <ul class="icons__list">
      <li
        class="icon__item"
        v-for="(icon, index) of iconsList"
        :key="index"
      >
        <a
          class="icon__image-container"
          :href="`/icons/${activeType}/${icon.title}.svg`"
          download
        >
          <img
            :src="`/icons/${activeType}/${icon.title}.svg`"
            :alt="icon.title"
            class="icon__image"
          >
        </a>
        <p class="icon__title">
          {{ icon.title }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object
    }
  },
  computed: {
    activeType () {
      return this.$store.getters.GET_ACTIVE_TYPE
    },
    iconsList () {
      const icons = this.$store.getters.GET_ICONS
      return icons.filter(item => item.category === this.category.id && (item.type === this.activeType || item.type === 'all'))
    }
  }
}
</script>

<style lang="scss" scoped>
  .category__title{
    text-transform: capitalize;
  }

  .icons__list{
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 16px;
  }

  .icon__item{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 158px;
    width: 100%;
    min-height: 172px;
    cursor: pointer;
    padding: 22px 4px;
    background-color: #fff;
    border-radius: 24px;
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
