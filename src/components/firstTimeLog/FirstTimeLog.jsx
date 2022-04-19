import React from 'react'
import Swal from 'sweetalert2'

const FirstTimeLog = () => {

    Swal.fire({
                    
        imageUrl: 'https://i.ibb.co/vd4WxNv/confirmation-Label.jpg',
        title:"Don't miss the trends check \n your email",
        text:"Confirm your user account",
        confirmButtonText:'<b>Continue<b>',
        confirmButtonColor:"#EF62A3",
        showCloseButton: true,
        showClass:
        {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass:
        {
            popup: 'animate__animated animate__fadeOutUp'
        },
        imageAlt: 'errorLogin',
        customClass: {
            container:"sweet_container",
            
            title: "sweet_title",
            text:"sweet_text",
            confirmButton: 'button',
            image:"sweet_image"
        }
      })
  return (
    <div>FirstTimeLog</div>
  )
}

export default FirstTimeLog