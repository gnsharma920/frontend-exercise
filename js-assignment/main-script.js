const form = document.querySelector("form.search");
const dataGrid = document.querySelector(".mainDiv");
const showData = document.querySelector(".model-container");
const model_container = document.getElementById("model_container");
var allEmployeeData = [];

async function fetchEmployeeData(employeeName) {
  const res = await fetch(`data.json`);
  const data = await res.json();
  allEmployeeData = data.employee;
  console.log(allEmployeeData);
  if (employeeName === "all" || employeeName === "") return allEmployeeData;
  else
    return allEmployeeData.filter((ele) =>
      ele.name.toUpperCase().startsWith(employeeName.toUpperCase())
    );
}

async function handleSubmit(event) {
  event.preventDefault();
  // const el=event.currentTarget;
  fetchAndDisplay(form.search.value);
}

async function fetchAndDisplay(value) {
  const employeesData = await fetchEmployeeData(value);
  displayEmployeeData(employeesData);
}
function displayEmployeeData(employeesData) {
  console.log(employeesData);
  const htmlCode = employeesData.map(
    (employee) => `
        <div class="cards">
                <div class="image">
                    <img src="${employee.image} " alt="image" ">
                </div>
                <div class="title">
                    <h3>Name : ${employee.name}</h3>
                    <button onclick="popupFunction(${employee.id})">Read More</button>
                </div>
        </div>`
  );
  dataGrid.innerHTML = htmlCode.join("");
}

async function popupFunction(employeeId) {
  const employeeDetails = allEmployeeData.filter(
    (employee) => employee.id === employeeId
  );
  model_container.classList.remove("displayNone");
  console.log(employeeDetails);
  const html = `<div class="model fixed">
                    <div>
                        <button class="closeButton" onclick="closeFunction()">&times;</button>
                    </div>
                  <div class="image">
                        <img src="${employeeDetails[0].image} " alt="image" ">
                  </div>
                  <div class="title">
                        <h3>Id : ${employeeDetails[0].id}</h3>    
                        <h3>Name : ${employeeDetails[0].name}</h3>
                  </div>
                  <div class="des">
                        <p>${employeeDetails[0].description}</p>
                  </div>
              </div>`;
  showData.innerHTML = html;
}
function closeFunction() {
  model_container.classList.add("displayNone");
}

form.addEventListener("submit", handleSubmit);
fetchAndDisplay("all");
