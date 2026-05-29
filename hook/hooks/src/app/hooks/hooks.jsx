'use client';
import { useState } from 'react';

export default function Hooks() {
    const [numero, setNumero] = useState();
    const generarNumero = () => {
        const nuevoNumero = Math.floor(Math.random() * 10) + 1;
        setNumero(nuevoNumero);
        const nuevoColor = cambiarColorAleatorio();
        if (nuevoNumero === 1) setcolor1(nuevoColor);
        if (nuevoNumero === 2) setcolor2(nuevoColor);
        if (nuevoNumero === 3) setcolor3(nuevoColor);
        if (nuevoNumero === 4) setcolor4(nuevoColor);
        if (nuevoNumero === 5) setcolor5(nuevoColor);
        if (nuevoNumero === 6) setcolor6(nuevoColor);
        if (nuevoNumero === 7) setcolor7(nuevoColor);
        if (nuevoNumero === 8) setcolor8(nuevoColor);
        if (nuevoNumero === 9) setcolor9(nuevoColor);
        if (nuevoNumero === 10) setcolor10(nuevoColor);
    };

    const [color1, setcolor1] = useState('#FFFFFF');
    const [color2, setcolor2] = useState('#FFFFFF');
    const [color3, setcolor3] = useState('#FFFFFF');
    const [color4, setcolor4] = useState('#FFFFFF');
    const [color5, setcolor5] = useState('#FFFFFF');
    const [color6, setcolor6] = useState('#FFFFFF');
    const [color7, setcolor7] = useState('#FFFFFF');
    const [color8, setcolor8] = useState('#FFFFFF');
    const [color9, setcolor9] = useState('#FFFFFF');
    const [color10, setcolor10] = useState('#FFFFFF');

    const cambiarColorAleatorio = () => {
        const caracteres = '0123456789ABCDEF';
        let colorHex = '#';

        for (let i = 0; i < 6; i++) {
            colorHex += caracteres[Math.floor(Math.random() * 16)];
        }
        return colorHex;
    };
    


    return (
        <div className="h-screen w-full flex items-center justify-center flex-col gap-[10] bg-white">
            <div className="flex flex-row gap-5 ">
                <div style={{ backgroundColor: color1 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">1</div>
                <div style={{ backgroundColor: color2 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">2</div>
                <div style={{ backgroundColor: color3 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">3</div>
                <div style={{ backgroundColor: color4 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">4</div>
                <div style={{ backgroundColor: color5 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">5</div>
            </div>
            <div className="flex flex-row gap-5 ">
                <div style={{ backgroundColor: color6 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">6</div>
                <div style={{ backgroundColor: color7 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">7</div>
                <div style={{ backgroundColor: color8 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">8</div>
                <div style={{ backgroundColor: color9 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">9</div>
                <div style={{ backgroundColor: color10 }} className="w-[200] h-[200] border-2 flex items-center justify-center text-3xl">10</div>
            </div>
            <button className="h-[30] w-[150] bg-[#105682] flex items-center justify-center text-white cursor-pointer rounded-2xl" 
            onClick={generarNumero}>
                Hacer click
            </button>
            <p>{numero}</p>
        </div>

    );
}