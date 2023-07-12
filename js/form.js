document.querySelector("form").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent form submission

	const form = this;
	const url = "./mail.php";
	const formData = new FormData(form);

	fetch(url, {
			method: "POST",
			body: formData
		})
		.then(function (response) {
			if (response.ok) {
				document.querySelector('.modal-thanks').classList.add('active');
				document.body.classList.add('dis-scroll');
				form.reset();
				setTimeout(function () {
					form.dispatchEvent(new Event('reset'));
					document.querySelector('.modal-thanks').classList.remove('active');
				}, 1000);
			}
		})
		.catch(function (error) {
			console.error("Error:", error);
		});
});


const ThanksModal = document.querySelector('.modal-thanks');
const closeThanks = document.querySelector('.modal-thanks__close');

closeThanks.addEventListener('click', () => {
	ThanksModal.classList.remove('active');
});