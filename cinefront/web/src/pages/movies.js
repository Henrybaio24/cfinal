/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:5000/film/pelicula";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        }
    }

    componentDidMount() {
        axios.get(API)
        .then(response => {
            this.setState({ peliculas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    deleteData = (value) => {
        axios.delete(`${ API }?id=${ value }`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/movies");
    }

    render() {
        const { peliculas } = this.state
        

        return(
            <div>
                <Header />
                <div >
                    <hr />
                    <main className="">
                        <p className="text-center my-5 text-2xl">PELICULAS EN CARTELERA</p>
                        <div className="flex flex-wrap items-center justify-center">
                        { peliculas.map(element => 
                            <div className="lg:flex" key={ element.id }>
                                <img className="" src={ element.imagen } alt="imagen" />
                                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-2">
                                        Titulo:
                                        <div className="text-grey-darker text-base uppercase"> { element.titulo }</div>
                                    </div>
                                    <div className="mb-2">
                                        Resumen:
                                        <p className="text-grey-darker text-base uppercase"> { element.resumen }</p>
                                    </div>
                                    <div className="mb-2">
                                        Categoria:
                                        <p className="text-grey-darker text-base uppercase"> { element.categoria }</p>
                                    </div>
                                    <div className="mb-2">
                                        Precio:
                                        <p className="text-grey-darker text-base uppercase"> { element.valorBoleto }</p>
                                    </div>
                                    <div className="m-2">
                                        {/* <button className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                            </svg>
                                            <span className="mr-2">Actualizar</span>
                                        </button> */}
                                    </div>
                                    <div className="m-3">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={ () => this.deleteData(element.id) }>
                                            <span className="mr-2">Borrar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) }
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Movies;