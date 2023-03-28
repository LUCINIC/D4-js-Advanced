document.addEventListener("DOMContentLoaded", async () => {
     let container = document.getElementById('mainContainer');
      
       new Promise(function(resolve, reject) { 
         fetch('https://striveschool-api.herokuapp.com/books').then((response) => { 
             response.json().then((data) => { 
                const container = document.querySelector('.container .row');

    
                const booksHTML = data.map(book => `
                  <div class="col-md-4">
                    <div class="card">
                      <img class="card-img-top" src="${book.img}" alt="${book.title}">
                      <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.description}</p>
                        <a href="#" class="btn btn-primary">Aggiungi al carrello</a>
                      </div>
                    </div>
                  </div>
                `); 
                const booksHTMLString = booksHTML.join('');

   
    container.innerHTML = booksHTMLString;
  

                
                  resolve(); }) }).catch((err) => {console.log("Riscontrato il seguente errore: " + err);
                }); 
                }); 
                createDom();
             });

function createDom(){ 


    let cards = document.querySelectorAll('.card');


cards.forEach(function(card) {
  
  let skipButton = document.createElement('button');
  skipButton.classList.add('btn', 'btn-secondary' );
  skipButton.innerText = 'Salta';

  
  skipButton.addEventListener('click', function() {
    
    card.remove();
  });


  let cardBody = card.querySelector('.card-body');
  cardBody.appendChild(skipButton); 
  console.log ("ok") ; 
});

}; 





    
    

   
    
   




  let addToCartButtons = document.querySelectorAll('a.btn.btn-primary');

  addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
  event.preventDefault();
  let card = button.closest('.card');
  let title = card.querySelector('.card-title').textContent;
  let description = card.querySelector('.card-text').textContent;
  let image = card.querySelector('.card-img-top').getAttribute('src');
  let price = 10.00;
  let book = {
  title: title,
  description: description,
  image: image,
  price: price
  };
  cart.push(book);
  updateCart();
  });
  }); 




  


  
  
  
  
  
  







