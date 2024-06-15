const WorkPage = () => {
  return (
    <div className="mt-[1240px] work-gradient">
      <div className="w-full rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-4/12">
            <img
              src="./ladyImg.png"
              alt=""
              className="w-full h-auto md:h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-4/12 p-6 flex flex-col justify-center">
            <h1 className="text-4xl text-white font-extrabold mb-4">
              How it Works
            </h1>
            <div className=" rounded-lg p-4">
              <p className="font-medium text-green-400 text-2xl mb-4">
                Select an Avatar
              </p>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                Create or Generate Script <br />
                Select AI Voices <br />
                Publish
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 w-full h-32">
        <div className="flex flex-wrap gap-2">
          <span className="flex-1 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white flex items-center justify-center rounded-lg">
            Avatar
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 text-white flex items-center justify-center rounded-lg">
            3D Model
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white flex items-center justify-center rounded-lg">
            Technology
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-white flex items-center justify-center rounded-lg">
            Artificial Intelligence
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white flex items-center justify-center rounded-lg">
            AI Chat Bot
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-yellow-400 via-green-500 to-teal-500 text-white flex items-center justify-center rounded-lg">
            Customizable
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="flex-1 h-10 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 text-white flex items-center justify-center rounded-lg">
            Avatar
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white flex items-center justify-center rounded-lg">
            People
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex items-center justify-center rounded-lg">
            Create Videos
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white flex items-center justify-center rounded-lg">
            Analyze
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-white flex items-center justify-center rounded-lg">
            Outfits
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white flex items-center justify-center rounded-lg">
            3D Model
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-white flex items-center justify-center rounded-lg">
            Voice Chat
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white flex items-center justify-center rounded-lg">
            Marketing
          </span>
          <span className="flex-1 h-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white flex items-center justify-center rounded-lg">
            Realistic
          </span>
        </div>
      </div>
      <div className="mt-20 w-full four-boxes">
        <div className="w-8/12 h-2/4 flex gap-2 justify-center m-auto">
          <div className="w-full md:w-4/12 h-5/6 rounded-lg works-gradient relative">
            <div className="w-3/12 text-center h-14 text-white m-auto mt-2">
              AI OutFits
            </div>
            <img
              src={"./div.png"}
              alt=""
              className="first-image absolute top-0 left-0 w-full h-full z-0 object-cover"
            />
            <img
              src={"./Rectangle 1141.png"}
              alt=""
              className="second-image absolute mt-20 rounded-lg z-10 w-full md:w-auto"
            />
            <img
              src={"./Red Shoe.png"}
              alt=""
              className="third-image relative  w-24 md:w-60 z-50 m-auto"
            /> 
            
          </div>

          <div className="w-full md:w-7/12 h-5/6 relative rounded-lg">
            <div className="w-4/12 text-center h-14 text-white m-auto mt-2">
              Realistic AI Avatar
            </div>
            <img
              src={"./div.png"}
              alt=""
              className="first-image absolute top-0 left-0 w-full h-full z-0 object-cover"
            />
            <img
              src={"./HalfLady.png"}
              alt=""
              className="absolute rounded-lg z-50 w-full h-4/6 mt-5 object-cover"
            />
          </div>
        </div>
        <div className="w-8/12 h-2/4 flex mt-[-40px] gap-2 justify-center m-auto">
          <div className="w-7/12 h-5/6 relative rounded-lg">
            <div className="w-5/12 text-center h-14 text-white m-auto mt-2">
              Generate or Write Your Script
            </div>
            <img
              src={"./div.png"}
              alt=""
              className="first-image absolute top-0 left-0 w-full h-full z-0 object-cover"
            />
            <img
              src={"./keyboard.png"}
              alt=""
              className="absolute rounded-lg z-50 w-full h-4/6 mt-5 object-cover"
            />
          </div>
          <div className="w-full md:w-4/12 h-5/6 relative rounded-lg">
            <div className="w-7/12 text-center h-14 text-white m-auto mt-2">
              AI-Powered Voice Generator
            </div>
            <img
              src={"./div.png"}
              alt=""
              className="first-image absolute top-0 left-0 w-full h-full z-0 object-cover"
            />
            <img
              src={"./AI-Gen-Pic.png"}
              alt=""
              className="absolute rounded-lg z-50 w-full h-4/6 mt-5 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
