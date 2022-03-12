function IonIcons(icon) {
    return (
        <div class={icon.class}>    
            <ion-icon name={icon.nome}></ion-icon>
        </div>
    )
}

function MontarBarra() {
    return (
        <div class="bottombar">
            <IonIcons class="iconesbottom" nome="home-outline" />
            <IonIcons class="iconesbottom" nome="search-outline" />
            <IonIcons class="iconesbottom" nome="add-circle-outline" />
            <IonIcons class="iconesbottom" nome="heart-outline" />
            <IonIcons class="iconesbottom" nome="person-outline" />
        </div>
    )
}

export default function BottomBar() {
    return (
        <>
            <MontarBarra />
        </>
    )  
}