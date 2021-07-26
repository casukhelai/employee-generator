// create switch cases for 
module.exports = {

     pickRoles(data){
        let HTMLblock = "";
        role = data.role;
        console.log("here", data);
        // see where data is getting pulled from
        // console.log(role);
        switch(role){
            case "Manager":
                HTMLblock = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h2 class="card-title">${data[0].name}</h2>
                  <h3><span style="font-weight:bold">Employee ID:</span> ${data[0].id}</h3>
                  <p><span style="font-weight:bold">Role:</span> Manager</p>
                  <p><span style="font-weight:bold">Office Number:</span> ${data[0].officeNumber}</p>
                  <a href="mailto:${data[0].email}" class="card-link">${data[0].email}</a>
                </div>
            </div>`;
            break;
            
            case "Engineer":
                HTMLblock = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h2 class="card-title">${data.name}</h2>
                  <h3><span style="font-weight:bold">Employee ID:</span> ${data.id}</h3>
                  <p><span style="font-weight:bold">Role:</span> Engineer</p>
                  <a href="https://github.com/${data.github}" class="card-link">${data.github}</a>
                </div>
            </div>`
            break;
    
            case "Intern":
                HTMLblock = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h2 class="card-title">${data.name}</h2>
                  <h3><span style="font-weight:bold">Employee ID:</span> ${data.id}</h3>
                  <p><span style="font-weight:bold">Role:</span> Intern</p>
                  <p><span style="font-weight:bold">School:</span>${data.school}</p>
                </div>
            </div>`
            break;
    
            default:
                HTMLblock = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h2 class="card-title">${data.name}</h2>
                  <h3><span style="font-weight:bold">Employee ID:</span> ${data.id}</h3>
                  <p><span style="font-weight:bold">Role:</span> Unspecified</p>
                  <a href="mailto:${data.email}" class="card-link">${data.email}</a>
                </div>
            </div>`
            break;
        }
        return HTMLblock;
    },
    
    // fill in card with the appropriate employee data
     generateCard(data){
        return `<div class="team-area col-4 flex-wrap justify-content-center bg-secondary p-3">
            ${pickRoles(data)}
        </div>`;
    },
    
    // need to keep the cards in place somehow
     keepCards(employees) {
        let HTMLblock = "";
        employees.forEach((data) => {
            HTMLblock += generateCard(data);
        });
        return HTMLblock;
    },
    
    // create a function to generate HTML for the page
     generateHTML(data){
         const test = module.exports.pickRoles(data);
    
        return `
        
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <title>Team Profile Generator</title>
        </head>
    
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 bg-dark text-white">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 flex-wrap justify-content-between bg-secondary p-3">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                ${test}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `;
    }
}