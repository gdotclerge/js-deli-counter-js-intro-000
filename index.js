function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}




function nowServing (katzDeliLine){
  if
    (katzDeliLine.length > 0 ){

    var serving = katzDeliLine.slice(0,1);

    katzDeliLine.shift();

    return `Currently serving ${serving}.`;

  } else {return "There is nobody waiting to be served!"}

}




function currentLine(katzDeliLine){

  if (katzDeliLine.length > 0) {
   for (let i = 0; i < katzDeliLine.length; i++) {
        var linenow = [];
        linenow.push(`${i + 1}. ${katzDeliLine[i]}`);
    }

  return `The line is currently: ${linenow}`;

  } else {return "The line is currently empty.";
    }
}
