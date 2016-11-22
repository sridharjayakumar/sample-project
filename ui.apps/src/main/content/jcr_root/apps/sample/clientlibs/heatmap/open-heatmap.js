/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2012 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */

(function(document, $) {

    $(document).on("click", ".open-heatmap", function(e){
    	
        var path = Granite.HTTP.internalize(window.location.pathname);

        if( href ) {
            alert(path);
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
        }
    });

    // workaround to not show the switcher on touch devices (TO BE REMOVED) 
    $(document).on("touchstart", "nav.feature", function(e){
        $(this).find("i.action").remove();
    });

})(document, Granite.$);
