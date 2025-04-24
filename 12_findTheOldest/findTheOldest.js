function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return (death - birth);
}

const findTheOldest = function(peopleList) {
    let oldestAge = 0;
    let oldest;

    for (person of peopleList) {
        // Find this person's age
        let personAge = getAge(
            person.yearOfBirth,
            person.yearOfDeath
        );

        if (personAge > oldestAge) {
            // If this person's age was more than our current highest age it becomes the highest age
            oldestAge = personAge;
            oldest = person;
        }
    }
    
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
