let besURL = "https://bookzone.onrender.com/";
let loginApi = "/api/login";
let sigin_up = "/api/sigin-up";
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let fist_name = document.querySelector("#fist_name");
let email_up = document.querySelector("#email_up");
let tel = document.querySelector("#tel");
let passwordSigin = document.querySelector("#passwordSigin");
let section = document.querySelector("#section");

// login 
function login() {
  let api = besURL + loginApi;
  let data = {
    email: email?.value,
    password: password?.value,
    role: section?.value,
  };
  fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (rest) => {
      let response = await rest?.json();
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(data);
}
//sigin-up

function sigin() {
  let api = besURL + sigin_up;
  let data = {
    email_up: email_up?.value,
    passwordSigin: passwordSigin?.value,
    phone: tel?.value,
    role: section?.value,
  };
  fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(async (rest) => {
      let response = await rest?.json();
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(data);
}
