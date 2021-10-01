let items = [
  {
    id: 1,
    name: 'Наименование товара',
    descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: '/_nuxt/assets/images/item-img.png',
    price: '10000',
  },
  {
    id: 2,
    name: 'Наименование товара',
    descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: '/_nuxt/assets/images/item-img.png',
    price: '12000',
  },
  {
    id: 3,
    name: 'Наименование товара',
    descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: '/_nuxt/assets/images/item-img.png',
    price: '13000',
  },
  {
    id: 4,
    name: 'Наименование товара',
    descr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgUrl: '/_nuxt/assets/images/item-img.png',
    price: '15000',
  },
]
const API = {
  getItems () {
    return items
  },
  createItem (item) {
    items.push(item)
  },
  deleteItem (itemId) {
    items.forEach((item, index )=> {
      if(Number(itemId) === item.id ) {
        items.splice(index,1)
      }
    })
  }
}

export default API
