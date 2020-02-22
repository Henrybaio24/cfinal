import React, { Component } from "react";
import Header from '../components/header';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import axios from 'axios';

const API = "http://localhost:5000/film/raw4";

// Resolves charts dependancy
charts(FusionCharts);

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_header: {
        pelicula: 'Película',
        boletos: 'Número de Boletos',
        precio: 'Valor Unitario',
        total: 'Total Recaudado',
      },
      reporte: [],
    };
  }

  componentDidMount() {
    axios.get(API)
    .then(response => {
      this.setState({ reporte: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { reporte } = this.state
    const datos = {
     
      data: this.state.reporte
    };

    const chartConfigs = {
      type: 'doughnut2d',
      dataSource: datos,
      width: "800",
      height: "600",
    };
    // return (<ReactFusioncharts {...chartConfigs} />);
    return(
      <div>
          <Header />,
          <div className="ml-34">
            <hr />
            <main className="my-8">
              <div className="px-3 py-4 flex justify-center bg-gray-400">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <thead className="border-b">
                        <tr>
                          <th className="text-left p-3 px-5">{ this.state.table_header.pelicula }</th>
                          <th className="text-left p-3 px-5">{ this.state.table_header.precio }</th>
                          <th className="text-left p-3 px-5">{ this.state.table_header.boletos }</th>
                          <th className="text-left p-3 px-5">{ this.state.table_header.total }</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-b hover:bg-orange-100 bg-gray-100">
                          <td>
                            { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.label} </p>) }
                          </td>
                          <td>
                            { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.valorBoleto} </p>) }
                          </td>
                          <td>
                            { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.value} </p>) }
                          </td>
                          <td>
                            { reporte.map(element => <p className="p-2 px-5" key={ element.id }> {element.recaudado} </p>) }
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