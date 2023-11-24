// <div class="flex flex-col border border-black px-5 justify-center w-96 h-48"><p class="text-2xl text-semibold ">Tipo de Atendimento:</p><p class="text-3xl font-bold text-black">Rematricula</p><div class="my-5"></div><p class="text-xl text-semibold">Senha: <span class="text-3xl font-bold text-black">0001</span></p></div>

var btn = document.getElementById("sub");
var quant = document.getElementById("quant");
var tipo = document.getElementById("tipo");
var form = document.getElementById("form");
var result = document.getElementById("result");
var back = document.getElementById("back");

var items = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

const zeroPad = (num, qty) => String(num).padStart(qty, "0");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const type = tipo.value;
  const count = parseInt(quant.value);
  form.classList.add("hidden");
  result.innerHTML = null;

  if (count < 100) {
    var pages = Math.ceil(count / 10);
    let r = 0;
    for (let p = 0; p < pages; p++) {
      result.innerHTML += `<div id="page${p}" class="grid grid-cols-2 gap-8 w-full h-screen"></div>`;
      for (let i = 1; i <= 10; i++) {
        let senha = zeroPad(i + r, 4);
        let ep = document.getElementById(`page${p}`);
        ep.innerHTML += `<div class="flex flex-col border border-black px-5 justify-center w-80 p-4 py-6 h-fit"><p class="text-2xl text-semibold ">Tipo de Atendimento:</p><p class="text-3xl font-bold text-black">${type}</p><div class=""></div><p class="text-xl text-semibold">Senha: <span class="text-3xl font-bold text-black">${senha}</span></p></div>`;
        if (count <= i + r) {
          break;
        }
      }
      r += 10;
    }
  } else {
    var pages = Math.ceil(count / 10);
    for (let p = 0; p < pages; p++) {
      result.innerHTML += `<div id="page${p}" class="grid grid-cols-2 gap-8 w-full h-screen"></div>`;
      for (let i = 0; i < items.length; i++) {
        let ep = document.getElementById(`page${p}`);
        let n = 1 + p + items[i];
        let senha = zeroPad(n, 4);
        ep.innerHTML += `<div class="flex flex-col border border-black px-5 justify-center w-80 p-4 py-6 h-fit"><p class="text-2xl text-semibold ">Tipo de Atendimento:</p><p class="text-3xl font-bold text-black">${type}</p><div class=""></div><p class="text-xl text-semibold">Senha: <span class="text-3xl font-bold text-black">${senha}</span></p></div>`;
      }
    }
  }
});

// back.addEventListener("click", (e) => {
//   e.preventDefault();
//   result.innerHTML = null;
//   form.classList.remove("hidden");
// });
