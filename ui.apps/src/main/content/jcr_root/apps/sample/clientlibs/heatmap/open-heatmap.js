/*
 * Custom JavaScript to open a heatmap URL on a different browser window2
 */

(function(document, $) {

    $(document).on("click", ".open-heatmap", function(e){
    	
        var path = Granite.HTTP.internalize(window.location.pathname);
            alert(path);
    });

    // workaround to not show the switcher on touch devices (TO BE REMOVED) 
    $(document).on("touchstart", "nav.feature", function(e){
        $(this).find("i.action").remove();
    });

})(document, Granite.$);
