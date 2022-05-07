import database from "../../data/database"

export default async function Handler(req, res) {
    console.log(req)
    const {method, body} = req;
    if (method == 'POST') {
        try {
            let response = await database.query('INSERT INTO EXAMS VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',[
                body.createdBy, 
                body.idCode, 
                body.accesCode, 
                body.title,
                body.description,
                body.question,
                body.answerA,
                body.answerB,
                body.answerC,
                body.answerD,
                body.answer
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