"use client";
import { useState } from 'react';

export default function Contador() {
    const [clicks, setClicks] = useState(0);

    return (
        <div className="h-screen w-full flex items-center justify-center flex-col ">
            <p>Has hecho clic {clicks} veces</p>

            <button className="h-[50] w-[100] bg-[#105682] flex items-center justify-center text-white cursor-pointer rounded-2xl" 
            onClick={() => setClicks(clicks + 1)}>
                Hacer clic
            </button>
        </div>

    );
}
