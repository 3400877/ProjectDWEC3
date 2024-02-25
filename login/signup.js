const name = document.getElementById("name");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const form = document.getElementById("signup-form");

const regexes = {
  user: /^[a-zA-Z0-9\_\-]{4, 16}$/,
  name: /^[a-zA-ZÀ-ÿ\s]{1, 40}$/,
  password: /^.{4,12}$/,
  mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phoneNumber: /^\d{7,14}$/
};

const fields = {
  user: false,
  name: false,
  password: false,
  mail: false,
  phoneNumber: false,
};

const validateLogin = (e) => {
  const fieldName = e.target.name;
  validateField(regexes[fieldName], e.target, fieldName);
  switch (e.target.name) {
    case "password", "password2":
      validatePassword2();
    default:
      validateField(regexes[e.target.name], e.target, e.target.name);
  }
};

const validateField = (regex, input, field) => {
  if (regex.test(input.value)) {
    fields[field] = true;
  } else {
    fields[field] = false;
  }
};

const validatePassword2 = () => {
  if (password.value !== password2.value) {
    fields[password] = false;
  } else {
    fields[password] = true;
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (Object.values(fields).every(field => field)) {
    console.log("Success");
  } else {
    console.log("Failure");
  }
})