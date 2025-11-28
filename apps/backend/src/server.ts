import express from 'express'
import { Request, Response } from 'express'

import { createUser, getUserById } from '@monor/db/actions'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/user/create', async (req: Request, res: Response) => {
	console.log('INCOMING REQ BODY:', req.body)
  const data = {
    email: req.body.email,
    name: req.body.name,
  }
  await createUser(data)
  res.json({ message: 'Data received' })
})

app.get('/api/user/:id', async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10)
  const user = await getUserById(userId)
	res.json(user)
})

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})
