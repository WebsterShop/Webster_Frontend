Webster.CatalogCategoryController = Ember.ArrayController.extend({
    productsGrid: function(){
        var rowSize = 4, chunks;
        var products = Webster.Session.get('productCollection');
        if(products){
            chunks = products.chunk(rowSize);
        }
        return chunks;

    }.property('Webster.Session.productCollection')
});