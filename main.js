const div = document.querySelector(".container");

function showCase(user) {
  div.innerHTML += `
  <img src="${user.avatar}" alt="" />
  <h1>${user.first_name} ${user.last_name}</h1>
  <p>${user.email}</p>
    `;
}
function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((responce) => {
      return responce.json();
    })
    .then((api) => {
      //   console.log(api.data);
      api.data.forEach((user) => {
        showCase(user);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
