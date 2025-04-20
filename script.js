// script.js

console.log("GNFC EQDB Hub Loaded");

// Optional click event feedback on widgets
document.querySelectorAll('.widget').forEach(widget => {
  widget.addEventListener('click', () => {
    alert(`You clicked: ${widget.querySelector('h3').innerText}`);
  });
});
