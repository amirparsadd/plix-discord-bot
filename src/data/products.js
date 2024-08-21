import { ProductBillingType, ProductType } from '../database/models/Product.js'

/**
 * @type {Array<import('./types/Products.js').ICategory>}
 */
export const products =
[
  {
    id: "smpmc",
    category: "اس ام پی ماینکرافت",
    desc: "اس ام پی ماینکرافت، بهترین راه برای بازی کردن با دوستان است، بدون لگ و با بهترین پینگ و قیمت ها در کل ایران از ماینکرافت لذت ببرید!",
    additional: "تمامی اس ام پی ها 10 هزار تومان هزینه راه اندازی اولیه دارند که پس از پرداخت، فاکتورش برای شما باز می شود",
    products:
      [
        {
          id: "smp_lv0",
          type: ProductType.MINECRAFT,
          name: "اس ام پی اقتصادی",
          info: "سطح پیشنهادی برای 2 پلیر، احتمال لگ وجود دارد، سی پی یو ضعیفتر",
          billing: ProductBillingType.MONTHLY,
          price: 250_000,
          attributes:
            [
              {
                name: "حافظه",
                value: 20
              },
              {
                name: "رم",
                value: 3
              },
              {
                name: "حداکثر پلیر",
                value: 4
              },
            ]
        },
        {
          id: "smp_lv1",
          name: "اس ام پی سطح 1",
          type: ProductType.MINECRAFT,
          info: "سطح پیشنهادی ما برای 5 پلیر",
          billing: ProductBillingType.MONTHLY,
          price: 310_000,
          attributes:
            [
              {
                name: "حافظه",
                value: 25
              },
              {
                name: "رم",
                value: 4
              },
              {
                name: "حداکثر پلیر",
                value: 10
              },
            ]
        },
        {
          id: "smp_lv2",
          name: "اس ام پی سطح 2",
          type: ProductType.MINECRAFT,
          info: "سطح پیشنهادی ما برای 7 پلیر، پردازنده قویتر",
          billing: ProductBillingType.MONTHLY,
          price: 387_000,
          attributes:
            [
              {
                name: "حافظه",
                value: 30
              },
              {
                name: "رم",
                value: 5
              },
              {
                name: "حداکثر پلیر",
                value: 15
              },
            ]
        },
        {
          id: "smp_lv3",
          name: "اس ام پی سطح 3",
          type: ProductType.MINECRAFT,
          info: "سطح پیشنهادی ما برای 15 پلیر، پردازنده قویتر",
          billing: ProductBillingType.MONTHLY,
          price: 487_000,
          attributes:
            [
              {
                name: "حافظه",
                value: 45
              },
              {
                name: "رم",
                value: 8
              },
              {
                name: "حداکثر پلیر",
                value: 25
              },
            ]
        },
      ]
  },
  {
    id: "additional",
    category: "سرویس های اضافی",
    desc: "با خرید این سرویس ها می توانید در کنار اس ام پی خود، چیز های خفنی دریافت کنید و لذت بیشتری از بازی کردن ببرید",
    additional: "تبلیغات در اس ام پی سطح اقتصادی قابل خاموش کردن نمی باشند! درصورت خرید، هزینه به حساب بازگردانده می شود.",
    products:
      [
        {
          id: "additional_domain_ir",
          name: "دامنه",
          type: ProductType.DOMAIN,
          info: "خسته نشدی هربار میخوای وارد سرور شی مجبوری یک مشت عدد بزنی؟ پس ی دامنه بگیر مشکلت حل شه. همچنین دامنه باعث میشه پلیرها سریعتر به سرور وصل شن و لگ کمتر شه",
          billing: ProductBillingType.YEARLY,
          price: 97_000,
          attributes:
            [
              {
                name: "نوع",
                value: "subdomain.ir"
              }
            ]
        },
        {
          id: "additional_teamspeak",
          type: ProductType.TEAMSPEAK,
          name: "تیم اسپیک",
          info: "بسه دیگه انقدر مشکل با اپلیکیشن های ایرانی و انقدر تحریم شکن با سرویس های خارجی! ی تیم اسپیک بخر خودتو خلاص کن!",
          billing: ProductBillingType.MONTHLY,
          price:59_000,
          attributes:
            []
        },
        {
          id: "additional_disable_ads",
          name: "خاموش کردن تبلیغات",
          type: ProductType.SERVICES,
          info: "تبلیغات دیوونت کرده؟ با پرداخت یک هزینه کوچیک اونارو برای همیشه از بین ببر!",
          billing: ProductBillingType.ONCE,
          price:30_000,
          attributes:
            []
        },
      ]
  }
]
/**
 * @type {import('./types/Products.js').Mapped<import('./types/Products.js').IProduct>}
 */
export let mappedProducts = {}
/**
 * @type {import('./types/Products.js').Mapped<import('./types/Products.js').ICategory>}
 */
export let mappedcategories = {}

export function setupProducts(){
  products.forEach(category => {
    category.products.forEach(product => {
      const productFullID = category.id + "_" + product.id
      mappedProducts[productFullID] = product
      
      console.log(`🛒 Registered ${productFullID} in mapped products`)
    });
    mappedcategories[category.id] = category
    console.log(`🛍️ Category ${category.id} was registered`)
  });
}