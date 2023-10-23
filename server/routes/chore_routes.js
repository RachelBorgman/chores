const ChoreController = require('../controllers/chore_controller');

module.exports = (app) => {
    app.get('/api/chores', ChoreController.findAllChores);
    app.get('/api/chores/:id', ChoreController.findOneSingleChore);
    app.patch('/api/chores/:id', ChoreController.updateExistingChore);
    app.post('/api/chores', ChoreController.createNewChore);
    app.delete('/api/chores/:id', ChoreController.deleteAnExistingChore);
}