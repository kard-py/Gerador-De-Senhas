// <div class="flex flex-col border border-black px-5 justify-center w-96 h-48"><p class="text-2xl text-semibold ">Tipo de Atendimento:</p><p class="text-3xl font-bold text-black">Rematricula</p><div class="my-5"></div><p class="text-xl text-semibold">Senha: <span class="text-3xl font-bold text-black">0001</span></p></div>

var btn = document.getElementById("sub");
var quant = document.getElementById("quant");
var tipo = document.getElementById("tipo");
var form = document.getElementById("form");
var result = document.getElementById("result");
var back = document.getElementById("back");
const zeroPad = (num, qty) => String(num).padStart(qty, "0");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const type = tipo.value;
  const count = parseInt(quant.value);
  form.classList.add("hidden");
  result.innerHTML = null;

  for (let i = 1; i <= count; i++) {
    let senha = zeroPad(i, 4);
    result.innerHTML += `<div class="flex flex-col border border-black px-5 justify-center w-80 p-4 m-8"><p class="text-2xl text-semibold ">Tipo de Atendimento:</p><p class="text-3xl font-bold text-black">${type}</p><div class=""></div><p class="text-xl text-semibold">Senha: <span class="text-3xl font-bold text-black">${senha}</span></p></div>`;
  }
});

back.addEventListener("click", (e) => {
  e.preventDefault();
  result.innerHTML = null;
  form.classList.remove("hidden");
});
