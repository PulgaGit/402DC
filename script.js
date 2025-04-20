// script.js

console.log("GNFC EQDB Hub Loaded");

// Optional: widget click feedback
document.querySelectorAll('.widget').forEach(widget => {
  widget.addEventListener('click', () => {
    alert(`You clicked: ${widget.querySelector('h3').innerText}`);
  });
});
