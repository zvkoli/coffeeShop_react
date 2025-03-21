import Coffee from "../assets/coffee.webp";
import AboutMessage from "../components/module/AboutMessage";

const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden font-Urbanist uppercase bg-slate-100 text-black/80">
      <div className="w-full h-4/5 flex flex-row justify-center items-center border-2">
        <div className="h-full w-1/2 flex flex-col justify-end items-start gap-1 pl-14 py-10">
          <p className="text-xl max-sm:text-lg">A real Italian cafe</p>
          <p className="text-6xl font-black text-orange-400 max-sm:text-5xl">
            Discover the taste of real coffee
          </p>
          <p className="text-base max-sm:text-lg">
            Boost your productvity and build your mood with a glass of coffee in
            the morning .
          </p>
          <div className="w-4/12 pt-2">
            <button
              className="w-full flex flex-row justify-center items-center bg-slate-100 text-orange-400 shadow-xl font-bold border-2 border-orange-400 py-2 uppercase text-[1.25rem] "
              onClick={() =>
                AboutMessage({ message: "This feature will be available soon!" , icon:"error"})
              }
            >
              Meet us
            </button>
          </div>
        </div>
        <div className="h-full w-1/2 flex flex-row justify-center items-end">
          <div className="w-6/12 h-4/6 relative top-5">
            <img src={Coffee} alt="COFFEE" className="w-auto h-auto" />
          </div>
        </div>
      </div>
      <footer className="w-full h-1/5 flex flex-row justify-center items-end bg-black/80">
        <p className="flex flex-row justify-center items-center gap-1 text-orange-400 text-sm p-1">
          all right reserved BREW HAVEN
          <span>2023</span>
          {/* &copy; */}
        </p>
      </footer>
    </div>
  );
};

export default Home;
