/*const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailImput = document.querySelector("#email");
const telefoneImput = document.querySelector("#telefone");
const date1Imput = document.querySelector("#date1");
const date2Imput = document.querySelector("#date2");
const generoSelect = document.querySelector("#genero");
const rgImput = document.querySelector("#rg");
const cpfImput = document.querySelector("#cpf");
const cepImput = document.querySelector("#cep");
const ruaImput = document.querySelector("#rua");
const complementoImput = document.querySelector("#complemento");
const bairroImput = document.querySelector("#bairro");
const cidadeImput = document.querySelector("#cidade");
const estadoImput = document.querySelector("#estado");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  form.submit();

  //verifica se o nome está vazio
  if (nameInput.value === "") {
    alert("O nome é Obrigatório");
    return;
  }

  // Verificar se o email está preenchido e se é válido
  if (emailImput.value === "" || !isEmailValid(emailImput.value)) {
    alert("O E  mail é Obrigatório");
    return;
  }

  if (telefoneImput.value === "") {
    alert("Por favor, digite o número do seu telefone");
    return;
  }

  if (date1Imput.value === "") {
    alert("Por favor, preencha a data de hoje");
    return;
  }

  if (date2Imput.value === "") {
    alert("Por favor, preencha a data do seu nascimento");
    return;
  }

  //Verificar se a situação foi selecionada
  if (generoSelect.value === "") {
    alert("Por favor, selecione o seu Gênero");
    return;
  }

  if (rgImput.value === "") {
    alert("Por favor, digite o número da sua identidade");
    return;
  }

  if (cpfImput.value === "") {
    alert("Por favor, digite o número do seu CPF");
    return;
  }

  if (cepImput.value === "") {
    alert("Por favor, digite o cep da sua rua");
    return;
  }

  if (ruaImput.value === "") {
    alert("Por favor, digite o nome da sua Rua");
    return;
  }

  if (complementoImput.value === "") {
    alert(
      "Por favor, digite no campo (complemento), o número da sua Casa ou Apartamento, caso não haja número, digite S/N"
    );
    return;
  }

  if (bairroImput.value === "") {
    alert("Por favor, digite o seu Bairro");
    return;
  }

  if (cidadeImput.value === "") {
    alert("Por favor, digite a sua Cidade");
    return;
  }

  if (estadoImput.value === "") {
    alert("Por favor, digite o seu Estado");
    return;
  }

  // Se todos os campos estiverem corretamente preenchidos envie o form
});

// Funcção que valida o email

function isEmailValid(email) {
  // Criar regex para validar email
  const emailRegex = new RegExp(
    // usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

*/
/*class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init(); */
