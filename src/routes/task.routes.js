const express = require("express");

const TaskModel = require("../models/task.model");
const TaskController = require("../controllers/task.controller");

const router = express.Router();

router.get("/", async (req, res) => {
    return new TaskController(req, res).getTasks();
});

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getTasksByID();
});

router.post("/", async (req, res) => {
    try {
        const newTask = new TaskModel(req.body);

        await newTask.save();

        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskData = req.body;

        const taskToUpdate = await TaskModel.findById(taskId);

        const allowedUpdates = ["isCompleted"];

        const requestUpdates = Object.keys(req.body);

        for (Update of requestUpdates) {
            if (allowedUpdates.includes(Update)) {
                taskToUpdate[Update] = taskData[Update];
            } else {
                return res.status(500).send("Esse(s) não são editáveis");
            }
        }
        await taskToUpdate.save();
        return res.status(200).send(taskToUpdate);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const taskId = req.params.id;

        const taskToDelete = await TaskModel.findById(taskId);

        if (!taskToDelete) {
            return res.status(404).send("Essa tarefa não foi encontrada");
        }

        const deletedTask = await TaskModel.findByIdAndDelete(taskId);

        res.status(200).send(deletedTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
