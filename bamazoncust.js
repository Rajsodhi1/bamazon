var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Welcome to Beach City Traders!");
    // console.log("   _____ ____ _____");
    // console.log("  /    /      \    \ ");
    // console.log("/____ /_________\____\ ");
    // console.log("\    \          /    / ");
    // console.log("   \  \        /  / ");
    // console.log("      \ \    / / ");
    // console.log("        \ \/ / ");
    // console.log("          \/");

    openStore();
  });

var openStore = function() {
    connection.query("SELECT * FROM products", function(err, res){
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " 
            + res[i].product_name + " | " 
            + res[i].department_name + " | " 
            + res[i].price + " | " 
            + res[i].stock_quantity);
            console.log("------------------------------------------------");
            }
            prompt(res);
        }
    )}

var prompt = function(res) {
    inquirer
    .prompt({
        type: "input",
        name: "purchase",
        message: "Hey did you see something you like? Please tell me the item ID! Type bye to leave, if you really want :("
    })
    
    .then(function(answer) {
        console.log(answer);
       // return
        var match = false;
        var quit = answer.purchase;
        if (quit == "bye"){
            process.exit();
        }
        for (var i=0; i <res.length; i++) {
            if (answer.purchase == res[i].item_id) {
                match = true;
                var id = i;
                inquirer
                .prompt({
                    type: "input",
                    name: "amount",
                    message: "That's great! How many would you like to buy?",
                    validate: function(number) {
                        if (isNaN(number) == false) {
                            return true;
                        } else {
                                return false;
                            }
                        }
                    })
                    .then(function(answer) {
                        if((res[id].stock_quantity - answer.amount) > 0) {
                            connection.query("UPDATE products SET stock_quantity ='" + (res[id].stock_quantity - answer.amount) +"' WHERE item_id = '"+id+"'",
                            function(err, res2) {
                                console.log("You got it, thanks!");
                                openStore();
                            })
                        } else {
                            console.log("I'm so sorry that doesn't work!");
                            prompt(res);
                        }
                    })
                }           
            }
            if(i == res.length && match==false) {
                console.log("I'm so sorry that doesn't work!");
                prompt(res);
            }
    })
}








