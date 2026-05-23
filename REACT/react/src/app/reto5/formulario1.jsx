import Image from "next/image";

export default function Formulario1() {
    return (
        // body
        <div className="h-screen bg-[#889CA5] flex items-center justify-center flex-row gap-[50]">
            {/* content-left */}
            <div className="content-left">
                {/* form-ingreso */}
                <form className="h-[600] w-[600] flex items-center justify-center flex-col gap-[20]" id="miformulario" action="">
                    {/* tittle */}
                    <div className="font-bold text-4xl">DROP A LINE</div>
                    {/* inf-usuario */}
                    <div className="h-[50] w-[600] flex items-center justify-center flex-row gap-[20]">
                        {/* email */}
                        <div className="email">
                            {/* EMAIL */}
                            <div className="font-bold">EMAIL</div>
                            <input className="h-[45] w-[240] rounded-[10] bg-white flex p-[10] " type="email" placeholder="Enter a valid email address" required />
                        </div>
                        {/* name */}
                        <div className="name">
                            {/* NAME */}
                            <div className="font-bold">NAME</div>
                            <input className="h-[45] w-[240] rounded-[10] bg-white flex p-[10]" type="text" placeholder="Enter your name" required/>
                        </div>
                    </div>
                    {/* address */}
                    <div className="address">
                        {/* ADDRESS */}
                        <div className="font-bold">ADDRESS</div>
                        <input className="h-[45] w-[500] rounded-[10] bg-white flex p-[10]" type="text" placeholder="Enter your address" required/>
                    </div>
                    {/* message */}
                    <div className="message">
                        {/* MESSAGE */}
                        <div className="font-bold">MESSAGE</div>
                        <textarea className="h-[130] w-[500] rounded-[10] bg-white flex p-[10]" id="message" placeholder="Enter your message"></textarea>
                    </div>
                    {/* button */}
                    <button className="h-[45] w-[500] text-base bg-black text-white rounded-[10] cursor-pointer" type="submit">SUBMIT</button>
                    {/* description */}
                    <div className="flex mt-[20] gap-[4]">
                        {/* description1 */}
                        <div className="description1">Images from</div>
                        {/* description2 */}
                        <div className="underline">Billionphotos</div>
                    </div>
                </form>
            </div>
            {/* content-right */}
            <div className="content-right">
                {/* senor */}
                <img className="w-[528]" src="/imagen.png" alt="" />
            </div>
        </div>
        
    );
}
