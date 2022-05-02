import {db} from '../../../data/database';

export default async (req, res) => {
    const {method, body} = req;
    if(method == 'GET'){
        const query = "SELECT * FROM USERS WHERE USERNAME = '"+req.query.username+"'";
        const response = await db.query(query);
        if(response.rows[0] == undefined){
            return res.status(400).json({username: req.query.username});
        }else{
            return res.status(200).json(response.rows[0]);
        }
    }else{
        return res.status(400).json('methos not allowed');
    }
}