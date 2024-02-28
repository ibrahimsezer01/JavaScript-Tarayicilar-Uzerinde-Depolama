// Session Storage web sayfası kapatıldığı anda verilerin silindiği depolama biçimidir

// Inputlar
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");


// Butonlar
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");


// Click Events
add.addEventListener("click",addItem);
del.addEventListener("click",delItem);
clear.addEventListener("click",clearItems);


// Funcs
function addItem(e) {
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function delItem(e) {
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e) {
    sessionStorage.clear();
}

// sayfa kapanıp tekrardan açıldığında bunların hepsi silinmiş olur --- sadece kullanıcının o anki oturumana bağlılık gösterirler
