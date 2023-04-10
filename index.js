const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e){
    if(e.keyCode === 13) {
        play();
    }

})

button.addEventListener("click",play);
function play(){
    const userNumber =document.querySelector("#guess").value;

    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number from 1 to 20',
            
          })
    }


 else if (isNaN(userNumber)) {
    
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number ',
            
          })
    }


    else{
        if(userNumber < answer) {
           
             
          Swal.fire('The computer has won ☹️ Try to enter a larger number');

        }
        else if (userNumber > answer) {
            Swal.fire('The computer has won 😒 Try to enter a smaller number');
        }

        else {
            Swal.fire({
                title: ' Congratulations!🥳 You have won!',
               
                imageUrl: 'fireworks.jpg',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Custom image',
              })
            }
        
    }
    console.log(answer);
    
}

