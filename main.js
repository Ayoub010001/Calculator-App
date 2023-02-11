//Calculator functionalities
const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('#screen_calc');

let calculation = [];
let CumulatedResult;
function calcul(button){
    let value = button.textContent;
    if(value === 'RESET'){

        calculation = [];
        screen.textContent = '';

    }else if(value === '='){
        let compute = eval(CumulatedResult)
        screen.textContent = compute;
        calculation = [compute];

    }else if(value === 'DEL'){

        calculation.pop();  
        CumulatedResult = calculation.join('');
        screen.textContent = CumulatedResult;
    }
    else{
        if(value==='x'){value = '*'};
        calculation.push(value);
        CumulatedResult = calculation.join('');
        screen.textContent = CumulatedResult;
    }
}

buttons.forEach(button =>{
    button.addEventListener('click',()=>{calcul(button)})
})

//Switching themes

const theme_toggle = document.querySelector('input[type="range"]');
const applied = document.querySelector('body');

function apply_theme(){
    if(theme_toggle.value ==='0'){
        applied.classList = "basic";
    }else if(theme_toggle.value ==='1'){
        applied.classList = "light";
    }else if(theme_toggle.value ==='2'){
        applied.classList = "dark";
    }
}
theme_toggle.addEventListener('change',apply_theme);