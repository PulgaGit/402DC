// Future scripts can go here if needed
console.log("GNFC EQDB Hub Loaded");

// Adding some interactivity to the widgets if needed
const widgets = document.querySelectorAll('.widget');

widgets.forEach(widget => {
  widget.addEventListener('click', () => {
    alert('You clicked a widget!');
  });
});
