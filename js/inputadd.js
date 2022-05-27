let sum = 0;

const add = () => 
{
 sum += +document.getElementById("nbr").value 
answer()
}

const answer = () =>
{
   document.getElementById("sum").innerText = sum;
}

const reset = () =>
{
    sum = 0
    answer()
}