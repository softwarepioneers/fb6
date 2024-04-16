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
  var topicSel = document.getElementById("City");
  var chapterSel = document.getElementById("District");
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


function maroodijeex() {
var subjectObject = {
  "MAROODIJEEX REGION": {
    "HARGAYSA CITY": ["26 JUNE DISTRICT",
                      "31 MAY DISTRICT",
                      "AXMED DHAGAX DISTRICT", 
                      "MACALIN HAARUUN DISTRICT", 
                      "GACAN LIBAAX DISTRICT", 
                      "IBRAHIM KOODBUUR DISTRICT",
                      "MAXAMED HAYBE DISTRICT",
                      "MAXAMED MOOGE DISTRICT"] //8
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("maroodijeex");
  var topicSel = document.getElementById("City");
  var chapterSel = document.getElementById("Districts");
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

function awdal() {
    var subjectObject = {
  "AWDAL REGION": {
    "BORAMA CITY": ["SH.AXMED SALAAN DISTRICT", "SH.CUSMAN DISTRICT", "SH.CALI JAWHAR DISTRICT", "SH.MAKAAHIIL DISTRICT"] //4
    }
}
window.onload = function() {
  var subjectSel = document.getElementById("awdal");
  var topicSel = document.getElementById("City");
  var chapterSel = document.getElementById("District");
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


function sool() {
    var subjectObject = {

  "SOOL REGION": {
    "LAASCAANOOD CITY": ["CAYNABO DISTRICT", "LAASCAANOOD DISTRICT", "TALEEX DISTRICT", "XUDUN DISTRICT"] //4
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("sool");
  var topicSel = document.getElementById("City");
  var chapterSel = document.getElementById("District");
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




function sanaag() {
    var subjectObject = {
  "SANAAG REGION": {
    "CEERIGAABO CITY": ["BADHAN DISTRICT","CEELAFWAYN DISTRICT","CEERIGAABO DISTRICT", "GAR ADAG DISTRICT", "LAASQORAY DISTRICT", "NAHAR DISTRICT"] //6
    }
}
window.onload = function() {
  var subjectSel = document.getElementById("sanaag");
  var topicSel = document.getElementById("City");
  var chapterSel = document.getElementById("District");
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




function saaxil() {
    var subjectObject = {
  "SAAXIL REGION": {
    "BARBARA CITY": ["BARBARA DISTRICT", "GODAWAYN DISTRICT", "GODAYAR DISTRICT", "SHEEKH DISTRICT"] //4
    }
}
window.onload = function() {
  var subjectSel = document.getElementById("saaxil");
  var topicSel = document.getElementById("City");
  var chapterSel = document.getElementById("District");
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




function togdheer() {
    var subjectObject = {

  "TOGDHEER REGION": {
    "BURCO CITY": ["FAARAX OMAAR DISTRICT", "MAXAMED CALI DISTRICT", "MAXAMAD SALEEBAAN DISTRICT", "SH.BASHIIR DISTRICT"] //4
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("togdheer");
  var topicSel = document.getElementById("City");
  var chapterSel = document.getElementById("District");
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








