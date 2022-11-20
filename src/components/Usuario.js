import { useState } from "react";



export default function Usuario() {
const imagemPadrao = "assets/img/catanacomics.svg"
const [imagem, setImagem] = useState(imagemPadrao)
const [usuario, setUsuario] = useState("Catana")


function mudarUsuario() {
  setUsuario(prompt("Qual é o nome que você quer que apareça como seu 'nome de usuário'?"))

}

function mudarImagem(){
let imagemAdicionada = prompt("Adicione o link da imagem que será a sua 'imagem de perfil' :)")
setImagem(imagemAdicionada)
}



  return (
    <div class="usuario">
     <User imagem={!imagem ? imagemPadrao : imagem} usuario={!usuario ? usuario : usuario}/>
    </div>
  )


function User(props) {
  return (
    <div class="organizacao">
      <img onClick={mudarImagem} src={props.imagem} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {props.usuario}
          <ion-icon name="pencil" onClick={mudarUsuario}></ion-icon>
        </span>
      </div>
    </div>
  )
}

}






// function User(props) {
//   return (
//     <div>
//       <img onClick={mudarImagem} src={props.imagem} />
//       <div class="texto">
//         <strong>catanacomics</strong>
//         <span>
//           {!usuario ? usuario :{props.usuario}}
//           <ion-icon name="pencil" onClick={mudarUsuario}></ion-icon>
//         </span>
//       </div>
//     </div>
//   )
// }