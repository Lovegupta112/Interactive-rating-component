let thankyoudiv=document.querySelector('.thankyou-div');
let ratingdiv=document.querySelector('.forRating');
let ratingNo=document.querySelectorAll('.rating span');
let ratingValPlace=document.getElementById('ratingValue');
let ratingValue;
ratingNo.forEach((curElm)=>{
// console.log(curElm);
curElm.addEventListener('click',(event)=>{
    // console.log(event.target.innerText)
    console.log('rated');
    ratingValue=event.target.innerText;
})
})  

let submitBtn=document.querySelector('.submit');
submitBtn.addEventListener('click',submit);


function submit(){
    console.log('submitted');
    // console.log(ratingdiv)
    // console.log(thankyoudiv);
    if(ratingValue){
        ratingdiv.style.display='none';
        thankyoudiv.style.display='block';
        
        // console.log(ratingNo);
        console.log('rated :', ratingValue);
        // console.log(ratingValPlace);
      
        ratingValPlace.innerText=ratingValue;
    }
    else{
        alert('Please rate Us !')
    }
  
}