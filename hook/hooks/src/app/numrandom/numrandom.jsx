"use client";
import { useState } from 'react';

export default function Numrandom() {
    const [numero, setNumero] = useState(0);
    const generarNumero = () => { setNumero(Math.floor(Math.random() * 9) + 1); };

    return (
        <div className="flex items-center justify-center flex-col">
            <h2>Generador Random</h2>
            <p>{numero}</p>

            <button className="h-[30] w-[150] bg-[#105682] flex items-center justify-center text-white cursor-pointer rounded-2xl" 
            onClick={generarNumero}>
                Generar número
            </button>
        </div>
    );
}
