import "./style.css";

export default function Paginacao({ prev, next, anterior, proximo }) {
  return (
    <>
      <section className="container-btn">
        {prev ? (
          <button className="btn" onClick={anterior}>
            Anterior
          </button>
        ) : null}
        {next ? (
          <button className="btn" onClick={proximo}>
            Próximo
          </button>
        ) : null}
      </section>
    </>
  );
}
