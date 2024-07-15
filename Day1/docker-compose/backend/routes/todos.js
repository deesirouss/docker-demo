const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../knexfile').development);

// Create a new todo
router.post('/todos', async (req, res) => {
  try {
    const { title, completed } = req.body;
    const all = await knex.raw(
      `INSERT INTO todos (title, completed) VALUES (?, ?) RETURNING id`,
      [title, completed]
    );
    const id = all.rows[0].id
    res.status(201).json({ id, ...req.body });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await knex.raw(`SELECT * FROM todos`);
    res.status(200).json(todos.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a todo
router.put('/todos/:id', async (req, res) => {
  try {
    const { title, completed } = req.body;
    await knex.raw(
      `UPDATE todos SET title = ?, completed = ? WHERE id = ?`,
      [title, completed, req.params.id]
    );
    res.status(200).json({ ...req.body, id: req.params.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a todo
router.delete('/todos/:id', async (req, res) => {
  try {
    await knex.raw(`DELETE FROM todos WHERE id = ?`, [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
