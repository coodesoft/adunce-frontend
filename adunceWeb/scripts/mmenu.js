jQuery(document).ready(function($) {

    $("div.admin-actions").mmenu({
       // options
    }, {
       // configuration
       clone: true
    });
    // 
    // var API=$("div.admin-actions").data( "mmenu" );
    // $("a#hamburger").click(function() {
    //    API.open();
    // });

    var body = $("body")[0];
    var hammertime = new Hammer(body);
    hammertime.on('swiperight', function() {
        API.open();
    });
    hammertime.on('swipeleft', function() {
        API.close();
    });
    $(".mm-menu .mm-panel:not(:first-child)").each(function(index, element){
      var hammer_aux = new Hammer(element);
      hammer_aux.on('swiperight', function() {
        var panel_actual = $(".mm-menu > .mm-current")[0];
        API.closeAllPanels();
      });
    });
});
