//get the display element
display_element = document.querySelector('#display');
operator=""
num1=0
num2=0
stage=1
answer=0
is_clear= false



function insert_value(num)
{
    counter=display_element.value.length
    if(counter >9 ) return
    if (is_clear ==true)
        {
            display_element.value = ""
            is_clear= false
        }
    display_element.value += num
}

//1. find element display
//2. assign value to display element

function calculate()
{
    num2=display_element.value
    console.log(num1)
    console.log(num2)
    console.log(operator)
    console.log( num1.concat(operator).concat(num2))

   

    switch(operator)
    {
        case "+": answer = parseInt(num1) + parseInt(num2)
            break
        case "-": answer = num1 - num2
            break
        case "*": answer = num1 * num2
            break
        case "/": answer = num1 / num2
            break
        default: console.log('INVALID')
   
    }
    display_element.value = answer
}

function clear_display()
{
    display_element.value = '';
}
function deleteOnecharacter()
{
        display_element.value = display_element.value.slice(0, -1);
}
function calculatePercentage()
{
    let inputValue = parseFloat(display_element.value);
    if (!isNaN(inputValue)) {
        display_element.value = (inputValue / 100).toString();
    }
}
function operate(val)
{
    operator=val
    if(stage==1)
    {
        num1 = display_element.value
        is_clear= true

    }
}
