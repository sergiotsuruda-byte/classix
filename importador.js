const imoveis = [
  {
    titulo: "Casa Térrea em Jacareí",
    preco: "R$ 620.000",
    cidade: "Jacareí - SP",
    foto: "https://via.placeholder.com/400x300?text=Imovel+1"
  },
  {
    titulo: "Apartamento em São José dos Campos",
    preco: "R$ 480.000",
    cidade: "São José dos Campos - SP",
    foto: "https://via.placeholder.com/400x300?text=Imovel+2"
  },
  {
    titulo: "Cobertura em Taubaté",
    preco: "R$ 890.000",
    cidade: "Taubaté - SP",
    foto: "https://via.placeholder.com/400x300?text=Imovel+3"
  },
  {
    titulo: "Chácara em Igaratá",
    preco: "R$ 1.250.000",
    cidade: "Igaratá - SP",
    foto: "https://via.placeholder.com/400x300?text=Imovel+4"
  }
];

const container = document.getElementById("imoveis");

container.innerHTML = `
  <div style="
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));
    gap:20px;
    max-width:1200px;
    margin:40px auto;
    padding:20px;
  ">
    ${imoveis.map(imovel => `
      <div style="
        border:1px solid #ddd;
        border-radius:16px;
        padding:16px;
        background:#fff;
        box-shadow:0 2px 10px rgba(0,0,0,0.08);
      ">
        <img src="${imovel.foto}" style="width:100%; border-radius:12px; margin-bottom:12px;">
        <h2 style="margin:0 0 8px 0; font-size:28px;">${imovel.titulo}</h2>
        <p style="margin:4px 0; font-size:20px;">${imovel.cidade}</p>
        <strong style="font-size:30px; color:#0a58ff;">${imovel.preco}</strong>
      </div>
    `).join("")}
  </div>
`;
