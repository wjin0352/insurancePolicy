const path = require('path');

const MainController = function() {};

MainController.prototype.getRoot = (req, res) => {
  console.log('DIRECTORY NAME:: ',path.join(__dirname, '../../../index.html'))
  res.sendFile(path.resolve(__dirname, '../../../index.html'));
}

module.exports = MainController.prototype;
