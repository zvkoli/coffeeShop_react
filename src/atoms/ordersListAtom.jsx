import { atom } from "recoil";

const getDefaultOrders = () => {
  const savedOrders = localStorage.getItem("orders");
  return savedOrders ? JSON.parse(savedOrders) : [];
};

const ordersListAtom = atom({
  key: 'ordersListAtom',
  default: getDefaultOrders(),
});

export default ordersListAtom;
