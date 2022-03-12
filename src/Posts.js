 function InfosPosts() {
    const post = [
        {fotoperfil:"./imagens/pixar.png", nomeperfil:"pixar", verificado:"imagens/verificado.png", imgpost:"./imagens/turningred.png", contacurtir:"./imagens/nathanwpylestrangeplanet.png", curtidopor:"nathanwpylestrangeplanet", ncurtidas:"231.142"},
        {fotoperfil:"./imagens/pixar.png", nomeperfil:"pixar", verificado:"imagens/verificado.png", imgpost:"./imagens/wall-e.png", contacurtir:"./imagens/nathanwpylestrangeplanet.png", curtidopor:"nathanwpylestrangeplanet", ncurtidas:"231.142"},
        {fotoperfil:"./imagens/pixar.png", nomeperfil:"pixar", verificado:"imagens/verificado.png", imgpost:"./imagens/soul.png", contacurtir:"./imagens/nathanwpylestrangeplanet.png", curtidopor:"nathanwpylestrangeplanet", ncurtidas:"231.142"}
    ]

    return (
        <>
        {post.map(post => <MontarPost fotoperfil={post.fotoperfil} nomeperfil={post.nomeperfil} verificado={post.verificado} imgpost={post.imgpost} contacurtir={post.contacurtir} curtidopor={post.curtidopor} ncurtidas={post.ncurtidas} />)}
        </>
    )
}

function IonIcons(icon) {
    return (
        <div class={icon.class}>    
            <ion-icon name={icon.nome}></ion-icon>
        </div>
    )
}

function MontarPost(props) {
    return (
        <>
        <div class="posts">
            <div class="conta">
                <div class="foto">
                    <img class="perfil" src={props.fotoperfil} />
                    <h1 class="nomeperfil">{props.nomeperfil}</h1> 
                    <img class="verificado" src={props.verificado} />   
                </div>
                <IonIcons class="dots" nome="ellipsis-horizontal-outline" />
            </div>
            <div class="imgpost">
                <img class="imgpixar" src={props.imgpost} />
            </div>   
            <div class="rodape">
                <div class="like">
                    <div class="iconesrodape">
                        <IonIcons class="esquerdarodape" nome="heart-outline" />
                        <IonIcons class="esquerdarodape" nome="chatbubble-outline" />
                        <IonIcons class="esquerdarodape" nome="paper-plane-outline" />
                    </div>
                    <IonIcons class="save" nome="bookmark-outline" />
                </div>
                <div class="curtidas">
                    <img class="contacurtir" src={props.contacurtir} />
                    <h1 class="ncurtidas">Curtido por <b>{props.curtidopor}</b> e <b>{props.ncurtidas}</b></h1>
                </div>
            </div>
        </div>
        <div class="espaçoposts"></div>
        <div class="espaçoposts"></div>
        </>
    )
}

export default function Posts() {
    return(
        <>
        <InfosPosts/>
        </>
    )
}