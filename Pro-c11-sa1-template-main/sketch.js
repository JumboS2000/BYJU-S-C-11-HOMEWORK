var marks = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);
  avarage()

  



}


function avarage() {
  var sum = 0
  for(var m=0; m<marks.length; m++){
    //console.log(marks[m])
    sum = sum + marks[m]
  }

  var avarage_num = sum / marks.length
  console.log(avarage_num)

  
}

function draw() 
{
  background(30);
}

 

