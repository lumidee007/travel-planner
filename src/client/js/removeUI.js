//REMOVE Saved information
export function removeUI(event) {
    event.preventDefault()
    let container = document.querySelectorAll('.target')
    
    container.forEach(cont => {
        cont.addEventListener('click', () => {
            cont.remove()
        })
    })
}