Webster.CatalogCategoryRoute = Ember.Route.extend({
    setupController: function(controller, model){
        var categoryId = model.id;
        Webster.MessageProcessor.processOutgoing({'type': 'Catalog\\Product', 'action': 'getAll', 'content': {'category_id': categoryId}});
        console.log('catalog category route');
    },

    beforeModel: function(transition){
        if(!Webster.Socket.get('online')){
            console.log('not online, going back to start');
            transition.abort();
            Webster.Session.set('transition', transition);
            this.transitionTo('start');
        }
    }
});