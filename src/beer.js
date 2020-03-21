const key='32b6bc7e96b147fdd25331cab98426e1';


const useBeerApi = {
    byBeer: (search) => new Promise((resolve, reject) =>{
        const BEER_API_URL = `https://sandbox-api.brewerydb.com/v2/beers?name=${search}&?key=${key}`;
    
        fetch(BEER_API_URL)
        .then(response => response.json())
        .then(data => {
            resolve(data)
        })
        .catch(err => reject(err))
    }),


    byBrewery: (search) => new Promise((resolve, reject) =>{

    })
};

//useBeerApi.byBeer("Murican Pilsner");
//useMovieApi.byId("tt0184297");

export default useBeerApi;
