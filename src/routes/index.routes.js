import { Router } from 'express';

const router = Router()
router.get('/', (req, res) => {
  res.send('<h1>Bienvenido</h1>')
  console.log('Has llegado')
})

export default router

