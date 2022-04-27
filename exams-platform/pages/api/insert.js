import database from "../../data/database"

export default async function Handler(req, res) {
    const {method, body} = req;
    if (method == 'POST') {
        console.log(req)
        database.push({
            name: body.name,
            lastname: body.lastname,
            student: body.student,
            teacher: body.teacher,
            username: body.username,
            password: body.password
        })

        res.send({
            response: "Hello World"
        })
    }
    else {
        res.status(404)
    }
}