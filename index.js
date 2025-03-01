
  const employee = {
    name: "John Doe",
    streetAddress: "123 Main St, Springfield"
  };
;

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Use the spread operator to copy all properties of employee and update the specified key
  return {
    ...employee,        // Spread the original employee object into a new one
    [key]: value        // Dynamically set the key to the new value
  };
}

const updateEmployee = nondestructivelyUpdateEmployee(
  employee,
  "name",
  "gilbert"
);

employee.name;
//=> "John Doe

updadateEmployee.name;
//=> "gilbert"

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Directly update the original employee object by setting the key to the new value
  employee[key] = value;
  return employee; // Return the mutated employee object
}

function deleteFromEmployeeByKey(employee, key) {
  // Create a copy of the employee object using the spread operator
  const newEmployee = { ...employee };
  
  // Delete the specified key from the copied object
  delete newEmployee[key];
  
  // Return the new object without the specified key
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  // Delete the specified key from the original employee object
  delete employee[key];
  
  // Return the mutated employee object
  return employee;
}
