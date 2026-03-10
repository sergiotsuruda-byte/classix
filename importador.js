const imoveis = [
{
titulo: "Casa Térrea em Jacareí",
preco: "R$ 620.000",
cidade: "Jacareí - SP",
foto: "https://via.placeholder.com/400x300?text=Imovel+1"
}
];

const container = document.getElementById("imoveis");

container.innerHTML = imoveis.map(imovel => `
<div style="
border:1px solid #ddd;
border-radius:12px;
padding:16px;
margin:20px auto;
max-width:420px;
background:#fff;
box-shadow:0 2px 8px rgba(0,0,0,0.08);
">
<img src="${imovel.foto}" style="width:100%; border-radius:10px;">
<h2 style="margin:12px 0 8px 0;">${imovel.titulo}</h2>
<p style="margin:4px 0;">${imovel.cidade}</p>
<strong style="font-size:22px; color:#0a58ff;">${imovel.preco}</strong>
</div>
`).join("");
