var chalk = require('chalk');
var babel = require('babel-core');
var options = require('../index');

babel.transformFile(`${process.cwd()}/tests/input.js`, options, function (err, result) {
  if (err) {
    console.log(chalk.red('babel compliation failed:'));
    console.log(err);
    process.exit(1);
  }
  console.log(chalk.green('babel complied without errors'));
});
