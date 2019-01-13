var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "sercav1575",
    database: "bamazon"
  });

// Aqui me conecto al mysql server y al sql Database
connection.connect(function(err) {
    if (err) throw err;
    // Aqui corro la aplicación con la que quiero iniciar mi programa
    start();
    // listAll(); // Para prueba dejo esta
  });

  function start() {
    // Para que me enliste todos los productos
    listAll();
    // Aqui hago todas las preguntas
    inquirer
      .prompt([{
        name: "iduwant",
        type: "input",
        message: "Tell me  the ID of the Product you want to buy : \n",
      },
      { name: "qtyuwant",
        type: "input",
        message: "Tell me the quantity of the Product you want to buy :\n",
      }])
      .then(function(answer) {
    // En base a las respuestas | Almaceno los resultados en variables
        var request = answer.iduwant;
        var quantity = answer.qtyuwant;
        var query = "SELECT stock_quantity FROM products WHERE item_id = ?"
        connection.query(query, request, function(err, res) {
          var x = res[0].stock_quantity // Separ el valor del objeto y lo guardo en var x
            if (err) throw err;
            if (quantity > x) {
                console.log("Insufficient quantity!")
                connection.end();
            } else {
                checkout(x,quantity,request);
                // x = inventario real actual
                // quantity = cantidad de material el cliente quiere
                // request = el ID del material que el cliente quiere
            }
        });

      });
    };

// Esta función es para que me pase toda la lista de productos actualmente en el inventario
      function listAll() {
        connection.query("SELECT item_id, product_name, price FROM products", function(err, res){
            if (err) throw err;
            console.log("Este es nuestro catálogo: \n");
            console.table(res);
        });

        /* inquirer
          .prompt([{
            name: "confirm",
            type: "confirm",
            message: "Do you want to buy something?",

          }])
          .then(function(answer) {
            console.log(answer.confirm);
            if (answer.confirm == false)  {
              connection.end();
            }
          }) */
      };

// Esta función es para calcular el total de la orden
  // x = inventario real actual
  // quantity = cantidad de material el cliente quiere
  // request = el ID del material que el cliente quiere

function checkout(x,quantity,request) {
var newqty = parseInt(x) - parseInt(quantity);
  connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newqty, request], function(err,result) {
    if (err) throw err;
  });
  connection.query("SELECT price FROM products WHERE item_id = ?", request, function(err, result) {
    if (err) throw err;
    var y = result[0].price;
    var total = y * quantity;
    console.log ("Your total is : "+total);
    connection.end();
  });
};