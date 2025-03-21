import "../../styles/spinner.css";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black/80">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <p
        id="loading-txt"
        className="font-Urbanist uppercase text-orange-400 text-sm relative top-20 left-2"
      >
        Loading
      </p>
    </div>
  );
};

export default Spinner;
