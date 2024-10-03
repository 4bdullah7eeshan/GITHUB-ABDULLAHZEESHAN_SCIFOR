/* script.js */

// I. Hero Typer Effect

const words = ["Designer", "Web Developer", "Student"];

let mainTimeline = gsap.timeline({
	repeat: -1
});

words.forEach(word => {

	let textTimeline = gsap.timeline({
		repeat: 1,
		yoyo: true,
		repeatDelay: 5,
	});

	textTimeline.to("#typewriter", {
		text: word,
		duration: 1,
	});

	mainTimeline.add(textTimeline);
});

// II. Project Section Scroll Animation

document.addEventListener('scroll', function () {
	const elements = document.querySelectorAll('.animate-on-scroll');

	elements.forEach(element => {
		const position = element.getBoundingClientRect();

		if (position.top < window.innerHeight && position.bottom >= 0) {
			element.classList.add('visible');
		} else {
			element.classList.remove('visible');
		}
	});
});

// III. Form Validation

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.createElement('div'); // Success message div
    successMessage.classList.add('success-message'); // Add class for styling

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Reset error styles
    nameInput.classList.remove('error-border');
    emailInput.classList.remove('error-border');
    messageInput.classList.remove('error-border');

    let hasError = false;

    // Validate form inputs
    if (!name) {
        nameInput.classList.add('error-border');
        hasError = true;
    }

    if (!email) {
        emailInput.classList.add('error-border');
        hasError = true;
    } else if (!validateEmail(email)) {
        emailInput.classList.add('error-border');
        hasError = true;
    }

    if (!message) {
        messageInput.classList.add('error-border');
        hasError = true;
    }

    if (!hasError) {
        // Clear input fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        // Add success message to the form and animate it
        successMessage.innerText = "Message Sent!";
        document.getElementById('form').appendChild(successMessage);
        successMessage.classList.add('animate-success');

        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);

    } else {
        // Remove error styles after 5 seconds
        setTimeout(() => {
            nameInput.classList.remove('error-border');
            emailInput.classList.remove('error-border');
            messageInput.classList.remove('error-border');
        }, 5000);
    }
});

// Function to validate email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}


// III. Footer Colorful Boxes

function randomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	box.addEventListener('mouseover', () => {
		box.style.backgroundColor = randomColor();
	});
});

// IV. Back To-Top Button

const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function () {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		backToTopBtn.style.display = "flex";
	} else {
		backToTopBtn.style.display = "none";
	}
};

backToTopBtn.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
};
