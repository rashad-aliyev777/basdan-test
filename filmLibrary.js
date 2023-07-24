import { Film } from "./film.js";





export const filmLibrary = {
    API_KEY : "a7f940bd1d00c00596bbdf4b16a803b9",
    filmList : [],

    async getMelumatlariGetir() {
        try {
         const cavab = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}`) 
         const melumat = await cavab.json()   

         console.log(melumat.results);
        }

        catch(xeta) {
            console.log("Xetanin Sebebi " + xeta)
        }
    },

    baslat() {
        this.getMelumatlariGetir()
    }
}

