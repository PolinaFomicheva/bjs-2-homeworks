// ЗАДАЧА 1 //

function compareArrays(arr1, arr2) {
    return arr1.every((item, idx) => item === arr2[idx]) && arr1.length === arr2.length; 
      }




// ЗАДАЧА 2 //
function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);
    return result;
}
