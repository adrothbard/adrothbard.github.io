if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
	   navigator.serviceWorker.register('./service-worker.js')
	      .then(registration => console.log('SW registered'))
		  .catch(err => console.log(`SW not registered - Error: ${err}`))
    })
} else {
    console.log('Service Worker is not supported in this browser.')
}


let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');



btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/lightgold.jpg')";
});

btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('images/lightblue.jpg')";
});

