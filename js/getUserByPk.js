$().ready(()=> {
    console.log("jQuery is Ready!");
    getUserByPk(5);
})

const getUserByPk = (id) => {
    $.getJSON(`http://localhost:5220/api/Users/${id}`)
        .done((res) => {
            console.debug(res);
            render(res);
        })
        .fail((err) =>{
            console.error(err);
        })
}

const render = (user) => {
    $("#tdId").text(user.id)
    $("#tdName").text(`${user.firstname} ${user.lastname}`) 
    $("#tdReviewer").text((user.isReviewer) ? "Yes" : "No")
    $("#tdAdmin").text((user.isAdmin)  ? "Yes" : "No")

}