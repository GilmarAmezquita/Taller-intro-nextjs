import database from "../../data/database"

export default async function Handler(req, res) {
    const {method, body} = req;
    if (method == 'POST') {
        //console.log(req)

        try {
            let response = await database.query('INSERT INTO USERS VALUES ($1, $2, $3, $4, $5, $6)', [
                body.name, body.lastname, body.student, body.teacher, body.username, body.password
            ])
    
            res.send({
                response: "Hello World"
            })
        } catch (error) {
            console.log(error)
        }
    }
    else {
        res.status(404)
    }
}