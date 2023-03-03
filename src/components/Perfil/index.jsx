import styles from './Perfil.module.css' //ASSIM IMPORTAMOS O ARQUIVO DE CSS MODULES

const Perfil = ({nomeUsuario, avatar}) => {

    // const usuario = { AQUI É A FORMA DE CRIAR O OBJETO QUE RECEBERÁ OS VALORES E VARIAVEIS PARA UTILIZAR COMO NO EXEMPLO DA FOTO DO PROFESSOR, AO INVES DE USAR COMO PARAMENTRO, IGUAL ESTA ACIMA, DE {nomeUsuario, avatar}.
    //     nomeProfessor: "gian",
    //     enderecoFotoProfessor: "https://github.com/ogiansouza.png",
    // }

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={avatar} alt="" /> 
            <h1 className={styles.name}>{nomeUsuario}</h1> 
            {/* AQUI ACESSEI OS VALORES DE ACORDO COM O ARGUMENTO PROPS, OU NESTE CASO, OS ARGUMENTOS: {avatar, nomeUsuario}, QUE DEFINIMOS PELO APP.JSX, QUE RECEBEU AS VARIAVEIS COM OS VALORES, E IMPORTAMOS PARA CÁ COM O ARGUMENTO PROPS, E TEM A MESMA FUNÇÃO DO METODO ABAIXO, ONDE DEFINIMOS AS VARIAVEIS DIRETAMENTE AQUI NESTE ARQUIVO */}
            

            {/* <img className={styles.avatar} src={usuario.enderecoFotoProfessor} alt="" />
            <h1 className='perfil-titulo'>{usuario.nomeProfessor}</h1> */}
            {/* AQUI RENDERIZEI A FOTO E O NOME DO PROFESSOR DE ACORDO COM O OBJETO usuario CRIADO LA EM CIMA */}
            <br />
        </header>
    )
}

export default Perfil //AQUI EXPORTAMOS TODO O CONTEUDO DESTE ARQUIVO, SENDO UMA MISTURA DE JS COM HTML