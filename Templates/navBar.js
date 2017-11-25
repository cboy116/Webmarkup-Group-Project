var barState = false;


function ToggleBar(State = null){
    
    if(State == null || typeof State !== "boolean"){
       
        //No state was passed so toggle state
        if(barState == true){
            barState = false;
            UpdateNavBar();
        }else{
            barState = true;
            UpdateNavBar();
        }
        
        
    }else{
        //if a state was passed and was bool
        barState = State;
        UpdateNavBar();
        
    }
}

function UpdateNavBar(){
    if(barState == true){
        //Set Locked Position Styles
        document.getElementById("navBar").classList.add("navStickied");
        
   }else{
       //Default pos styles
       document.getElementById("navBar").classList.remove("navStickied")
   }
    
}

//Triggers when the window scroll
window.onscroll = function(){
    
    //how far in pixels we have scrolled
    var scrollAmount = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    
    //The height in pixels of the logo img
    var height = document.getElementById("logo").height;

    //Update the state of the navbar based on the scroll position
    if(scrollAmount >= height && barState != true){
        ToggleBar(true);
    }else if(scrollAmount < height && barState != false){
        ToggleBar(false);
    }
    
}