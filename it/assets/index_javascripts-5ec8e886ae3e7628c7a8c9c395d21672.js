(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  var CountTo = function (element, options) {
    this.$element = $(element);
    this.options  = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  CountTo.prototype.init = function () {
    this.value     = this.options.from;
    this.loops     = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from:            this.$element.data('from'),
      to:              this.$element.data('to'),
      speed:           this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals:        this.$element.data('decimals')
    };

    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof(options[key]) === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;

    this.render();

    if (typeof(this.options.onUpdate) == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof(this.options.onComplete) == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('countTo');
      var init    = !data || typeof(option) === 'object';
      var options = typeof(option) === 'object' ? option : {};
      var method  = typeof(option) === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
}));

var tour_locations = [	
  [-77.036871, 38.907192], //DC
  [-0.127758, 51.507351], //London
  [2.352222,48.856614], //Paris
  [-66.105722, 18.466334], //San Jian
  [-70.669265,-33.44889], //Santiago
  [116.407395,39.904211], //Beijing
];

var map_tour = function(map) {
  setInterval(function() {
    var rand_loc  = tour_locations[Math.floor(Math.random()*tour_locations.length)];
    map.flyTo({
      center: rand_loc,
      zoom: 6,
      speed: 0.4,
      curve: 1
    });
  }, 4000);
};

var initMap = function() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZXJlcHRvciIsImEiOiJjamQ1Mmt6MHYwd3c4MnFyenFzYW1nMzdlIn0.KJC451v713zEG-NOODZ35g';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-18.143525360151557,37.87252922278667],
    zoom: 2,
    maxZoom: 8
  });
	map.scrollZoom.disable();

  map.on('load', function() {
		map.addSource('peers', {
			type: 'geojson',
			data: 'https://s3.amazonaws.com/trtlpeers/peers.geojson'
		});

		map.addLayer({
			id: 'peers-heat',
			type: 'heatmap',
			source: 'peers',
			maxzoom: 10,
			paint: {
				// increase weight as diameter breast height increases
				'heatmap-weight': {
					property: 'dbh',
					type: 'exponential',
					stops: [
						[1, 0],
						[62, 1]
					]
				},
				// increase intensity as zoom level increases
				'heatmap-intensity': {
					stops: [
						[11, 1],
						[15, 3]
					]
				},
				// assign color values be applied to points depending on their density
				'heatmap-color': [
					'interpolate',
					['linear'],
					['heatmap-density'],
					0, 'rgba(0,222,0,0)',
					0.2, 'rgb(0,209,0)',
					0.4, 'rgb(0,189,0)',
					0.6, 'rgb(0,169,0)',
					0.8, 'rgb(0,144,0)'
				],
				// increase radius as zoom increases
				'heatmap-radius': {
					stops: [
						[1, 5],
						[5, 9]
					]
				},
				// decrease opacity to transition into the circle layer
				'heatmap-opacity': {
					default: 1,
					stops: [
						[14, 1],
						[15, 0]
					]
				},
			}
		}, 'waterway-label');	

    //map_tour(this); disabled for now
  });
};
