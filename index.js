
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
    <label for="name">Enter your name:</label>
    <input id="name" type="text" placeholder="Your name">
    <button onclick="greetUser()">Greet me</button>
    <p id="greeting"></p>
  </section>

  <script>
    function greetUser() {
      const name = document.getElementById("name").value;
      document.getElementById("greeting").textContent =
        `Hello, ${name}! Welcome to the application.`;
    }
  </script>
</body>
</html>
