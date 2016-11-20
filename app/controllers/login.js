exports.get = function* () {
  this.body = this.render('login');
}

exports.post = function* () {
  this.body = 'post login';
}
