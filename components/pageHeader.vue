<template>
  <header class="page-header">
    <div class="page-header__wrapper">
      <Logo />
      <searchInput />
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .page-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.06);
    z-index: 10;
  }

  .page-header__wrapper{
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1920px;
    margin: 0 auto;
  }
</style>
