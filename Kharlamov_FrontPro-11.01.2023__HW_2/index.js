//Вариант 1
let valueHours = prompt('Enter the time in hours below to get the value converted to seconds');

alert (`Results: ${valueHours} hours = ` + ((60 * +valueHours) * 60) + ' seconds');

// Вариант 2
/*
let valueHours = prompt('Enter the time in hours below to get the value converted to minutes and seconds');
let valueMinutes = Number(valueHours * 60);
let valueSeconds = Number (valueMinutes * 60);

alert(`Results: ${valueHours} hours = ${valueMinutes} minutes or ${valueSeconds} seconds`);
*/
