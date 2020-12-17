//require the Elasticsearch librray
import elasticsearch from 'elasticsearch';

// instantiate an elasticsearch client
const client = new elasticsearch.Client({
   hosts: [process.env.ELASTIC_ADRESS]
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

export = client;