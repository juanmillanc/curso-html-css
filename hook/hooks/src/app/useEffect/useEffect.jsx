"use client";
import { useState, useEffect } from 'react';

export default function ListaDeUsuariosReal() {
    // 1. useState: Creamos el estado para guardar los usuarios (empieza como un array vacío)
    const [usuarios, setUsuarios] = useState([]);

    // Extra: Añadimos un estado de carga para que el usuario sepa que está pasando algo
    const [cargando, setCargando] = useState(true);

    // 2. useEffect: Se dispara AUTOMÁTICAMENTE una sola vez cuando la página se abre
    useEffect(() => {
        // Usamos una API REAL que devuelve datos de usuarios ficticios
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) // Convertimos la respuesta a JSON
            .then((data) => {
                // 3. Guardamos los datos reales en nuestro estado
                setUsuarios(data);
                // Apagamos el indicador de carga
                setCargando(false);
            })
            .catch((error) => {
                console.error("Error al traer los datos:", error);
                setCargando(false);
            });
    }, []); // [] significa: "Solo haz esto al cargar la pantalla por primera vez"

    // --- INTERFAZ VISUAL ---

    // Si los datos aún no llegan de la API, mostramos un mensaje de espera
    if (cargando) {
        return <div style={estilos.loading}>Cargando usuarios reales... ⏳</div>;
    }

    // Cuando los datos llegan, se dibuja esto en la pantalla:
    return (
        <div style={estilos.contenedor}>
            <h2 style={estilos.titulo}>Lista de Contactos (Datos en Tiempo Real)</h2>

            <div style={estilos.cuadricula}>
                {usuarios.map((usuario) => (
                    <div key={usuario.id} style={estilos.tarjeta}>
                        <div style={estilos.avatar}>
                            {usuario.name.charAt(0)}
                        </div>
                        <h3 style={estilos.nombre}>{usuario.name}</h3>
                        <p style={estilos.info}>{usuario.email}</p>
                        <p style={estilos.info}>{usuario.company.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Estilos rápidos en línea para que se vea genial al probarlo
const estilos = {
    contenedor: { padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f8', minHeight: '100vh' },
    titulo: { textAlign: 'center', color: '#333', marginBottom: '30px' },
    cuadricula: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' },
    tarjeta: { backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', border: '1px solid #e1e4e8' },
    avatar: { width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#0070f3', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', margin: '0 auto 15px' },
    nombre: { margin: '10px 0 5px 0', fontSize: '18px', color: '#111' },
    info: { margin: '5px 0', fontSize: '14px', color: '#666' },
    loading: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '20px', fontWeight: 'bold', color: '#555' }
};