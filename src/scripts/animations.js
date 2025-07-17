//* slide in function 
export function slideIn(targetDiv, from, to, step){
    let position = from;
    const div = document.querySelector(targetDiv);

    function animateIn(){
        position += step;

        if(position >= to){
            div.style.right = `${to}%`;
            div.style.width = '70%';
            div.style.height = '100vw';
            return;
        }

        div.style.right = `${position}%`

        requestAnimationFrame(animateIn);
    };
    
    requestAnimationFrame(animateIn);
}

export function slideOut(targetDiv, from, to, step){
    let position = from;
    const div = document.querySelector(targetDiv);

    function animateOut(){
        position += step
        if(position <= to){
            div.style.right = `-${to}%`;
            div.style.width = '0';
            div.style.height = '0';
            return ;
        }; 

        div.style.right = `${position}%`;

        requestAnimationFrame(animateOut)
    }

    requestAnimationFrame(animateOut)
}