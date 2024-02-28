// Local Storage'te kullanıcıya ait (özel olmayan) verileri tarayıcının içerisinde depolayayibilir 



// Set Item

// localStorage.setItem("key1","value1");      // yine aynı şekilde aynı key kopyalanamaz
// localStorage.setItem("key2",80);            // number vs tüm değerleri string ifadesi olarak kaydeder

// Ekledikten sonra yorum satırına alınsa dahi o veri eklenmiş halde orada kalır
// Sayfayı kapatıp açmak veriyi silmez



// Get Item

/* 
const item1 = localStorage.getItem("key1");      // Key1'e karşılık gelen değeri çağırdık
const item2 = localStorage.getItem("key2");         // Key2'e karşılık değeri çağırdık fakat number olarak değil string olarak gelir

console.log(item1);
console.log(item2);
console.log(typeof item2); 
*/



// Veri sorgulama Local Storage

/* 
console.log(localStorage.getItem("key3"));          // burada null değeri gelecek öyle bir veri bulunmadığından dolayı

if (localStorage.getItem("key3") === null) {        // Bunu dışardan yani kullanicidan veri alıp sorgulatarak kullanabşliriz
    console.log("Aradiğiniz veri bulunamadi");
}

else {
    console.log("Aradiğiniz veri bulundu");
} 
*/



// Local Storage Array Yazma

const todos = ["Todo 1","Todo 2","Todo 3"];

/* 
localStorage.setItem("todos",todos);            // Key alanına todos value olarak todos değişkeninde ki verileri ekledik

console.log(localStorage.getItem("todos"));     // bu şekilde string bir ifade olarak geri döner bize
*/

// Bunları Json özelliği ile verileri olduğu gibi yazdırabiliriz

localStorage.setItem("todos", JSON.stringify(todos));       // todos değişkenini json sayesinde string olmadan yazdırabilirz 

// console.log(localStorage.getItem("todos"));              // Fakat çağırdığımız zaman bize ["Todo 1","Todo 2","Todo 3"] bu şekilde string olarak gelir

const m = JSON.parse(localStorage.getItem("todos"));        // json parse özelliği ile bize dizi olarak geri çevirir
console.log(m);

console.log(JSON.parse(localStorage.getItem("todos")));     // bi değişkene atamamız gerekmez




