const db = require("../db");

const Customer = {
  getAll: (callback) => {
    db.query("SELECT * FROM customers", callback);
  },
  add: (name, email, gender, callback) => {
    db.query(
      "INSERT INTO customers (name, email, gender) VALUES (?, ?, ?)",
      [name, email, gender],
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result.insertId);
        }
      }
    );
  },
  find: (id, callback) => {
    db.query("SELECT * FROM customers WHERE customerID = ?", [id], callback);
  },
  update: (id, field, value, callback) => {
    db.query(
      `UPDATE customers SET ${field} = ? WHERE customerID = ?`,
      [value, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query("DELETE FROM customers WHERE customerID = ?", [id], callback);
  },
};

module.exports = Customer;
