// JavaScript for simple button click logging
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        console.log("Button clicked: " + this.innerHTML);
    });
});
