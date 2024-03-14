const fs = require('fs');
const path = require('path');

class ContentTypesService {
    constructor(contentfulRepository) {
      this.contentfulRepository = contentfulRepository;
    }
  
    async getContentTypes() {
      const response = await this.contentfulRepository.getContentTypes();
      return response.items;
    }

    async writeModelToFile(model){
       const filePath = path.join(__dirname,'../models',`${model.sys.id}.json`);
       fs.writeFileSync(filePath, JSON.stringify(model, null, 2));
    }

    async writeModelsToFiles(models){
        models.forEach(model => this.writeModelToFile(model))
    }
  
    async getModelIds() {
      const response = await this.contentfulRepository.getContentTypes();
      this.writeModelsToFiles(response.items); 
      return response.items.map(item => item.sys.id);
    }

    async getEntriesByContentTypeId(contentTypeId){
      const response = await this.contentfulRepository.getEntriesByContentTypeId(contentTypeId);
      return response.items;
    }
  }
  
module.exports = ContentTypesService;
  