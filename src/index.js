const button = document.createElement('button');
button.innerText = "Click Me!";
button.addEventListener('click', () => {
 console.log('wrk');
 System.import('./image_viewer')
       .then( module => {
            console.log(module);
            module.default();
       });
});

document.body.appendChild(button);