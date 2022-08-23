const filterSearch = ({router, page, category, sort, search, order, scroll = false}) => {
    const path = router.pathname;
    const query = router.query;


    if(category) query.category = category;
    if(page) query.page = page;
    if(search) query.search = search;
    if(sort) query.sort = sort;
    if(order) query.sort = order;

    router.push({
        pathname: path,
        query: query
    }, undefined, { scroll: scroll })
}

export default filterSearch