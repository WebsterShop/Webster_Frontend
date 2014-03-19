/**
 * Index controller
 *
 * @namespace Webster
 * @class IndexController
 * @extends Ember.ArrayController
 */
Webster.CatalogController = Ember.ArrayController.extend({
    categories: function(){
        return Webster.Session.get('categoryCollection');
    }.property('Webster.Session.categoryCollection')
});