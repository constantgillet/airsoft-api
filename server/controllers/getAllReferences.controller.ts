import elasticSearchClient from '../helpers/elasticSearchClient';
import {parseESResultHits} from '../helpers/elasticSearchHelper';

export = async (req: any, res: any) => {

    //Set query
    const query: string = req.query.q;

    //Set limit if it ewists in parameters, set to 8 if not
    const limit: number = Number(req.query.limit) || 8;

    const orderBy: string | null = req.query.order_by;

    let category: string = req.query.category;

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

    /**
     * SORT
     */
    let _sort: Array<object> = [
        { id: 'desc' }
    ]

    switch (orderBy) {
        case 'id_asc':
            _sort = [
                { id: 'asc' }
            ]
            break;

        case 'price_asc':
            _sort = [
                { price: 'asc' }
            ]
            break;

        case 'power_asc':
            _sort = [
                { power: 'asc' }
            ]
            break;

        case 'power_desc':
            _sort = [
                { power: 'desc' }
            ]
            break;

        case 'weight_asc':
            _sort = [
                { weight: 'asc' }
            ]
            break;

        case 'weight_desc':
            _sort = [
                { weight: 'desc' }
            ]
            break;

        case 'length_asc':
            _sort = [
                { length: 'asc' }
            ]
            break;

        case 'length_desc':
            _sort = [
                { length: 'desc' }
            ]
            break;
    
        default:
            break;
    }

    /**
     * CATEGORY 
     */
    //Filters, type object
    const _filters: { term?: object, terms?: object }[] = [
        {term: { status: '0' }}
    ]

    //add category to filters
    if (category) {
        category = category.toLowerCase();
        _filters.push({term: { category: category }})
    }

    let body = {
        size: limit,
        from: 0,
        sort: _sort,
        query: {
            bool: {
                must: _must,
                filter: _filters
            }
        }
    }

    // perform the actual search passing in the index, the search query and the type
    elasticSearchClient.search({index:'airsoft-api-references',  body:body, type:'object'})

    .then(async (results: any) => {

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
        res.status(400).json({
            code: 400,
            status: 'error',
            message: 'An error has happened',
            error: {
                name: 'internalError',
                message: 'An internal error happend'
            }
        });
    });

    

}
