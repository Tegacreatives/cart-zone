import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Tega',
            email: 'admin@example.com',
            password: bcrypt.hashSync('Tega@111'),
            isAdmin: true,
        },
        {
            name: 'Sam',
            email: 'user@example.com',
            password: bcrypt.hashSync('User@111'),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 5,
            countInStock: 5,
            description: 'A popular shirt'
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 4.8,
            numReviews: 10,
            countInStock: 9,
            description: 'A popular shirt'
        },
        {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 90,
            brand: 'Raymond',
            rating: 4.4,
            numReviews: 15,
            countInStock: 22,
            description: 'A popular shirt'
        },
        {
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 4.8,
            numReviews: 5,
            countInStock: 8,
            description: 'Smart looking pants'
        },
        {
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 90,
            brand: 'Zara',
            rating: 4.8,
            numReviews: 5,
            countInStock: 8,
            description: 'Smart looking pants'
        },
        {
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 4.8,
            numReviews: 5,
            countInStock: 8,
            description: 'Smart looking pants'
        },
    ]
}

export default data;