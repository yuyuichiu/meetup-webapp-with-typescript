import type { NextApiRequest, NextApiResponse } from 'next'

export default function Handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ name: 'This is some returned value from your dear api handler' })
  }
  
  if (req.method === 'POST') {
    return res.status(200).json({ title: 'Some value for server side testing.' })
  }
}