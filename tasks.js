import {users} from './users.js';

//TODO: 1 TASK
// Получить массив имен всех пользователей (поле name).

const getUserNames = users => users.map(user => user.name)


//практика не стрелочной функции (для себя)

// const getUserNames = function(users) {

//   return users.map(function(user) {
//       return user.name;
//     })
// };
  
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]



//TODO: 2 TASK
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)


//практика не стрелочной функции (для себя)

// const getUsersWithEyeColor = function(users, color) {
//   return users.filter(function(user) {
//     if (user.eyeColor === color) {
//       return user;
//     }
//   })
// };

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]



//TODO: 3 TASK
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => users
  .filter(user => user.gender === gender)
  .map(user => user.name)


//практика не стрелочной функции (для себя)

// const getUsersWithGender = function(users, gender) {
//   return users.filter(function(user) {
//     return user.gender === gender
//   }).map(function(name) {
//     return name.name;
//   })
// }

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]



//TODO: 4 TASK
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => users.filter(user => !user.isActive);


//практика не стрелочной функции (для себя)

// const getInactiveUsers = function(users) {
//   return users.filter(function(user){
//     return !user.isActive;
//   })
// }

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]



//TODO: 5 TASK
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => users.find(user => user.email === email)


//практика не стрелочной функции (для себя)

// const getUserWithEmail = function(users, email) {
//     return users.find(function(user){
//         return user.email === email;
//     })
// }

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}



//TODO: 6 TASK
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => 
  users.filter(user => user.age >= min && user.age <= max)


//практика не стрелочной функции (для себя)

// const getUsersWithAge = function(users, min, max) {
//   return users.filter(function(user) {
//     return user.age >= min && user.age <= max;
//   });
//   }

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]



//TODO: 7 TASK
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance, 0)


//практика не стрелочной функции (для себя)

// const calculateTotalBalance = function(users) {
//   return users.reduce(function(acc, user) {
//     return acc + user.balance;
//   }, 0)
// }
console.log(calculateTotalBalance(users)); // 20916



//TODO: 8 TASK
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name)


console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]



//TODO: 9 TASK
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => users
  .sort((a, b) => a.friends.length - b.friends.length)
  .map(mostFriends => mostFriends.name)

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez"]



//TODO: 10 TASK
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  return users
  .reduce(function(acc, user) {
      acc.push(...user.skills);
      return acc;
  }, [])
  .filter((user, index, arr) => arr.indexOf(user) === index)
  .sort();
}

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]