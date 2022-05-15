import db from '../../../data/database';

export default async (req, res) => {
    switch (req.method){
        case 'GET': 
            res.statusCode = 404; 
            break;
        case 'POST':
            let response = await db.query('SELECT * FROM USERS WHERE USERNAME = $1 AND PASSWORD = $2', [req.body.usernameLogin, req.body.passwordLogin]);
            
            if(response.rows.length > 0){
                let role = ""
                if(response.rows[0].student == true) {
                    role = "student"
                }
                else if(response.rows[0].teacher == true) {
                    role = "teacher"
                }
                res.json({
                    flag: true,
                    nickname: response.rows[0].username,
                    role
                    
                })
            }else{
                res.statusCode = 404;
                res.json({
                    flag: false
                })
            }
            break;
    }
}