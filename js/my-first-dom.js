console.log("ready")

let nbrs = [5, 2, 6, 3, 8];

const clicked = () => 
{
 let inpCtrl = document.getElementById("inp");
    let inpVal = inpCtrl.value;
    console.log("value is", inpVal);
    let labelCtrl = document.getElementById("outp");
    labelCtrl.innerHTML = `<b><i>${inpVal}</i></b>`;

    let sum = 0;
    for(let i of nbrs){
    sum += i;
    }
    let nbrsCtrl = document.getElementById("nbr");
    nbrsCtrl.value = sum;
}
var scores = [];

const add = () =>
{
    let topicx = document.getElementById("topic").value;
    let scorex = document.getElementById("score").value;
        let obj = {
        topic: topicx,
        score: scorex
    }
    scores.push(obj);
    display();
}

const display = () =>
{
    let tbody = document.getElementById("tbody");
    tbody.style.fontWeight = "bold";
    tbody.innerHTML = "";
    for(let obj of scores)
    {
    let tr = "<tr>";
    tr += `<td>${obj.topic}</td>`;
    tr += `<td>${obj.score}</td>`;
    tr += `</tr>`;
    tbody.innerHTML += tr;
    }
}