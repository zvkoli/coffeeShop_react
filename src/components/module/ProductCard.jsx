import { useEffect, useState } from "react";
import DefaultPic from "../../assets/default-image.webp";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import { useRecoilState } from "recoil";
import OrdersListAtom from "../../atoms/ordersListAtom";
import AboutMessage from "./AboutMessage";

export default function ProductCard({ name, price, id }) {
  const [ordersList, setOrdersList] = useRecoilState(OrdersListAtom);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (ordersList) {
      localStorage.setItem("orders", JSON.stringify(ordersList));
    }
  }, [ordersList]);

  const addToCart = () => {
    setCounter((prevCount) => prevCount + 1);

    const product = {
      id: id,
      name: name,
      price: price,
      number: 1,
    };

    setOrdersList((dataCart) => [...dataCart, product]);
    AboutMessage({
      message: `${name} has been added to the cart!`,
      icon: "success ",
    });
  };

  const removeToCart = (name) => {
    if (counter > 0) {
      setCounter((prevCount) => prevCount - 1);

      var targetData = ordersList.filter(function (index) {
        return index.name === name;
      });

      var otherData = ordersList.filter(function (index) {
        return index.name !== name;
      });

      var setTargetData = targetData.slice(1);

      setOrdersList([...otherData, ...setTargetData]);
      AboutMessage(`${name} has been removed from the cart!`);
    } else {
      setCounter(0);
      AboutMessage("No items in the cart to remove!");
    }
  };

  return (
    <div className="w-3/12 p-[0.30rem]">
      <div className="w-full flex flex-col justify-center items-center gap-2 bg-white font-Urbanist uppercase text-black shadow hover:shadow-md">
        <div className="w-full p-1">
          <img
            className="w-full h-full"
            src={DefaultPic}
            loading="lazy"
            alt="PRODUCTPHOTO"
          />
        </div>
        <div className="w-10/12 h-24 flex flex-col justify-between items-start">
          <h1 className="font-extrabold text-xl cursor-default">{name}</h1>
          <p
            id="price"
            className="flex flex-row justify-center items-center gap-1 text-2xl cursor-default"
          >
            <span className="font-Urbanist uppercase text-lg">$</span>
            {price}
          </p>
        </div>
        <div className="w-full flex flex-row justify-start items-center border-2 border-x-0 border-b-0 border-t-CCE3DE">
          <div className="w-full flex flex-row justify-between items-center px-5 py-2">
            <div className="flex flex-row justify-center items-center">
              <button
                className="w-10 h-10 flex flex-row justify-center items-center text-xl focus:bg-inherit"
                onClick={() => addToCart()}
              >
                <HiPlusSm />
              </button>
              <button
                className="w-10 h-10 flex flex-row justify-center items-center text-xl focus:bg-inherit"
                onClick={() => removeToCart(name)}
              >
                <HiMinusSm />
              </button>
            </div>
            <div>
              <p id="number" className="text-xl cursor-default">
                {counter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
