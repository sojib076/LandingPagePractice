import {  ArrowUpRight, Target } from "lucide-react";
import Craft from "./components/Home/Craft";





const App = () => {



  return (
    <>


      <section className="  lg:p-10 lg:pr-0  p-5  overflow-hidden font-['Manrope']  ">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:relative">
          <div className=" ">
            <h1 className="font-extrabold font-['Manrope'] lg:text-[62px] text-4xl  col-span-2 
            lg:w-[680px] lg:leading-[70px] ">
              Unleash Your Brand's<br />
              Potential
              with Us
            </h1>
            <div className="lg:w-[400px] lg:h-[502px] w-full h-[200px] bg-[#c4c4c4] lg:rounded-[51px] rounded-xl mt-5  mb-10 lg:mb-0 "  />
          </div>
          <div>
            <div className="lg:relative lg:left-10   ">
            <div className="lg:w-[330px] lg:h-[200px] lg:py-0 p-2  bg-white/30 rounded-[35px] backdrop-blur-[104.70px] lg:mt-10 mt-4 lg:absolute lg:left-[50%] " >


                  <div className="flex py-5 px-5 ">
                    <h1 className=" text-[24px]  lg:w-[70%] w-[90%] font-bold ">
                      Creativity Meets  Straaategy
                    </h1>
                    <ArrowUpRight className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                  </div>
                  <p className="font-[Manrope] lg:text-[16.5px]   text-black/70 lg:w-[280px] lg:mx-auto w-[90%] px-5 lg:px-0 lg:mt-0 mt-[-15px] ">Where creativity meets strategy to transform your brand's vision</p>

                </div>

              <div className=" lg:absolute lg:top-48 ">
                <div className="lg:w-[330px] lg:h-[200px] lg:py-0 p-2   bg-white/30 rounded-[35px] backdrop-blur-[104.70px] lg:mt-14 mt-4 " >
                <div className="flex py-5 px-5 ">
                    <h1 className=" text-[24px]  lg:w-[70%] w-[90%] font-bold ">
                      Creativity Meets  Straaategy
                    </h1>
                    <Target className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                  </div>
                  <p className="font-[Manrope] lg:text-[16.5px]   text-black/70 lg:w-[280px] lg:mx-auto w-[90%] px-5 lg:px-0 lg:mt-0 mt-[-15px] ">Where creativity meets strategy to transform your brand's vision</p>
                </div>
                <div className="lg:w-[330px] lg:h-[200px] lg:py-0 p-2   bg-white/30 rounded-[35px] backdrop-blur-[104.70px] lg:mt-10 mt-4 " >
                <div className="flex py-5 px-5 ">
                    <h1 className=" text-[24px]  lg:w-[70%] w-[90%] font-bold ">
                      Creativity Meets  Straaategy
                    </h1>
                    <Target className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                  </div>
                  <p className="font-[Manrope] lg:text-[16.5px]   text-black/70 lg:w-[280px] lg:mx-auto w-[90%] px-5 lg:px-0 lg:mt-0 mt-[-15px] ">Where creativity meets strategy to transform your brand's vision</p>
                </div>

           


              </div>
            </div>
          </div>
          <div className="lg:w-[80%] w-[100%] lg:h-[750px] h-[200px] bg-[#c4c4c4] lg:rounded-[51px] rounded-xl  lg:mt-[-50px] mt-5  " />
        </div>
      </section>

      <Craft />





    </>

  );
};

export default App;
