function Logo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram" width="20px"></ion-icon>
        </div>
    )
}

function LinhaVertical() {
    return (
        <div class="linhavertical"></div>
    )
}

function Instagram() {
    return (
        <div class="instagram">
            <img class="imginstagram" src="./imagens/logo 1.png" />
        </div>
    )
}

function Pesquisa() {
    return (
        <div class="pesquisa">
            <div class="barradepesquisa">
                <h1 class="search">Pesquisa</h1>
            </div> 
        </div>
    )
}

function UmIcon(props) {
    return (
        <div class={props.class}>
            <ion-icon name={props.nome}></ion-icon>
        </div>
    )
}


function Icones(props) { //PROPS
    return (
        <div class="icones">
            <UmIcon class="iconeextra" nome="paper-plane-outline"/>
            <UmIcon class="direct" nome="paper-plane-outline"/>
            <UmIcon class="direct" nome="compass-outline"/>
            <UmIcon class="direct" nome="heart-outline"/>
            <UmIcon class="direct" nome="person-outline"/>
        </div>
    )
}

export default function BarraTopo() {
    return (
        <>
        <div class="barratopo">
            <div class="centro">
                <Logo />
                <LinhaVertical />
                <Instagram /> 
                <Pesquisa />
                <Icones />
            </div>
        </div>
        <div class="espaçobarratopo"></div>
        </>
    )
}