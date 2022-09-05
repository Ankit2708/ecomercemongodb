// const Sequelize = require('sequelize');

const { json } = require('body-parser')

// const sequelize = require('../util/database');
const getDb=require('../util/database').getDb
class Product{
    constructor(title,price,description,imageURl){
      
        this.title=title
        this.price=price
        this.description=description
        this.imageURl=imageURl
    }
    save(){
        const db=getDb()
        return db.collection('products').insertOne(title).then(result=>{
            console.log(result)
        }).catch(err=>{
            console.log(err)
        })
    }
}

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

module.exports = Product;
