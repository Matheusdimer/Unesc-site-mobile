function showMenu(){
    let element = document.getElementById('side-menu')
    if (element.classList.contains('active-menu') ){
        element.classList.remove('active-menu')
    } else {
        element.classList.add('active-menu')
    }
}