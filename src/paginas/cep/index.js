import React from "react";
import Api from "../cep";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { ContainerPage } from "../../components/main";


export default function Cep(){
    
  
  const [cepDigitado, setCepDigitado] = useState('');
  const [valoresCep, setValoresCep] = useState('');

  async function pesquisarCep(){

    
    const responseCep = await Api(`${cepDigitado}/json`);

    setValoresCep(responseCep.data);

    console.log(responseCep.data)
  }

    return(



        <div>

         <ContainerPage>  
        <h1> Pesquisar CEP</h1>
       CEP: <input type="text" placeholder="CEP:" value={cepDigitado} onChange={(event)=> setCepDigitado(event.target.value)}/>
        <button onClick={pesquisarCep}>
            <FcSearch size={12}/>
        </button>

        <h2> Valores da Pesquisa</h2>
        <p> Rua: {valoresCep.logradouro} </p>
        <p> CEP: {valoresCep.cep} </p>
        <p> Cidade: {valoresCep.localidade}</p>
        <p> Uf: {valoresCep.uf}</p>
        </ContainerPage> 

       
        </div>
    );
}