const products = [
  {
    id: 1,
    name: "Cenicienta",
    price: 100,
    category: ["cuentos-infantiles"],
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/39/97/3997f7cd8b90a538f64b7cbaab96d51e.jpg",
    stock: 25,
    description: "Description de cenicienta - cuento infantil",
  },
  {
    id: 2,
    name: "Harry Potter y la Piedra filosofal",
    price: 80,
    category: ["literatura-fantastica"],
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/13/3f/133f3ee8195593a47eee5d46795ddc36.jpg",
    stock: 5,
    description: "Descripcion de Harry Potter y la piedra filosofal",
  },
  {
    id: 3,
    name: "Juego de tronos Fuego y sangre",
    price: 80,
    category: ["fantasia", "ciencia-ficcion"],
    img: "https://1.bp.blogspot.com/-T6cUgtsWKAc/W_3X-1_oMHI/AAAAAAABDas/qQTWY0FiYpMUBDp3Qf-cBC_x8gM8Bjl2wCLcBGAs/s1600/George%2BR%2BR%2BMartin%2Banticipa%2Bla%2Bprecuela%2Bde%2BJuego%2Bde%2BTronos-1.jpg",
    stock: 15,
    description: "Descripcion de Juego de tronos Fuego y sangre",
  },
  {
    id: 4,
    name: "Cenicienta",
    price: 100,
    category: ["cuentos-infantiles"],
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/39/97/3997f7cd8b90a538f64b7cbaab96d51e.jpg",
    stock: 25,
    description: "Description de cenicienta - cuento infantil",
  },
  {
    id: 5,
    name: "Harry Potter y la Piedra filosofal",
    price: 80,
    category: ["literatura-fantastica"],
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/13/3f/133f3ee8195593a47eee5d46795ddc36.jpg",
    stock: 5,
    description: "Descripcion de Harry Potter y la piedra filosofal",
  },
  {
    id: 6,
    name: "Juego de tronos Fuego y sangre",
    price: 80,
    category: ["fantasia", "ciencia-ficcion"],
    img: "https://1.bp.blogspot.com/-T6cUgtsWKAc/W_3X-1_oMHI/AAAAAAABDas/qQTWY0FiYpMUBDp3Qf-cBC_x8gM8Bjl2wCLcBGAs/s1600/George%2BR%2BR%2BMartin%2Banticipa%2Bla%2Bprecuela%2Bde%2BJuego%2Bde%2BTronos-1.jpg",
    stock: 15,
    description: "Descripcion de Juego de tronos Fuego y sangre",
  },
];

const categories = [
  { id: "fantasia", description: "Fantasia" },
  { id: "literatura-fantastica", description: "Literatura" },
  { id: "cuentos-infantiles", description: "Cuentos infantiles" },
  { id: "ciencia-ficcion", description: "Ciencia ficción" },
];

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
};

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? products.filter((prod) => prod.category.includes(categoryId))
          : products
      );
    }, 1000);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id == id));
    }, 1000);
  });
};
