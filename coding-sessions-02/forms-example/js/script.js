const formulario = document.getElementById("formulario")

formulario.addEventListener("submit",
  function(event) {
    event.preventDefault();

    const nome = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const senha = document.querySelector('[name="senha"]').value;
    const idade = document.querySelector('[name="idade"]').value;
    const datanasc = document.querySelector('[name="data-nasc"]').value;

    const texto =
          "Nome: " + nome + "\n" +
          "E-mail: " + email + "\n" +
          "Senha: " + senha + "\n" +
          "Idade: " + idade + "\n"
          "Data de Nascimento: " + datanasc + "\n";

    const arquivo = new Blob([texto], {type: "text"});

    const link = document.createElement("a");
    link.href = URL.createObjectURL(arquivo);
    link.download = "dados.txt";
    link.click();
  });
