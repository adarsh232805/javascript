//constructor.js
//constructor is a special method that is used to create and initialize an object created with a class. It is called automatically when a new instance of the class is created. The constructor method can take parameters that are used to initialize the properties of the object.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//explaination: In this example, we define a class called Person with a constructor that takes two parameters: name and age. The constructor initializes the properties of the object with the values passed in. When we create a new instance of the Person class, we can pass in the values for name and age to initialize the properties of the object.
//constructor is a special method that is used to create and initialize an object created with a class. It is called automatically when a new instance of the class is created. The constructor method can take parameters that are used to initialize the properties of the object.
//types of constructor
//1. Default constructor: A default constructor is a constructor that takes no parameters and initializes the properties of the object with default values. If no constructor is defined in a class, a default constructor is automatically provided by JavaScript.
class Person {
  constructor() {
    this.name = "Unknown";
    this.age = 0;
  }
}
//explaination: In this example, we define a class called Person with a default constructor that takes no parameters. The constructor initializes the properties of the object with default values. When we create a new instance of the Person class, the properties of the object will be initialized with the default values defined in the constructor.
//output: The output of the code will be a new instance of the Person class with the name "Unknown" and age 0. We can access the properties of the person1 object using dot notation, like this: person1.name will return "Unknown" and person1.age will return 0.

//2. Parameterized constructor: A parameterized constructor is a constructor that takes parameters and initializes the properties of the object with the values passed in.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//explaination: In this example, we define a class called Person with a parameterized constructor that takes two parameters: name and age. The constructor initializes the properties of the object with the values passed in. When we create a new instance of the Person class, we can pass in the values for name and age to initialize the properties of the object.
//output: The output of the code will be a new instance of the Person class with the name "Alice" and age 30. We can access the properties of the person1 object using dot notation, like this: person1.name will return "Alice" and person1.age will return 30.

//3. Copy constructor: A copy constructor is a constructor that takes an object of the same class as a parameter and initializes the properties of the new object with the values of the properties of the passed object.
class Person {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
  }
}
//explaination: In this example, we define a class called Person with a copy constructor that takes an object of the same class as a parameter. The copy constructor initializes the properties of the new object with the values of the properties of the passed object. When we create a new instance of the Person class using the copy constructor, we can pass in an existing Person object to initialize the properties of the new object with the values of the existing object.
//output: The output of the code will be a new instance of the Person class with the same name and age as the existing Person object passed in. We can access the properties of the new object using dot notation, like this: person2.name will return the name of the existing Person object and person2.age will return the age of the existing Person object.




//default parameteris defined as the value that is assigned to a parameter when no value is passed to the function or method. In JavaScript, default parameters can be defined by assigning a value to the parameter in the function or method definition.
//for example, consider the following code:
class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
}
console.log(new Person().name); // Output: "Unknown"
console.log(new Person().age); // Output: 0
//explaination: In this example, we define a class called Person with a parameterized constructor that takes two parameters: name and age. The constructor initializes the properties of the object with the values passed in. When we create a new instance of the Person class, we can pass in the values for name and age to initialize the properties of the object.
//output: The output of the code will be a new instance of the Person class with the name "Alice" and age 30. We can access the properties of the person1 object using dot notation, like this: person1.name will return "Alice" and person1.age will return 30.
