import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: Date.now(),
      name: 'Monitor Gamer Acer Nitro',
      price: 1499,
      img: '/assets/images/computador.webp',
      description: 'Descubra nossos melhores produtos escolhidos especialmente para você!',
      isInCart: false,
      stock: 10,
      category: 'Monitores',
    },
    {
      id: Date.now() + 1,
      name: 'Teclado Mecânico XYZ',
      price: 399,
      img: '/assets/images/teclado.webp',
      description: 'Teclado mecânico com iluminação RGB e switches silenciosos.',
      isInCart: false,
      stock: 25,
      category: 'Periféricos',
    },
    {
      id: Date.now() + 2,
      name: 'Mouse Gamer Razer',
      price: 249,
      img: '/assets/images/mouse.webp',
      description: 'Mouse ergonômico com alta precisão e sensor avançado.',
      isInCart: false,
      stock: 30,
      category: 'Periféricos',
    },
    {
      id: Date.now() + 3,
      name: 'Headset Gamer HyperX',
      price: 599,
      img: '/assets/images/headset.webp',
      description: 'Headset com som surround e microfone removível.',
      isInCart: false,
      stock: 15,
      category: 'Áudio',
    },
    {
      id: Date.now() + 4,
      name: 'Cadeira Gamer Drift',
      price: 1299,
      img: '/assets/images/cadeira.webp',
      description: 'Cadeira ergonômica com ajustes completos e conforto prolongado.',
      isInCart: false,
      stock: 8,
      category: 'Móveis',
    },
    {
      id: Date.now() + 5,
      name: 'Placa de Vídeo RTX 3060',
      price: 3499,
      img: '/assets/images/gpu.webp',
      description: 'Placa de vídeo de alta performance para games e criação de conteúdo.',
      isInCart: false,
      stock: 5,
      category: 'Hardware',
    },
  ])

  return { products }
})
