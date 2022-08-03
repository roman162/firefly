<template>
  <div>
    <pageHeader
      class="page-header"
    />
    <div class="page__wrapper">
      <tabButtons
        class="tab__container"
      />
    </div>
    <div class="icons__container">
      <ul class="category__container">
        <li
          class="category__list"
          v-for="(category, index) of categories"
          :key="index"
        >
          <category-list
            :category="category"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import categoryList from '~/components/categoryList.vue'
export default {
  components: { categoryList },
  computed: {
    icons () {
      return this.$store.getters.GET_ICONS
    },
    categories () {
      return this.$store.getters.GET_CATEGORIES
    }
  }
}
</script>

<style scoped lang="scss">
  .page__wrapper{
    padding: 0 32px;
    padding-top: 76px;
  }

  .tab__container{
    margin-top: 28px;
  }

  .icons__container{
    padding: 16px 32px;
  }

  .category__container{
    margin-top: 36px;
    margin-bottom: 44px;
  }
</style>
