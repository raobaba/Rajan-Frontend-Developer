import React from "react";

function Tokenomics() {
  return (
    <div className="w-full h-[650px] bg-gradient-to-b from-black to-black">
      <div className="relative flex justify-center overflow-x-auto">
        <table className="w-7/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Name
              </th>
              <td className="px-6 py-4">: AI Gen</td>
              <td className="px-6 py-4 dark:text-white">Laptop</td>
              <td className="px-6 py-4">: $AIGEN</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Total Supply
              </th>
              <td className="px-6 py-4">: 1B</td>
              <td className="px-6 py-4 dark:text-white">Laptop PC</td>
              <td className="px-6 py-4">: 1B</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Contract
              </th>
              <td className="px-6 py-4">: Lorem ipsum sit</td>
              <td className="px-6 py-4 dark:text-white">Accessories</td>
              <td className="px-6 py-4">: Ethereum</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full h-96 flex flex-col md:flex-row gap-5 justify-center">
  <div className="w-full md:w-5/12 h-48 md:h-full flex justify-center items-center">
    <div className="w-4/5 h-4/5">
    <img src={'./Donut.png'} alt="Donut" className="object-contain w-full h-full" />
    </div>
  </div>

  <div className="w-full md:w-5/12 h-48 md:h-full flex justify-center items-center">
    <div className="w-4/5 h-4/5">
    <img src={'./Frame 43085.png'} alt="Frame" className="object-contain w-full h-full" />
    </div>
  </div>
</div>

    </div>
  );
}

export default Tokenomics;
