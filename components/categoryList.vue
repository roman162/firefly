<template>
  <div
    v-if="iconsList.length > 0"
    class="category__container"
  >
    <h3 class="category__title">
      {{ category.title }}
    </h3>
    <ul class="icons__list">
      <li
        class="icon__item-container"
        v-for="(icon, index) of iconsList"
        :key="index"
      >
        <icon-item
          :icon="icon"
          :activeType="activeType"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import iconItem from './iconItem.vue'
export default {
  components: { iconItem },
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
    max-width: 1920px;
    margin: 0 auto;
    margin-bottom: 16px;
    color: $black;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
  }

  .icons__list{
    display: grid;
    max-width: 1920px;
    margin: 0 auto;
    column-gap: 12px;
    row-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(158px, 1fr));
  }

  .icon__item-container{
    max-width: 198px;
    min-width: 118px;
    width: 100%;
    height: 172px;
  }
</style>
