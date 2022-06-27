<template>
  <header class="page-header">
    <NuxtLink
      :to="'/'"
      class="page-header__logo-container"
    >
      <img
        src="/images/logo.svg"
        alt="Logo"
        class="page-header__logo-image">
      />
    </NuxtLink> 
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
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>