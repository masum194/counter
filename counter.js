let d_btn = document.querySelector("#d-btn");
let i_btn = document.querySelector("#i-btn");
let h1 = document.querySelector("h1")
let count = 0;

// Increment 
i_btn.addEventListener("click", function(){
    if (count < 9){
        count++;
        h1.innerHTML = count;
    }
});

// Decrement 
d_btn.addEventListener("click", function(){
    if(count > 0){
        count--;
    h1.innerHTML = count;
    }
});
