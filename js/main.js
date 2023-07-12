const body = document.body; // переменная body

// Запрет перетаскивания ссылок и картинок
document.querySelectorAll("img, a").forEach(element => {
	element.addEventListener("dragstart", event => {
		event.preventDefault();
	});
});

/* ------------------- MOBILE MENU -------------------- */
const btnBurger = document.querySelector('.btn-burger');
const menu = document.querySelector('.nav');
const menuOverlay = document.querySelector('.nav-overlay');

if (menu && btnBurger) {
	btnBurger.addEventListener('click', e => {
		btnBurger.classList.toggle('active')
		menu.classList.toggle('active')
		menuOverlay.classList.toggle('active')
		document.body.style.overflow = 'hidden';
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu')) {
			menu.classList.remove('active')
				menuOverlay.classList.remove('active')
			btnBurger.classList.remove('active')
			document.body.style.overflow = '';
		}
	})
}

window.addEventListener('click', e => {
	const target = e.target
	if (!target.closest('.nava') && !target.closest('.btn-burger')) {
		menu.classList.remove('active')
		menuOverlay.classList.remove('active')
		btnBurger.classList.remove('active')
		document.body.style.overflow = '';
	}
});


// /* ------------------- btnScrollTop -------------------- */
const btnScrollTop = document.getElementById('btnScrollTop');

window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		btnScrollTop.classList.add('show')
	} else {
		btnScrollTop.classList.remove('show')
	}
}

btnScrollTop.addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});