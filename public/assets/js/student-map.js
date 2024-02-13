import $ from 'jquery';
(function ($) {
    "use strict";

    /*--
		Vector Map
	-----------------------------------*/
    $(document).ready(function () {
        $('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#fff',
          color: '#ffffff',
          hoverOpacity: 0.7,
          selectedColor: '#666666',
          enableZoom: false,
          showTooltip: true,
          scaleColors: ['#C8EEFF', '#006491'],
          values: sample_data,
          normalizeFunction: 'polynomial'
        });
    });

    
})($);

