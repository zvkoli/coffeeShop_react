import { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import OrdersListAtom from "../../atoms/ordersListAtom";

export default function CartButton() {
  const ordersListAtomRecoil = useRecoilState(OrdersListAtom);
  const ordersList = ordersListAtomRecoil[0];
  const [numberProduct, setNumberProduct] = useState(0);

  useEffect(() => {
    setNumberProduct(ordersList.length);
  }, [ordersList]);

  return (
    <div className="flex flex-col justify-center items-center relative">
      {numberProduct > 0 && (
        <span
          id="number"
          className="w-5 h-5 text-xl text-orange-400 flex flex-row justify-center items-center absolute -top-3 -right-3 cursor-default"
        >
          {numberProduct}
        </span>
      )}
      <button className="w-full h-full flex flex-row justify-center items-center">
        <Link
          className="w-full h-full text-[2.25rem] text-orange-400"
          to={"/Cart"}
        >
          <HiShoppingCart />
        </Link>
      </button>
    </div>
  );
}
