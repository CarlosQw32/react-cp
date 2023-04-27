import react from 'react';
import apiTmz from '../../services/apiTmz';
import { Component } from 'react';

class AppTMZ extends Component{
    state={
        filmes:[],
    }

    async componentDidMount(){
        const response = await apiTmz.get('batman');
        console.log(response.data);
        this.setState({filmes:response.data});
    }

    render(){

        const{filmes} = this.state;

        return(
            <div>
                <h1>PAGINA DE FILMES</h1>
                {filmes.map(filme =>(
                    <li key={filme.show.id}>
                        <h2><strong>Titulo</strong> {filme.show.name}</h2>
                        <p>Tipo: {filme.show.type}</p>
                    </li>
                ))

                }
            </div>
        )


    }
}
export default AppTMZ