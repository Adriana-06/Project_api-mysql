document.addEventListener('DOMContentLoaded', function () {
               
                 
fetch('http://localhost:3000/Project/api/companies/1')
  .then((response) => response.json())
  .then((company) => {
    console.log(company);
    load_header(company);
    load_main(company);
  })

  function load_main(main_information) {
   const createBTR = document.getElementById('createBTR');
   createBTR.addEventListener('click', function () {
   });
  }

});

