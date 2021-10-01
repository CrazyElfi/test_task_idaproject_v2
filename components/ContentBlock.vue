<template>
  <div class="wrapper">
    <div class="filter">
      <select id="filter-types" name="filter-types" v-model="selected">
        <option disabled value="">По умолчанию</option>
        <option value="">По цене min</option>
        <option value="">По цене max</option>
        <option value="">По наименованию</option>
      </select>
    </div>

    <ItemsList
      :items="items"
    />
  </div>
</template>

<script>
import API from '../services/api'

export default {
  name: 'ContentBlock',
  data() {
    return {
      selected: '',
      items: []
    }
  },
  mounted () {
    this.items = API.getItems()
    console.log('items', this.items)
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  width: 100%
  //padding-left: 16px
  padding: 16px
  .filter
    margin-bottom: 16px
    width: 100%
    display: flex
    justify-content: flex-end
    #filter-types
      width: 122px
      height: 36px
      background: #FFFEFB
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
      border-radius: 4px
      padding: 10px 5px 10px 14px
      font-size: 12px
      line-height: 15px
      border: none
      outline: none

      color: #B4B4B4 /* todo Greys / 500 */
      option
        background-color: #FFFEFB
        font-size: 12px
        line-height: 15px
        border: none
        outline: none
        color: #B4B4B4
</style>
