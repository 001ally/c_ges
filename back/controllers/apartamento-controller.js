const router = require("../routes/api")

module.exports = {
    async apart(req, res) {
        const { apartamento } = req.db
        const { andar, numero, idedificio, numerofixo, } = req.body
        const apartamentos = await apartamento.findAll({
            attributes: [
                "idapartamentos",
                "andar",
                "numero",
                "edificio_idedificio",
                "numerofixo"
            ]
        })
       
        res.json(apartamentos)
    },

    async getAptByIdEdificio(req, res, params) {

        const { id } = req.params;

        console.log(req.params)
        console.log(id)

        const { apartamento } = req.db
        const { andar, numero, idedificio, numerofixo, } = req.body
        const apartamentos = await apartamento.findAll({
            where: { edificio_idedificio: id },
            attributes: [
                "idapartamentos",
                "andar",
                "numero",
                "edificio_idedificio",
                "numerofixo"
            ]
        })

        res.json(apartamentos)
    },
    async createApart (req, res) {

        const {
            andar,
            numero,
            edificio_idedificio,
            numerofixo
        } = req.body
        const { apartamento } = req.db
        const apartamentos = await apartamento.create({
            andar, numero, edificio_idedificio, numerofixo
        })
        res.json(apartamentos)
    },
}


