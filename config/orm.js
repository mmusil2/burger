var connection = require("./connection");

// selectAll()
// insertOne()
// updateOne()


// module.exports = ***


var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    // INSERT INTO burgers (burger_name, devoured) VALUES ("New Bacon-Ings Burger", 0)
    insertOne: function(tableInput, burger_name, cb) {
      var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) " + "VALUES ('" + burger_name + "', 0);"
      console.log(queryString);

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }


    // selectAll: function() {
    //   // var queryString = "SELECT * FROM ? WHERE ? = ?";
    //   connection.query("SELECT * FROM burgers WHERE devoured = 0", function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // }


    
    // insertOne: function(whatToSelect, table, orderCol) {
    //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    //   console.log(queryString);
    //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
    // },
    // updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    //   var queryString =
    //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
    //   connection.query(
    //     queryString,
    //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    //     function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     }
    //   );
    // }
  };
  
  module.exports = orm;