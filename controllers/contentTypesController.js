class contentTypesController{
    constructor(contentTypesService){
        this.contentTypesService = contentTypesService;
    }
    async getContentTypes(req, res) {
        try {
          const contentTypes = await this.contentTypesService.getContentTypes();
          res.json(contentTypes);
        } catch (error) {
          console.error('Error fetching Contentful models:', error);
          res.status(error.status || 500).send(error.message || 'Error fetching Contentful models');
        }
    }

    async getModelIds(req, res){
        try{
            const modelIds = await this.contentTypesService.getModelIds();
            res.json(modelIds);
        }catch(error){
            console.error('Error fetching Contentful models:', error);
            res.status(error.status || 500).send(error.message || 'Error fetching Contentful models');
        }
    }

    async getEntriesByContentTypeId(req,res){
        const {contentTypeId} = req.params;
        try{
            const entries = await this.contentTypesService.getEntriesByContentTypeId(contentTypeId);
            // console.log(entries);
            res.json(entries);
        }catch(error){
            console.error('Error fetching the entries:', error);
            res.status(error.status || 500).send(error.message || 'Error fetching entries');
        }
           
    }
}

module.exports = contentTypesController;