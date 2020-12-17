import elasticSearchClient from './elasticSearchClient';
import db from './dbConfig';

export const parseESResultHits = (resultHits: any):Array<Object> | boolean => {

    console.log('test')

    const results:Array<Object> = [];

    resultHits.forEach((element: any) => {
        results.push(element._source)
    });
    return results;
}

export const syncElasticToMysql = () => {
    const references: Array<Object> = [];

    db.query('SELECT * FROM airsoft_references', function(err, rows: any, fields) {
        if (rows) {
            rows.forEach((reference: Object) => {
                references.push(reference)
            });

            const bulk: Array<Object> = [];

            references.forEach((annonce: {id?: Number}) =>{
                bulk.push({
                    index:
                        { 
                            _index: 'airsoft-api-references', 
                            _type: 'object',
                            _id: annonce.id
                        }          
                    })
                bulk.push(annonce)
            })

            //perform bulk indexing of the data passed
            elasticSearchClient.bulk({body:bulk}, ( err, response  ) => { 
                //console.log(bulk)
                if( err ){
                    console.error("Failed Bulk operation", err) 
                } else { 
                    //console.log(`successfully synchronised ${annonces.length} annonces to ElasticSearch.`); 
                } 
            });

        } else {
            console.error(err)
        }
        // Connection is automatically released when query resolves
    })
}