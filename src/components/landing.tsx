const LandingPage = () => {
  return (
    <div className="w-full h-[1292px] gradient-background absolute top-[72.42px] left-[0.46px] gap-0">
      <div className="flex justify-between">
        <div className="left-box">
          <div className=" w-60 h6 bg-slate-400 bg rounded-md">
            <p className="logo-text ml-2">
              {" "}
              🎉 New in AI.GEN: Real Time Interaction
            </p>
          </div>

          <div className="serum w-full h-[80px] mt-10 gap-[48px]">
            <span className="gradient-text">IOTA polygon serum ipsum WAX </span>
            <span className="gradient-text text-slate-400">
              terraUSD gala THETA.
            </span>
          </div>

          <div className="crypto w-full h-[65px] mt-2 gap-[48px] ">
            Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor
            horizen ethereum quant bitcoin.
          </div>
          <div className="w-44 h-24 mt-20 ">
            <button className="w-full h-14 text-white border text-2xl rounded-md">
              Get Started
            </button>
          </div>
        </div>
        <div className="right-box flex">
          <div className="first-col w-[180px] h-[630.48px] flex flex-col justify-end items-end">
            <img src="./Picture.png" alt="" className=" w-92 h-76 mb-[-20px]" />
            <img src="./Picture1.png" alt="" className="w-92 h-76 mb-[-20px]" />
            <img src="./Picture2.png" alt="" className=" w-92 h-76" />
          </div>

          <div className="first-col w-[200px] h-[630.48px] flex flex-col justify-start">
            <img src="./Picture4.png" alt="" className="celebs-pic w-96 h-80 z-10" />
            <img
              src="./Picture3.png"
              alt=""
              className="celebs-pic w-96 h-80 mb-[-40px]"
            />
            <img
              src="./Picture5.png"
              alt=""
              className="celebs-pic w-96 h-80 mb-10 mt-10"
            />
          </div>
          <div className="first-col w-[180px] h-[630.48px] flex flex-col justify-end items-end">
            <img src="./Picture6.png" alt="" className="w-40 h-56 mb-[-30px]" />
            <img
              src="./Picture7.png"
              alt=""
              className=" w-40 h-56 mb-[-30px]"
            />
            <img src="./Picture8.png" alt="" className=" w-40 h-40 " />
          </div>
        </div>
      </div>
      <div className="mini-img-container z-10 w-full mt-44 h-[550px] relative">
        <div className="w-10/12 h-5/6 flex justify-center gap-3 mt-12 m-auto relative">
          <div className="w-28 h-full flex flex-col opacity-50 justify-end items-end">
            <img src={"./1.png"} alt="" className="mt-15" />
            <img src={"./2.png"} alt="" />
            <img src={"./3.png"} alt="" className="mb-[-27px]" />
          </div>
          <div className="w-28 h-full flex opacity-50 flex-col justify-start">
            <img src={"./1.png"} alt="" className="mt-[-13px]" />
            <img src={"./2.png"} alt="" className="mt-[-10px]" />
            <img src={"./3.png"} alt="" className="mt-5px" />
          </div>
          <div className="w-28 h-full flex opacity-50 flex-col justify-end items-end">
            <img src={"./1.png"} alt="" className="mt-15" />
            <img src={"./2.png"} alt="" />
            <img src={"./3.png"} alt="" className="mb-[-27px]" />
          </div>
          <div className="w-28 h-full flex opacity-50 flex-col justify-start">
            <img src={"./1.png"} alt="" className="mt-[-13px]" />
            <img src={"./2.png"} alt="" className="mt-[-10px]" />
            <img src={"./3.png"} alt="" className="mt-5px" />
          </div>
          <div className="w-28 h-full flex opacity-50 flex-col justify-end items-end">
            <img src={"./1.png"} alt="" className="mt-15" />
            <img src={"./2.png"} alt="" />
            <img src={"./3.png"} alt="" className="mb-[-27px]" />
          </div>
          <div className="w-28 h-full flex opacity-50 flex-col justify-start">
            <img src={"./1.png"} alt="" className="mt-[-13px]" />
            <img src={"./2.png"} alt="" className="mt-[-10px]" />
            <img src={"./3.png"} alt="" className="mt-5px" />
          </div>
          <div className="w-28 h-full flex opacity-50 flex-col justify-end items-end">
            <img src={"./1.png"} alt="" className="mt-15" />
            <img src={"./2.png"} alt="" />
            <img src={"./3.png"} alt="" className="mb-[-27px]" />
          </div>
          <div className="w-28 h-full flex opacity-50 flex-col justify-start">
            <img src={"./1.png"} alt="" className="mt-[-13px]" />
            <img src={"./2.png"} alt="" className="mt-[-10px]" />
            <img src={"./3.png"} alt="" className="mt-5px" />
          </div>
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <div className="text-white w-9/12 text-2xl font-bold opacity-90">
              <span className="create-customize">
                Create, customize, and publish
              </span>
              <span className="your-digital ml-3">
                your digital persona to life effortlessly.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
