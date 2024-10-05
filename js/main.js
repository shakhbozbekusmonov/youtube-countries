let elBody = document.querySelector('body')
let elThemeBtn = document.querySelector('.site-header__theme-btn')
let elThemeBtnIcon = document.querySelector('.site-header__theme-btn-icon')

elThemeBtn.addEventListener('click', function () {
	elBody.classList.toggle('theme-mode')

	if (elBody.classList.contains('theme-mode')) {
		elThemeBtnIcon.src = '../images/moon-dark.svg'
	} else {
		elThemeBtnIcon.src = '../images/moon-light.svg'
	}
})
