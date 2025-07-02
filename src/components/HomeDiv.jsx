import React from "react";

function HomeDiv() {
    return (
        <div className="w-full flex flex-col items-center justify-start p-6 md:p-14">
            {/* Top Section: Text + GIF */}
            <div className="flex flex-col md:flex-row items-start justify-start gap-6 w-full">
                {/* Text Box */}
                <div className="bg-[#272445] flex flex-col items-center justify-start h-auto md:h-[300px] border rounded-3xl border-[#1F1D36] shadow-lg font-lilita font-black text-3xl md:text-4xl text-center p-6 w-full md:w-1/2">
                    <span className="p-2">Hello Everyone!! 🙋🏻‍♂️</span>
                    <span className="p-2 text-peach">This is Mohd Sameer</span>
                    <span className="p-2">I am a Software Developer</span>
                </div>

                {/* Image Box */}
                <div className="w-full md:w-[300px] h-[300px] md:h-[350px]">
                    <img
                        src="/assets/dashboard.gif"
                        alt="Dashboard"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Quote Section */}
            <div className="w-full mx-auto mt-10 p-6 flex flex-col items-center justify-center text-center border rounded-3xl border-[#272445] shadow-lg font-lilita font-black">
                <span className="text-white text-2xl md:text-3xl mb-4">Random Quote</span>

                <div className="flex items-center text-base md:text-xl font-semibold font-dmsans">
                    <span className="overflow-hidden whitespace-nowrap animate-typing max-w-[0] text-[#E9A6A6]">
                        Be the chief but never the lord.
                    </span>
                    <span className="border-r-2 border-[#E9A6A6] animate-blink h-6 ml-1"></span>
                </div>
            </div>
        </div>
    );
}

export default HomeDiv;
