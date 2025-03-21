const updateCart = (ordersList, setCart) => {
    
    const obj = {};
  
    ordersList.forEach(index => {
      if (index.id in obj) {
        obj[index.id].name = index.name;
        obj[index.id].price += parseFloat(index.price);
        obj[index.id].number += index.number;
        obj[index.id].id = index.id;
      } else {
        obj[index.id] = {
          name: index.name,
          price: parseFloat(index.price),
          number: index.number,
          id: index.id,
        };
      }
    });
  
    const itemsArray = Object.values(obj);
    setCart(itemsArray);
  };
  
  export default updateCart;
  