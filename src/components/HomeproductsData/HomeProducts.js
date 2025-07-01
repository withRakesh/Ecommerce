import head1 from '../Assets/homeProductsImages/head1.jpg'
import head4 from '../Assets/homeProductsImages/head4.jpg'
import lap1 from '../Assets/homeProductsImages/lap1.jpg'
import lap4 from '../Assets/homeProductsImages/lap4.jpg'
import watch1 from '../Assets/homeProductsImages/watch1.jpg'
import watch10 from '../Assets/homeProductsImages/watch10.jpg'
import head9 from '../Assets/homeProductsImages/head9.jpg'
import head10 from '../Assets/homeProductsImages/head10.jpg'
import lenova from '../Assets/brandLogos/lenova.png'
import dell from '../Assets/brandLogos/dell.png'
import panasonic from '../Assets/brandLogos/panasonic.png'
import samsung from '../Assets/brandLogos/samsung.png'
import hp from '../Assets/brandLogos/hp.png'
import sony from '../Assets/brandLogos/sony.png'

export const productData = [
  {
    name: "Beats Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    img: head1,
    price: 1800.99,
  },
  {
    name: "AirPods Pro",
    description: "Apple AirPods Pro with spatial audio and adaptive transparency.",
    img:  head4,
    price: 2800.99,
  },
  {
    name: "MacBook Pro",
    description: "Apple MacBook Pro with M2 chip and Retina Display.",
    img:  lap1,
    price: 12299.99,
  },
  {
    name: "Dell XPS 13",
    description: "Sleek and powerful Dell laptop for productivity on the go.",
    img: lap4,
    price: 30999.99,
  },
  {
    name: "Business Watch",
    description: "Elegant wristwatch with stainless steel strap and chronograph.",
    img:  watch1,
    price: 2349.99,
  },
  {
    name: "Timex Classic",
    description: "Timex analog watch with minimalist design and durable build.",
    img:  watch10,
    price: 3900.99,
  },
  {
    name:'Wired Studio Headphones',
    description:'Comfortable wired headphones with clear sound, great for everyday use.',
    img: head9,
    price: 1500.99,

  },
    {
    name:'Wireless Headphones',
    description:'Bluetooth headphones with noise cancellation and long battery life., great for everyday use.',
    img: head10,
    price: 1800.99,

  }

];

 export const brandLogos = [
  {
    img: dell,
  },
  {
    img: sony,
  },
  {
    img: lenova,
  },
  {
    img: hp,
  },
  {
    img: samsung,
  },
  {
    img: panasonic,
  }
]
