const mongoose =require("mongoose");
const TaskSchema=.Schema({
    description: {
        type: String,
        required:true,
    },
    isCompleted: {
        type:Boolean,
        default:false
    }

})

const TaskModel =mongoose.model('Task,', TaskSchema);

module.exports=TaskModel;