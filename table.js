 // create a 2-dimentional array that is going to hold all of our info about the pizzas
        // each row of info about a particular pizza will be an array
        // all of the rows will also live in an array
        let arrPizzas = [
        ["Cheese", "Vegetarian", "cheese", 10, 1000], //this was one row of information from our excel file - it is now an array nested within out 2d array  
        ["Pepperoni", "Meat", "cheese, pepperoni", 12, 1200],
        ["Hawaiian", "Meat", "cheese, ham, pineapple", 15, 1500],
        ["Veggies", "Vegitarian", "cheese, veggies", 12, 1200],
        ["Deep Dish", "Meat", "cheese, extra dough, ham", 15, 2000]        
        ];
        
function buildRows(){
    // set up constants to refer to the columns of data
    const NAME = 0;
    const CATEGORY = 1;
    const INGREDIENTS = 2;
    const PRICE = 3;
    const CALORIES = 4;

    // loop through the array of pizzas and add them to the table
    for (let i=0; i<arrPizzas.length; i++){
        // create a new row that will be added to the table
        let tr = document.createElement("tr");

        // for each piece of information we want to display - we need to add that to a td which will be added to the row
        let tdName = document.createElement("td");
        // add the name to the row
        tdName.textContent = arrPizzas[i][NAME];
        tr.appendChild(tdName);
        
        // add the category to the row
        let tdCat = document.createElement("td");
        tdCat.textContent = arrPizzas[i][CATEGORY];
        tr.appendChild(tdCat);

        // add the ingredients to the row
        let tdIngr = document.createElement("td");
        tdIngr.textContent = arrPizzas[i][INGREDIENTS];
        tr.appendChild(tdIngr);

        // add the price to the row
        let tdPri = document.createElement("td");
        tdPri.textContent = "$" + arrPizzas[i][PRICE];
        tr.appendChild(tdPri);

        // add the calories to the row
        let tdCal = document.createElement("td");
        tdCal.textContent = arrPizzas[i][CALORIES];
        tr.appendChild(tdCal);



        // need to add the row to the table
        document.getElementById("tblPizza").appendChild(tr);
    }

    
}
// call the function to build the table rows
buildRows();