module.exports = {
   
    update1: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_binA([params.id, query.desc]).then( () => res.status(200).send() ).catch( () => res.status(500).send() );
    },

    update1: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_binB([params.id, query.desc]).then( () => res.status(200).send() ).catch( () => res.status(500).send() );
    },

    update1: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_binC([params.id, query.desc]).then( () => res.status(200).send() ).catch( () => res.status(500).send() );
    },

    update1: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.update_binD([params.id, query.desc]).then( () => res.status(200).send() ).catch( () => res.status(500).send() );
    },

    select: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.select_bin().then( products => res.status(200).send(products)).catch( () => res.status(500).send() );
    },



};