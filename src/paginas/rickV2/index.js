import React from "react";
import {ContainerPage} from '../../components/main'
import { Component } from "react";
import rickApi_v3 from "../../services/rickApi_v3";
import { useState } from "react";
import { FcSearch } from "react-icons/fc";


export default function AppRick_V3(){
    
  
    const [personagem , setCepDigitado] = useState("");
    const [valoresRick, setValoresRick] = useState('');
  
    async function pesquisarCep(){
  
      
      const responseRick = await  rickApi_v3(`${personagem}`);
  
      setValoresRick(responseRick.data);
  
      console.log(responseRick.data)
    }
  
      return(
  
  
  
          <div>
  
           <ContainerPage>  
          <h1> Pesquisar de personagem</h1>
         personagem: <input type="text" placeholder="Personagem:" value={personagem} onChange={(event)=> setCepDigitado(event.target.value)}/>
          <button onClick={pesquisarCep}>
              <FcSearch size={12}/>
          </button>
  
          <h2> Valores da Pesquisa</h2>
          <p> Nome: {valoresRick.name} </p>
          <p> Status: {valoresRick.status} </p>
          <p> Especie: {valoresRick.species}</p>
          <p> Genero: {valoresRick.gender}</p>
          <p> Imagem: </p><img src={valoresRick.image} alt="" className="perso" />
          </ContainerPage> 
  
         
          </div>
      );
  }