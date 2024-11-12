import { Request,Response } from 'express'
import { fireStore } from "../firebase";


//Get
export const getCollection = async (_req: Request, res: Response) =>{
    try {
        const snapshot = await fireStore.collection('Users').get();
        const items = snapshot.docs.map((doc: { id: any; data: () => any; }) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(items);
        } catch (error) {
        console.error('Error obteniendo documentos:', error);
        res.status(500).send('Error interno del servidor');
        }
}