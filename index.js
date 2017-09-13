function takeANumber(katzDeliLine, name)[

]


function nowServing (katzDeliLine){
  if
    (katzDeliLine.length > 0 ){

      var serving = katzDeliLine.slice(0,1);
      katzDeliLine.shift;
      return `Currently serving ${serving}`;

  } else {return "There is no one wating to be served"}
  
}
