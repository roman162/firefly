<template>
  <label
    class="search__label"
  >
    <input
      type="text"
      :class="searchInput ? 'search__input--active' : 'search__input'"
      placeholder="Search 400 icons"
      v-model="searchInput"
      @blur="sortIcons"
    >
    <span
      class="icon__delete"
      :class="searchInput ? 'icon__delete--active' : ''"
      @click="deleteSearch"
    />
  </label>
</template>

<script>
export default {
  data () {
    return {
      searchInput: ''
    }
  },
  methods: {
    sortIcons () {
      console.log(this.searchInput)
    },
    deleteSearch () {
      console.log('delete')
      this.searchInput = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .search__label{
    max-width: 524px;
    width: 100%;
    position: relative;
    display: flex;

    &:before{
      content: '';
      position: absolute;
      top: 14px;
      left: 12px;
      width: 20px;
      height: 20px;
      background-image: url('/images/icons/search.svg');
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  .search__input{
    @include input;
    flex-grow: 1;

    &:focus{
      & + .icon__delete{
        display: block;
      }
    }

    &--active{
      padding: 14px 40px;
      border-radius: 16px;
      transition-property: border, box-shadow, background-color;
      transition-duration: 1s;
      cursor: pointer;
      flex-grow: 1;
      outline: none;
      border: 1px solid #fff;
      box-shadow: 0px 0px 0px 3px rgba(255, 105, 20, 0.3);
      background-color: #fff;
      &::placeholder{
        color: $gray-300;
        @include body16-regular;
        transition-property: color;
        transition-duration: 1s;
      }
      & + .icon__delete{
        display: block;
      }
    }
  }

  .icon__delete{
    display: none;
    position: absolute;
    right: 12px;
    top: calc(50% - 15px);
    width: 30px;
    height: 30px;
    background-image: url('/images/icons/close.svg');
    background-position: center center;
    background-repeat: no-repeat;
    transition-property: background-color;
    transition-duration: 1s;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;

    &--active{
      background-color: $gray-100;
    }
  }
</style>
