import React from 'react';

export default function Hero() {
  return (
    <div>
      <div className="container-fluid bg-black feature py-5 ">
        <div className="container py-2">
          <div className="mx-auto text-center pb-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl ml-4  font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Spectra: Where Innovation and Culture Collide<br />{' '}
              <span className=" text-3xl  font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent md:text-4xl lg:text-5xl">Empowering Student Brilliance</span>
            </h1>
          </div>
          <div className="flex justify-center items-center gap-14 mt-8">
            {/* Left Side Icons */}
            <div className="flex flex-col items-center gap-8">
              <img src="https://cdn-icons-png.freepik.com/256/12201/12201192.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" width="75px" height="90px" alt="icon1" />
              <img src="https://cdn-icons-png.freepik.com/256/999/999427.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" width="75px" height="90px" alt="icon2" />
              <img src="https://cdn-icons-png.freepik.com/256/1681/1681487.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" width="75px" height="90px" alt="icon3" />
              <img src="https://cdn-icons-png.freepik.com/256/16405/16405989.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" width="75px" height="90px" alt="icon8" />
            </div>

            {/* Center Image */}
            <div className="relative w-full max-w-lg h-[300px] md:h-[400px] lg:h-[500px] rounded-[10px] shadow-[16px_16px_18px_#0000008c] overflow-hidden 
              before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] 
              before:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 
              before:animate-spin-slow flex flex-col 
              border-2 border-pink-500 md:border-none"> {/* Added border classes here */}
              <div className="absolute flex justify-center items-center top-[10px] right-[10px] bottom-[10px] left-[10px] rounded-[10px] px-4 bg-zinc-800 shadow-inner">
                <img className="h-full w-full object-cover" src="Hero.jpeg" alt="Hero Image" />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex flex-col items-center gap-8">
              <img src="https://cdn-icons-png.freepik.com/256/16773/16773519.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" width="75px" height="px" alt="icon4" />
              <img src="https://cdn-icons-png.freepik.com/256/4144/4144517.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" width="75px" height="90px" alt="icon5" />
              <img src="https://cdn-icons-png.freepik.com/256/12343/12343421.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" width="75px" height="90px" alt="icon6" />
              <img src="https://cdn-icons-png.freepik.com/256/16405/16405989.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" width="75px" height="90px" alt="icon7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
