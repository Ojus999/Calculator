//Wait For DOM Content To be loaded

let textEle;
let buttonList;
let expression;

document.addEventListener('DOMContentLoaded',function (){
    console.log('DOM Content Loaded!');
    init();
})

const init = function () {
    //Assing Text Element
    textEle = document.querySelector('#display');

    //Add Event Listeners to button
    buttonList = document.querySelectorAll('.buttons');
    for(const button of buttonList){
        
        button.addEventListener('click',function(){
            textEle.textContent += button.textContent;
        })

        //Clear Expression Button
        if(button.textContent === 'CE'){
            button.addEventListener('click',function() {
                textEle.textContent = "";
            })
        }

        //Clear Button
        if(button.textContent === 'C'){
            button.addEventListener('click',function() {
                textEle.textContent = textEle.textContent.slice(0,-2);
            })
        }

        //Equal to Button
        if(button.textContent === '='){
            button.addEventListener('click',function (){
                expression = textEle.textContent.slice(0,-1);
                expression = expression.replace(/÷/g, '/');
                expression = expression.replace(/×/g, '*');
                textEle.textContent = "";  
                try{
                    const result = eval(expression); 
                    textEle.textContent = result;
                } catch{
                    textEle.textContent = 'Error';
                }              
                               

            })
        }
    }
    
}


