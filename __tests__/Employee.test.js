// install and run jest & inquirer

const Employee = require('../lib/Employee');

// test every name, id, email, getName(), getId(), getEmail(), getRole()
describe("Employee", () => {
    // name
    it("getName() should return employee name", () => {
        const name = "Henry Spencer"
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    // id
    it("getID() should return the employee ID number", () => {
        const id = "1";
        const employee = new Employee("Henry Spencer", id, "henry@psych.com");
        expect(employee.id).toBe(id);
    });

    // email
    it("getEmail() should return employee email", () => {
        const email = "henry@psych.com";
        const employee = new Employee("Henry Spencer", 1, email);
        expect(employee.getEmail()).toBe(email);
    });
 
    it("getRole() should return 'employee' ", () => {
        const role = "Employee";
        const employee = new Employee("Henry Spencer", 1, "henry@psych.com");
        expect(employee.getRole()).toBe(role);
    });

});




  
