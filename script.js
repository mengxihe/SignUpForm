

function validate() {
    var x = document.getElementById("pw");
    var y = document.getElementById("confirmpw")
    if(x.value==y.value) return true;
    else { 
        alert("passwords do not match")
        return false}
}
