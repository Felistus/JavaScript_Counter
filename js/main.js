let increaseCount = document.getElementById("add_count")
let decreaseCount = document.getElementById("lower_count");
let count = document.getElementById("count_digit");
let currentValue = count.textContent;

increaseCount.addEventListener("click", ()=> {
    if ( currentValue !== 50 ){
        currentValue++;
        count.textContent = currentValue;
    } else{
        count.textContent = currentValue
        
    }
});

decreaseCount.addEventListener("click", ()=> {
    if ( currentValue !== 0 ){
        currentValue--;
        count.textContent = currentValue;
    } else{
        count.textContent = currentValue
        
    }
})