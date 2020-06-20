

const openModalButtons = document.querySelectorAll('[data-open]');

const closeModalButtons = document.querySelectorAll('[data-closeModal]');

const stopVideo = document.getElementById("vid");

openModalButtons.forEach(button => {
	button.addEventListener("click", () => {
		const modal = document.querySelector(button.dataset.open);
		openModal(modal);
	});
});

closeModalButtons.forEach(button => {
	button.addEventListener("click", () => {
		const modal = button.closest(".modal-bg");
		closeModal(modal);
	});

});


window.onclick = function(event) {
	if (event.target == modal) {
		closeModal(modal);
	}
}

function openModal(modal){
	if (modal == null) return;
		modal.classList.add("modal-active");
}

function closeModal(modal){
	if (modal == null) return;
	stopVideo.pause();
	modal.classList.remove('modal-active');

}
