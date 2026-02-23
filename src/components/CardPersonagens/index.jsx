import "./style.css";

export default function CardPersonagem({
  nome,
  imagem,
  especie,
  status,
  genero,
  localizacao,
}) {
  return (
    <section className="card">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>Espécie: {especie}</p>
      <p>Status: {status}</p>
      <p>Gênero: {genero}</p>
      <p>Localização: {localizacao}</p>
    </section>
  );
}
