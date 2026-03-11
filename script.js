function generateNumber(){

    const min = Math.ceil(document.querySelector('.input-minn').value)
    const max = Math.floor(document.querySelector('.input-maxx').value)
    
    
    if(min >= max){
        alert("O valor mínimo tem que ser MENOR que o valor máximo")
    }
    else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
    }
    
    
    
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
}
