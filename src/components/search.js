import useBeerApi from "../beer.js";

Vue.component('search', {
    template:`<!--- Barre de recherche -->
            <search>
                <div class="container">
                    <form action="#" method="#">
                        <div class="row justify-content-md-center">
                            <div class="col">
                                
                            </div>
                            <div class="col-6">
                                <input type="search" class="input-sm form-control" placeholder="Recherche ...">
                            </div>
                            <div class="col">
                                <button type="submit" class="btn btn-primary btn">Rechercher</button>
                            </div>
                        </div>
                    </form>
                </div>
            </search>

            <!--- Barre de navigation -->`,
    data : function() {
        return {
            search : ""
        }},
    methods : {
        sumbit: function(){
            //faire un appel asynchrone
            useBeerApi.bySearch(this.search)
            .then(data => this.$emit('an-event', data));
        }
    }


})