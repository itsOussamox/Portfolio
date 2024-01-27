'use server';

export default function handler(req : any, res : any) {
    console.log(req.body)
    res.status(200).json({ name: 'John Doe' })
}