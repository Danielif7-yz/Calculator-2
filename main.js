function display(val) {
    document.getElementById('result').value += val
    return val
}


function Calculate() {
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
        /*This code 
    return y
}



function clearCalcScreen() {
    document.getElementById('result').value = "";  /*This will clear the screen */
}

function deleteNumbers(tmp) {
    document.getElementById('result').value = document.getElementById('result').value.slice(0, -1) /*This deletes the digits one by one */
}