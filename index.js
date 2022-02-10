// підключення express
const express = require("express");

// створюємо об’єкт додатка
const app = express();

// визначаємо обробник для маршруту "/"
app.get("/", (request, response) => {
    
    // відправляємо відповідь
    response.send("<h1>Hello World!</h1>");
});

// починаємо прослуховувати підключення на 3000 порту
app.listen(3000);
