
// click menu on header
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// click img shop
const mainImg = document.getElementById('mainImg')
const smallImg = document.getElementsByClassName('small-img')

if (smallImg) {
    for (let i = 0; i <= smallImg.length; i++) {
        if (smallImg[i])
            smallImg[i].onclick = () => {
                mainImg.src = smallImg[i].src
            }
    }
}

// product click
const products = document.getElementsByClassName('product')

if (products) {
    for (let i = 0; i <= products.length; i++) {
        if (products[i])
            products[i].onclick = () => {
                window.location.href = 'sproduct.html'
                // mainImg.src = products[i].firstElementChild.src
                // smallImg[0].src = products[i].firstElementChild.src
                // Ask Hoai why ?
            }
    }
}

// search
// const search = () => {
//     const searchValue = document.getElementById('search-item').value.toUpperCase()
//     const product = document.querySelectorAll('.product')
//     for (let i = 0; i < product.length; i++) {
//         const match = product[i].getElementsByTagName('h5')[0]
//         if (match) {
//             const textValue = match.textContent || match.innerHTML
//             if (textValue.toUpperCase().indexOf(searchValue) > -1) {
//                 product[i].style.display = ''
//             } else {
//                 product[i].style.display = 'none'
//             }
//         }
//     }
// }

