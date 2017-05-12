function getHashFilter() {
  var hash = location.hash;
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

$( function() {

    var $grid = $('.grid');

    $('.button-group a.button').on('click', function(){
    	$('.button-group a.button').removeClass('active');
    	$(this).addClass('active');
    });

    // bind filter button click
    var $filters = $('.filter-button-group').on( 'click', 'a', function() {
      var filterAttr = $( this ).attr('data-filter');
      // set filter in hash
      location.hash = 'filter=' + encodeURIComponent( filterAttr );
    });

    var isIsotopeInit = false;

    function onHashchange() {
      var hashFilter = getHashFilter();
      if ( !hashFilter && isIsotopeInit ) {
        return;
      }
      isIsotopeInit = true;
      // filter isotope
      $grid.isotope({
        itemSelector: '.element-item',
        filter: hashFilter
      });
      // set selected class on button
      if ( hashFilter ) {
        $filters.find('.active').removeClass('active');
        $filters.find('[data-filter="' + hashFilter + '"]').addClass('active');
      }
    }

    $(window).on( 'hashchange', onHashchange );
    // trigger event handler to init Isotope
    onHashchange();

});
