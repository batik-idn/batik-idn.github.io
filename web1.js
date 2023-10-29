const product = [
    {
        id: 1,
        image: 'PRODUK/p1.png',
        title: 'batik 1',
        price: 500.000,
    },
    {
        id: 2,
        image: 'PRODUK/p2.jpg',
        title: 'batik 2',
        price: 500.000,
    },
    {
        id: 3,
        image: 'PRODUK/p3.png',
        title: 'batik 3',
        price: 500.000,
    },
    {
        id: 4,
        image: 'PRODUK/p4.png',
        title: 'batik 4',
        price: 500.000,
    },
    {
        id: 1,
        image: 'PRODUK/p1.png',
        title: 'batik 1',
        price: 500.000,
    },
    {
        id: 2,
        image: 'PRODUK/p2.png',
        title: 'batik 2',
        price: 500.000,
    },
    {
        id: 3,
        image: 'PRODUK/p3.png',
        title: 'batik 3',
        price: 500.000,
    },
    {
        id: 4,
        image: 'PRODUK/p4.png',
        title: 'batik 4',
        price: 500.000,
    },
]
   
const categories = [...new Set(product.map((item)=>
    {return item}))]

    let cart = document.getElementById('root')
    cart.innerHTML = categories.map((item)=>{
        var {image, title, price} = item;
        return(
            `<div class="box">
                <div class="img-box">
                    <img src=${image}></img>
                </div>
                <div class="left">
                    <p>${title}</p>
                    <h2>${price}</h2>
                    <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
