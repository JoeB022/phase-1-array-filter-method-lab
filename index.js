// helpers.js

// Function to find matching drivers
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function for fuzzy matching
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to match driver objects by name
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Export the functions for testing
module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
};

