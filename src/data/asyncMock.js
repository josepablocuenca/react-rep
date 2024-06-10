export const productos = [
  {
    id: 1,
    categoria: "Vino",
    marca: "Pyros",
    variedad: "Malbec",
    precio: 9000,
    stock: 10,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61236_default_big.jpeg"
  },
  {
    id: 2,
    categoria: "Vino",
    marca: "Animal",
    variedad: "Syrah",
    precio: 7000,
    stock: 5,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61066_default_small.jpeg",
  },
  {
    id: 3,
    categoria: "Vino",
    marca: "Aguma",
    variedad: "Syrah",
    precio: 8000,
    stock: 10,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/69/thumb_68811_default_big.jpeg",
  },
  {
    id: 4,
    categoria: "Vino",
    marca: "Colon",
    variedad: "Merlot",
    precio: 4000,
    stock: 5,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/60/thumb_59347_default_small.jpeg",
  },
  {
    id: 5,
    categoria: "Vino",
    marca: "Emilia",
    variedad: "Malbec",
    precio: 8000,
    stock: 10,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62382_default_small.jpeg",
  },
  {
    id: 6,
    categoria: "Cerveza",
    marca: "Quilmes",
    variedad: "Rubia",
    precio: 1000,
    stock: 5,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61391_default_small.jpeg",
  },
  {
    id: 7,
    categoria: "Cerveza",
    marca: "Corona",
    variedad: "Rubia",
    precio: 3000,
    stock: 10,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/67/thumb_66725_default_small.jpeg",
  },
  {
    id: 8,
    categoria: "Cerveza",
    marca: "Patagonia",
    variedad: "Roja",
    precio: 4000,
    stock: 5,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62487_default_small.jpeg",
  },
  {
    id: 9,
    categoria: "Cerveza",
    marca: "Imperial",
    variedad: "Roja",
    precio: 3000,
    stock: 10,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/61/thumb_60718_default_small.jpeg",
  },
  {
    id: 10,
    categoria: "Cerveza",
    marca: "Imperial",
    variedad: "IPA",
    precio: 3500,
    stock: 5,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/61/thumb_60664_default_small.jpeg",
  },
  {
    id: 11,
    categoria: "Whiskie",
    marca: "JimBeam",
    variedad: "whiskie",
    precio: 15000,
    stock: 10,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53414_default_small.jpeg",
  },
  {
    id: 12,
    categoria: "Whiskie",
    marca: "Jack Daniels",
    variedad: "whiskie",
    precio: 12000,
    stock: 5,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62442_default_small.jpeg",
  },
  {
    id: 13,
    categoria: "Whiskie",
    marca: "Jameson",
    variedad: "whiskie",
    precio: 17000,
    stock: 10,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/59/thumb_58453_default_small.jpeg",
  },
  {
    id: 14,
    categoria: "Whiskie",
    marca: "Jony Walker",
    variedad: "whiskie",
    precio: 20000,
    stock: 5,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/64/thumb_63197_default_small.jpeg",
  },
  {
    id: 15,
    categoria: "Whiskie",
    marca: "Ballantines",
    variedad: "whiskie",
    precio: 180000,
    stock: 10,
    imagen: "https://www.espaciovino.com.ar/media/default/0001/58/thumb_57539_default_small.jpeg",
  }
]

export const getProductos = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    })
}

export const getProductosPorCategoria = (category) => {
    return new Promise((res) => {
      const productosFiltrados = productos.filter(
        (prod) => prod.categoria === category
      )
      setTimeout(() => {
        res(productosFiltrados);
      }, 2000);
    })
}

export const getProductosPorId = (id) => {
  return new Promise((res) => {
    const prodFiltradoId = productos.find((prod) => prod.id === parseInt(id))
    setTimeout(() => {
      res(prodFiltradoId);
    }, 2000);
  })
}