import React from 'react'
import Modal from '../components/products/Modal'
import ProductsCard from '../components/products/Card'

//import ProductLoader from '../components/products/ProductLoader'

const Home = () => {
  return (
    <div className='bg-black'>
 
     
<Modal/>

<section className="bg-pink-600 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopEase</h1>
        <p className="text-lg mb-6">Your One-Stop Online Shop for Everything!</p>
       
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Why Shop With Us?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray-100 p-6 rounded-xl w-60 shadow">🚚 Fast Delivery</div>
          <div className="bg-gray-100 p-6 rounded-xl w-60 shadow">🔒 Secure Payments</div>
          <div className="bg-gray-100 p-6 rounded-xl w-60 shadow">📞 24/7 Support</div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-50 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
               <ProductsCard className="bg-white p-4 rounded-lg shadow">
              <img
                src={`/img/product${item}.jpg`}
                alt={`Product ${item}`}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
          
       
              <h3 className="text-lg font-medium">Product Name</h3>
              <p className="text-gray-600">$19.99</p>
            </ProductsCard>
              
           
          ))}
        </div>
      </section>



    </div>
  )
}

export default Home