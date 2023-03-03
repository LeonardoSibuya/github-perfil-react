import { useState } from "react";

import Perfil from "./components/Perfil"; //AQUI IMPORTAMOS O INDEX DO ARQUIVO ./components/Perfil
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const nome = "leo" 

  function retornaNome() { //Function para retornar a const nome
    return nome
  }

  const objetoPessoa = { //Objeto
    nome: "Maria"
  }

  let estaDeDia = true; //Booleano que será responsável pela condição da frase ali de baixo

  let estaComFome = false

  const [formularioEstaVisivel, setformularioEstaVisivel] = useState(true) // formularioEstaVisivel será o elemento que iremos manipular, e o  setformularioEstaVisivel é responsável por receber o valor, e o useState está recebendo um booleano com valor true, pois o elemento vai começar visivel.

  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <div className="containerDoInput">
      <label htmlFor="nomeGh" className="label">Digite seu username GitHub</label>
      <input type="text" id="nomeGh" className="input" onBlur={evento => setNomeUsuario(evento.target.value)}/>
      </div>
      {nomeUsuario.length > 4 && (
      <>
          <Perfil nomeUsuario={nomeUsuario}/> 
          {/* AQUI RENDERIZAMOS O ARQUIVO QUE IMPORTAMOS | E PODEMOS PASSAR VARIAVEIS QUE RECEBERÃO OS VALORES QUE PODEMOS EXPORTAR COMO ARGUMENTO PARA O ARQUIVO INDEX.JSX */}

          <ReposList nomeUsuario={nomeUsuario}/>
      </>
      )}



      <br />

      {formularioEstaVisivel && <Formulario/>} {/* Aqui passamos a condição, neste caso o <Formulario/> só será renderizado, quando o formularioEstaVisivel for true, e ele começa como true, de acordo com o useState ali de cima*/}

      <button type="button" onClick={() => setformularioEstaVisivel(!formularioEstaVisivel)}>Toggle Form</button> {/* AQUI O BOTÃO RECEBERA O METODO CLICK COM UMA ARROW FUNCTION SEM PARAMENTRO DE EVENTO ANTES, E RECEBERÁ O  setformularioEstaVisivel RECEBENDO A NEGAÇÃO DO formularioEstaVisivel, OU SEJA, O VALOR SERÁ FALSE, E NÃO IRÁ RENDERIZAR O FORMULARIO */}

      <br />

      <h1>Olá, {retornaNome()}</h1> {/* Aqui renderiza a function */}
      <h2>{nome}</h2> {/* Aqui renderiza a const nome */}
      <h3>Olá, {objetoPessoa.nome}</h3> {/* Aqui renderiza o objeto com propriedade nome */}
      {estaDeDia === true ? 'bom dia' : 'boa tarde'} {/* Aqui é como se fosse o if e else, de acordo com a let estaDeDia*/}
      {estaComFome && 'Vai comer'} {/* Aqui informamos implicitamente que se o booleano do estaComFome for true, vai renderizar 'Vai comer', se não, não renderiza nada*/}
    </>
  )
}

export default App
