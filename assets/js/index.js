// Constantes de funcionamento
let storedContacts = localStorage.getItem("contacts");
const contactList = storedContacts ? JSON.parse(storedContacts) : [];

const userForm = document.getElementById("contactForm");
const ulPersons = document.getElementById("contactList");

// Manejando a visualização para Front
const accountTypeMapping = {
    "student": "Aluno",
    "guardian": "Responsável",
    "teacher": "Professor",
    "employee": "Funcionário",
    "coordinator": "Coordenador",
    "sister": "Irmã"
};

// Adicionando botões excluir e deletar
ulPersons.addEventListener('click', function (e) {
    if (e.target.classList.contains('contactEdit')) {
        contactEdit(e.target.getAttribute('data-index'));
    } else if (e.target.classList.contains('contactDelete')) {
        contactDelete(e.target.getAttribute("data-index"));
    }
});

// Criação e verificação de contato
userForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let newPerson = {
        name: this.name.value,
        phone: this.phone.value,
        city: this.city.value,
        state: this.state.value,
        email: this.email.value,
        accountType: Array.from(this.accountType.selectedOptions).map(option => option.value)
    };

    if (this.id.value) {
    // Editando um contato existente.
    contactList[this.id.value] = newPerson;
    } else {
    // Adicionando um novo contato.
        contactList.push(newPerson);
    }

    this.reset();

    saveList(contactList);

    listing();
})

// Salvar a lista
function saveList(list) {
    localStorage.setItem("contacts", JSON.stringify(list));
}

// Remover o Contato selecionado
function contactDelete(id) {
    userForm.reset();
    contactList.splice(id, 1);
    saveList(contactList);
    listing();
}

// Editando um contato
function contactEdit(id) {
    userForm.id.value = id;
    userForm.name.value = contactList[id].name;
    userForm.phone.value = contactList[id].phone;
    userForm.city.value = contactList[id].city;
    userForm.state.value = contactList[id].state;
    userForm.email.value = contactList[id].email;

    Array.from(userForm.accountType.options).forEach(option => option.selected = false);

    contactList[id].accountType.forEach(value => {
        let option = Array.from(userForm.accountType.options).find(option => option.value === value);
        if (option) option.selected = true;
    });
}

// Funcionamento de edição e exclusão de dados armazenados
function listing(filter = "") {
    ulPersons.innerHTML = "";
    contactList.forEach((element, index) => {
        if (element.name.toUpperCase().indexOf(filter.toUpperCase()) >= 0 || filter == "") {
            let line = document.createElement("li");
            let accountTypes = element.accountType.map(type => accountTypeMapping[type] || type);
            line.textContent = `Nome: ${element.name} Telefone: ${element.phone} E-Mail: ${element.email} Cidade: ${element.city} Estado: ${element.state} Acessos: ${accountTypes.join(", ")}`;

            let deleteButton = document.createElement("button");
            deleteButton.className = 'contactDelete';
            deleteButton.dataset.index = index;
            deleteButton.textContent = "[Excluir]";

            let editButton = document.createElement("button");
            editButton.className = 'contactEdit';
            editButton.dataset.index = index;
            editButton.textContent = "[Editar]";

            line.appendChild(deleteButton);
            line.appendChild(editButton);

            ulPersons.appendChild(line);
        }
    });
}

listing();
