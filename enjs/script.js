$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail2').hover(
        function(){
            $(this).find('.caption2').slideDown(250); //.fadeIn(250)
            $(this).find('.project-category').hide(); 
        },
        function(){
            $(this).find('.caption2').slideUp(250); //.fadeOut(205)
            $(this).find('.project-category').show();
        }
    ); 
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;


var forceInputLowercase = function(e) {
    let el = e.target;
    let start = el.selectionStart;
    let end = el.selectionEnd;
    el.value = el.value.toLowerCase();
    el.setSelectionRange(start, end);
  };

  document.querySelectorAll(".uc-text").forEach(function(current) {
    current.addEventListener("keyup", forceInputLowercase);
  });

  var forceInputUppercase = function(e) {
    let el = e.target;
    let start = el.selectionStart;
    let end = el.selectionEnd;
    el.value = el.value.toUpperCase();
    el.setSelectionRange(start, end);
  };

  document.querySelectorAll(".uc-text").forEach(function(current) {
    current.addEventListener("keyup", forceInputUppercase);
  });


 
 

  function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}







// let data = [{
//   item: 'Fruits',
//   subitems: ['apple', 'banana', 'pineapple', 'watermelon']
// },
// {
//   item: 'Meals',
//   subitems: ['chicken', 'bacon', 'pork', 'beef']
// },
// {
//   item: 'Animals',
//   subitems: ['cat', 'rabbit', 'mouse', 'lion']
// },
// {
//   item: 'Brands Laptops',
//   subitems: ['Dell', 'HP', 'Apple', 'Sony'],
// },
// ];


// window.onload = function() {
// var itemSel = document.getElementById("first");
// var subitemSel = document.getElementById("second");

// for (var x in data) {
//   itemSel.options[itemSel.options.length] = new Option(data[x].item, x);
// }
// itemSel.onchange = function() {
//   //empty 
//   subitemSel.length = 1;
//   //display correct values
//   for (var y of data[this.value].subitems) {
//     subitemSel.options[subitemSel.options.length] = new Option(y, y);
//   }
// }
// }


function regions() {
  
var subjectObject = {
  "AWDAL REGION": {
    "BORAMA CITY": ["SH.AXMED SALAAN DISTRICT", "SH.CUSMAN DISTRICT", "SH.CALI JAWHAR DISTRICT", "SH.MAKAAHIIL DISTRICT"] //4
    },
  "MAROODIJEEX REGION": {
    "HARGAYSA CITY": ["26 JUNE DISTRICT", "31 MAY DISTRICT", "AXMED DHAGAX DISTRICT", "MACALIN HAARUUN DISTRICT", "GACAN LIBAAX DISTRICT", "IBRAHIM KOODBUUR DISTRICT", "MAXAMED HAYBE DISTRICT","MAXAMED MOOGE DISTRICT"] //8
  },
  "SAAXIL REGION": {
    "BARBARA CITY": ["BARBARA DISTRICT", "GODAWAYN DISTRICT", "GODAYAR DISTRICT", "SHEEKH DISTRICT"] //4
    },

  "SANAAG REGION": {
    "CEERIGAABO CITY": ["BADHAN DISTRICT","CEELAFWAYN DISTRICT","CEERIGAABO DISTRICT", "GAR ADAG DISTRICT", "LAASQORAY DISTRICT", "NAHAR DISTRICT"] //6
    },
  "SOOL REGION": {
    "LAASCAANOOD CITY": ["CAYNABO DISTRICT", "LAASCAANOOD DISTRICT", "TALEEX DISTRICT", "XUDUN DISTRICT"] //4
  },
  "TOGDHEER REGION": {
    "BURCO CITY": ["FAARAX OMAAR DISTRICT", "MAXAMED CALI DISTRICT", "MAXAMAD SALEEBAAN DISTRICT", "SH.BASHIIR DISTRICT"] //4
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("Regions");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
}


