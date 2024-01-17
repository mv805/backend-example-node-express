const Customer = require("../models/Customer");

const CustomerController = {
  index: (req, res) => {
    Customer.getAll((err, results) => {
      if (err) throw err;
      res.render("index", { data: results, user: null });
    });
  },
  add: (req, res) => {
    const { name, email, gender } = req.body;
    Customer.add(name, email, gender, (err, results) => {
      if (err) throw err;
      res.redirect("/");
    });
  },
  find: (req, res) => {
    const id = req.query.id;
    Customer.find(id, (err, result) => {
      if (err) throw err;
      const foundUser = result[0];
      Customer.getAll((err, allCustomers) => {
        if (err) throw err;
        res.render("index", { user: foundUser, data: allCustomers });
      });
    });
  },
  update: (req, res) => {
    const { id, field, value } = req.body;
    Customer.update(id, field, value, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  },
  delete: (req, res) => {
    const id = req.body.id;
    Customer.delete(id, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  },
};

module.exports = CustomerController;
