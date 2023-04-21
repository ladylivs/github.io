console.log("helloooooooo");

const swapTwoImages = () => {
    if (document.getElementById('firstPhoto').display = 'initial') {
        document.getElementById('firstPhoto').display = 'none';
        document.getElementById('secondPhoto').display = 'initial';
    }
    
}


function changeToSecondImage(){
    document.getElementById("firstPhoto").addEventListener('click', () => {
        document.getElementById("firstPhoto").display = "none";
        document.getElementById("secondPhoto").display = "initial";
    });
    
    
}


// function changeToFirstImage () {

// }





/// onclick, change firstImage from hidden to visible, and secondImage from visible to hidden 