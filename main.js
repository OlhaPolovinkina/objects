function ClothesShop (name, area, staff, products) {
    if (!new.target) {
        return new ClothesShop(name, area, staff, products)
    }
    this.name = name || ''
    this.area = area || 0
    this.staff = staff || 0
    this.products = products || 0
 }
 console.log(ClothesShop())

const cs1 = ClothesShop()
cs1.name = 'Glam_shop'
cs1.area = 1200
cs1.staff = 24
cs1.products = 1300
console.log(cs1)

const cs2 = ClothesShop()
cs2.name = 'BabyShop'
cs2.area = 800
cs2.staff = 18
cs2.products = 1150
console.log(cs2)

const cs3 = ClothesShop()
cs3.name = 'ManShop'
cs3.area = 800
cs3.staff = 13
cs3.products = 990
console.log(cs3)

const cs4 = ClothesShop()
cs3.name = 'ComfortShop'
cs3.area = 1500
cs3.staff = 50
cs3.products = 1200
console.log(cs4)
