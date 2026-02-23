export const exibirPersonagens = async (page) => {
  try {
    const resposta = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );
    const objeto = await resposta.json();
    return objeto;
  } catch (error) {
    console.log(`Erro ${error}`);
  }
};
