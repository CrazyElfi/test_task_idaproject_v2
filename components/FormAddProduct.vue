<template>
  <div>
    <h2 class="title">
      Добавление товара
    </h2>
    <form
      class="formAdding"
    >
      <label
        for="name"
        class="importantRow"
      >
        Наименование товара
      </label>
      <input
        id="name"
        v-model="name"
        name="name"
        type="text"
        placeholder="Введите наименование товара"
        @blur="validateName"
      >
      <p
        v-if="errorNameMsg"
        class="errorText"
      >
        {{ errorNameMsg }}
      </p>

      <label for="descr">Описание товара</label>
      <textarea
        id="descr"
        v-model="descr"
        name="descr"
        placeholder="Введите описание товара"
        rows="6"
      />

      <label
        for="imgUrl"
        class="importantRow"
      >
        Ссылка на изображение товара
      </label>
      <input
        id="imgUrl"
        v-model="imgUrl"
        name="imgUrl"
        placeholder="Введите ссылку"
        @blur="validateImgUrl"
      >
      <p
        v-if="errorImgUrlMsg"
        class="errorText"
      >
        {{ errorImgUrlMsg }}
      </p>

      <label
        for="price"
        class="importantRow"
      >
        Цена товара
      </label>
      <input
        id="price"
        v-model="maskPrice"
        name="price"
        type="text"
        placeholder="Введите цену"
      >
      <!--      <p> maskPrice :{{ maskPrice }}</p>-->
      <!--      <p> price : {{ price }} </p>-->

      <p
        v-if="errorPriceMsg"
        class="errorText"
      >
        {{ errorPriceMsg }}
      </p>

      <input
        id="btnSubmit"
        :disabled="isDisabledBtn"
        type="submit"
        value="Добавить товар"
        @click="createNewItem"
      >
    </form>
  </div>
</template>

<script>
import Api from '@/services/api'

export default {
  name: 'FormAddProduct',

  data () {
    return {
      name: '',
      descr: '',
      imgUrl: '',
      price: '',

      errorPriceMsg: '',
      errorImgUrlMsg: '',
      errorNameMsg: ''
    }
  },
  computed: {
    isDisabledBtn: function () {
      return !this.name || !this.imgUrl || !this.price
    },
    maskPrice: {
      get: function () {
        console.log('this.price', this.price)
        return this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      },
      set: function (newValue) {
        console.log('old price', this.price)
        console.log('set', newValue)

        newValue = newValue.replace(/\s/g, '')
        console.log('after replace', newValue)

        console.log(`validatePrice value:${newValue} isValid: ${this.isValidPrice(newValue)}`)

        this.isValidPrice(newValue)
        // bonus ^_^
        newValue = newValue.match(/[0-9]/g)
        if (newValue) {
          newValue = newValue.join('')
        } else {
          newValue = ''
        }
        console.log('after match ', newValue)

        this.price = newValue
      }
    }
  },
  methods: {
    validateName () {
      !this.name ? this.errorNameMsg = 'Поле является обязательным' : this.errorNameMsg = null
    },
    validateImgUrl () {
      !this.imgUrl ? this.errorImgUrlMsg = 'Поле является обязательным' : this.errorImgUrlMsg = null
    },
    isValidPrice (newValue) {
      console.log('income value:', newValue)
      !newValue ? this.errorPriceMsg = 'Поле является обязательным' : this.errorPriceMsg = null
      if (this.errorPriceMsg) return !this.errorPriceMsg

      const reg = new RegExp(/^\d+$/) // '123 = true', '123a = false'
      const isDigit = reg.test(newValue)
      isDigit ? this.errorPriceMsg = null : this.errorPriceMsg = 'Допустимы только цифры'

      return !this.errorPriceMsg
    },

    createNewItem (e) {
      e.preventDefault()
      // this.validateForm()
      const newItem = {
        name: this.name,
        descr: this.descr,
        imgUrl: this.imgUrl,
        price: this.price
      }
      Api.createItem(newItem)

      // clear form
      this.name = ''
      this.descr = ''
      this.imgUrl = ''
      this.price = ''
      this.addedNewItem()
    },
    addedNewItem () {
      // eslint-disable-next-line no-undef
      $nuxt.$emit('addedNewItem')
    }

  }
}
</script>

<style lang="sass" scoped>
.formAdding
  letter-spacing: -0.02em
  display: flex
  flex-direction: column
  background-color: #FFFEFB
  padding: 24px
  margin: 15px 0 15px
  width: 332px
  min-height: 440px
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02)
  border-radius: 4px
  font-style: normal
  font-weight: 400
  font-size: 10px
  line-height: 13px

  /* todo Temp / Darks / Lesser */
  color: #49485E

  label
    margin-bottom: 5px
    margin-top: 16px
    position: relative

    &:first-child
      margin-top: 0

    &.importantRow::after
      position: absolute
      background-image: '~@/assets/images/dot-important.png'
      content: ''
      width: 4px
      height: 4px
      top: 1px
      border-radius: 50%

    &[ for = 'name' ]::after
      left: 95px

    &[ for = 'imgUrl' ]::after
      left: 135px

    &[ for = 'price' ]::after
      left: 55px

  input, textarea
    font-size: 12px
    line-height: 15px
    padding: 10px 16px

    color: #B4B4B4
    /* Greys / 500 */
    outline: none
    background-color: transparent
    border-radius: 4px
    cursor: pointer
    border: none
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1)

  input
    height: 36px
    position: relative

#btnSubmit
  //background: #EEEEEE
  background: #7BAE73
  border-radius: 10px
  box-shadow: none
  margin-top: 25px
  height: 36px
  color: #FFFFFF

  &:hover
    background: #65d555

  &:focus
    background: #3edb26

  &:disabled
    background: #EEEEEE

.errorText
  font-size: 8px
  line-height: 10px
  letter-spacing: -0.02em
  color: #FF8484</style>
