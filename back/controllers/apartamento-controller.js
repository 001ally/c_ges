module.exports = {
    async apart(req, res){
        const { apartamento } = req.db

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
        } 
}


