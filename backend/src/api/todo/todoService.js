const TodoModel = require('./todo');

TodoModel.methods(['get', 'post', 'delete', 'put']);
TodoModel.updateOptions({new: true, runValidators: true});

module.exports = TodoModel;