<template>
  <div class="logo">
    <NuxtLink
        :to="'/'"
        class="logo__container"
      >
        <img
          src="/images/logo.svg"
          alt="Logo"
          class="logo__image"
        >
        <div class="logo__text-container">
          <h1 class="logo__title">
            Firefly icons
          </h1>
          <h2 class="logo__text">
            400 full free icons
          </h2>
        </div>
      </NuxtLink>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .logo__container{
    display: flex;
  }

  .logo__text-container{
    display: flex;
    flex-direction: column;
    margin-left: 14px;
  }

  .logo__title{
    font-size: 28px;
    line-height: 100%;
    font-weight: 900;
    letter-spacing: -0.15px;
  }

  .logo__text{
    color: $gray-400;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01px;
  }
</style>
