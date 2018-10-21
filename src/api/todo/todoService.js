const Todo = require('./todo')

//Metodos rest completo Node Restful!
Todo.methods(['get', 'post', 'put', 'delete'])

//Traz o registro novo e roda as vlaidações para updates
Todo.updateOptions({new: true, runValidators: true})

 module.exports = Todo