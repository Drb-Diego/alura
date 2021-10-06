import React from "react";

import './form.css';

export class Form extends React.Component {
  
  render() {
    return (
      <form className="form">
        <input type='text' placeholder='titulo' className="input-title" />
        <textarea placeholder='escreva sua nota' className="input-text"></textarea>
        <button className="button-submit">Criar Nota</button>
      </form>
    );
  }
}
