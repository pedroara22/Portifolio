var projects = [
  {
    nomeDoProjeto: "Aplicativo de Tarefas",
    tecnologias: ["react-Btn", "node-Btn", "javascript-Btn"],
    descricao:
      "Um aplicativo simples onde os usuários podem criar, ler, atualizar e deletar tarefas. O frontend em React se comunicaria com uma API RESTful em Node.js para manipular os dados armazenados no MongoDB.",
  },
  {
    nomeDoProjeto: "E-commerce",
    tecnologias: ["Next-Btn", "node-Btn", "javascript-Btn", "mongodb-Btn"],
    descricao:
      "Um site de comércio eletrônico feito com Next.js completo com páginas de produtos, carrinho de compras, checkout, gerenciamento de inventário e autenticação de usuário. Pode incluir um painel administrativo para gerenciar produtos e pedidos.",
  },
  {
    nomeDoProjeto: "Chat em Tempo Real",
    tecnologias: [
      "react-Btn",
      "node-Btn",
      "javascript-Btn",
      "Socket.io",
      "mongodb-Btn",
    ],
    descricao:
      "Um aplicativo de chat em tempo real onde os usuários podem criar contas, adicionar amigos e conversar em tempo real. Utilizar WebSockets (Socket.io) para comunicação em tempo real e MongoDB para armazenar mensagens e informações de usuários.",
  },
  {
    nomeDoProjeto: "Aplicativo de Receitas",
    tecnologias: ["react-Btn", "node-Btn", "javascript-Btn", "mongodb-Btn"],
    descricao:
      "Um aplicativo onde os usuários podem compartilhar receitas, pesquisar por ingredientes, salvar receitas favoritas e deixar avaliações. Pode incluir categorias e filtros para facilitar a navegação.",
  },
];
/* function getXPositionScroll(timeStart, timeIn, actualTime, timeEnd) {
  let timeTotal = timeEnd - timeStart;
  let x = actualTime - timeStart;
  if (timeIn > timeTotal) {
    return "Error: timeIn must be less than timeTotal";
  } else {
    let time = actualTime - timeStart;
    let timeEnterLeave = timeTotal / 2 - timeIn / 2;
    if (x >= timeEnterLeave && x <= timeTotal - timeEnterLeave) {
      return 0;
    } else {
      if (x < timeEnterLeave) {
        let a = 0.002;
        let c = window.screen.width;
        let b = (a * (timeEnterLeave * timeEnterLeave) + c) / timeEnterLeave;
        return a * (x * x) - b * x + c;
      } else {
        let a = 0.002;
        let xb = x - (timeTotal - timeEnterLeave);
        let b =
          (window.screen.width - timeEnterLeave * timeEnterLeave * a) /
          timeEnterLeave;
        return -(a * (xb * xb) + b * xb);
      }
    }
  }
} */
var selected = "";
function selectProjects(filter) {
  var proy = document.getElementById("projectsDiv").offsetTop - 80;
  window.scrollTo(0, proy);
  if (selected == "") selected = "all-Btn";
  if (selected == filter) return;

  if (filter != "all-Btn") {
    if (filter == "javascript-Btn") {
      document.getElementById("javascript-Btn").className = "js";
    } else if (filter == "react-Btn") {
      document.getElementById("react-Btn").className = "react";
    } else if (filter == "node-Btn") {
      document.getElementById("node-Btn").className = "node";
    } else if (filter == "mongodb-Btn") {
      document.getElementById("mongodb-Btn").className = "mongo";
    }
    document.getElementById(selected).className = "";
    selected = filter;
    projectsByFilter = projects.filter((project) =>
      project.tecnologias.includes(filter)
    );
  } else {
    projectsByFilter = projects;
    document.getElementById("all-Btn").className = "all-Btn";
    document.getElementById(selected).className = "";
    selected = filter;
  }
  document.getElementById("projectsArea").innerHTML = "";
  projectsByFilter.map((project) => {
    document.getElementById("projectsArea").innerHTML += `<div class="project">
    <h2>${project.nomeDoProjeto}</h2>
    <p>${project.descricao}</p>
    <a href="${project.link}">ver</a>
</div>`;
  });
}

setTimeout(() => {
  projectsByFilter = projects;
  document.getElementById("projectsArea").innerHTML = "";
  projectsByFilter.map((project) => {
    document.getElementById("projectsArea").innerHTML += `<div class="project">
    <h2>${project.nomeDoProjeto}</h2>
    <p>${project.descricao}</p>
    <a href="${project.link}">ver</a>
</div>`;
  });
}, 1);