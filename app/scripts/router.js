Cropsy.Router.map(function () {

  this.resource('patterns');
  
  this.resource('prototype');

  this.resource('images', function(){
    this.resource('image', { path: '/:image_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });

});
