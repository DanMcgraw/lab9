document.addEventListener('DOMContentLoaded', function() {
document.getElementById('input').addEventListener("keyup", updateTable);

var inputBox = document.getElementById('input');
var table = document.getElementById('output').children[0];

function parseSplitAddress(string) {
  var out = string.split(',');
  return out;
}

function updateTable(){
  var strings = parseSplitAddress(inputBox.value);
  for(i = 0; i < table.rows.length; i++)
  table.rows[i].cells[1].innerHTML = strings[i];
}
}, false);
