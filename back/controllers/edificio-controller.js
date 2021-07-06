module.exports = {
    async index(req, res) {
        let result = []
        const { edificio } = req.db
        const { apartamento } = req.db
        const { user } = req.db
        const edificios = await edificio.findAll({
            attributes: [
                "idedificio",
                "nome",
                "fotografia",
                "user_iduser"]})
        edificios.forEach(element => {
            const apartamentos =  apartamento.findOne({
             where: {edificio_idedificio: element.idedificio},
                attributes: [
                    "idapartamentos",
                    "andar",
                    "numero",
                    "edificio_idedificio" ],})
            element.apartamentos = apartamentos;
            result.push(element)
        });
        // const _edificios =  edificio.create({
        //     nome,fotografia, user_iduser
        // })
        res.json(result)
    }
}