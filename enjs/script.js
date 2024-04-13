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
    "BORAMA": ["SH.AXMED SALAAN", "SH.CUSMAN", "SH.CALI JAWHAR", "SH.MAKAAHIIL"] //4
    },
  "MAROODIJEEX REGION": {
    "HARGAYSA": ["26 JUNE", "31 MAY", "AXMED DHAGAX", "MACALIN HAARUUN", "GACAN LIBAAX", "IBRAHIM KOODBUUR", "MAXAMED HAYBE","MAXAMED MOOGE"] //8
  },
  "SAAXIL REGION": {
    "BARBARA": ["BARBARA", "GODAWAYN", "GODAYAR", "SHEEKH"] //4
    },

  "SANAAG REGION": {
    "CEERIGAABO": ["BADHAN","CEELAFWAYN","CEERIGAABO", "GAR ADAG", "LAASQORAY", "NAHAR"] //6
    },
  "SOOL REGION": {
    "LAASCAANOOD": ["CAYNABO", "LAASCAANOOD", "TALEEX", "XUDUN"] //4
  },
  "TOGDHEER REGION": {
    "BURCO": ["FAARAX OMAAR", "MAXAMED CALI", "MAXAMAD SALEEBAAN", "SH.BASHIIR"] //4
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("Region");
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


