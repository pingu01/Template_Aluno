const url = "http://127.0.0.1:3000";

function getInfo() {
  axios
    .get(url + "/teste")
    .then((response) => {
      let info = [];
      response.data.forEach((user) => {
        console.log(user);
        info.push(user);
      });

      for (let i = 0; i < info.length; i++) {
        let user = info[i];
        document.getElementById("info").innerHTML += `
          <p>
            <span>${user.nome}</span>
            <span>${user.idade}</span>
          </p>
          <br/>
          `;
      }
      console.log(response.data)
      return response.data;
    })
    .catch((e) => console.error(e));
};

//getInfo();
