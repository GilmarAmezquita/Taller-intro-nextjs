import {db} from '../../../data/database';

export default async (req, res) => {
    switch (req.method){
        case 'GET': 
            res.statusCode = 404; 
            break;
        case 'POST':
            const response = await db.query('SELECT * FROM USERS WHERE USERNAME = $1 AND PASSWORD = $2', [req.body.username, req.body.password]);
            if(response.rows && response.length > 0){
                res.json({
                    flag: true,
                    nickname: response.rows[0].username
                })
            }else{
                res.json({
                    flag: false
                })
            }
            break;
    }
}