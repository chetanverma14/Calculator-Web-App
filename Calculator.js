let input= document.querySelector('input')
let buttons= document.querySelectorAll('button')

for(let btn of buttons){
    btn.addEventListener('click',function(e){
        let text=e.target.innerText
        if(text==='C'){
            input.value=''
        }
        else if(text==='='){
            try{
            input.value=eval(input.value)
        }
        catch(e){
            input.value='INVALID'
        }
    }
        else{
            input.value=input.value+text
        }
    })
}