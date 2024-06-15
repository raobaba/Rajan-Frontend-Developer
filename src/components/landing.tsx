import Tokenomics from "@/components/tokenomics";
import "@/app/landing.css";
const columns = [
  {
    images: [
      { src: "./Picture.png", classes: "w-92 h-76 mb-[-20px]" },
      { src: "./Picture1.png", classes: "w-92 h-76 mb-[-20px]" },
      { src: "./Picture2.png", classes: "w-92 h-76" },
    ],
    justify: "justify-end items-end",
    width: "w-[180px]",
  },
  {
    images: [
      { src: "./Picture4.png", classes: "celebs-pic w-96 h-80 z-10" },
      { src: "./Picture3.png", classes: "celebs-pic w-96 h-80 mb-[-40px]" },
      { src: "./Picture5.png", classes: "celebs-pic w-96 h-80 mb-10 mt-10" },
    ],
    justify: "justify-start",
    width: "w-[200px]",
  },
  {
    images: [
      { src: "./Picture6.png", classes: "w-40 h-56 mb-[-30px]" },
      { src: "./Picture7.png", classes: "w-40 h-56 mb-[-30px]" },
      { src: "./Picture8.png", classes: "w-40 h-40" },
    ],
    justify: "justify-end items-end",
    width: "w-[180px]",
  },
];

const miniImgColumns = Array(8)
  .fill(0)
  .map((_, index) => ({
    justify: index % 2 === 0 ? "justify-end items-end" : "justify-start",
    images: [
      { src: "./1.png", classes: index % 2 === 0 ? "mt-15" : "mt-[-13px]" },
      { src: "./2.png", classes: index % 2 !== 0 ? "mt-[-10px]" : "" },
      { src: "./3.png", classes: index % 2 === 0 ? "mb-[-27px]" : "mt-5px" },
    ],
  }));

const LandingPage = () => (
  <div className="w-full gradient-background absolute top-[71.42px] gap-0">
    <div className="relative flex justify-center items-center xl:justify-between">
      <div className="left-box">
        <div className="w-full text-logo-text h-6 text-white rounded-md ">
          <p className="logo-text bg-gray-900 rounded-lg ml-2">
            {" "}
            🎉 New in AI.GEN: Real Time Interaction{" "}
          </p>
        </div>

        <div className="serum w-full h-[80px]">
          <span className="gradient-text">IOTA polygon serum ipsum WAX </span>
          <span className="gradient-text text-neutral-300">
            terraUSD gala THETA.
          </span>
        </div>

        <div className="crypto w-full h-[65px] text-neutral-400">
          Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor
          horizen ethereum quant bitcoin.
        </div>

        <div className="w-full flex justify-start xl:justify-center h-24 mt-24 xl:w-56 xl:h-28 xl:mt-24">
          <button className="w-1/2 text-2xl rounded-md xl:h-16 xl:text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-14 text-white ">
            Get Started
          </button>
        </div>
      </div>

      <div className="right-box absolute top-0 left-0 w-full h-full lg:flex hidden">
        <div className="flex justify-center items-center w-full h-full">
          {columns.map((col, index) => (
            <div
              key={index}
              className={`${col.width} h-[630.48px] flex flex-col ${col.justify}`}
            >
              {col.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image.src}
                  alt=""
                  className={image.classes}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mini-img-container z-10 w-full mt-44 h-[550px] relative">
      <div className="w-10/12 h-5/6 flex justify-center gap-3 mt-12 m-auto relative">
        {miniImgColumns.map((col, index) => (
          <div
            key={index}
            className={`w-28 h-full flex flex-col ${col.justify} opacity-50`}
          >
            {col.images.map((image, idx) => (
              <img key={idx} src={image.src} alt="" className={image.classes} />
            ))}
          </div>
        ))}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="text-white text-text-combo xl:w-9/12 w-11/12 text-2xl font-bold opacity-90">
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

export default LandingPage;
