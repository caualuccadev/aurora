import { handlerMenu, handleMenuItems, handleSocialItems, handleDesktopSocials } from "./utils.js";


window.addEventListener('load', ()=>{
    // functions to change the mobile menu visibility
    handlerMenu(); handleMenuItems();

    // functions to open social media 
     handleSocialItems(); handleDesktopSocials();

})
