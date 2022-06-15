import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col w-[100%] lg:w-[1000px] mx-auto mb-20 p-4 font-[tajawal]">
      <div className="flex md:h-96 h-[500px]">
        <div className="text-center m-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-10 text-[#ebebeb]"><span className="text-green-500">Quran</span> Rewayah 7 <span className="text-red-500">API</span></h1>
          <p className="font-thin sm:text-2xl md:text-3xl lg:text-4xl text-xl mt-6">An API for Seven Rewayah of Quran</p>
        </div>
      </div>

      <Link className="mt-10 mb-40 w-52 text-center mx-auto bg-green-500 hover:bg-green-700 font-semibold px-4 py-2 text-[#ebebeb] rounded-full" to="/login">Get Token <i className="ml-2 fas fa-up-right-from-square"></i></Link>

      <p className="font-bold text-lg sm:text-2xl md:text-3xl text-center mb-20"><i>"Login, Get Token, Do Anything..."</i></p>
      <hr />

      <div className="flex flex-col sm:flex-row items-center justify-around pt-20">
        <div className="flex items-center my-8 -ml-4 sm:ml-0 sm:text-sm md:text-base">
          <img src="https://avatars.githubusercontent.com/u/87503629?v=4" className="border-2 border-[#ebebeb] w-36 h-36 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-full mr-4" alt="Arief Photo" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#ebebeb] border-b border-slate-400">Arief Saifuddien</h1>
            <p className="text-white"><i className="mr-2 mt-2 fas fa-briefcase"></i> API Founder</p>
            <a className="font-thin text-white hover:text-white" target="_blank" href="https://github.com/saifuddien"><i className="mr-2 fab fa-github"></i> saifuddien</a>
            <p className="font-thin text-white"><i className="mr-2 fas fa-location-dot"></i> Jepara, Indonesia</p>
          </div>
        </div>
        <div className="flex items-center my-8 sm:text-sm md:text-base">
          <img src="https://avatars.githubusercontent.com/u/40214690?v=4" className="border-2 border-[#ebebeb] w-36 h-36 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-full mr-4" alt="Toyin Photo" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#ebebeb] border-b border-slate-400">Muhammad Toyin</h1>
            <p className="text-white"><i className="mr-2 mt-2 fas fa-briefcase"></i> API Co Founder</p>
            <a className="font-thin text-white hover:text-white" target="_blank" href="https://github.com/Toyin5"><i className="mr-2 fab fa-github"></i> Toyin5</a>
            <p className="font-thin text-white"><i className="mr-2 fas fa-location-dot"></i> Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;