const spacing = document.querySelector(".spacing");
const bluring = document.querySelector(".bluring");
const box = document.querySelector( ".box" );
const colorPallete=document.querySelector('.colorPallete');


spacing.addEventListener("input", e => {
  const myValue = Number(e.target.value);
  box.style.borderWidth = `${myValue }px `;
  console.log(myValue, box.style.transform);
});
bluring.addEventListener("input", e => {
  const myValue = Number(e.target.value);
  box.style.filter = `blur(${myValue / 10}px)`;
  console.log(myValue, box.style.filter);
} );

colorPallete.addEventListener('change',(e)=>{
// e.target.value
box.style.borderColor = `  ${e.target.value}`;
})


