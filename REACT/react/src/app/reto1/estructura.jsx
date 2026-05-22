import Image from "next/image";

export default function Estructura() {
    return (
        // body
        <div className="h-screen flex flex-col">
            {/* header */}
            <div className=" flex flex-col gap-[10] p-[10] xl:flex-row">
                {/* header-cabeza */}
                <div className="bg-[#74B8FF] w-full p-[7] text-base font-sans text-center lg:p-[12]">Header</div>
                {/* nav */}
                <div className="bg-[#74B8FF] w-full p-[7] text-base font-sans text-center lg:p-[12]">Nav</div>
            </div>
            {/* main */}
            <div className="p-[11]">
                {/* content */}
                <div className="h-full flex gap-[11] flex-col">
                    {/* section */}
                    <div className="bg-[#FDCA6E] h-full flex justify-center items-center p-[38] text-center flex-col lg:p-[50] xl:p-[100]">
                        Section
                    </div>
                    {/* article */}
                    <div className=" flex flex-col justify-center items-center text-center gap-[11] xl:flex-row">
                        <div className="bg-[#54EFC3] w-full text-center gap-[11] p-[7] lg:p-[12] xl:p-[100]">Article1</div>
                        <div className="bg-[#54EFC3] w-full text-center gap-[11] p-[7] lg:p-[12] xl:p-[100]">Article2</div>
                        <div className="bg-[#54EFC3] w-full text-center gap-[11] p-[7] lg:p-[12] xl:p-[100]">Article3</div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className=" justify-center text-center flex flex-col h-screen gap-[11] p-[11] xl:flex-row">
                {/* footer-left */}
                <div className="flex gap-[11] flex-col lg:w-full lg:flex-row xl:flex-row">
                    <div className="w-full p-[7] bg-[#FF7978] lg:p-[12] xl:p-[50]">Footer1</div>
                    <div className="w-full p-[7] bg-[#FF7978] lg:p-[12] xl:p-[50]">Footer2</div>
                </div>
                {/* footer-rigth */}
                <div className="flex gap-[11] flex-col lg:w-full lg:flex-row xl:flex-row">
                    <div className="w-full p-[7] bg-[#FF7978] lg:p-[12] xl:p-[50]">Footer3</div>
                    <div className="w-full p-[7] bg-[#FF7978] lg:p-[12] xl:p-[50]">Footer4</div>
                </div>
            </div>
        </div>
        
    );
}