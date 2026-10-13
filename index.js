
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World App</title>
</head>
<body>
  <h1>Hello, World!</h1>

  <section>
    <h2>Personalized Greeting</h2>

    <label for="name">Name:</label>
    <input id="name" type="text" placeholder="Your name">

    <label for="language">Language:</label>
    <select id="language">
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </select>

    <button onclick="greetUser()">Greet me</button>
    <p id="greeting"></p>
  </section>

  <script>
    function greetUser() {
      const name = document.getElementById("name").value.trim();
      const language = document.getElementById("language").value;
      const greeting = document.getElementById("greeting");

     
if (!name) {
  greeting.textContent = language === "ru"
    ? "Пожалуйста, введите имя."
    : "Please enter your name.";
  return;
}


      if (language === "ru") {
        greeting.textContent = `Привет, ${name}! Добро пожаловать!`;
      } else {
        greeting.textContent = `Hello, ${name}! Welcome!`;
      }
    }
  </script>
</body>
</html>
