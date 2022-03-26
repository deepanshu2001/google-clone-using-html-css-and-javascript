console.log("Hello");
img1=document.getElementById('img1')
menubar=document.getElementById('menubar');

img1.addEventListener('click',()=>{
    console.log("clicked");
    if(menubar.style.top=="58px"){
        menubar.style.top="-384px";
    }
    else{
        menubar.style.top="58px";
    }
})


img2=document.getElementById('img2');
screenshot=document.getElementById('screenshot');

img2.addEventListener('click',()=>{
    console.log("clicking");
    if(screenshot.style.top=="61px"){
        screenshot.style.top="-323px";
    }
    else{
        screenshot.style.top="61px";
    }
})
