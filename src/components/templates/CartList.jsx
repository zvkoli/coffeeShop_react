import CartCard from '../module/CartCard';

const CartList = ({ cart }) => {
  return (
    <div className='w-10/12 flex flex-col justify-start items-center gap-5'>
        {
        cart.map((index) => {
            return (
              <CartCard
              key={index.id}
              name={index.name}
              number={index.number}
              price={index.price}
              />
            );
          })
        }
    </div>
  );
}

export default CartList;