Webster.CatalogProductRoute = Ember.Route.extend({
    setupController: function(controller, model){
        var productId = model.id;
        Webster.MessageProcessor.processOutgoing({'type': 'Catalog\\Product', 'action': 'get', 'content': {'product_id': productId}});
        console.log('catalog product route');
        controller.set('model', model);
    },

    model: function(params) {
        console.log(params);
//        var products = Webster.Session.get('productCollection');
//        console.log('model product');
//        console.log(products);
//        var product;
//        products.forEach(function(item){
//            if(params.product_id == item.id){
//                product = item;
//            }
//        });
//        return product;
    },

    beforeModel: function(transition){
        if(!Webster.Socket.get('online')){
            console.log('not online, going back to start');
            transition.abort;
            Webster.Session.set('transition', transition);
            this.transitionTo('start');
        }
    }
});