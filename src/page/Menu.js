import ProductsList from "../components/templates/ProductsList";
import dataMenu from "../data/data";

const Menu = () => {
  
  const menuCategories = [
    { title: "Beverages", data: dataMenu.menu?.hotDrinks },
    { title: "Teas", data: dataMenu.menu?.teas },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-Urbanist uppercase bg-slate-100">
      <div className="w-10/12 h-full flex flex-col items-center justify-center py-20">
        {menuCategories.map((category, index) => (
          <ProductsList key={index} title={category.title} data={category.data} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
