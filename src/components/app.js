Vue.component('app',{
    template :`<div id="app">
                <header class="row">
                    <div class="col-lg-12">
                        <search  @search-done="searchCompleted($event)"> </search>
                    </div>
                </header>
                <div class="row">
                    <nav class="col-lg-2">
                        Menu
                    </nav>
                    <section class="col-lg-10">
                        Section
                    </section>
                </div>
                <footer class="row">
                    Pied de page
                </footer>
            </div>`,
    data : function () {
        return {

        }
    },
    methods: {
        searchCompleted : function(data) {
            if (data != undefined) {
            }
         }
    }
    //data
    //methods
})