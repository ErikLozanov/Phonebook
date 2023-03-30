const phonebook = require('../phonebook');
const Contact = require('../models/Contact');
module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: phonebook.getPhonebook()
    });
    
  },
  addPhonebookPost:(req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    let address = req.body.address;
    let contact = new Contact(name, number, address);
    phonebook.addContact(contact);
    res.redirect('/');
  }
}