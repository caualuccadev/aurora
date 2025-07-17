//* functions to open and close the mobile menu

//* variables needed
const pageBg = document.querySelector('.bg_openMenu');
const menuMobile = document.querySelector('.mobileMenu');
const mobileButton = document.querySelector('.mobileMenu_btn');
const mobileButtons = document.querySelectorAll('.mobileItem');
const socialsButtons = document.querySelectorAll('.socialIcons_container');

//* animations functions 
import { slideIn, slideOut } from "./animations.js";

export function handleOpenMenu(){
    mobileButton.addEventListener('click', () =>{
        // show the bg and the menu 
        pageBg.style.display = 'flex';
        
        slideIn('.mobileMenu', -100, 0, 5);

        console.log('botao do menu clicado')
    });
};

export function handleCloseMenu(){
    mobileButtons.forEach(button => {
        button.addEventListener('click', () =>{
            pageBg.style.display = 'none';
            slideOut('.mobileMenu', 0, 100, 1);

            console.log('Item do menu clicado')
        })
        
    });

    pageBg.addEventListener('click', () =>{
        pageBg.style.display = 'none';
        slideOut('.mobileMenu', 0, 100, 1);
    })

    socialsButtons.forEach(button =>{
        button.addEventListener('click', (event) =>{
            pageBg.style.display = 'none';
            slideOut('.mobileMenu', 0, 100, 1);
        });
    });
}


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

// TODO: next -> functions to go to targets sections on buttons 