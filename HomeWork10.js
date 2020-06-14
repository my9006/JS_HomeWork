// Createa author and book
class Author{

  _name = "";
  _email = "";
  _gender = "";

  constructor(name, email, gender){
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  get name(){
    return this._name;
  }

  set name (v){
    this._name=v;
  }

  get email(){
    return this._email;
  }
  set email(v){
     this._email = v; 
  }
  get gender(){
    return this._gender;
  }
  set gender(v){
    this._gender=v;
  }

  toString(){
    return `${this.name} ${this.email}`;
  }
}
class Book{
  _title;
  _author;
  _price;
  _quantity;
  constructor(title, author, price, quantity){
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
  get title(){
    return this._title;
  }
  set title(v){
    this._title=v;
  }

  get author(){
    return this._author;
  }
  set author(v){
    if(v instanceof Author){
    this._author = v;
    }else{
        throw new Error("The author shoulr be instance of Author class")
    }
  }

  get price(){
    return this._price;
  }
  set price(v){
    this._price = v;
  }

  get quantity(){
    return this._quantity;
  }
  set quantity(v){
    this._quantity = v;
  }

  getProfit(){
    return this.price*this.quantity;
  }
  toString(){
    return `${this.title} by ${this.author.name}`
  }
}

class Account{
  _id = Math.round(Math.random()*100);
  _name;
  _balance;
  constructor(name, balance){
    this.name = name;
    this.balance = balance;
  }

  get name(){
    return this._name;
  }
  set name(v){
    this._name = v;
  }

  get balance(){
    return this._balance;
  }
  set balance(v){
    this._balance = v;
  }

  get id(){
    return this._id;
  }

  credit =amount=>{
    if(amount<0) throw new Error("Credited amount cannot be negative")
    this.balance+=amount;
    return this.balance;
  }

  debit = amount=>{
    if(amount<0) throw new Error("Credited amount cannot be negative")
    if(this.balance -amount<0){
      console.log("Amount exceeded balance.");
      return;
    }else{
      this.balance-=amount;
    }
    return this.balance;
  }

  transferTo = (toAccount, amount)=>{
      if(amount<0) throw new Error("Credited amount cannot be negative")
      this.debit(amount);
      toAccount.credit(amount);
  }
  static identifyAccounts =function (account1, account2){
    return account1.id===account2.id && account1.name===account2.name && account1.balance===account2.balance;
  }

  toString(){
    return `${this.name} by id ${this.id} have ${this.balance} in balance`;
  }
}

class Person{

  _firstName;
  _lastName;
  _gender;
  _age;

  constructor(firstName, lastName, gender, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  get firstName(){
    return this._firstName;
  }

  set firstName(v){
    this._firstName = v;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(v){
    this._lastName = v;
  }

  get gender(){
    return this._gender;
  }
  set gender(v){
    this._gender = v;
  }

  get age(){
    return this._age;
  }
  set age(v){
    this._age = v;
  }

  toString(){
    return `${this._lastName} ${this._firstName} is ${this._gender}, ${this._age} years old`;
  }
}

class Student extends Person{
  _program;
  _year;
  _fee;
  examData;

  constructor(firstName, lastName, gender, age, program, year, fee){
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.fee = fee;
    this.getObj();
  }

  get program(){
    return this._program;
  }
  set program(v){
    this._program = v;
  }

  get year(){
    return this._year;
  }
  set year(v){
    this._year = v;
  }

  get fee(){
    return this._fee;
  }
  set fee(v){
    this._fee = v;
  }

  toString(){
    let pro = "";
    for(let i of this.program){
      pro+=i+", ";
    }
    return `${this._firstName} ${this._lastName} have ${pro} programs`;}
  
    getObj(){
    this.examData = this.program.reduce((a, b)=>(a[b]=undefined, a), {});
    }

    passExam(exam, grade) {
        this.examData[exam] = grade;
        if(this.examsArePassed(this.examData)){
            this.year++;
        }
        
      }
    examsArePassed(obj){
        for(let i in obj){
          if(obj[i]<50 || obj[i]===undefined){
            return false;
          }
        }
    return true;
  }

}

class Teacher extends Person{
  _program;
  _pay;
  constructor(firstName, lastName, gender, age, program, pay){
    super(firstName, lastName, gender, age)
    this.program = program;
    this.pay = pay;
  }

  get program(){
    return this._program;
  }
  set program(v){
    this._program = v;
  }

  get pay(){
    return this._pay;
  }
  set pay(v){
    this._pay = v;
  }

  toString(){
    return `${this._firstName} ${this._lastName} is a professor of ${this._program}, earns ${this._pay}`;
  }
}