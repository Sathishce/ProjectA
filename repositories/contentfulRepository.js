class ContentfulRepository {
    constructor(contentfulClient) {
      this.contentfulClient = contentfulClient;
    }
  
    async getContentTypes() {
      return this.contentfulClient.getContentTypes();
    }

    async getEntriesByContentTypeId(contentTypeId){
      return this.contentfulClient.getEntries({
        content_type : contentTypeId,
      });
    }
  }
  
module.exports = ContentfulRepository;