export default function Sugestoes() {

  const sugestoes = [
    { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
    { imagem: "assets/img/chibirdart.svg", nome: "chibirdart" },
    { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
    { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals" },
    { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats" }
  ]

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map((s) => <Sugestao imagem={s.imagem} nome={s.nome} />)}
    </div>
  )
}

function Sugestao(props) {
  return (
    <div>
      <div class="sugestao">
        <div class="usuario">
          <img src={props.imagem} />
          <div class="texto">
            <div class="nome">{props.nome}</div>
            <div class="razao">Segue você</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>


    </div>

  )
}