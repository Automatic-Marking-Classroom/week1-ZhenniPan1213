// Define interfaces for Person and City
export interface Person {
  name: string;
  surname: string;
  age: number;
  fullName: string;
  isAdult: boolean;
}

export interface City {
  name: string;
  population: number;
  country: string;
  isCapital: boolean;
}

/* Task 1 - Fix the function below. It should operate as a calculator, 
which takes two numbers and an operator as arguments, and returns the result of the operation. 

For example calculator(1, 2, "+") should return 3.
*/
export function calculator(num1: number, num2: number, operator: string): number {
  /* Your code goes here */
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error("Cannot divide by zero");
      }
    default:
      throw new Error("Invalid operator");
  }
}

/* Task 2 - Write a function, which creates objects describing a person.
The function should take three arguments: name, surname and age. 
The function should return an object with the following properties:
1. name - the name of the person
2. surname - the surname of the person
3. age - the age of the person
4. fullName - the full name of the person (name + surname)
5. isAdult - true if the person is an adult (age >= 18), false otherwise 
*/
export function createPerson(name: string, surname: string, age: number): Person {
  /* Your code goes here */
  return {
    name,
    surname,
    age,
    fullName: `${name} ${surname}`,
    isAdult: age >= 18,
  };
}

/* Task 3 - Write a function, which takes an object as a parameter. The object given as a parameter should have the following properties:
1. name - the name of the person
2. surname - the surname of the person
3. age - the age of the person
4. fullName - the full name of the person (name + surname)
5. isAdult - true if the person is an adult (age >= 18), false otherwise
*/
export function personToString(person: Person): string {
  /* Your code goes here */
  const ageDescriptor = person.isAdult ? "an adult" : "a minor";
  return `The person ${person.name}, ${person.surname} is ${person.age} years old, and is ${ageDescriptor}`;
}

/* Task 4 - Write a function, which takes an object as a parameter. 
The object given as a parameter should describe the information of a city.
The city object should have the following properties:
1. name - the name of the city
2. population - the population of the city
3. country - the country the city is located in
4. isCapital - true if the city is a capital, false otherwise
*/
export function cityNameAndPopulationToString(city: City): string {
  /* Your code goes here */
  return `${city.name} has a population of ${city.population}`;
}

/* Task 5 - Write a function, which takes the same kind of object as parameter as the function in Task 4.
The function should return boolean value true if the city is a capital, false otherwise.
*/
export function isCapital(city: City): boolean {
  /* Your code goes here */
  return city.isCapital;
}

/* Task 6 - Write a function, which takes the same kind of object as parameter as the function in Task 4.
The function should return the name of the country the city is located in.
*/
export function getCountryName(city: City): string {
  /* Your code goes here */
  return city.country;
}

/* Task 7 - Write a function, which takes two parameters. Both parameters are of the same city object type as the function in Task 4.
The function should return the result which indicates whether the two cities are within the same country.
The function should return a string in the following format:
`${city1.name} and ${city2.name} are within the same country`
OR
`${city1.name} and ${city2.name} are not within the same country`
NOTE: The symbol '(single quote) must be used both in the the beginning and the end of string.
*/
export function withinSameCountry(city1: City, city2: City): string {
  /* Your code goes here */
  if (city1.country === city2.country) {
    return `${city1.name} and ${city2.name} are within the same country`;
  }
  return `${city1.name} and ${city2.name} are not within the same country`;
}


/* Task 8 - Write a function, which takes two parameters. Both parameters are of the same city object type as the function in Task 4.
The function should return the city object with the larger population.
*/
export function getLargerPopulation(city1: City, city2: City): City {
  /* Your code goes here */
  return city1.population > city2.population ? city1 : city2;
}


/* Task 9 - Write a function to return the string which indicates which city has a larger population.
Use "const largerCity" and "const smallerCity" to store the results.
The function should return a string in the following format:
`${largerCity.name} has larger population than ${smallerCity.name}`
NOTE: The symbol '(single quote) must be used both in the the beginning and the end of string.
*/
export function getLargerPopulationString(city1: City, city2: City): string {
  /* Your code goes here */
  const largerCity = city1.population > city2.population ? city1 : city2;
  const smallerCity = city1.population > city2.population ? city2 : city1;
  return `${largerCity.name} has larger population than ${smallerCity.name}`;
}


/* Task 10 - Write a function. 
Use "let largestCity" to store the result.
The function should return a string in the following format:
`${largestCity.name} has the largest population`;
NOTE: The symbol '(single quote) must be used both in the the beginning and the end of string.
*/
export function getLargestPopulationString(city1: City, city2: City, city3: City): string {
  /* Your code goes here */
  let largerCity = city1;

  if (city2.population > largerCity.population) {
    largerCity = city2;
  }
  if (city3.population > largerCity.population) {
    largerCity = city3;
  }

  return `${largerCity.name} has the largest population`;
}


/* Task 11 - Write a function to get a descending order of 3 cities' populations. 
You can create an array of cities and sort it based on the population.
The function should return a string in the following format:
`${cities[0].name} > ${cities[1].name} > ${cities[2].name}`
NOTE: The symbol '(single quote) must be used both in the the beginning and the end of string.
*/
export function getPopulationOrder(city1: City, city2: City, city3: City): string {
  /* Your code goes here */
  // Create an array of cities
  const cities = [city1, city2, city3];

  // Sort cities by population in descending order
  cities.sort((a, b) => b.population - a.population);

  // Return a string with city names in order
  return `${cities[0].name} > ${cities[1].name} > ${cities[2].name}`;
}


/* Task 12 - Write a function to get the coach which has the most passengers. 
Use a variable coachWithMostPassengers to store the result.
The function should return a string in the following format:
`Coach ${coachWithMostPassengers.coachNumber} has the most passengers`
NOTE: The symbol '(single quote) must be used both in the the beginning and the end of string.
*/
export interface Coach {
  coachNumber: number;
  passengers: number;
}

export interface Train {
  name: string;
  coaches: Coach[];
}

export function findCoachWithMostPassengers(train: Train): string | null {
  if (!train.coaches || train.coaches.length === 0) {
    return null;
  }

  const maxCoach = train.coaches.reduce((max, current) =>
    current.passengers > max.passengers ? current : max
  );

  return `Coach ${maxCoach.coachNumber} has the most passengers`;
}



