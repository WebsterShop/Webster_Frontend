Webster.CatalogProductController = Ember.ObjectController.extend({
    product: function(){
        var products = Webster.Session.get('productCollection');
        if(products){
            return products.objectAt(0);
        }
    }.property('Webster.Session.productCollection')
});