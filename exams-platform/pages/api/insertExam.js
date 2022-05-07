import database from "../../data/database"

export default async function Handler(req, res) {
    switch (req.method) {
        case 'POST': 
            try {
                let res = await database.query()
            } catch (error) {
                console.log(error)
            }
            break
        case 'GET':
            res.statusCode = 404
            break
    }
}