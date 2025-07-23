//* functions to open and close the mobile menu

//* |__variables needed
const bgPage = document.getElementById('pageBg');
const mobileMenu = document.getElementById('menuMobile');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menuItems = document.getElementsByName('menuItem');
const socialItem = document.getElementsByName('socialItem');
const  desktopSocials = document.getElementsByName('socialItemDesktop');


//* |___ functions for menu mobile and desktop 

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

//* |___ functions for form validation 
const regex = {
    name: /^[a-zA-Zà-ÿ\s'-]{3,13}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
    subject: 'Escolher assunto'
}

const nameUser = document.getElementById('nameUser');
const emailUser = document.getElementById('emailUser');
const subjectUser = document.getElementById('subjectUser');
const subjectContainer = document.getElementById('subjectContainer');
const optionsSubject = document.getElementsByName('optionSubject')
const buttonSubmit = document.getElementById('formButton')

export function inputsValidation(){
    nameUser.addEventListener('blur', (event) =>{
        let nameValue = event.target.value.trim();

        if(!regex.name.test(nameValue)){
            nameUser.className ='border-2 border-red-500 rounded-lg py-1 px-2 outline-none text-sm focus:border-[--blue]';
        } else{
            nameUser.className ='border-2 border-green-500 rounded-lg py-1 px-2 outline-none text-sm focus:border-[--blue]';
        }
    });

    emailUser.addEventListener('blur', (event) =>{
        let emailValue = event.target.value.trim();

        if(!regex.email.test(emailValue)){
            emailUser.className ='border-2 border-red-500 rounded-lg py-1 px-2 outline-none text-sm focus:border-[--blue]';
        } else{
            emailUser.className ='border-2 border-green-500 rounded-lg py-1 px-2 outline-none text-sm focus:border-[--blue]';
        }
    });

    buttonSubmit.addEventListener('click', (event) =>{
        let subjectValue = subjectUser.textContent;

        if(subjectValue == regex.subject){
            subjectContainer.className = 'border-2 border-red-600 rounded-lg py-1 px-2 flex justify-between text-sm cursor-pointer'
            event.preventDefault()
        } else{
            subjectContainer.className = 'border-2 border-green-600 rounded-lg py-1 px-2 flex justify-between text-sm cursor-pointer'
        }
    });

    for(let index = 0; index < optionsSubject.length; index++){
        optionsSubject[index].addEventListener('click', (event) =>{
            subjectContainer.className = 'border-2 border-green-600 rounded-lg py-1 px-2 flex justify-between text-sm cursor-pointer'
        })
    }
    
}


