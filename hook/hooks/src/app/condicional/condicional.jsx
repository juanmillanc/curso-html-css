'use client';
import { useState } from 'react';

export default function Condicional() {
    const MI_NUMERO = 3;
    const [resultado, setResultado] = useState(() => {
        if (MI_NUMERO === 1) return 555;
        if (MI_NUMERO === 2) return "Tu numero es 2";
        if (MI_NUMERO === 3) return true;
        return "Número no reconocido";
    });
    return (
        <div>
            <p>El numero asignado en el codigo es: <strong>{MI_NUMERO}</strong></p>
            <div>
                <p>Valor del estado: <strong>{String(resultado)}</strong></p>
            </div>
        </div>

    );
}
