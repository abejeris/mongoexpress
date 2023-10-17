const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
	.connect('mongodb://localhost:27017/farmStand')
	.then(() => {
		console.log('mongo connection open');
	})
	.catch((err) => {
		console.log(err);
	});

// const p = new Product({
// 	name: 'grapefruit',
// 	price: 1.99,
// 	category: 'fruit',
// });

// p.save()
// 	.then((p) => {
// 		console.log(p);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const seedProducts = [
	{ name: 'fairy Eggplant', price: 1.0, category: 'vegetable' },
	{ name: 'Organic Melon', price: 4.99, category: 'fruit' },
	{ name: 'Organic seedless Watermelon', price: 3.99, category: 'fruit' },
	{ name: 'Organic Celery', price: 1.5, category: 'vegetable' },
	{ name: 'Chocolate Whole milk', price: 2.69, category: 'dairy' },
];

Product.insertMany(seedProducts)
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(e);
	});
