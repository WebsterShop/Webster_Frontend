Webster.CatalogRoute = Ember.Route.extend({
    setupController: function() {
        console.log('catalog route');
        console.log(Webster.Socket.get('online'));
        Webster.MessageProcessor.processOutgoing({'type': 'Catalog\\Category', 'action': 'getAll'});
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