
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
//build connection with db
mongoose.connect('mongodb://localhost:27017/mydb');

// create a schema
var TaskSchema = new Schema({

    taskid: { type:Number, required: true, unique: true },
    task: { type: String, required: true },

});

// the schema is useless so far
// we need to create a model using it
var Tasks = mongoose.model('tasks', TaskSchema);


module.exports = Tasks;
