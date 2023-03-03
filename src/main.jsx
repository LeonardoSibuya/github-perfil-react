import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './global.css'

// import { PI, GTM_BRASIL } from './teste' ASSIM FAZEMOS PARA IMPORTAR O 'PI' E 'GTM_BRASIL' DO ARQUIVO teste
//import nomes from './nomes' IMPORTAMOS DE FORMA DEFAULT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*{GTM_BRASIL} ASSIM INSERIMOS O VALOR QUE EXPORTAMOS, COMO SE FOSSE UM ELEMENTO JS MESMO, NO HTML*/}
    <App />
  </React.StrictMode>,
)
