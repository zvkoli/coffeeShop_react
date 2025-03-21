import ProductCard from "../module/ProductCard";

const ProductsList = ({ title , data }) => {

  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-slate-100 font-Urbanist uppercase '>
        <p className='w-full h-20 flex flex-row justify-start items-center text-3xl font-extrabold text-black/80 cursor-default'>
          {title}
        </p>
      <div className='h-full w-full flex flex-row justify-start items-start flex-wrap'>
        {
          data?.map((index) => {
              return <ProductCard key={index.id} {...index} />
          })
        }
      </div>
    </div>
  );
}

export default ProductsList;