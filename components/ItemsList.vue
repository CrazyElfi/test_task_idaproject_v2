<template>
  <transition-group
    name="catalog"
    class="catalog"
  >
    <itemCard
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </transition-group>
</template>

<script>
export default {
  name: 'ItemsList',
  props: {
    items: {
      type: Array,
      required: true
    }
  }

}
</script>

<style lang="sass" scoped>
.catalog
  width: 1028px
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.catalog-enter-active, .catalog-leave-active
  transition: all 1s

.catalog-enter, .catalog-leave-to
  opacity: 0
  transform: translateY(30px)

.catalog-move
  transition: transform 1s

</style>
