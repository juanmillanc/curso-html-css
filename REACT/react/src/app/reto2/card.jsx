import Image from "next/image";

export default function Card() {
    return (
        // principal
        <div className="w-full h-screen bg-[#BFBFBF] flex flex-row justify-center items-center">
            {/* card-1 */}
            <div className="w-[400] h-[500] bg-gradient-to-b from-[#6343FC] to-[#3931D6] rounded-[30] flex flex-col justify-between items-center text-white p-[25] relative">
                {/* tittle */}
                <div className="font-bold text-4xl">Your Result</div>
                {/* circle */}
                <div className="w-[200] h-[200] bg-gradient-to-b from-[rgba(77,33,201,1)] via-[rgba(47,44,233,0.5)] to-[rgba(47,44,233,0)] rounded-full flex items-center justify-center gap-[5] flex-col">
                    {/* score */}
                    <div className="font-bold text-5xl">76</div>
                    {/* score-1 */}
                    <div className="">of 100</div>
                </div>
                {/* tittle-2 */}
                <div className="font-bold text-4xl">Great</div>
                {/* description */}
                <div className="justify-center items-center flex w-[250] text-sm">you scored higher than 65% of the
                    people who have taken these test</div>
            </div>
            {/* card-2 */}
            <div className="w-[400] h-[500] bg-white rounded-[20] flex flex-col justify-between items-center text-black p-[25] ml-[-32]">
                {/* tittle-3 */}
                <div className="font-bold text-3xl flex justify-start items-start w-[400] pl-[50]">Summary</div>
                {/* content */}
                <div className="w-[300] h-[300] bg-white flex flex-col gap-[15]">
                    {/* article1 */}
                    <div className="flex-row flex bg-[#FFDFE0] text-[#B83431] rounded-[10]">
                        {/* reaccion */}
                        <div className="pl-[10] justify-center items-center flex">Reaction</div>
                        {/* puntuacion1 */}
                        <div className="pt-[20] pb-[20] pl-[110] pr-0 w-full justify-center items-center flex flex-row">
                            {/* t1 */}
                            <div className="font-bold text-xl text-black">80</div>
                            {/* t2 */}
                            <div className="text-black">/100</div>
                        </div>
                    </div>
                    {/* article2 */}
                    <div className="flex-row flex bg-[#FBFADB] text-[#D0D069] rounded-[10]">
                        {/* memory */}
                        <div className="pl-[10] justify-center items-center flex">Memory</div>
                        {/* puntuacion2 */}
                        <div className="pt-[20] pb-[20] pl-[110] pr-0 w-full justify-center items-center flex flex-row">
                            {/* t3 */}
                            <div className="font-bold text-xl text-black">80</div>
                            {/* t4 */}
                            <div className="text-black">/100</div>
                        </div>
                    </div>
                    {/* article3 */}
                    <div className="flex-row flex bg-[#D1FFD1] text-[#3A7D3C] rounded-[10]">
                        {/* verbal */}
                        <div className="pl-[10] justify-center items-center flex">Verbal</div>
                        {/* puntuacion3 */}
                        <div className="pt-[20] pb-[20] pl-[110] pr-0 w-full justify-center items-center flex flex-row">
                            {/* t5 */}
                            <div className="font-bold text-xl text-black">80</div>
                            {/* t6 */}
                            <div className="text-black">/100</div>
                        </div>
                    </div>
                    {/* article4 */}
                    <div className="flex-row flex bg-[#DFE0FF] text-[#3F4297] rounded-[10]">
                        {/* visual */}
                        <div className="pl-[10] justify-center items-center flex">Visual</div>
                        {/* puntuacion4 */}
                        <div className="pt-[20] pb-[20] pl-[110] pr-0 w-full justify-center items-center flex flex-row">
                            {/* t7 */}
                            <div className="font-bold text-xl text-black">80</div>
                            {/* t8 */}
                            <div className="text-black">/100</div>
                        </div>
                    </div>
                </div>
                {/* botton */}
                <div className="bg-[#313C5A] flex w-3/4 h-[40] text-white justify-center items-center rounded-[30]">Continue</div>
            </div>
        </div>


    );
}
