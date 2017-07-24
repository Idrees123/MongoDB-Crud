var Tasks = require('./model');
var mongoose = require('mongoose');
//apis

exports.insert = function (req, res, next) {
    let taskId = mongoose.Types.ObjectId()
    let task = new Tasks({
        _id : taskId ,
        taskid: req.body.taskid,
        task: req.body.task,

    });
    task.save(function (err, task) {
        if (err) throw err;

        else {

            console.log('task saved successfully!');

            res.status(200);

            res.json({
                message: "task inserted",
                data: task
            })
        }
    });


}

exports.delete = function (req, res, next) {

    Tasks.remove({'taskid':req.params.taskid},function (err, task) {
        if (err) throw err;

        else {
            console.log('task deleted successfully!');

            res.status(200);

            res.json({
                message: "task deleted",
                data: task
            })
        }

    });

}


exports.read = function (req, res, next) {
    console.log("in API ",req.userDetails);
    Tasks.find({'taskid':req.params.taskid},function (err, task) {
        if (err) throw err;

        else if(task==""){
            console.log('task not found!');

            res.status(200);

            res.json({
                message: "notFound",

            })
        }
        else{
            res.status(200);

            res.json({
                message: "Here is your task",
                data: task
            })
        }

    });

}


exports.update = function (req, res, next) {

    Tasks.findOneAndUpdate({'taskid':req.params.taskid}, {$set:{'task':req.body.task}}, {upsert: false,new : true})
        .then(function (task) {
            res.status(200);

            res.json({
                message: "Here is your task",
                data: task
            })
        }).catch(function (err) {
            res.send(err)
    })

}
