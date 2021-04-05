// let data = [
//   {'Whatever the mind of man can conceive and believe it can achieve. Napoleon Hill', color:red },
//   {'Strive not to be a success, but rather to be of value. Albert Einstein',
//   color:green },
//   {'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  Robert Frost',
//   color:blue },
//   {'Every strike brings me closer to the next home run. Babe Ruth',
//   color:yellow },
//   {'Definiteness of purpose is the starting point of all achievement. W. Clement Stone',
//   color:black }
// ];

let data = [
  'Whatever the mind of man can conceive and believe it can achieve. Napoleon Hill',
  'Strive not to be a success, but rather to be of value. Albert Einstein',

  'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.  Robert Frost',

  'Every strike brings me closer to the next home run. Babe Ruth',

  'Definiteness of purpose is the starting point of all achievement. W. Clement Stone',

];

// data.forEach((item, i) => {
//   item.id = i + 1;
// });

// let i = 0;
// data.map(n => {
//   n['id'] = i;
//   i++;
// });

function refresh() {
  // let Random Number = 0;
  // data.map(n => {
  //   n['id'] = i;
  //   i++;
  // })
  let RandomNumber = Math.floor(Math.random() * (data.length));
  document.getElementById('Display').innerHTML = data[RandomNumber]

}

var randomlinks=new Array()

randomlinks[0]="http://freewarejava.com"
randomlinks[1]="http://javascriptkit.com"
randomlinks[2]="http://dynamicdrive.com"
randomlinks[3]="http://cnn.com"
randomlinks[4]="http://www.geocities.com"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}
