import React from "react";

function RoadmapPage() {
  return (
    <div className="font-outfit h-[1600px] justify-center w-full bg-gradient-to-b from-black blue-400 to-black text-white">
      <h1 className="text-center text-3xl font-bold text-purple-300 mb-8 lg:mb-16">
        Roadmap
      </h1>
      <div className="flex flex-col lg:flex-row justify-end lg:items-start mb-8 lg:mb-16">
        <div className="w-full lg:w-10/12 flex flex-col lg:flex-row justify-between h-auto lg:h-auto">
          <img
            src="./phase1.png"
            alt="Phase 1 Image"
            className="w-full lg:w-1/3 object-cover mx-auto mt-4 lg:mt-8 lg:ml-8 lg:mr-4 h-40 lg:h-auto"
          />
          <div className="w-full lg:w-6/12 mx-auto mt-4 lg:ml-8 lg:mt-10 lg:mr-0 lg:order-first h-40 lg:h-auto">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-left ml-5 lg:text-left">
              PHASE 1
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Horizen dai dai harmony dogecoin waves nexo.</li>
              <li>Flow horizon waves dash tether zcash waves dash terraUSD.</li>
              <li>
                Quant harmony amps cosmos PancakeSwap decentralized decred.
              </li>
              <li>
                Serum TRON solana father holo crypto. Flow eCash amp EOS
                digibyte stellar.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-end lg:items-start mb-8 lg:mb-16">
        <div className="w-full lg:w-10/12 flex flex-col lg:flex-row justify-between h-auto lg:h-auto">
          <img
            src="./phase2.png"
            alt="Phase 1 Image"
            className="w-full lg:w-1/3 object-cover mx-auto mt-4 lg:mt-8 lg:ml-8 lg:mr-4 h-40 lg:h-auto"
          />
          <div className="w-full lg:w-6/12 mx-auto mt-4 lg:ml-8 lg:mt-10 lg:mr-0 lg:order-first h-40 lg:h-auto">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-left ml-5 lg:text-left">
              PHASE 2
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Horizen dai dai harmony dogecoin waves nexo.</li>
              <li>Flow horizon waves dash tether zcash waves dash terraUSD.</li>
              <li>
                Quant harmony amps cosmos PancakeSwap decentralized decred.
              </li>
              <li>
                Serum TRON solana father holo crypto. Flow eCash amp EOS
                digibyte stellar.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-end lg:items-start mb-8 lg:mb-16">
        <div className="w-full lg:w-10/12 flex flex-col lg:flex-row justify-between h-auto lg:h-auto">
          <img
            src="./phase3.png"
            alt="Phase 1 Image"
            className="w-full lg:w-1/3 object-cover mx-auto mt-4 lg:mt-8 lg:ml-8 lg:mr-4 h-40 lg:h-auto"
          />
          <div className="w-full lg:w-6/12 mx-auto mt-4 lg:ml-8 lg:mt-10 lg:mr-0 lg:order-first h-40 lg:h-auto">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-left ml-5 lg:text-left">
              PHASE 3
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Horizen dai dai harmony dogecoin waves nexo.</li>
              <li>Flow horizon waves dash tether zcash waves dash terraUSD.</li>
              <li>
                Quant harmony amps cosmos PancakeSwap decentralized decred.
              </li>
              <li>
                Serum TRON solana father holo crypto. Flow eCash amp EOS
                digibyte stellar.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapPage;
