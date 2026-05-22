import Image from "next/image";

export default function Posicionamiento2() {
    return (
        // body
        <div className="bg-[#313E51] h-screen w-full">
            {/* switch-container */}
            <div className="flex items-center gap-[10] bg-[#313E51] p-[12] rounded-[8] w-[130] absolute right-[200] top-[30]">
                {/* icon-img */}
                <img className="w-[20] h-[20]" src="https://api.iconify.design/lucide:sun.svg?color=%2394a3b8" alt="sol" />
                {/* pill */}
                <div className="w-[42] h-[22] bg-[#a855f7] rounded-[20] relative">
                    {/* dot */}
                    <div className="w-[16] h-[16] bg-white rounded-2xl  absolute top-[3] right-[4]"></div>
                </div>
                {/* icon-img */}
                <img className="w-[20] h-[20]" src="https://api.iconify.design/lucide:moon.svg?color=%2394a3b8" alt="luna" />
            </div>
            {/* main */}
            <div className="h-[500] w-[900] relative my-[150] mx-auto">
                {/* content-left */}
                <div className="h-[500] w-[350] relative text-white ">
                    {/* title1 */}
                    <div className="text-5xl relative">Welcome to the</div>
                    {/* title2 */}
                    <div className="font-bold text-5xl relative">Fronted Quiz!</div>
                    {/* subtitle */}
                    <div className="text-sm relative top-[50]">Pick o subject to get started.</div>
                </div>
                {/* content-right */}
                <div className="h-500 w-[350] text-white flex flex-col gap-[20] absolute right-0 top-0">
                    {/* html */}
                    <div className="h-[70] w-[450] items-center flex rounded-[10] bg-[#3C4C67] text-xl">
                        <img className="w-[40] relative left-[10] rounded-[5]" src="/html.avif" alt="" />
                        {/* sub1 */}
                        <div className="relative left-[30]">HTML</div>
                    </div>
                    {/* css */}
                    <div className="h-[70] w-[450] items-center flex rounded-[10] bg-[#3C4C67] text-xl">
                        <img className="w-[40] relative left-[10] rounded-[5]" src="/css.jpg" alt="" />
                        {/* sub2 */}
                        <div className="relative left-[30]">CSS</div>
                    </div>
                    {/* javascript */}
                    <div className="h-[70] w-[450] items-center flex rounded-[10] bg-[#3C4C67] text-xl">
                        <img className="w-[40] relative left-[10] rounded-[5]" src="/javascript.png" alt="" />
                        {/* sub3 */}
                        <div className="relative left-[30]">Javascript</div>
                    </div>
                    {/* accessibility */}
                    <div className="h-[70] w-[450] items-center flex rounded-[10] bg-[#3C4C67] text-xl">
                        <img className="w-[40] relative left-[10] rounded-[5]" src="/accessibility.png" alt="" />
                        {/* sub4 */}
                        <div className="relative left-[30]">Accessibility</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
