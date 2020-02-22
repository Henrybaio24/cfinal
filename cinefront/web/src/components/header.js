/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">

        <div className="mb-2 sm:mb-0">
            <span className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"> PELICULAS YAVI +</span>
        </div>
        <div>
            <Link to="/movies">
                <button className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">
                    Cartelera
                </button>
            </Link>
        </div>
        <div>
            <Link to="/add_movie">
                <button className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">
                    Crear Pelicula
                    </button>
            </Link>
        </div>
        <div >
            <Link to="/rooms">
                <button className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">
                    Crear Sala
                    </button>
            </Link>
        </div>
        <div>
            <Link to="/schedules">
                <button className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">
                    Crear Horarios
                    </button>
            </Link>
        </div>
        <div>
            <Link to="/films_room">
                <button className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">
                    Asignar Peliculas
                    </button>
            </Link>
        </div>
        <div>
            <Link to="/report">
                <button className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 py-4 px-8">
                    Reporte
                    </button>
            </Link>
        </div>
    </nav>
)

export default Header;