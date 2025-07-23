//* functions to open and close the mobile menu

//* |__variables needed
const bgPage = document.getElementById('pageBg');
const mobileMenu = document.getElementById('menuMobile');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuItems = document.getElementsByName('menuItem');
const socialItem = document.getElementsByName('socialItem');
const  desktopSocials = document.getElementsByName('socialItemDesktop');

//* |__ animations functions 


//* |___ functions 

function handlerSize(idTarget, menuStatus, type){
// this function will toggle the size of the elements 
    const targetId = document.getElementById(idTarget);

    switch(menuStatus){
        case 'open':
            if(type == 'bg'){
                targetId.style.height = '100vh';
                targetId.style.width = '100vw'
            } else{
                targetId.style.height = '90vh';
                targetId.style.width = '80vw'
            };

            break;
        
        case 'close':
            targetId.style.height = '0';
            targetId.style.width = '0';
    }
}


export function handlerMenu(){
    openMenu.addEventListener('click', (event) =>{
        event.stopPropagation();

        handlerSize(mobileMenu.getAttribute("id"), 'open', 'menu');
        handlerSize(pageBg.getAttribute('id'), 'open', 'bg');
    });

    closeMenu.addEventListener('click', (event) =>{
        event.stopPropagation();

        handlerSize(mobileMenu.getAttribute("id"), 'close', 'menu');
        handlerSize(pageBg.getAttribute('id'), 'close', 'bg');
    });

    bgPage.addEventListener('click', () =>{
        handlerSize(mobileMenu.getAttribute("id"), 'close', 'menu');
        handlerSize(pageBg.getAttribute('id'), 'close', 'bg');
    })
}


export function handleMenuItems(){
    for (let index = 0; index < menuItems.length; index++ ){
        menuItems[index].addEventListener('click', (event) =>{
            event.stopPropagation()
            handlerSize(mobileMenu.getAttribute('id'), 'close', 'menu')
            handlerSize(bgPage.getAttribute('id'), 'close', 'bg')
        })
    }
}

export function handleSocialItems(){
    for(let index = 0; index < socialItem.length; index++){
       

        socialItem[index].addEventListener('click', () =>{
            let socialType = socialItem[index].getAttribute('value');

            switch(socialType){
                case 'facebook':
                    window.open('https://www.facebook.com', '_blank');
                    handlerSize(mobileMenu.getAttribute('id'), 'close', 'menu');
                    handlerSize(bgPage.getAttribute('id'), 'close', 'bg');
                    break;

                case 'instagram':
                    window.open('https://www.instagram.com', '_blank');
                    handlerSize(mobileMenu.getAttribute('id'), 'close', 'menu');
                    handlerSize(bgPage.getAttribute('id'), 'close', 'bg');
                    break;
        };

        });

        
    };
};

export function handleDesktopSocials(){
    for(let index = 0; index < desktopSocials.length; index++){
        let socialtype = desktopSocials[index].getAttribute('value');

        desktopSocials[index].addEventListener('click', (event) =>{
            event.stopPropagation();
            
            switch(socialtype){
            case 'facebook':
                window.open('https://www.facebook.com', '_blank');
                break;
            
            case 'instagram':
                window.open('https://www.instagram.com', '_blank');
                break;
        }
        })
    }
}
/*



//* function to make buttons open others sites 
// declared in line 3

export function handleSocials(){
    const buttons = document.querySelectorAll('.socialButton');
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', (event) =>{
            let socialType = event.currentTarget.value;

            switch (socialType) {
                case 'facebook':
                    window.open('https://www.facebook.com', '_blank');
                    break;
                case 'instagram':
                    window.open('https://www.instagram.com', '_blank')
            
                default:
                    break;
            }
        });
    };

};
*/
// TODO: next -> functions to go to targets sections on buttons 