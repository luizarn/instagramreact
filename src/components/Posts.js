
export default function Posts() {

  const posts = [
    { imagemUsuario: "assets/img/meowed.svg", nome: "meowed", imagemPost: "assets/img/gato-telefone.svg", perfilCurtida: "assets/img/respondeai.svg", textoCurtida: "Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>" },
    { imagemUsuario: "assets/img/barked.svg", nome: "barked", imagemPost: "assets/img/dog.svg", perfilCurtida: "assets/img/adorable_animals.svg", textoCurtida: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>" }
  ]

  return (
    <div class="posts">
      {posts.map((p) => <Post imagemUsuario={p.imagemUsuario} nome={p.nome} imagemPost={p.imagemPost} perfilCurtida={p.perfilCurtida} textoCurtida={p.textoCurtida} />)}               
    </div>
  )
}

function Post(props) {
  return (
    <div class="post">
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
        <img src={props.imagemPost}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.perfilCurtida}/>
            <div class="texto">
             {props.textoCurtida}
            </div>
          </div>
        </div>
      </div>
        )
}