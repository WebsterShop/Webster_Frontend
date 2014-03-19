Webster.CatalogProductController = Ember.ObjectController.extend({
    product: function(){
        var products = Webster.Session.get('productCollection');
        if(products){
            var product =  products.objectAt(0);
            console.log('jo product oida: ' + product);
            return product;
        }
    }.property('Webster.Session.productCollection')
});