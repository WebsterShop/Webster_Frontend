Webster.CatalogProductRoute = Webster.AbstractRoute.extend({
    setupController: function(controller, model){
        var productId = model.id;
        Webster.MessageProcessor.processOutgoing({'type': 'Catalog\\Product', 'action': 'get', 'content': {'product_id': productId}});
        console.log('catalog product route');
        controller.set('model', model);
    },

    model: function(params) {
        console.log(params);
    }
});