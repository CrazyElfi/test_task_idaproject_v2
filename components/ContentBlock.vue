<template>
  <div class="wrapper">
    <Filters />
    <div v-if="spinner" id="spinner-wrapper">
      <div class="lds-dual-ring" />
    </div>
    <ItemsList
      v-else
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
      selectedFilter: null,
      spinner: true
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
    async getItems () {
      this.spinner = true
      const result = await API.getItems(this.selectedFilter)
      if (result) {
        this.spinner = false
        this.items = result
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  //padding-left: 16px
  padding: 0 16px 16px 16px
  position: relative
  #spinner-wrapper
    position: absolute
    top: 50%
    right: 50%

.lds-dual-ring
  display: inline-block
  width: 80px
  height: 80px

.lds-dual-ring:after
  content: " "
  display: block
  width: 64px
  height: 64px
  margin: 8px
  border-radius: 50%
  border: 6px solid #B4B4B4
  border-color: #B4B4B4 transparent #B4B4B4 transparent
  animation: lds-dual-ring 1.2s linear infinite

@keyframes lds-dual-ring
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
