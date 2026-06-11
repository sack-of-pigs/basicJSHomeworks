function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).reduce((sum, user, index, arr) => {
        sum += user.age;
        return index === arr.length - 1 ?  sum / arr.length : sum;
    }, 0);
}