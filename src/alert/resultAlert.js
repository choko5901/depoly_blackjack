import Swal from 'sweetalert2'

export const winConfrimSweet = (title,text)=>{
    Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#0af',
        cancelButtonColor: 'rgba(218, 4, 4, 0.856)',
        confirmButtonText: 'Agree'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
      })
}


export const defeatConfrimSweet = (title,text)=>{
    Swal.fire({
        title: title,
        text: text,
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#0af',
        cancelButtonColor: 'rgba(218, 4, 4, 0.856)',
        confirmButtonText: 'Agree'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
      })
}


export const drawConfrimSweet = (title,text)=>{
    Swal.fire({
        title: title,
        text: text,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#0af',
        cancelButtonColor: 'rgba(218, 4, 4, 0.856)',
        confirmButtonText: 'Agree'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
      })
}