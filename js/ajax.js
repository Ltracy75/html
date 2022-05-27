// $ < means Jquery
$().ready(
    () => 
    { console.log("JQuery is ready")
    getUsers();getProducts();getRequests();getRequestLines(); getVendors();
    });

    let users;
    const getUsers = () => {
        $.getJSON("http://localhost:5220/api/Users")
        .done((res) => {
            console.debug(res)
            users = res;
            display();
        })
        .fail((err) => {
            console.error(err)
        });
    }

    
    const display = () => {
        let tbody = $("#users");
        for(let user of users)
        {
            let tr = $("<tr></tr>")
            let tdId = $(`<td>${user.id}</td>`)
            tr.append(tdId);
            let tdUsername = $(`<td>${user.username}</td>`)
            tr.append(tdUsername);
            let tdFirstname = $(`<td>${user.firstname}</td>`)
            tr.append(tdFirstname);
            let tdLastname = $(`<td>${user.lastname}</td>`)
            tr.append(tdLastname);
            let tdReviewer = $(`<td>${(user.isReviewer) ? "Yes" : "No"}</td>`)
            tr.append(tdReviewer);
            let tdAdmin = $(`<td>${(user.isAdmin) ? "Yes" : "No"}</td>`)
            tr.append(tdAdmin);
            tbody.append(tr);
        }

    }

    const getProducts = () => {
        $.getJSON("http://localhost:5220/api/Products").done((res) => {
            console.debug(res)
            users = res;
        })
        .fail((err) => {
            console.error(err)
        });
    }

    const getRequests = () => {
        $.getJSON("http://localhost:5220/api/Requests").done((res) => {
            console.debug(res)
            users = res;
        })
        .fail((err) => {
            console.error(err)
        });
    }
    
    const getVendors = () => {
        $.getJSON("http://localhost:5220/api/Vendors").done((res) => {
            console.debug(res)
            users = res;
        })
        .fail((err) => {
            console.error(err)
        });
    }
    
    const getRequestLines = () => {
        $.getJSON("http://localhost:5220/api/RequestLines").done((res) => {
            console.debug(res)
            users = res;
        })
        .fail((err) => {
            console.error(err)
        });
    }

    
