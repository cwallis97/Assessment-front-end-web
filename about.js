console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert('Form submitted successfully!');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let picture = document.querySelector('img');


picture.addEventListener('mouseover', function() {
    alert('Your looking great today!');
});