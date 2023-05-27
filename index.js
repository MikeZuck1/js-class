// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS((X)) StarTer</h1>`;


class Person {
  constructor(name, age, status, country, city, adress, phone, occupation, gender) {
    this._name = name; 
    this._age = age; 
    this._status = status; 
    this._country = country; 
    this._city = city; 
    this._adress = adress; 
    this._phone = phone;
    this._occupation = occupation; 
    this._gender = gender; 
  }

  get name () {
    return this._name;
  }

  get age () {  
    return this._age; 
  }

  get status () {
    return this._status; 
  }

  get country () {
    return this._country; 
  }

  get city () {
    return this._city;
  }

  get adress () {
    return this._adress;
  }

  get phone () {
    return this._phone; 
  }

  get occupation () {
    return this._occupation; 
  }

  get gender () {
    return this._gender;
  }
}

const nameUser0 = new Person (
  'Jon Doe', 
  34, 
  'single', 
  'Belgium', 
  'Brussels', 
  'Rue Gaucheret, 82-1030 Schaerbekk', 
  '0489563412', 
  'Programmer', 
  'Male');
  
const nameUser1 = new Person ( 
  'Joane Doe', 
  30, 
  'married', 
  'Belgium', 
  'Brussels', 
  'Place Publique, 56-1000 Bruxelles', 
  '0474983402', 
  'Teacher',  
  'Female');

const nameUser2 = new Person ( 
  'Lilly Doe', 
  40, 
  'single', 
  'Belgium', 
  'Brussels', 
  'Avenue de la fleure Rose, 234 1020 Laeken', 
  '0483458723', 
  'Comptable',  
  'Female');

const nameUser3 = new Person ( 
  'Aline Doe', 
  29, 
  'single', 
  'Belgium', 
  'Brussels', 
  'Rue du palmier 45, 1030-Schaerbeek', 
  '0485096853', 
  'Medecin',   
  'Female');

const nameUser4 = new Person ( 
  'Jack Doe', 
  49, 
  'married', 
  'Belgium', 
  'Brussels', 
  'Rue du cerisier 5, 1200-WLW', 
  'Private', 
  'CEO',   
  'Male');

  console.log(nameUser0);  
  console.log(nameUser1); 
  console.log(nameUser2); 
  console.log(nameUser3);
  console.log(nameUser4);


