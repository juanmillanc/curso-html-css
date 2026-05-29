import Image from "next/image";

export default function Formulario2() {
    return (
        // body
        <div className="p-[50] h-screen bg-[#EE560D] flex">
            {/* content-left */}
            <div className="content-left">
                {/* imagen */}
                <img className="h-[590] w-[400] flex" src="/imagen.jpg" alt="" />
            </div>
            {/* content-right */}
            <div className="bg-white flex w-full h-[590] flex-col items-center gap-[10]">
                {/* title */}
                <div className="w-full h-[100] flex items-center justify-center flex-col text-2xl font-bold relative top-[40]">
                    {/* title-1 */}
                    <div className="title-1">
                        We can´t wait to work with you! Drop us a libe and
                    </div>
                    {/* title-2 */}
                    <div className="title-2">
                        we´ll get back to you soon!
                    </div>
                </div>
                {/* formulario */}
                <div className="flex w-full h-screen flex-col items-center gap-[10] relative top-[30]">
                    {/* name */}
                    <div className="name">
                        <div className="text-sm font-serif">NAME</div>
                        <input className="h-[50] w-[500] font-serif text-sm p-[10] border-b-2 " type="text" placeholder="Enter your Name"/>
                    </div>
                    {/* email */}
                    <div className="email">
                        <div className="text-sm font-serif">EMAIL</div>
                        <input className="h-[50] w-[500] font-serif text-sm p-[10] border-b-2 " type="email" placeholder="Enter a valid email address"/>
                    </div>
                    {/* message */}
                    <div className="message">
                        <div className="text-sm font-serif">MESSAGE</div>
                        <textarea className="h-[120] w-[500] p-[10] text-sm border-b-2" name="message" id="" placeholder="Enter your message"></textarea>
                    </div>
                    {/* CHECKBOX */}
                    <div className="flex flex-row relative right-[155] text-sm gap-[5]">
                        <input className="input-2" type="checkbox" />
                        <div className="checkbox-1">I accept the</div>
                        <div className="text-[#fb6d35]">Terms of Service</div>
                    </div>
                    {/* button */}
                    <button className="h-[50] w-[500] text-sm rounded-[30] bg-[#EE560D] hover:bg-[#c83f00] text-white font-bold cursor-pointer" type="submit">Submit your request</button>
                    <div className="flex gap-[5] relative top-[20] text-sm">
                        <div className="text-1">Images from</div>
                        <div className="underline">Freepik</div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
