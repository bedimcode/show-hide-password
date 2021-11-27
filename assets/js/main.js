/*=============== SHOW / HIDDEN INPUT ===============*/
const showHiddenInput = (inputOverlay, inputPass, inputIcon) =>{
    const overlay = document.getElementById(inputOverlay),
          input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon)
          
    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'

            // Change icon
            iconEye.classList.add('bx-show')
        }else{
            // Change to password
            input.type = 'password'

            // Remove icon
            iconEye.classList.remove('bx-show')
        }

        // Toggle the overlay
        overlay.classList.toggle('overlay-content')
    })
}

showHiddenInput('input-overlay','input-pass','input-icon')
