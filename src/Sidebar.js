function Usuario(usuario) {
    return (
        <>
            <div class="storedestaque">
                <img class="destaque" src={usuario.foto} />
                <div class="textodestaque">
                    <h1 class="nomedaconta"><b>{usuario.nome}</b></h1>              
                    <h2 class="subtitulo">{usuario.subtitulo}</h2>
                </div>
            </div>
        </>
    )
}

function Sugestoes() {
    const sugestao = [
        {foto:"./imagens/badvibesmemes 1.png", nome:"badvibesmemes"},
        {foto:"./imagens/chibirdart 1.png", nome:"chibirdart"},
        {foto:"./imagens/razoesparaacreditar 1.png", nome:"razoesparaacreditar"},
        {foto:"./imagens/adorableanimals 1.png", nome:"adorable_animals"},
        {foto:"./imagens/smallcutecats 1.png", nome:"smallcutecats"}
    ]

    return(
        <>
            {sugestao.map(sugestao => <MontarSugestoes foto={sugestao.foto} nome={sugestao.nome} />)}
        </>
    )
}

function MontarSugestoes(props) {
    return(
        <div class="colunas">
            <div class="sugestaoesquerda">
                <img class="fotosugestao" src={props.foto} alt=""/> 
                <div class="sugestoesinsta">
                    <h1 class="nomesugestao">{props.nome}</h1> 
                    <h2 class="tesegue">Segue você</h2>
                </div>
            </div>
            <div class="sugestaodireita">
                <h1 class="seguirblue">Seguir</h1>   
            </div>
        </div>
    )
}

function MontarBarra() {
    return (
        <div class="paginasidebar">
            <div class="centralizar">
                <div class="sidebar">
                    <Usuario foto="./imagens/barked.png" nome="barked" subtitulo="Barked by 9GAG | Dog community"/>
                    <div class="sugestoes">
                        <h1 class="sugestoespers">Sugestões para você</h1>
                        <h1 class="vertudo"><b>Ver tudo</b></h1>
                    </div>
                    <div class="seguir">
                        <div class="umasugestao">   
                            <Sugestoes />
                            <div class="infos">
                                <div class="direitosautorais">
                                    <h1 class="sobre">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</h1>
                                </div>
                                <div class="direitosautorais">
                                    <h1 class="direitos">© 2021 INSTAGRAM DO FACEBOOK</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function SideBar() {
    return (
        <>
            <MontarBarra/>
        </>
    )
}