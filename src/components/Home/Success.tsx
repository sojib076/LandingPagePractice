/* eslint-disable @typescript-eslint/no-explicit-any */
import { Target } from "lucide-react";
import { useRef, useState } from "react";


const faqs = [
    {
        question: "Inspiring Creativity And Innovation",
        answer: "Our approach is simple yet effective: we listen, we assess, we create, and we deliver. By understanding your goals and challenges, we develop strategies that not only meet but exceed your expectations.",
    },
    {
        question: "Creative Partner In Success",
        answer:
            "Our approach is simple yet effective: we listen, we assess, we create, and we deliver. By understanding your goals and challenges, we develop strategies that not only meet but exceed your expectations.",
    },
    {
        question: "Innovative Creative Solutions",
        answer: "Our approach is simple yet effective: we listen, we assess, we create, and we deliver. By understanding your goals and challenges, we develop strategies that not only meet but exceed your expectations.",
    },
    {
        question: "Your Partner In Healthy And Happy Eating",
        answer: "Our approach is simple yet effective: we listen, we assess, we create, and we deliver. By understanding your goals and challenges, we develop strategies that not only meet but exceed your expectations.",
    },
];



const Success = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const toggleFAQ = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <>
            <div className="lg:mt-56 lg:px-12 mt-10 px-5 ">
                <div className="grid lg:grid-cols-2 grid-cols-1 ">
                    <div className="">
                        <h1 className="lg:text-[66px]  text-4xl font-['Manrope']  font-bold lg:leading-[80px] text-center lg:text-left  ">
                            Creative Partner in Success
                        </h1>
                        <p className="font-['Manrope'] font-medium lg:mt-16 mt-5">
                            Where creativity meets strategy to transform your brand's vision into reality. As a leading creative agency, we specialize in crafting innovative solutions that elevate your brand and captivate your audience. Our team of talented designers, strategists, and storytellers work collaboratively to deliver exceptional
                        </p>

                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 mt-10 ">



                        <div className=" h-[230px] bg-white/30 rounded-[18.02px] backdrop-blur-[64.70px] p-5 font-[Manrope] " >
                            <Target className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                            <h1 className="text-[24px] w-[70%] font-bold my-5 font-['Manrope'] ">
                                Services Here
                            </h1>
                            <p className="font-medium font-['Manrope']">
                                Where creativity meets strategy to transform your brand's vision
                            </p>
                        </div>
                        <div className=" h-[230px] bg-white/30 rounded-[18.02px] backdrop-blur-[64.70px] p-5 font-[Manrope] " >
                            <Target className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                            <h1 className="text-[24px] w-[70%] font-bold my-5 font-['Manrope'] ">
                                Services Here
                            </h1>
                            <p className="font-medium font-['Manrope']">
                                Where creativity meets strategy to transform your brand's vision
                            </p>
                        </div>
                        <div className=" h-[230px] bg-white/30 rounded-[18.02px] backdrop-blur-[64.70px] p-5 font-[Manrope] " >
                            <Target className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                            <h1 className="text-[24px] w-[70%] font-bold my-5 font-['Manrope'] ">
                                Services Here
                            </h1>
                            <p className="font-medium font-['Manrope']">
                                Where creativity meets strategy to transform your brand's vision
                            </p>
                        </div>
                        <div className=" h-[230px] bg-white/30 rounded-[18.02px] backdrop-blur-[64.70px] p-5 font-[Manrope] " >
                            <Target className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                            <h1 className="text-[24px] w-[70%] font-bold my-5 font-['Manrope'] ">
                                Services Here
                            </h1>
                            <p className="font-medium font-['Manrope']">
                                Where creativity meets strategy to transform your brand's vision
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-48 lg:px-10 mt-10 px-5">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">

                    <div className="space-y-4 px-4 py-0 ">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`overflow-hidden p-4 rounded-lg shadow-md transition-all duration-500 ease-in-out ${activeIndex === index ? "bg-purple-50" : "bg-white"
                                    }`}
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center">
                                        <div className="w-2.5 h-2 bg-purple-500 rounded-full mr-3"></div>
                                        <h3 className=" text-lg font-['Manrope'] font-medium ">{faq.question}</h3>
                                    </div>
                                    <div
                                        className={`text-purple-500 text-2xl transform transition-transform duration-300 ${activeIndex === index ? "rotate-[-45deg]" : ""
                                            }`}
                                    >
                                        →
                                    </div>
                                </div>
                                <div
                                    ref={(el) => (contentRefs.current[index] = el)}
                                    style={{
                                        maxHeight:
                                            activeIndex === index
                                                ? `${contentRefs.current[index]?.scrollHeight}px`
                                                : "0px",
                                        opacity: activeIndex === index ? 1 : 0,
                                    }}
                                    className="transition-max-height duration-500 ease-in-out overflow-hidden pt-2 text-gray-600"
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>



                    <div className=" mt-10 lg:mt-0">
                        <h1 className="lg:text-[55px] 
                         text-4xl font-['Manrope']  font-bold lg:leading-[80px] text-center lg:text-left  ">
                            Future of Creative Excellence
                        </h1>
                        <p className="font-['Manrope'] font-medium lg:mt-6 lg:my-0 my-4 ">
                            Where creativity meets strategy to transform your brand's vision into reality. As a leading creative agency, we specialize in crafting innovative solutions that elevate your brand and captivate your audience. Our team of talented designers, strategists, and story
                        </p>
                        <div className="flex  lg:py-10 py-5 gap-5 items-center ">
                       <div> 
                       <Target className="w-10 h-10 iconBg rounded-lg p-1 text-white" />
                       </div>
                            <div className="">
                                <h1 className="text-[29px]  font-['Manrope'] font-bold  ">
                                    Services Here
                                </h1>
                                <p > 
                                We specialize in crafting innovative solutions that elevate your brand and captivate your audience. Our team of talented designers, strategists, and story
                                </p>
                              
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
};

export default Success;