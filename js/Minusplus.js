const answer = (ans) =>
{
   document.getElementById("answer").value = ans;
}


    const plus = () => {
        let arr = get()
        let result = arr[0] + arr[1]
        answer(result);
    }

    const minus = () => {
        let arr = get()
        let result = arr[0] - arr[1]
        answer(result);
    }

    const multiply = () => {
        let arr = get()
        let result = arr[0] * arr[1]
        answer(result);
    }
    const divide = () => {
        let arr = get()
        let result = arr[0] / arr[1]
        answer(result);
    }

    const modulo = () => {
        let arr = get()
        let result = arr[0] % arr[1]
        answer(result);
    }


//    const display = () => {
//        let inpCtrl =  document.getElementById("answer") = result
//        inpCtrl.value = number;
//        var colorvalue = (number % 2 === 0) ? "red" : "blue"
//        inpCtrl.style.color = colorvalue
//        var font = (number % 3 === 0) ? "bold" : "";
//        inpCtrl.style.fontWeight = font 
//     //    var italic = (number % 5 === 0) ? "italic" : "";
//     //    document.getElementById("nbr").style.fontStyle = italic 

//         inpCtrl.style.fontStyle = (number % 5 === 0) ? "italic" : "";
//    } 

   const get = () => {
    let val = +document.getElementById("nbr").value;
    let val2 = +document.getElementById("nbr2").value;
    let vals = [ val, val2]
    return vals
}