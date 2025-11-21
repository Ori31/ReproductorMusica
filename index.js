let dirCanciones = ['musica/[ SERIAL EXPERIMENTS LAIN ] OPENING Duvet traducción al español.mp3' ,'musica/Bunny Girl Senpai - Fukashigi No Carte (Chill, Lofi Remix).mp3','musica/[Lofi] - If I could be a constellation _ Bocchi the rock_ [dPRa0q1_71w].mp3','musica/Color Your Night.mp3', 'musica/ヨルシカ - 言って(Music Video).mp3'];

let titulosd =["Duvet", "Fukashigi no carte", "If I could be a constellation", "Color your night", "Itte"];

let contador = 0;
let estaPlay= false;

document.title = titulosd[contador];


let Musica = new Audio(dirCanciones[contador]);
let listaPortadas = ["img/d991464f2a85f97870b217b331553f65.jpg","img/fukashigi.jpg","img/ifportada.jpg","img/c46f331929f438b6f6685a3136c78fd7.jpg", "img/Yorushika.jpg"]

const titCan = document.getElementById("titCancion");
const botonPausa = document.getElementById("btnPausa");
const botonSig = document.getElementById("btnSig");
const botonBack= document.getElementById("btnAtras");

let Portada = document.getElementById("portada");


Portada.src= listaPortadas[contador];
titCan.textContent = titulosd[contador]

botonBack.addEventListener("click", ()=>{
    Musica.currentTime = 0;
})


botonPausa.addEventListener("click", ()=> {
    if(estaPlay==true){
        botonPausa.style.backgroundImage = "url('img/btnPlay.png')";
        estaPlay= false;
        Musica.pause();
    }else{
        
estaPlay= true;
botonPausa.style.backgroundImage = "url('img/btnPausa.png')";
     Musica.play();
    }
})

botonSig.addEventListener("click", ()=> {

    if(estaPlay == true){
        alert("No se ha pausado la musica");
    }else{
   contador = contador +1;
    if(contador > (listaPortadas.length-1)){
        contador = 0;
        document.title = titulosd[contador];
        titCan.textContent = titulosd[contador]
        Musica = new Audio(dirCanciones[contador]);
        Musica.load();
        
    }else{

        document.title = titulosd[contador];
        titCan.textContent = titulosd[contador]
        Musica = new Audio(dirCanciones[contador]);
        Musica.load();

    }
    Portada.src= listaPortadas[contador];
}

    }

 )

