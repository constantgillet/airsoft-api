import elasticSearchClient from '../helpers/elasticSearchClient';
import {parseESResultHits} from '../helpers/elasticSearchHelper';

export = async (req: any, res: any) => {

    //Set query
    const query: string = req.query.q;

    //Set limit if it ewists in parameters, set to 8 if not
    let limit: number = Number(req.query.limit) || 8;

    /**
     * QUERY FOR SEARCHING NAME
     */
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

    let body = {
        size: limit,
        from: 0, 
        query: {
            bool: {
                must : _must
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
