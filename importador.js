const imoveis = [
  {
    titulo: "Casa Térrea em Jacareí",
    preco: "R$ 620.000",
    cidade: "Jacareí - SP",
    foto: "casa1.jpg"
  }
];

const container = document.getElementById("imoveis");

container.innerHTML = `
  <div style="
    max-width: 420px;
    margin: 40px auto;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  ">
    <img src="${imoveis[0].foto}" style="
      width: 100%;
      height: 260px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 12px;
    ">
    <h2 style="margin:0 0 8px 0;">${imoveis[0].titulo}</h2>
    <p style="margin:4px 0;">${imoveis[0].cidade}</p>
    <strong style="font-size:30px; color:#0a58ff;">${imoveis[0].preco}</strong>
  </div>
`;
