let functionality = document.querySelectorAll(".show-modal");

for (let i = 0; i <= 2; i++) {
  functionality[i].addEventListener("click", () => {
    document.querySelector(".hidden").style.display = "block";
    document.querySelector(".overlay").style.display = "block";

    document.querySelector(".close-modal").addEventListener("click", () => {
      document.querySelector(".hidden").style.display = "none";
      document.querySelector(".overlay").style.display = "none";

      // document.querySelector(".close-modal").addEventListener('keydown',()=>{
      //     document.querySelector(".hidden").style.display="none";
      //     document.querySelector(".overlay").style.display="none";
      //     alert("key pressed");

      // })
    });
  });

}
// on click on over lay the window will be closed
document.querySelector(".overlay").addEventListener("click",()=>{

    document.querySelector(".hidden").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
})

// using keyboard buttons window will be closed
document.addEventListener('keydown',(e)=>{
    if( e.key=='Escape'){
        document.querySelector(".hidden").style.display="none";
document.querySelector(".overlay").style.display="none";
    }
    
})

// document.querySelectorAll(".show-modal").addEventListener('click',()=>{

//     document.querySelectorAll(".hidden").style.display="block";
//     document.querySelectorAll(".overlay").style.display="block";

//     document.querySelectorAll(".close-modal").addEventListener("click",()=>{

//         document.querySelectorAll(".hidden").style.display="none";
//         document.querySelectorAll(".overlay").style.display="none";
//     });
// });

// document.querySelectorAll(".show-modal").addEventListener('click',()=>{

//     document.querySelectorAll(".hidden").style.display="block";
//     document.querySelectorAll(".overlay").style.display="block";

//     document.querySelectorAll(".close-modal").addEventListener("click",()=>{

//         document.querySelectorAll(".hidden").style.display="none";
//         document.querySelectorAll(".overlay").style.display="none";
//     });
// });
