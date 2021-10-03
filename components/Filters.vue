<template>
  <div class="filter">
    <select
      id="filter-types"
      v-model="selected"
      name="filter-types"
      @change="updateFilter"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="index"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'Filters',
  data () {
    return {
      options: [
        { key: 'id', condition: 'ASC', label: 'По умолчанию' },
        { key: 'price', condition: 'ASC', label: 'По цене min' },
        { key: 'price', condition: 'DESC', label: 'По цене max' },
        { key: 'name', condition: 'ASC', label: 'По наименованию А-Я' },
        { key: 'name', condition: 'DESC', label: 'По наименованию Я-А' }
      ],
      selected: 0 // default option. I dont like this magic number.
    }
  },
  mounted () {
    this.updateFilter()
  },
  methods: {
    updateFilter () {
      console.log('emit updateFilter')
      // eslint-disable-next-line no-undef
      $nuxt.$emit('updateFilter', this.options[this.selected])
    }
  }
}
</script>

<style lang="sass" scoped>
.filter
  margin-bottom: 16px
  width: 100%
  display: flex
  justify-content: flex-end

  #filter-types
    //width: 122px
    height: 36px
    background: #FFFEFB
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)
    border-radius: 4px
    padding: 10px 5px 10px 14px
    font-size: 12px
    line-height: 15px
    border: none
    outline: none

    color: #B4B4B4
    /* todo Greys / 500 */

    option
      background-color: #FFFEFB
      font-size: 12px

      line-height: 15px
      border: none
      outline: none
      color: #B4B4B4</style>
