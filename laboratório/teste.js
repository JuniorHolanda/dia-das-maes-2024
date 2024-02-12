const btn = document.querySelector('#btn');
const modal = document.querySelector('#modal');
const btnClose = document.querySelector('#btnClose');

btn.onclick = function () {
    modal.showModal();
}

btnClose.onclick = function () {
    modal.close();
}