const modal =  document.getElementById('modal')
const contactBtn =  document.getElementById('contactBtn')
const submitBtn =  document.getElementById('submitBtn')
const closeModal =  document.getElementById('closeModal')
const modalWrapper =  document.getElementById('modalWrapper')

contactBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

submitBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

modal.addEventListener('click', (event) => {
    modal.style.display = 'none'
    event.stopPropagation();
})

modalWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
})

