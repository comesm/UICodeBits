export function startListener(history, store) {
    console.log(2, history);
    store.dispatch(locationChange({
        pathname: history.location.pathname,
        search: history.location.search,
        hash: history.location.hash       
    }));       

    history.listen((location) => {
    store.dispatch(locationChange({
        pathname: location.pathname,
        search: location.search,
        hash: location.hash 
    })) 
    })

}