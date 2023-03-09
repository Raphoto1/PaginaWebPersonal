const formDom = document.querySelector(`#form`);

formDom.addEventListener(`submit`, handleSubmit);

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get("Nombre"));
    const response = await fetch(this.action,{ 
        method: this.method, 
        body: form, 
        headers:{
            Accept: `aplication/json`
        }
    })
    if (response.ok) {
        this.reset
        alert("Let's talk thankyou")
    }
}