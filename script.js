const whatsapp = "5585988112861";

const products = [
  {name:"Bíblia Sagrada — edição clássica", category:"Bíblias", price:"R$ 49,90", icon:"BÍBLIA SAGRADA"},link:"https://go.hotmart.com/D107093049S"
  {name:"Bíblia de estudo", category:"Bíblias", price:"R$ 89,90", icon:"BÍBLIA DE ESTUDO"},
  {name:"Livro devocional", category:"Livros", price:"R$ 34,90", icon:"DEVOCIONAL"},
  {name:"Livro cristão — fé e propósito", category:"Livros", price:"R$ 39,90", icon:"FÉ & PROPÓSITO"},
  {name:"Caneca com mensagem de fé", category:"Presentes", price:"R$ 29,90", icon:"FÉ ♥"},
  {name:"Quadro decorativo cristão", category:"Decoração", price:"R$ 44,90", icon:"DEUS É BOM"},
  {name:"Caderno de oração", category:"Presentes", price:"R$ 27,90", icon:"ORAÇÃO"},
  {name:"Presente cristão especial", category:"Presentes", price:"R$ 59,90", icon:"✦ PRESENTE"}
];

const grid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
let count = 0;

function whatsappLink(product){
  const text = `Olá! Vi o produto "${product.name}" na loja Sua Fé, Nosso Propósito e gostaria de saber mais.`;
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
}

function render(filter="Todos"){
  const list = filter === "Todos" ? products : products.filter(p => p.category === filter);
  grid.innerHTML = list.map((p,i) => `
    <article class="product-card">
      <div class="product-image">${p.icon}</div>
      <div class="category">${p.category}</div>
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <a class="buy" href="${whatsappLink(p)}" target="_blank" rel="noopener" data-index="${i}">COMPRAR PELO WHATSAPP</a>
    </article>
  `).join("");
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});

document.querySelectorAll(".categories a").forEach(link => {
  link.addEventListener("click", () => {
    const category = link.dataset.category;
    const button = [...document.querySelectorAll(".filter")].find(b => b.dataset.filter === category);
    if(button){
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      render(category);
    }
  });
});

document.getElementById("aboutWhatsapp").href =
  `https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá! Quero conhecer a Sua Fé, Nosso Propósito.")}`;

document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.getElementById("nav");
  const visible = nav.style.display === "flex";
  nav.style.display = visible ? "none" : "flex";
  if(!visible){
    nav.style.position = "absolute";
    nav.style.top = "82px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.background = "#fff";
    nav.style.padding = "20px";
    nav.style.flexDirection = "column";
    nav.style.alignItems = "center";
    nav.style.boxShadow = "0 10px 25px #0002";
  }
});

render();
