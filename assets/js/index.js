window.onload = () => {
	initBlocks();

	let navbarToggle = document.querySelector('.navbar-toggler');
	let toggled = false;
	let entireNav = document.querySelector('.navbar');

	/* Nav bar functions */
	navbarToggle.addEventListener('click', navTogglePressed);

	function navTogglePressed(e) {
		let toggleEle = e.target || e.srcElement;
		if (!toggleEle) {
			alert('Navigation menu has malfunctioned');
			return;
		}

		entireNav.classList.toggle('toggled-nav');

		if (toggled) {
			toggled = !toggled;
		} else {
			toggled = !toggled;
		}
	}

	let allFancyDisplays = document.querySelectorAll('.wp-block-create-block-fancy-display img');

	window.addEventListener('scroll', windowScrolling);
	function windowScrolling() {
		if (window.scrollY >= 50) {
			entireNav.classList.add('scrolled-nav');
			entireNav.classList.add('navbar-light');
			removeClass(entireNav, 'navbar-dark');
		} else {
			removeClass(entireNav, 'scrolled-nav');
			removeClass(entireNav, 'navbar-light');
			entireNav.classList.add('navbar-dark');
		}

		allFancyDisplays.forEach((fancyDisplay, i) => {
			if (isInViewport(fancyDisplay)) {
				addClass(fancyDisplay, 'fade-in');
				removeClass(fancyDisplay, 'o-0');
			} else {
			}
		});
	}
};

function initBlocks() {
	let contactMeButton = document.querySelector('#send-contact-email');
	let emailMessageEle = document.querySelector('#contact-message-input');
	let nameInputEle = document.querySelector('#contact-name-input');
	let numberInputEle = document.querySelector('#contact-number-input');
	let emailInputEle = document.querySelector('#contact-email-input');

	contactMeButton ? contactMeButton.addEventListener('click', sendContactEmail) : '';

	function sendContactEmail() {
		let emailServerOrgin = 'https://mftanthony-email-server.herokuapp.com';
		let fromEmail = emailInputEle.value;
		let name = nameInputEle.value;
		let number = numberInputEle.value;
		let formMessage = emailMessageEle.value;
		var message = `Client info\nName: ${name}, Email: ${fromEmail}, Number: ${number}\n${name} says\n${formMessage}`;

		if (!formMessage || (!number && !fromEmail)) {
			alert('One or more required form inputs are missing');
			return;
		}

		let body = JSON.stringify({
			message: message,
			from: fromEmail,
			subject: 'A potential client from the MFT Anthony Website has contacted you!',
		});

		console.log(`sending to : ${emailServerOrgin}/sendMail`);

		fetch(`${emailServerOrgin}/sendMail`, {
			method: 'post',
			body: body,
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => {
				return res.json();
			})
			.then(status => {
				console.log(status);
				if (status && !status.message && status.message !== 'sucessfull') {
					console.error('Email failed');
				} else {
					console.log('Email was sucessfull');
				}
			})
			.catch(err => {
				console.error('Faild to send email');
				console.error(err);
			});
	}
}

function removeClass(ele, className) {
	if (!ele) {
		console.error('ele in remove class is not defined');
		return;
	}
	while (ele.classList.contains(className)) {
		ele.classList.remove(className);
	}
}
function addClass(ele, className) {
	if (!ele.classList.contains(className)) {
		ele.classList.add(className);
	}
}
function hideEle(ele) {
	ele.classList.add('d-none');
}
function showEle(ele) {
	removeClass(ele, 'd-none');
}

function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return rect.top >= -20 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
}
