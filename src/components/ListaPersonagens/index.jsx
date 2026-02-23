import CardPersonagem from "../CardPersonagens";
import "./style.css";

export default function ListaPersonagens({ personagens }) {
  return (
    <section className="lista-container ">
      {personagens.map((personagem) => (
        <CardPersonagem
          key={personagem.id}
          imagem={personagem.image}
          nome={personagem.name}
          especie={personagem.species}
          status={personagem.status}
          genero={personagem.gender}
          localizacao={personagem.location.name}
        />
      ))}
    </section>
  );
}
