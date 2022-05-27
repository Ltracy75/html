class Friend
{
    constructor (name, email, phone)
    {
        this.name = name;
        this.email = email;
        this.phone = phone;

    }
    toTr()
    {
        return "<tr>"
        + `<td>${this.name}</td>`
        + `<td>${this.email}</td>`
        + `<td>${this.phone}</td>`
        + "</tr>";
    }
}

let friends = [
    new Friend("Kevin", "KT@Gmail.com", "832-472-3234" ),
    new Friend("Rebecca", "Rebecca@Gmail.com", "832-472-3234" ),
    new Friend("Harlan", "Harlan@Gmail.com", "832-472-3234" ),
    new Friend("Joe", "Joe@Gmail.com", "832-472-3234" )
];

const display = () => {

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for (let f of friends)
    {
        tbody.innerHTML += f.toTr()
    }
}

