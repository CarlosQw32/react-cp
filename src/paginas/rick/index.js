import React from "react";
import {ContainerPage} from '../../components/main'
import { Component } from "react";
import apiRick_v2 from "../../services/apiRick_v2";


class AppRick extends Component{
    state={
        results:[],
    }

    async componentDidMount(){
        const response = await apiRick_v2.get('2');
        this.setState({results:response.data});
    }

    render(){

        const{results} = this.state;

        return(
            <div>
                <h1>PAGINA DE FILMES</h1>
                {results.map(results =>(
                    <li key={results.show.id}>
                        <h2><strong>Titulo</strong> {results.show.name}</h2>
                        <p>Tipo: {results.show.type}</p>
                    </li>
                ))

                }
            </div>
        )


    }
}
export default AppRick