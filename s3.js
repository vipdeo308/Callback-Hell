window.onload = function()
{
    let time = document.getElementById("display");
    let timer = 10;

    setTimeout(() => {
        time.innerHTML = timer--;
        setTimeout(() =>{
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                time.style.fontSize = "36px";
                                                time.style.maxWidth = "310px";
                                                time.innerHTML = "Happy Independence Day!"
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)     
            },1000)
        },1000)
    }, 1000);
}
