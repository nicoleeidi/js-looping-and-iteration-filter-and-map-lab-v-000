// Code your solution here:
function driversWithRevenueOver(driver,revenue){
  return newDriver= driver.filter(function(person){return person.revenue > revenue})
}
function driverNamesWithRevenueOver(driver,revenue){ //returns an array of the drivers who match it
   names=driver.filter(function(person){return person.revenue > revenue})
   return names.map(function(person){return person.name})
}
or
// function exactMatch(driver,object){ //retuned 2 matches
//   return driver.filter(function(person){
//     if (person.name == object.name || person.reveue== object.revenue){
//       return person
//     }
//   })
// }
or
function exactMatch(driver,object){ //returned no matched
  return driver.filter(function(person){return person.name== object.name || person.revenue == object.name})
}
function exactMatchToList(driver,object){
  filteredDriver= driver.filter(function(person){return person.name== object.name || person.revenue == object.name})
  return filteredDriver.map(function(person){return person.name})
}
