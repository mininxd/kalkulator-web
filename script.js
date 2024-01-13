var rumus = document.getElementById("rumusEl");

$('#satuEl').on("click", function() {
  $('#rumusEl').append("1");
})
$('#duaEl').on("click", function() {
  $('#rumusEl').append("2");
})
$('#tigaEl').on("click", function() {
  $('#rumusEl').append("3");
})
$('#empatEl').on("click", function() {
  $('#rumusEl').append("4");
})
$('#limaEl').on("click", function() {
  $('#rumusEl').append("5");
})
$('#enamEl').on("click", function() {
  $('#rumusEl').append("6");
})
$('#tujuhEl').on("click", function() {
  $('#rumusEl').append("7");
})
$('#delapanEl').on("click", function() {
  $('#rumusEl').append("8");
})
$('#sembilanEl').on("click", function() {
  $('#rumusEl').append("9");
})
$('#nolEl').on("click", function() {
  $('#rumusEl').append("0");
})
$('#titikEl').on("click", function() {
  $('#rumusEl').append(".");
})
$('#percentEl').on("click", function() {
  $('#rumusEl').append("%");
})

$('#multiEl').on("click", function() {
  $('#rumusEl').append("^");
})



$('#tambahEl').on("click", function() {
  $('#rumusEl').append("+")
})
$('#kurangEl').on("click", function() {
  $('#rumusEl').append("-")
})
$('#kaliEl').on("click", function() {
  $('#rumusEl').append("×")
})
$('#bagiEl').on("click", function() {
  $('#rumusEl').append("÷")
})
$('#deleteEl').on("click", function() {
 var del = document.createTextNode(rumus.textContent.slice(0,-1));
 rumus.innerHTML = "";
 rumus.appendChild(del);
})
//animasi fade out ketika dihapus AC
$('#clearEl').on("click", function() {
  $('#rumusEl').css("opacity","0");
  $('#hasilEl').css("opacity","0");
    setTimeout( function() {
        $('#rumusEl').css("opacity","1");
        $('#hasilEl').css("opacity","1");
        $('#rumusEl').html("");
        $('#hasilEl').html("");
    }, 400)
})
//


//hitung rumusnya
$('#jumlahEl').on("click", function() {
  
var defineMulti = rumus.textContent.replace(/\^/g, "**");

  var operator = {
    '÷' : '/',
    '×' : '*'
  }
 
var convertOperator =  defineMulti.replace(/\b(?:÷|×)\b/gi, function(convert){
  return operator[convert];
});


// console.log(convertOperator + "=" + eval(convertOperator));

  $('#hasilEl').html(eval(convertOperator));
})