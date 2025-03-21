import { useRecoilState } from "recoil";
import CartList from "../components/templates/CartList.jsx";
import ordersListAtom from "../atoms/ordersListAtom.jsx";

const Cart = () => {
  const ordersListAtomRecoil = useRecoilState(ordersListAtom);
  const ordersList = ordersListAtomRecoil[0];

  const combinedCart = ordersList.reduce((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.number += item.number;
      existingItem.price += item.price;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const calculateTotals = (cart) => {
    const total = cart.reduce(
      (totals, item) => {
        totals.totalPrice += item.price;
        totals.totalItems += item.number;
        return totals;
      },
      { totalPrice: 0, totalItems: 0 }
    );

    return total;
  };

  const { totalPrice, totalItems } = calculateTotals(combinedCart);

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-5 bg-slate-100 pt-28 font-Urbanist uppercase">
      <CartList cart={combinedCart} />
      <div className="w-9/12 px-10">
        <div className="w-full h-auto flex flex-row justify-between items-center bg-white shadow p-4 font-semibold text-[1.25rem]">
          <p className="flex flex-row justify-center items-center gap-1">
            Total Items :
            <span id="totalItem" className="font-medium text-[1.5rem]">
              {totalItems}
            </span>
          </p>
          <p className="flex flex-row justify-center items-center gap-1">
            Total Price :
            <span id="totalPrice" className="font-medium text-[1.5rem]">
              <span className="font-Urbanist text-lg font-thin">$</span>
              {totalPrice.toFixed(2)}
            </span>
          </p>
          <button className="w-auto flex flex-row justify-center items-center text-orange-400 shadow-xl font-bold border-2 border-orange-400 py-2 uppercase text-[1.25rem] px-10 ">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
