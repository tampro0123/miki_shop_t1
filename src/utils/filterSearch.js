const filterSearch = ({router, page, category, sort, search, scroll = false}) => {
    const path = router.pathname;
    const query = router.query;


    if(category) query.category = category;
    if(page) query.page = page;
    if(search) query.search = search;
    if(sort) query.sort = sort;

    router.push({
        pathname: path,
        query: query
    }, undefined, { scroll: scroll })
}

export default filterSearch