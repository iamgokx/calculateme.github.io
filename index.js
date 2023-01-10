let calculation = ""
let newcal;
let numToString;
let counter = 1;

let screenEl = document.getElementById("screen-el")

function acClick() {
    calculation = ""
    screenEl.textContent = ""
}


function equate() {
    if (calculation.includes("/",)) {
        calculation = eval(calculation)
        newcal = eval(calculation)
        calculation = parseFloat(calculation).toFixed(7)
        screenEl.textContent = calculation
        counter = 2
    } else {


        calculation = eval(calculation)
        newcal = eval(calculation)
        
          
        screenEl.textContent = calculation
        counter = 2
    }
}

function delNum() {
    // screenEl.textContent=calculation.pop()
    calculation = calculation.slice(0, -1);
    screenEl.textContent = calculation
}

function pTage() {
    if(calculation == ""){
        return
    }
   else{ switch (counter) {
        case 1:
            
                let newArr = calculation.split('')

                if (newArr[newArr.length - 1] == "%") {
                    return
                } else {
                    if (newArr[newArr.length - 1] == "/") {
                        return
                    } else if (newArr[newArr.length - 1] == "*") {
                        return
                    } else if (newArr[newArr.length - 1] == "-") {
                        return
                    } else if (newArr[newArr.length - 1] == "+") {
                        return
                    } else {
                        calculation += "%"
                        screenEl.textContent += "%"
                    }
                    console.log('it is 1')
                    break;
                }
                
            
        case 2: {
            numToString = newcal.toString()
            console.log(numToString)
            let newArr = numToString.split('')
           if (isNaN(newcal)==true) 
                {
                    console.log('no it is not')
            }else {
                calculation += "%"
                        screenEl.textContent += "%"
                        console.log('works')
                }

           
             console.log('it is 2')
             counter = 1
            break;
        }
    }}
}





function div() {
    if(calculation == ""){
        return
    }
   else{
    switch (counter) {
        case 1:
            {
                let newArr = calculation.split('')

                if (newArr[newArr.length - 1] == "/") {
                    return
                } else {
                    if (newArr[newArr.length - 1] == "*") {
                        return
                    } else if (newArr[newArr.length - 1] == "+") {
                        return
                    } else if (newArr[newArr.length - 1] == "-") {
                        return
                    } else if (newArr[newArr.length - 1] == "%") {
                        return
                    } else {
                        calculation += "/"
                        screenEl.textContent += "/"
                    }
                    console.log('it is 1')
                    break;
                }
                
            }
        case 2: {
          
            numToString = newcal.toString()
            console.log(numToString)
            let newArr = numToString.split('')
           if (isNaN(newcal)==true) 
                {
                   return
            }else {
                calculation += "/"
                        screenEl.textContent += "/"
                }

           
             console.log('it is 2')
             counter = 1
            break;
        }
    }

   }

}






function multiply() {
    if(calculation == ""){
        return 
    }
   else{
    switch (counter) {
        case 1:
            {
                let newArr = calculation.split('')

                if (newArr[newArr.length - 1] == "*") {
                    return
                } else {
                    if (newArr[newArr.length - 1] == "/") {
                        return
                    } else if (newArr[newArr.length - 1] == "+") {
                        return
                    } else if (newArr[newArr.length - 1] == "-") {
                        return
                    } else if (newArr[newArr.length - 1] == "%") {
                        return
                    } else {
                        calculation += "*"
                        screenEl.textContent += "*"
                    }
                    console.log('it is 1')
                    break;
                }
                
            }
        case 2: {
           
             numToString = newcal.toString()
            console.log(numToString)
            let newArr = numToString.split('')
           if (isNaN(newcal)==true) 
                {
                    console.log('no it is not')
            }else {
                calculation += "*"
                        screenEl.textContent += "*"
                }

           
             console.log('it is 2')
             counter = 1
            break;
        }
    }
   }
}

function sub() {
    if(calculation == ""){
        return
    }
   else{
    switch (counter) {
        case 1:
            {
                let newArr = calculation.split('')

                if (newArr[newArr.length - 1] == "-") {
                    return
                } else {
                    if (newArr[newArr.length - 1] == "*") {
                        return
                    } else if (newArr[newArr.length - 1] == "+") {
                        return
                    } else if (newArr[newArr.length - 1] == "/") {
                        return
                    } else if (newArr[newArr.length - 1] == "%") {
                        return
                    } else {
                        calculation += "-"
                        screenEl.textContent += "-"
                    }
                    console.log('it is 1')
                    break;
                }
                
            }
        case 2: {
           
            numToString = newcal.toString()
            console.log(numToString)
            let newArr = numToString.split('')
           if (isNaN(newcal)==true) 
                {
                    console.log('no it is not')
            }else {
                calculation += "-"
                        screenEl.textContent += "-"
                }

           
             console.log('it is 2')
             counter = 1
            break;
        }
    }
   }
}

function add() { if(calculation == ""){
    return
}
else{
    switch (counter) {
        case 1:
            {
                let newArr = calculation.split('')

                if (newArr[newArr.length - 1] == "+") {
                    return
                } else {
                    if (newArr[newArr.length - 1] == "*") {
                        return
                    } else if (newArr[newArr.length - 1] == "-") {
                        return
                    } else if (newArr[newArr.length - 1] == "/") {
                        return
                    } else if (newArr[newArr.length - 1] == "%") {
                        return
                    } else {
                        calculation += "+"
                        screenEl.textContent += "+"
                    }
                    console.log('it is 1')
                    break;
                }
                
            }
        case 2: {
           
            numToString = newcal.toString()
            console.log(numToString)
            let newArr = numToString.split('')
           if (isNaN(newcal)==true) 
                {
                    console.log('no it is not')
            }else {
                calculation += "+"
                        screenEl.textContent += "+"
                }

           
             console.log('it is 2')
             counter = 1
            break;
        }
    }
}
}



function num7() {
    calculation += 7
    screenEl.textContent += 7
}

function num8() {
    calculation += 8
    screenEl.textContent += 8
}

function num9() {
    calculation += 9
    screenEl.textContent += 9
}

function num4() {
    calculation += 4
    screenEl.textContent += 4
}

function num5() {
    calculation += 5
    screenEl.textContent += 5
}

function num6() {
    calculation += 6
    screenEl.textContent += 6
}

function num1() {
    calculation += 1
    screenEl.textContent += 1
}

function num2() {
    calculation += 2
    screenEl.textContent += 2
}

function num3() {
    calculation += 3
    screenEl.textContent += 3
}

function num0() {
    calculation += 0
    screenEl.textContent += 0
}

function decimal() {
    let newArr = calculation.split('')
    if (newArr[newArr.length - 1] == ".") {
        return
    } else {
        calculation += "."
        screenEl.textContent += "."
    }
}

function sqrt() {
    screenEl.textContent = calculation * calculation
}


