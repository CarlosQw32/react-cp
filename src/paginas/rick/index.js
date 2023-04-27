import React from "react";
import {ContainerPage} from '../../components/main'
import { Component } from "react";
import apiRick_v2 from "../../services/apiRick_v2";


class AppRick extends Component{
    state={
        resultados:[],
    }

    async componentDidMount(){
        const response = await apiRick_v2.get('2');
        console.log(response.data);
        this.setState({resultados:response.data});
    }

    render(){

        const{resultados} = this.state;

        return(
            <div>
                <h1>PAGINA DE FILMES</h1>
                {resultados.map(resultado =>(
                <li key={resultado.results.id}>
                        <h2><strong>Titulo</strong> {resultado.results.name}</h2>
                        <p>Tipo: {resultado.results.status}</p>
                    </li>
                ))

                }

                
            </div>
        )


    }
}
export default AppRick