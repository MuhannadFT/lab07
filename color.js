document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#colorForm').onsubmit = function(event) {
        event.preventDefault();
        const color = document.querySelector('#colorInput').value;
        document.querySelector('#header').style.color = color;
    };

});
