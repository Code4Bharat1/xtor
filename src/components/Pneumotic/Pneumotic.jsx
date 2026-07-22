import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const PneumoticPowerPack = () => {
  return (
    <div className="bg-black text-white">
      {/* Header with white background */}
      <div className="bg-white py-4">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Pneumatic & Electric Powerpacks</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-10 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-tl-3xl rounded-br-2xl rounded-tr-none rounded-bl-none h-[250px] w-[90%] sm:h-[300px] sm:w-[400px] md:h-[350px] md:w-[450px] lg:h-[400px] lg:w-[500px] flex items-center justify-center mx-auto"
              >
                <img
                  src="pneumotic.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="flex justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-red-700 transition-colors">
                Download Catalog
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Title */}
            <div className="w-fit">
              <h1 className="text-4xl font-bold text-white mb-2">
                Pneumatic & Electric Powerpacks
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>
          </div>
        </div>

        {/* Equipped with safety features */}
        <div className="mt-12 ">
          <h2 className="text-3xl font-bold text-red-600">
            EQUIPPED WITH SAFETY FEATURES
          </h2>
          <p className="text-body mt-4 font-bold">
            NOTE: Also available as Conventional Electric Power pack. Pump will be supplied with Remote Control Pendant
          </p>
        </div>

        {/* Cycle vs Technical spec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* With Auto Cycle */}
          <div className="  rounded-lg p-4 text-red-500 text-center">
            <h3 className="font-bold  text-xl mb-2">With Auto Cycle</h3>
            <img
              src="with_auto.png"
              alt="With Auto Cycle"
              className="mx-auto  w-80 h-60 object-contain"
            />
          </div>

          {/* Without Auto Cycle */}
          <div className=" rounded-lg p-4 text-red-500 text-center">
            <h3 className="font-bold text-xl mb-2">Without Auto Cycle</h3>
            <img
              src="without_auto.png"
              alt="Without Auto Cycle"
              className="mx-auto w-80 h-60 object-contain"
            />
          </div>

          {/* Technical Specification */}
       <div className="rounded-lg p-4 text-white">
  <h3 className="font-bold mb-4 text-center text-lg">
    Technical Specification
  </h3>
  <table className="w-full text-sm border-2 border-white min-w-max">
    <tbody className="divide-y divide-white">
      <tr className="divide-x divide-white">
        <td className="font-semibold text-center p-3">Model No.</td>
        <td className="text-center font-semibold p-3">XEP-700</td>
      </tr>
      <tr className="divide-x divide-white">
        <td className="font-semibold text-center p-3">
          Power <br /> Rating Flow <br /> Rate
        </td>
        <td className=" w-1/2 text-center font-semibold p-3">1.5 KW</td>
      </tr>
      <tr className="divide-x divide-white ">
        <td className="w-1/2  font-semibold text-center p-3">
          Maximum <br /> Pressure
        </td>
        <td className="text-center  font-semibold p-3">700Bar / 10,000 PSI</td>
      </tr>
      <tr className="divide-x divide-white">
        <td className="font-semibold text-center p-3">Flow Rate</td>
        <td className="w-1/2 text-center font-semibold p-3">
          9.7LPM @ 70Bar <br /> 0.97LPM @ 700 Bar
        </td>
      </tr>
      <tr className="divide-x divide-white">
        <td className="font-semibold text-center p-3">Capacity</td>
        <td className="w-1/2 text-center font-semibold p-3">6 Ltr. / 2 Gallon</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>

        {/* Features */}
     <div className="mt-10 space-y-8">
  <div>
    <h3 className="text-2xl font-bold text-red-600">
      Fully Automatic Power Pack
    </h3>
    <ul className="list-disc list-inside text-lg mt-2 space-y-1">
      <li>Auto cycle for reliable operations</li>
      <li>High repeatability in bolting process</li>
      <li>Without pressing the button again and again</li>
    </ul>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-red-600">
      Temperature Management
    </h3>
    <ul className="list-disc list-inside text-lg mt-2 space-y-1">
      <li>In-built heat exchanger to cool the system</li>
      <li>Thermal cut-off switch for rapid cooling and heat protection against coil burning</li>
      <li>Compact cabinets</li>
      <li>System is capable of automatically controlling temperature rise</li>
    </ul>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-red-600">
      Oil Immersed Motor
    </h3>
    <ul className="list-disc list-inside text-lg mt-2 space-y-1">
      <li>Oil-immersed motor for operations (Effective dissipation of heat generated) via cooling</li>
      <li>Smooth running & extended service time</li>
    </ul>
  </div>
  <div>
            <h3 className="text-2xl font-bold text-red-600">
              PLC Controlled System
            </h3>
            <p className="text-lg mt-2">
             Effectively controlled operations of power packs.<br/>
If the power pack remains idle continuously more than<br/>
3 minutes, it gets switched off automatically.
            </p>
          </div>
</div>

      </div>

      
    </div>
  );
};

export default PneumoticPowerPack;
