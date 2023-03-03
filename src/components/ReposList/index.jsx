import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]) // Este repos é um array que começa vazio, de acordo com o useState([]), e será preenchido com os valores que o setRepos irá coletar.

    const [deuErro, setDeuErro] = useState(false)

    useEffect(() => { // Aqui usamos o useEffect com valor [] vazio, pois a condição é de executar assim que o componente for renderizado
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`) //AQUI FAZEMOS A ESTRUTURA DE BAIXAR API DO GITHUB
        .then( res => res.json())
        .then(resJson => {
            setRepos(resJson) //AUI SETAMOS QUE O setRepos RECEBERÁ TODO O VALOR DA API resJson
        })
        .catch(erro => {
            setDeuErro(true)
        })
    }, [nomeUsuario]) //array vazio para informar que a condição é a inicialização do componente

    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(itemDoRepositorio => (//Aqui renderizamos e iteramos o array repos com .map recebendo o argumento que irá iterar os itens
                    <li className={styles.listItem} key={itemDoRepositorio.id}> {/* Aqui passamos a key, que é o argumento.id, sendo o id um item la da api do github */}
                    <div className={styles.itemNome}>
                        <b>Nome:</b> {itemDoRepositorio.name} {/* Aqui pegamos o nome do repositorio */}
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguage:</b> {itemDoRepositorio.language} {/* Aqui pegamos a linguagem usada no repositorio */}
                    </div>
                        <a className={styles.itemLink} target="_blank" href={itemDoRepositorio.html_url}>Visitar no GitHub</a> {/* Aqui pegamos o link do repositorio */}
                    </li>
                ))}
        </ul>
        </div>
    )
}

export default ReposList