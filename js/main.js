
function submitIncomeForm() {
    // let month = document.getElementById("month").value;
    // let year = document.getElementById("year").value;
    // let brlSalary = document.getElementById("brlSalary").value;
    // let cadSalary1 = document.getElementById("cadSalary1").value;
    // let cadSalary2 = document.getElementById("cadSalary2").value;
    // let extraIncome = document.getElementById("extraIncome").value;
}

function submitFixedExpensesButton() {
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let shiplake = document.getElementById("shiplake").value;
    let lightBill = document.getElementById("lightBill").value;
    let internet = document.getElementById("internet").value;
    let creditCard1 = document.getElementById("creditCard1").value;
    let creditCard2 = document.getElementById("creditCard2").value;
}

function submitMonthlyExpensesButton() {
    let furniture = document.getElementById("furniture").value;
    let greensVegetables = document.getElementById("greensVegetables").value;
    let rabbitFood = document.getElementById("rabbitFood").value;
    let homeUtensils = document.getElementById("homeUtensils").value;
    let dollarama = document.getElementById("dollarama").value;
    let sobeys = document.getElementById("sobeys").value;
    let flavor = document.getElementById("flavor").value;
    let presto = document.getElementById("presto").value;
    let amazon = document.getElementById("amazon").value;
    let hastyMarket = document.getElementById("hastyMarket").value;
    let farmacy = document.getElementById("farmacy").value;
    let eatOutside = document.getElementById("eatOutside").value;
    let apple = document.getElementById("apple").value;
    let google = document.getElementById("google").value;
    let disney = document.getElementById("disney").value;
}

let month = 1;
let year = 2024;
let brlSalary = 4600;
let cadSalary1 = 1200;
let cadSalary2 = 2000;
let extraIncome = 100;

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(barChart); 

// Function to create a bar chart with the monthly's income
function barChart() {
    var data = google.visualization.arrayToDataTable([
        ['Category', 'Amount'],
        ['Brl Salary', brlSalary],
        ['Primary Salary', cadSalary1],
        ['Secondary Salary', cadSalary2],
        ['Extra Income', extraIncome]
    ]);

    var options = {
        title: 'Monthly Income Report',
        chartArea: {width: '40%'},
        hAxis: {
            title: 'Amount',
            minValue: 0
        },
        vAxis: {
            title: 'Category'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('barChart'));
    chart.draw(data, options);
}

function scrollToGaleria() {
    const galeriaSection = document.getElementById("galeria");
    galeriaSection.scrollIntoView({ behavior: "smooth" });
}

