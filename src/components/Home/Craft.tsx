import { ArrowUpRight, PlayCircle } from "lucide-react";
import Success from "./Success";
import Footer from "./Footer";


const Craft = () => {
    return (
      <div> 
          <div className="lg:px-12 px-4 overflow-hidden">
            <>
                <h1 className=" font-[Manrope] lg:text-[55px] text-[30px] lg:h-[80px] font-extrabold lg:mt-[118px]  mt-10   ">
                    Crafting Unique Experiences for Your Brand
                </h1>

                <div className="lg:grid-cols-2 grid lg:mt-[105px] gap-8 mt-5">
                    <div>
                        <p className="text-[Manrope] font-medium text-[16.6px] leading-7 w-[100%]">
                            Our approach is simple yet effective: we listen, we ideate, we create, and we deliver. By understanding your goals and challenges, we develop strategies that not only meet but exceed your expectations.
                        </p>

                        <div className="
                    flex lg:justify-evenly  items-center gap-5 mt-10">
                            <div className="lg:w-[350px] w-[65%]
                         h-[182px] bg-black/30 rounded-[19px] backdrop-blur-[64.70px]" />
                            <div>
                                <h1 className="text-[24px] font-bold">375,2K+</h1>
                                <p className="lg:text-[16.5px] text-sm text-black font-bold">
                                    Brand's Potential
                                </p>
                                <button className="rounded-[43.62px] 
                            bg-gradient-to-r from-[#C05AFF] to-[#4D73F8] text-white lg:px-6 px-4 text-sm py-2 lg:mt-10 mt-4">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:w-[600px] h-[322px] bg-[#c4c4c4] rounded-[51px]" />
                    </div>
                </div>
            </>

            {/* Inspiring Creativity and Innovation */}
            <section className="grid lg:grid-cols-3 grid-cols-1 lg:mt-[131px] lg:gap-16 mt-20 ">
                <div className=" w-[100%] h-[300px] lg:h-auto bg-[#c4c4c4] rounded-[51px]  " />

                <div className="lg:col-span-2 lg:p-0 p-2 ">
                    <h1 className="font-['Manrope'] font-extrabold lg:text-[75px] text-[35px] lg:leading-[92px]  ">
                        Inspiring Creativity and Innovation
                    </h1>
                    <p className="text-[16.66px] leading-7 lg:my-5 my-4 font-medium text-black/70 ">
                        Where creativity meets strategy to transform your brand's vision into reality. As a leading creative agency, we specialize in crafting innovative solutions that elevate your brand and captivate your audience. Our team of talented designers, strategists, and storytellers work collaboratively to deliver exceptional results that drive engagement and growth.
                    </p>
                    <h1 className="font-['Manrope'] font-extrabold lg:text-[30px] text-[25px]   mt-10 m  ">
                        Future of Creative Excellence
                    </h1>
                    <p className="text-[16.66px] leading-7  lg:mt-4 lg:my-5 my-4  font-medium text-black/70">
                        Where creativity meets strategy to transform your brand's vision into reality. As a leading creative agency, we specialize in crafting innovative solutions that elevate your brand and captivate your audience. Our team of talented designers, strategists, and storytellers work
                    </p>
                    <div className="mt-20 grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <div className="lg:h-[182px] py-10 bg-white/30 rounded-[19px] backdrop-blur-[64.70px]" >
                            <div className="flex justify-between items-center p-5  ">
                                <h1 className="text-[20px] w-[100%] font-bold ">
                                    Creative Excellence
                                </h1>
                                <ArrowUpRight className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                            </div>
                            <p className="font-[Manrope] 
                            text-[16.5px] text-black/70  lg:mx-auto w-[80%] lg:w-[85%] px-5 lg:px-0 ">
                                Where creativity meets strategy to transform your brand's vision</p>
                        </div>

                        <div className="lg:w-[80%] lg:h-[182px] py-10 bg-white/30 rounded-[19px] backdrop-blur-[64.70px]   " >
                            <div className="flex justify-between items-center px-5   ">
                                <h1 className="text-[55px] w-[100%] font-bold leading-[0px] mt-10  ml-1   ">
                                    5.245+
                                </h1>
                                <ArrowUpRight className="w-10 h-10 iconBg rounded-lg p-1 text-white mt-5 " />
                            </div>
                            <p className="font-[Manrope] 
                            text-[16.5px] text-black  lg:mx-auto w-[80%] lg:w-[85%] px-5 lg:px-5  mt-5 font-extrabold ">
                                Brand's Potential </p>
                        </div>

                    </div>
                </div>
            </section>

      

        </div>

        <section> 
            <div className="h-[500px] bg-black/30 mt-36 py-10 "> 
                <h1 className="font-['Manrope] font-bold lg:text-[80px] text-5xl text-center"> 
                Exceptional Creative Services
                </h1>
                <p className="text-[16px] mx-auto w-[90%] font-medium text-center mt-8 lg:mt-4">
                Where creativity meets strategy to transform your brand's vision into reality. As a leading creative agency, we specialize in crafting innovative solutions that elevate your brand and captivate your audience. Our team of talented designers, strategists
                </p>

               <div> 
               <PlayCircle className="text-center mx-auto lg:mt-20 mt-4  "
                size={80}
               ></PlayCircle>
               <h1 className="text-center text-[26.03px] font-medium ml-4 mt-5 text-white "> 
                Play Now 
               </h1>
               </div>
            </div>
        </section>

        {/* succuess */}
        <Success/>
        <Footer/>
      </div>
    );
};

export default Craft;