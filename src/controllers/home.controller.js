import db from '../database/database.connection.js';

export async function getAllItems(req, res) {
    try {
        const items = await db.collection('items').find().toArray();
        return res.status(200).send(items);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}