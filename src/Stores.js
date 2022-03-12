function InfosStores() {
    const infos = [
        {link:"./imagens/9gag.png", nome:"9gag"},
        {link:"./imagens/meowed.png", nome:"meowed"},
        {link:"./imagens/barked.png", nome:"barked"},
        {link:"./imagens/nathanwpylestrangeplanet.png", nome:"nathanwpylestrangeplanet"},
        {link:"./imagens/wawawiwacomicsa.png", nome:"wawawiwacomicsa"},
        {link:"./imagens/respondeai.png", nome:"respondeai"},
        {link:"./imagens/memeriagourmet.png", nome:"memeriagourmet"},
    ]

    return (
        <>
        {infos.map(infos => <UmStore link={infos.link} nome={infos.nome} />)}
        </>
    )
}

function UmStore(props) {
    return (
        <div class="umstore">
            <img class="fotostore" src={props.link}/>                      
            <div class="textostores">
                <h1 class="nome"> {props.nome}</h1>
            </div>
        </div>
    )
}

function SetaStores() {
    return (
        <div class="seta">
            <ion-icon class="setastores" name="chevron-forward-circle-outline"></ion-icon>
        </div>
    )
}

export default function Stores() {
    return (
        <>
        <div class="stores">
            <div class="espaçoumstore"></div>
            <InfosStores />
            <SetaStores />
        </div>
        <div class="espaçostores"></div>

        </>
    )
}
