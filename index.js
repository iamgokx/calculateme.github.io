let calculation = ""

let screenEl = document.getElementById("screen-el")

function acClick(){
calculation=""
screenEl.textContent=""
}

function delNum(){
    // screenEl.textContent=calculation.pop()
   calculation = calculation.slice(0, -1);
    screenEl.textContent = calculation
}

function pTage(){
    calculation+= "%"
    screenEl.textContent+= "%"
}

function div(){
    calculation+= "/"
    screenEl.textContent+= "/"
}

function multiply(){
  calculation+="*"
  screenEl.textContent+= "x"
}

function sub(){
    calculation+= "-"
    screenEl.textContent+= "-"
}

function add(){
    calculation+= "+"
    screenEl.textContent+= "+"
}

function equate(){
  if(calculation.includes("/",)){
      calculation = eval(calculation)
      calculation = parseFloat(calculation).toFixed(7)
      screenEl.textContent= calculation
      
  }else{
  
  
  
    calculation = eval(calculation)
    screenEl.textContent = calculation
    }
}



function num7(){
    calculation+=7
    screenEl.textContent+=7
}

function num8(){
    calculation+=8
    screenEl.textContent+=8
}

function num9(){
    calculation+=9
    screenEl.textContent+=9
}

function num4(){
    calculation+=4
    screenEl.textContent+=4
}

function num5(){
    calculation+=5
    screenEl.textContent+=5
}

function num6(){
    calculation+=6
    screenEl.textContent+=6
}

function num1(){
    calculation+=1
    screenEl.textContent+=1
}

function num2(){
    calculation+=2
    screenEl.textContent+=2
}

function num3(){
    calculation+=3
    screenEl.textContent+=3
}

function num0(){
    calculation+=0
    screenEl.textContent+=0
}

function decimal(){
    calculation+="."
    screenEl.textContent+="."
}

function sqrt(){
    screenEl.textContent = calculation * calculation
}


