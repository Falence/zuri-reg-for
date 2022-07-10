const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

function addErrorClass(element, errorMessage) {
  const formGroup = element.parentElement;
  const small = formGroup.querySelector('small')
  small.innerText = errorMessage
  formGroup.className = 'form__group error'
}

function addSuccessClass(element) {
  const formGroup = element.parentElement;
  formGroup.className = 'form__group success'
}

function verifyEmail(element, message) {
  const formGroup = element.parentElement;
  const small = formGroup.querySelector('small')
  small.innerText = message
  formGroup.className = 'form__group error'
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	validateForm()
})


const validateForm = () => {
	const fnameValue = firstname.value.trim()
	const lnameValue = lastname.value.trim()
	const emailValue = email.value.trim()
	const passwordValue = password.value.trim()
	const emailAtSymbol = '@';

	if (fnameValue === "") {
		addErrorClass(firstname, 'First Name cannot be empty')
	} else {
		addSuccessClass(firstname)
	}

	if (lnameValue === "") {
		addErrorClass(lastname, 'last Name cannot be empty')
	} else {
		addSuccessClass(lastname)
	}

	if (emailValue === "") {
		addErrorClass(email, 'email cannot be empty')
	} else if (!emailValue.includes(emailAtSymbol)) {
		verifyEmail(email, 'looks like this is not an email')
	} else {
		addSuccessClass(email)
	}

	if (passwordValue === "") {
		addErrorClass(password, 'password cannot be empty')
	} else{
		addSuccessClass(password)
	}
}

