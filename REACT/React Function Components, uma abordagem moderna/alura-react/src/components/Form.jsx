import React, { useState } from 'react';
import { Container, Button, TextField } from '@material-ui/core';
import './form.css';

export function Form({title}) {

  let [pessoa, setPessoa] = useState({
    nome: "",
    sobrenome: "",
    cpf: 0,
    dataDeNascimento: "00/00/0000",
    promocoes: false,
    novidades: false
  });

  function handleForm(event){
    event.preventDefault();
    console.log(pessoa);
  }

  return(
    <Container maxWidth="sm" id="container-form" component="article">
      <h1 id="titulo-form">{title}</h1> 
      <form onSubmit={handleForm}>
        <div className="input">

          <TextField 
            id="nome-input" 
            label="Nome" 
            variant="outlined" 
            fullWidth
            maxLength={5}
            value={pessoa.nome}
            onChange={
              event => setPessoa({...pessoa, nome: event.target.value})
            }/>

        </div>  

        <div className="input">

          <TextField 
            id="sobrenome-input" 
            label="Sobrenome" 
            variant="outlined" 
            fullWidth
            maxLength="20"
            value={pessoa.sobrenome}
            onChange={
              event => setPessoa({...pessoa, sobrenome: event.target.value})
            }/>

        </div>

        <div className="input"> 

          <TextField 
            id="cpf-input" 
            label="CPF" 
            variant="outlined"
            maxLength="15" 
            fullWidth
            value={pessoa.cpf}
            onChange= {
              event => setPessoa({...pessoa, cpf: event.target.value})
            }/>

        </div>

        <div className="input">

          <TextField 
            id="data-de-nascimento-input" 
            label="Data de nascimento" 
            variant="outlined" 
            fullWidth
            maxLength="10"
            value={pessoa.dataDeNascimento}
            onChange= {
              event => setPessoa({...pessoa, dataDeNascimento: event.target.value})
            }/>

        </div>

          <div id="checkbox-input">

            <label htmlFor="checkbox-promo">
              <input 
              type="checkbox" 
              id="checkbox-promo"
              value={pessoa.promocoes}
              onClick={
                () =>{
                  if (pessoa.promocoes === false){
                    setPessoa({...pessoa, promocoes: true})
                  }
                  if(pessoa.promocoes === true){
                    setPessoa({...pessoa, promocoes: false})
                  }
                } 
              }/>Promoções
            </label>
            
            <label htmlFor="checkbox-novidades">
              <input 
              type="checkbox" 
              id="checkbox-novidades"
              value={pessoa.novidades}
              onClick={
                () =>{
                  if (pessoa.novidades=== false){
                    setPessoa({...pessoa, novidades: true})
                  } 
                
                  if(pessoa.novidades === true){
                    setPessoa({...pessoa, novidades: false})
                  } 
                }   
              }/>Novidades
            </label>
          </div>

          <Button variant="contained" color="secondary" type="submit" fullWidth>Enviar</Button>
      </form>
    </Container>
  );
}