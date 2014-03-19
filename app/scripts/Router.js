/**
 * Global route mapping
 */
Webster.Router.map(function () {
    this.resource('start', {path: '/'}),
    this.resource('catalog', function(){
        this.route('category', { path: '/category/:id'}),
        this.route('product', { path: '/product/:id' })
    });
});