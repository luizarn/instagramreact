import { useState } from "react"

export default function Posts() {

  const posts = [
    { imagemUsuario: "assets/img/meowed.svg", nome: "meowed", imagemPost: "assets/img/gato-telefone.svg", perfilCurtida: "assets/img/respondeai.svg", userCurtida: "respondeai", qtdeCurtidas: 101523 },
    { imagemUsuario: "assets/img/barked.svg", nome: "barked", imagemPost: "assets/img/dog.svg", perfilCurtida: "assets/img/adorable_animals.svg", userCurtida: "adorable_animals", qtdeCurtidas: 200541 }
  ]

  return (
    <div class="posts">
      {posts.map((p) => <Post imagemUsuario={p.imagemUsuario} nome={p.nome} imagemPost={p.imagemPost} perfilCurtida={p.perfilCurtida} userCurtida={p.userCurtida} qtdeCurtidas={p.qtdeCurtidas} />)}
    </div>
  )
}

function Post(props) {
  const iconeVazio = "heart-outline"
  const corVazia = "";
  const iconePadrao = "bookmark-outline"
  const curtida = "coracao-vermelho"

  const [icone, setIcone] = useState(iconePadrao)
  const [cor, setCor] = useState(corVazia)
  const [ion, setIon] = useState(iconeVazio)
  const [qtde, setqtde] = useState(props.qtdeCurtidas)



  function curtirFotopost() {
    setCor(curtida);
    setIon("heart");

    if (qtde === props.qtdeCurtidas) {
      setqtde(qtde + 1)
    } else {
      return;
    }
  }

  function curtirFoto() {

    if (cor === curtida) {
      setCor(corVazia);
      setIon(iconeVazio);
      setqtde(qtde - 1)

    } else {
      setCor("coracao-vermelho");
      setIon("heart");
      setqtde(qtde + 1)
    }
  }

  function salvarPost(){
    if (icone === iconePadrao) {
      setIcone("bookmark")

    } else {
      setIcone("bookmark-outline")
    }
  }



  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemUsuario} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagemPost} onClick={curtirFotopost} data-test="post-image"/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon class={cor} onClick={curtirFoto} name={ion} data-test="like-post"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={icone} onClick={salvarPost} data-test="save-post"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.perfilCurtida} />
          <div class="texto">
            Curtido por <strong>{props.userCurtida}</strong> e <strong data-test="likes-number">outras {qtde}</strong> pessoas
          </div>
        </div>
      </div>
    </div>
  )
}