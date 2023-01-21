const ProductService = require("../services/product-service");


module.exports = (app) => {
    
    const service = new ProductService();
    app.use('/app-events',async (req,res,next) => {

        const { payload } = req.body;

        //handle subscribe events
        service.SubscribeEvents(payload);

        console.log("============= Product service receive ================");
        console.log(payload);
        res.json(payload);

    });

}