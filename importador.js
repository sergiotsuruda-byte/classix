async function carregarImoveis() {
  const url = "https://www.joanny.com.br/banco_de_dados.xml";

  try {
    const resposta = await fetch(url);
    const texto = await resposta.text();

    console.log("XML carregado com sucesso");
    console.log(texto.substring(0, 1000));

  } catch (erro) {
    console.error("Erro ao carregar XML:", erro);
  }
}

carregarImoveis();
