function copyCA(){

const contract = document.getElementById("contract").innerText;

navigator.clipboard.writeText(contract);

const toast = document.getElementById("copy-toast");

toast.classList.add("show");

setTimeout(()=>{
toast.classList.remove("show");
},2000);

}


/* LIVE PRICE FETCH */

async function fetchPrice(){

try{

const res = await fetch(
"https://api.dexscreener.com/latest/dex/tokens/atVjZ7uM8sVrLFi5Xe1JiLGW6mW9pvQdTCWzhNFpump"
);

const data = await res.json();

const price = data.pairs[0].priceUsd;

document.getElementById("price").innerText =
"$" + Number(price).toFixed(6);

}catch(e){
console.log("Price fetch error",e);
}

}

fetchPrice();

/* auto update */

setInterval(fetchPrice,10000);