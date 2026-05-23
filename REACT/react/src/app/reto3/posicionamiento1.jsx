import Image from "next/image";

export default function Posicionamiento1() {
    return (
        // body
        <div className="">
            {/* container */}
            <div className="">
                {/* car-1 */}
                <div className="w-[350] h-[250] bg-red-600 absolute"></div>
                {/* car-2 */}
                <div className="w-[350] h-[250] bg-black absolute right-0"></div>
                {/* car-3 */}
                <div className="w-[350] h-[250] bg-pink-600 absolute bottom-0"></div>
                {/* car-4 */}
                <div className="w-[350] h-[250] bg-blue-600 absolute right-0 bottom-0"></div>
            </div>
            {/* container-car1 */}
            <div className="absolute top-[60]">
                {/* img1*/}
                <img src="/carro-rojo.png" alt="carro rojo" className="w-[300]" />
            </div>
            {/* containe-car2 */}
            <div className="absolute right-0 top-0">
                {/* img2 */}
                <img src="/carro-negro.png" alt="carro negro" className="w-[300]"/>
            </div>
            {/* container-car3 */}
            <div className="absolute bottom-0">
                {/* img3 */}
                <img src="/carro-rosa.png" alt="carro rosa" className="w-[300]"/>
            </div>
            {/* container-car4 */}
            <div className="absolute right-0 bottom-0">
                {/* img4 */}
                <img src="/carro-azul.png" alt="carro azul" className="w-[300]" />
            </div>
        </div>
    );
}
