function copyCA() {

const contract = document.getElementById("contract").innerText;

navigator.clipboard.writeText(contract);

const toast = document.getElementById("copy-toast");

toast.classList.add("show");

setTimeout(() => {
toast.classList.remove("show");
}, 2000);

           }
