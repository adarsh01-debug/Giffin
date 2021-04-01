const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEL = document.getElementById('results');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const q = searchInput.value;
    gif_display(q);
    searchInput.value = '';
});

function gif_display(q){

    const apikey = 'USyjCW1NN3QuB5K1zVqCCF2ieg717gcX';
    const api = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;

    fetch(api).then(function(response) {
        return response.json()
    }).then(function(json) {
        // console.log(json.data[0].images.fixed_width.url);
        let resultsHTML = '';

        json.data.forEach(function(object) {
            // console.log(object.images.fixed_width.url);

            const gif_url = object.images.fixed_width.url;
            const gif_width = object.images.fixed_width.width;
            const gif_height = object.images.fixed_width.height;
            const gif_title = object.title;

            resultsHTML += `<img
                            class="item"
                            src="${gif_url} 
                            width="${gif_width}" 
                            height="${gif_height}" 
                            alt="${gif_title}">"`;
        })

        resultsEL.innerHTML = resultsHTML;

    }).catch(function(err) {
        console.log(err.message);
    });

}

// About section modal -------------------------------------------------------------

const modalAbout = document.querySelector('#my-modal-about');
const aboutBtn = document.querySelector('.open-about');
const closeBtnAbout = document.querySelector('.close-about');

// Events
aboutBtn.addEventListener('click', openModalAbout);
closeBtnAbout.addEventListener('click', closeModalAbout);
window.addEventListener('click', outsideClickAbout);

// Open
function openModalAbout() {
  modalAbout.style.display = 'block';
}

// Close
function closeModalAbout() {
    modalAbout.style.display = 'none';
}

// Close If Outside Click
function outsideClickAbout(e) {
  if (e.target == modal) {
    modalAbout.style.display = 'none';
  }
}


// contact section modal ------------------------------------------------------------

const modalContact = document.querySelector('#my-modal-contact');
const contactBtn = document.querySelector('.open-contact');
const closeBtnContact = document.querySelector('.close-contact');

// Events
contactBtn.addEventListener('click', openModalContact);
closeBtnContact.addEventListener('click', closeModalContact);
window.addEventListener('click', outsideClickContact);

// Open
function openModalContact() {
    modalContact.style.display = 'block';
}

// Close
function closeModalContact() {
    modalContact.style.display = 'none';
}

// Close If Outside Click
function outsideClickContact(e) {
  if (e.target == modal) {
    modalContact.style.display = 'none';
  }
}

