import app from './app.js'
import type { Request, Response } from 'express'

const PORT = 3000

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ status: "OK" })
})


app.listen(PORT, ()=>{
    console.log('Server running...')
})