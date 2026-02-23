import ListaPersonagens from "../components/ListaPersonagens";
import Paginacao from "../components/Paginacao";
import { exibirPersonagens } from "../services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [personagens, setPersonagens] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function carregarInfo() {
      const dados = await exibirPersonagens(page);

      setPersonagens(dados.results);
      setNext(dados.info.next);
      setPrev(dados.info.prev);
    }

    carregarInfo();
  }, [page]);

  const nextPage = () => {
    setPage(() => page + 1);
  };

  const previousPage = () => {
    setPage(() => (page <= 0 ? page : page - 1));
  };

  return (
    <main>
      <Paginacao
        prev={prev}
        next={next}
        anterior={previousPage}
        proximo={nextPage}
      />
      <ListaPersonagens personagens={personagens} />
      <Paginacao
        prev={prev}
        next={next}
        anterior={previousPage}
        proximo={nextPage}
      />
    </main>
  );
}
