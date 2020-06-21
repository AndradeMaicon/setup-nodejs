import express from 'express';

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'Foi' })
})

app.listen(3000)