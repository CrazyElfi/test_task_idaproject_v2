<template>
  <div class="wrapper">
    <Filters />
    <ItemsList
      :items="items"
    />
  </div>
</template>

<script>
import API from '../services/api'

export default {
  name: 'ContentBlock',
  data () {
    return {
      items: [],
      selectedFilter: null
    }
  },
  created () {
    this.onAddedNewItem()
    this.onUpdateFilter()
  },
  methods: {
    onUpdateFilter () {
      this.$nuxt.$on('updateFilter', (filter) => {
        this.selectedFilter = filter
        this.getItems()
      })
    },
    onAddedNewItem () {
      this.$nuxt.$on('addedNewItem', this.getItems)
    },
    getItems () {
      this.items = API.getItems(this.selectedFilter)
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  //padding-left: 16px
  padding: 0 16px 16px 16px
</style>
