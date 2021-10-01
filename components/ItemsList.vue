<template>
  <div class="catalog">
    <itemCatalog
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
export default {
  name: 'ItemsList',
  props: {
    items: {
      type: Array,
      required: true,
    }
  },

}
</script>

<style lang="sass" scoped>
.catalog
  width: 1028px
  display: flex
  flex-wrap: wrap
  justify-content: space-between
</style>
