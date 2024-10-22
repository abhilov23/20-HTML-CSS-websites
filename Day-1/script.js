//selecting all the queries
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => { /*listens to the events like clicking a button*/ 
        removeActiveClasses()
        panel.classList.toggle('active') /*classlist.toggle() method is used to add or remove a class from an element */
    })
})
//function for removing active status from the image 
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
