const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e) {
    const value = todoInput.value;
    let todos;


    if (localStorage.getItem("todos") === null) {
        todos = [];                                             // todos dizisi yoksa oluştur
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));      // todos dizisi varsa bunu json ile dizi şeklinde getir
    }

    todos.push(value);                                          // değeri en sona ekle

    localStorage.setItem("todos", JSON.stringify(todos));       // Güncellenen todos dizisini JSON formatına çevirip, "todos" adıyla localStorage'a kaydeder.

    e.preventDefault();     // form sayfasında kaydet dediğimizde yenileme yapmaması için değerleri sıfırlıyoruz
}

// eklenen bütün verileri todos dizisine yani sadece bi key içine ekleme işlemini yapan fonkiyon