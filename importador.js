const imoveis = [
  {
    titulo: "Casa Térrea em Jacareí",
    preco: "R$ 620.000",
    cidade: "Jacareí - SP"
  },
  {
    titulo: "Apartamento em São José dos Campos",
    preco: "R$ 480.000",
    cidade: "São José dos Campos - SP"
  },
  {
    titulo: "Cobertura em Taubaté",
    preco: "R$ 890.000",
    cidade: "Taubaté - SP"
  },
  {
    titulo: "Chácara em Igaratá",
    preco: "R$ 1.250.000",
    cidade: "Igaratá - SP"
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
        <div style="
          width:100%;
          height:220px;
          border-radius:12px;
          margin-bottom:12px;
          background:linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%);
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:22px;
          font-weight:bold;
          color:#0a58ff;
          text-align:center;
          padding:20px;
          box-sizing:border-box;
        ">
          Foto do imóvel
        </div>

        <h2 style="margin:0 0 8px 0; font-size:28px; line-height:1.2;">${imovel.titulo}</h2>
        <p style="margin:4px 0; font-size:20px;">${imovel.cidade}</p>
        <strong style="font-size:30px; color:#0a58ff;">${imovel.preco}</strong>
      </div>
    `).join("")}
  </div>
`;
