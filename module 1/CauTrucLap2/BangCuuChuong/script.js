document.addEventListener("DOMContentLoaded", function () {
    var table = document.getElementById("multiplicationTable");
    for (var i = 2; i <= 9; i++) {
        var row = table.insertRow();
        for  (var j = 2; j <= 9; j++){
            var cell = row.insertCell();
            cell.textContent = i + "x" + j + "=" + (i * j);
        }
    }
});