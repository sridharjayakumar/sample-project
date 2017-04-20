/*
 * Custom JavaScript to open a heatmap URL on a different browser window
 */
(function(document, $) {

    var ui = $(window).adaptTo("foundation-ui");
    $(document).on("click", ".open-heatmap", function(e) {
        var path = Granite.HTTP.externalize(window.location.pathname).replace(/\/[^/]*/, '');
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'cache': false,
            'type': 'get',
            'url': '/bin/sample/properties',
            'data': {
                "path": path
            },
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        
        if(isEmpty(json)) {
            ui.notify(Granite.I18n.get("Error"), "No Cloud Service found for providing a Heatmap", "error");    
        } else {
            var url = "http://www.dummyurl.com?Type=OverlayReport&ReportType=ClickHeatmap&PID=";
            url += json.pid;
            url += "&IntegrationToken=";
            url += json.integrationToken;
            url += "Location=";
            url += path;
            window.open(url, '_blank');
        }
    });

    function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
    }
})(document, Granite.$);
