const products = [
    {
      nombre: "Botines Adidas",
      categoria: "Botines",
      precio: 23000,
      id: 0,
    },
    {
      nombre: "Botines Nike",
      categoria: "Botines",
      precio: 29000,
      id: 1,
    },
  ];

 export const getProducts = (categoria) => 
    new Promise((res, rej) => {
      const response = categoria
      ? products.filter((p) => p.categoria === categoria)
      : products;
      console.log({ response })  
      setTimeout(()=> {
            res(products);
        },3000);
    });

    
