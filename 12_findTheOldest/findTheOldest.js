const findTheOldest = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
      }
      return death - birth;
    };
    
    const getAge = function (people) {
      return people.reduce((oldest, currentPerson) => {
        const oldestAge = findTheOldest(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findTheOldest(
          currentPerson.yearOfBirth,
          currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
      });
};

// Do not edit below this line
module.exports = getAge ;
