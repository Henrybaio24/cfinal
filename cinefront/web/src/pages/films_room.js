
import React, { Component } from 'react';
import Header from '../components/header';
import axios from 'axios';
const API = "http://localhost:5000/film/raw3";

class FilmsRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                sala: 'Nombre de la Sala',
                pelicula: 'Película',
                horario: 'Horario',
            },
            sala_peliculas: [],
        }
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(API)
        .then(response => {
            this.setState({ sala_peliculas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    deleteData = (value) => {
        axios.delete(`${ API }?id=${ value }`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/films_room");
    }

    render() {
        const { sala_peliculas } = this.state
        return(
            <div>
                <Header />
                <div >
                    <hr />
                    <main className="my-8">
                        <div className="justify-center my-5 select-none flex">
                            <p className="mt-5 text-center mr-10 text-2xl">ASIGNAR PELICULA</p>
                            <button onClick={() => window.location.assign("http://localhost:3000/films_room_add")} type="button" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                <text>Nuevo</text>
                            </button>
                        </div>  
                        <div className="flext-1 text-gray-700 text-center w-full bg-gray-400 px-2 py-2 m-2">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b ">
                                    <tr>
                                        <th className="text-left p-3 px-5 text-gray-700">{ this.state.table_header.sala }</th>
                                        <th className="text-left p-3 px-5 text-gray-700">{ this.state.table_header.pelicula }</th>
                                        <th className="text-left p-3 px-5 text-gray-700">{ this.state.table_header.horario }</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                        <td>
                                            { sala_peliculas.map(element => <p className="p-2 px-5" key={ element.id }> {element.idsala_nombre} </p>) }
                                        </td>
                                        <td>
                                            { sala_peliculas.map(element => <p className="p-2 px-5" key={ element.id }> {element.idpelicula_titulo} </p>) }
                                        </td>
                                        <td>
                                            { sala_peliculas.map(element => <p className="p-2 px-5" key={ element.id }> {element.idhorario_hora} </p>) }
                                        </td>   
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default FilmsRoom;