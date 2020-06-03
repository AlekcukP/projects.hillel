'use strict'

const SIZE_SMALL = {
    name: ['Small humburger'],
    price: [50,],
    callories: [20,],
}

const SIZE_MEDIUM = {
    name: ['Medium humburger'],
    price: [75,],
    callories: [30,],
}

const SIZE_BIG = {
    name: ['Big humburger'],
    price: [100,],
    callories: [40,],
}

const TOPPING_CHEESE = {
    name: 'cheese',
    price: 10,
    callories: 20,
}
const TOPPING_SALAD = {
    name: 'salad',
    price: 20,
    callories: 5,
}
const TOPPING_POTATO = {
    name: 'fried potatoes',
    price: 15,
    callories: 10,
}
const TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    callories: 5,
}
const TOPPING_FLAV = {
    name: 'flavoring',
    price: 15,
    callories: 0,
}

function Humburger (typeOfBurger){

    this.name = typeOfBurger.name;
    this.price = typeOfBurger.price;
    this.callories = typeOfBurger.callories;
    this.getCallories = showCallories;
    this.getPrice = showPrice;
    this.addTopping = createOrder;
    this.orderName = showName;
    this.order = () => `${this.orderName()} will cost ${this.getPrice()} and contains ${this.getCallories()}.`
}

function createOrder (topping){
    addToMassive(this.price, topping.price);
    addToMassive(this.callories, topping.callories);
    addToMassive(this.name, topping.name);
}

function addToMassive (massive, addingValue){
    massive.push(addingValue);
}

function calcSumOfMassive (massive){
    let result = massive.reduce((acc, cost) => acc+cost);
    return result;
}

function showPrice (){
   let price = calcSumOfMassive(this.price);
   return price + ' tugriks';
}

function showCallories (){
   let callories = calcSumOfMassive(this.callories);
   return callories + ' callories';
}

function splitMassive (massive){
    let result = massive.join(' with ');
    return result;
}

function showName (){
   return splitMassive(this.name);
}