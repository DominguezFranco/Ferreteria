
export const productos = [
  { id: 1, nombre: "Taladro", categoria: "electricidad", precio: 15000, descripcion: "Taladro potente.",imagen: "/img/taladro.webp" },
  { id: 2, nombre: "Amoladora", categoria: "electricidad", precio: 20000, descripcion: "Amoladora angular.", imagen: "/img/amoladora.jpg" },
  { id: 3, nombre: "Martillo", categoria: "manuales", precio: 5000, descripcion: "Martillo de acero.", imagen: "/img/martillo.jpg" },
  { id: 4, nombre: "Destornillador", categoria: "manuales", precio: 2000, descripcion: "Destornillador plano y cruz.", imagen: "/img/destornillador.jpg" },
  { id: 5, nombre: "Cinta métrica", categoria: "medicion", precio: 3000, descripcion: "Cinta de 5 metros.", imagen: "/img/cinta-metrica.jpg" },
  { id: 6, nombre: "Nivel", categoria: "medicion", precio: 7000, descripcion: "Nivel de burbuja.", imagen: "/img/nivel.webp" },
];

export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(productos), 500);
  });
};

export const getProductosByCategoria = (categoriaId) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(productos.filter(p => p.categoria === categoriaId)), 500);
  });
};

export const getProductoById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(productos.find(p => p.id === parseInt(id))), 500);
  });
};