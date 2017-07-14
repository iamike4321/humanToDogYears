function convert(age) {
    var x;
    if (age == "H") {x = document.getElementById("h").value /7;
        document.getElementById("d").value = x.toFixed(1);}
    else {x = (document.getElementById("d").value) /7;
        document.getElementById("h").value = x.toFixed(1);}
}
