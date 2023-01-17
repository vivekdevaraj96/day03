var carSales={
    "Maruti Suzuki": "1,12,010",
    "Tata Motors": "40,045",
    "Hyundai": "38,831",
    "Mahindra": "28,333",
    "Kia India": "15,184",
    "Toyota Kirloskar": "10,421",
    "Honda Cars": "7,062",
    "Renault": "6,126"
};

for(var brand in carSales){
    console.log(`In 2022 totally ${carSales[brand]} units of ${brand} cars has been sold.`);
}


// output

// In 2022 totally 1,12,010 units of Maruti Suzuki cars has been sold.
// In 2022 totally 40,045 units of Tata Motors cars has been sold.
// In 2022 totally 38,831 units of Hyundai cars has been sold.
// In 2022 totally 28,333 units of Mahindra cars has been sold.
// In 2022 totally 15,184 units of Kia India cars has been sold.
// In 2022 totally 10,421 units of Toyota Kirloskar cars has been sold.
// In 2022 totally 7,062 units of Honda Cars cars has been sold.
// In 2022 totally 6,126 units of Renault cars has been sold.