const elasticsearch = require('elasticsearch');

// instantiate an elasticsearch client
const client = new elasticsearch.Client({
    hosts: ['http://localhost:9200']
 });
 
 // ping the client to be sure Elasticsearch is up
client.ping({
     requestTimeout: 30000,
 }, (error) => {
 // at this point, eastic search is down, please check your Elasticsearch service
     if (error) {
         console.error('elasticsearch cluster is down!');
     } else {
         console.log('🔍[server]: Elasticsearch is started');
     }
});


/* Delete index */
const deleteElasticIndex = () => {
    client.indices.delete({
        index: 'airsoft-api-references',
    }).then(function(resp) {
        console.log('Successfuly deleted!');
        // console.log(JSON.stringify(resp, null, 4));
    }, function(err) {
        console.trace(err.message);
    });
}

deleteElasticIndex();