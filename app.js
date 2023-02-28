const form = document.querySelector('#formulario');

const buttonMailto = document.querySelector('#linkEmail')


form.addEventListener('submit', handlesubmit)

async function handlesubmit(event){
    event.preventDefault()

   const dataForm =  new FormData(this);

   console.log(dataForm.get('name'));

   buttonMailto.setAttribute('href',`mailto:miguelcalogero@gmail.com?subject=nombre ${dataForm.get('name')} correo ${dataForm.get('email')}&body=${dataForm.get('mensaje')}`);

   buttonMailto.click()

//    const response = await fetch(this.action,{
//         method : this.method,
//         body: dataForm,
//         headers: {
//             'Accept': 'application/json'
//         }
//    })

//    if(response.ok){
//     this.reset()
//     alert('Gracias por contactarme')
//    }
}

function iniciarMap(){
    let coord = {lat:-34.5603042, lng:-58.475772};
    let map = new google.maps.Map(document.getElementById('mapa'),{
        zoom: 12,
        center: coord
    });
    let marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}