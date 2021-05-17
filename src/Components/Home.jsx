import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <img className="home__img"  src="images/banner1.jpg" alt=""/>
            <div className="home__row">
                <Product
                    id = "121"
                    title = "New Apple 11-inch iPad Pro with Apple M1 chip (Wi-Fi, 128GB) - Space Grey (2021 Model, 3rd Generation)"
                    price = {71900}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/81Y5WuARqpS._SX522_.jpg' 
                />

                <Product
                    id = "122"
                    title = "(Renewed) OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
                    price = {29999}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71zlbKfhFsL._SY741_.jpg' 
                />
                
            </div>

            <div className="home__row">
                <Product
                    id = "123"
                    title = "Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera "
                    price = {20499}
                    rating = {4}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/71yYaNztZ0L._SY741_.jpg' 
                />

                <Product
                    id = "124"
                    title = "Sapiens: A Brief History of Humankind Paperback by Yuval Noah Harari"
                    price = {379}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/41yu2qXhXXL._AC_SY780_FMwebp_.jpg' 
                />
                
                <Product
                    id = "125"
                    title = "ASUS TUF Gaming F15 Laptop 15.6 FHD 144Hz, Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics"
                    price = {61990}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SX679_.jpg' 
                />
            </div>

            <div className="home__row">
                <Product
                    id = "126"
                    title = "Samsung 190.5 cm (75 inches) 8 Series 75NU8000 4K LED Smart TV (Black)"
                    price = {599000}
                    rating = {5}
                    image = 'https://images-na.ssl-images-amazon.com/images/I/91IttqgqY9L._SX679_.jpg' 
                />
            </div>
          
        </div>
    )
}

export default Home
