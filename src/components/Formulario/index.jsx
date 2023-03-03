import { useState, useEffect } from "react" //useState e o useEffect para manipular o estado dos elementos.

const Formulario = () => { //Arrow funtion que representa o componente como um todo, que exportaremos.
    const [materiaA, setMateriaA] = useState(0) //AQUI É COMO FAZEMOS PARA PEGAR E DEFINIR OS VALORES, UTILIZAMOS O useState, E USAMOS O ARRAY, RECEBENDO O ARGUMENTO QUE IREMOS MANIPULAR, E O OUTRO ARGUMENTO SET, QUE SERÁ O QUE RECEBERÁ O VALOR VIA EVENTO NO HTML, NESTE CASO DO INPUT.
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect( () => {
        console.log("o componente inicializou")
    }, []) //Passando o array vazio, ele irá renderizar o conteudo assim que o conteudo inicializar

    useEffect( () => {
        
        return () => {
            console.log("o componente finalizou")
        }
    }, []) //Passando o array vazio junto de um return, o conteudo oirá renderizar após o componente finalizar

    useEffect( () => { //ASSIM É A ESTRUTURA DO USEEFFECT
        console.log("o estado do nome mudou") //AQUI É O CONTEUDO QUE SERÁ RENDERIZADO
    }, [nome]) //AQUI É COMO SE FOSSE A CONDIÇÃO, QUE O CONTEUDO SÓ SERÁ MONTADO, QUANDO O ESTADO DO NOME FOR ALTERADO

    useEffect( () => {
        console.log("o estado das materias mudaram para " + materiaA, materiaB, materiaC)
    }, [materiaA, materiaB, materiaC]) //AQUI MOSTRA QUE PODEMOS UTILIZAR MAIS DE UMA CONST PARA CONDIÇÃO

    const alteraNome = (evento) => {
        setNome(evento.target.value)
    }

    const renderizaResultado = () => {
        const somaDasMaterias = materiaA + materiaB + materiaC
        const media = somaDasMaterias / 3

        if (media >= 7) {
            return( // EM REACT, PODEMOS UTILIZAR ELEMENTOS HTML DENTRO DO RETURN, NESTE CASO RETORNANDO UM PARAGRAFO
                <p>
                    Olá {nome}! Você foi aprovado.
                </p>
            )
        } else {
            return(
                <p>
                    Olá {nome}! Você foi reprovado.
                </p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => ( //AQUI CRIEI UM ARRAY DE NUMEROS, E UTILIZEI O .MAP PARA ITERAR SOBRE ELES, COMO SE FOSSE UM FOR.
                    <li key={item}>{item}</li> //PASSAMOS O KEY RECEBENDO O ARGUMENTO ITEM POIS É ALGO QUE O REACT PEDE, PARA QUE NÃO HAJA DUPLICIDADE NO MOMENTO DE ITERAR SOBRE OS ITENS DO ARRAY, E AI SIM COLOCAMOS DENTRO DO LI O ARGUMENTO ITEM, QUE IRÁ ITERAR E RENDERIZAR OS ITENS DO ARRAY.
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/> {/*AQUI É COMO SE FOSSE O addEventListenner, recebendo o onChange sendo o CHANGE, QUE COLETA O VALOR QUE DIGITAR NO INPUT E SALVA NA VARIAVEL*/}
            <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(parseInt(target.value))}/>
            {/*PODEMOS DESESTRUTURAR O TARGET, ({target}), PARA NÃO PRECISAR PASSAR O EVENTO.*/}
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default  Formulario