import elasticSearchClient from '../helpers/elasticSearchClient';
import {parseESResultHits} from '../helpers/elasticSearchHelper';

export = async (req: any, res: any) => {

    const query = req.query['q'];

    interface Must {
        match?: object,
        match_all?: object
    }



    let _must: Must = {
        match: {               
            name: {
                query: query,
                fuzziness: 'AUTO'
            },
        }
    }

    if (!query) {
        _must = {
            match_all: {}
        }
    }
    
    //Filters, type object
    const _filters: { term?: object, terms?: object }[] = [
        {term : { status : '1' }}
    ]

    // declare the query object to search elastic search and return only 200 results from the first result found. 
    // also match any data where the name is like the query string sent in
    let body = {
        size: 8,
        from: 0, 
        query: {
            bool: {
                must : {
                    match_all: {}
                },
            }
        }
    }

    // perform the actual search passing in the index, the search query and the type
    elasticSearchClient.search({index:'airsoft-api-references',  body:body, type:'object'})

    .then(async (results: any) => {

        console.log(results)

        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'You got the references',
            data: {
                references: parseESResultHits(results.hits.hits)
            }
        });
    })
    .catch((err: any) =>{
        console.log(err)
        res.send([]);
    });

    

}
