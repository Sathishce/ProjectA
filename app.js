const express = require('express');
const contentful = require('contentful');
const ContentTypesController = require('./controllers/contentTypesController');
const ContentfulRepository = require('./repositories/contentfulRepository');
const ContentTypesService = require('./services/contentTypesService');

const app = express();

const contentfulClient = contentful.createClient({
  space: 'i5kkknzh1ywi',
  accessToken: 'cloplEyBmTt7SjZuTmzm3Zw4q_Sp6eQYrwwaqr0jBtQ',
  environment: 'Dev'
});

const contentfulRepository = new ContentfulRepository(contentfulClient);
const contentTypesService = new ContentTypesService(contentfulRepository);
const contentTypesController = new ContentTypesController(contentTypesService);

app.get('/models', (req, res) => contentTypesController.getContentTypes(req, res));
app.get('/models/ids', (req, res) => contentTypesController.getModelIds(req, res));
app.get('/models/:contentTypeId/entries',(req,res) => contentTypesController.getEntriesByContentTypeId(req,res));

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
