module.exports = {
    async index(req, res) {
        let result = []
        const { edificio } = req.db
        const { apartamento } = req.db
        const { user } = req.db
        
        const { userId } = req.params;

        console.log(userId);

        const edificios = await edificio.findAll({
            where: { user_iduser: userId },
            attributes: [
                "idedificio",
                "nome",
                "fotografia",
                "user_iduser"]})
      
        res.json(edificios)
    }
}