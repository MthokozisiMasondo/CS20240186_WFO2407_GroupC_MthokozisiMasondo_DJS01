// Given Parameters
const velocityPerHour = 10000; // initial velovity (km/h)
const acceleration = 3; // m/s^2
const timeInSeconds = 3600; // 1 hour
const distanceInKilometres = 0;
const initialFuelInKilograms = 5000; 
const fuelBurnRate = 0.5; // kg/s

// Calculating new values
const newDistance = distanceInKilometres + (velocityPerHour * (timeInSeconds / 3600)) 
const remainingFuel = initialFuelInKilograms - (fuelBurnRate * timeInSeconds)
const newVelocity = calculateNewVelocity(velocityPerHour, acceleration, timeInSeconds) 

function calculateNewVelocity (velocity, acceleration, time) { 
try {
  // Ensure that three values are passed to the function when it's called
  if (arguments.length !== 3) {
    throw new Error("Three arguments are needed when calling the function.")
  }

  // Ensure that every argument is a number
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error("All three arguments need to be numbers.")
  }

  // Calculation of the new velocity
  return velocity + (acceleration * time) 

} catch (error) {
  // Errors when the functions is executed
  console.error(error.message)
  return null 
  }
}

// Logging the results to the console
console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






