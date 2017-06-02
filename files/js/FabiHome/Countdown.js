define(['WoltLabSuite/Core/Timer/Repeating'], function(Repeating) {
	"use strict";
	
	var _elements = [];
	
	return {
		init: function() {
			_elements = elBySelAll('.countdown');
			
			new Repeating(this._refresh.bind(this), 1000);
		},
		
		getTimeRemaining: function(endtime) {

			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		},
		
		_refresh: function() {
			for(var i = 0; i < _elements.length; i++) {
				var clock = _elements[i];
				if(clock.classList.contains("active")) {
					var t = this.getTimeRemaining(elData(clock, 'deadline'));
					elBySel('.countdownDay', clock).innerHTML = t.days;
					elBySel('.countdownHour', clock).innerHTML = ('00' + t.hours).slice(-2);
					elBySel('.countdownMinute', clock).innerHTML = ('00' + t.minutes).slice(-2);
					elBySel('.countdownSecond', clock).innerHTML = ('00' + t.seconds).slice(-2);
					if (t.total <= 0) {
						elHide(elBySel('.countdownClock', clock));
						elShow(elBySel('.countdownMessage', clock));
						clock.classList.remove("active");
					}
				}
			}
		}
	}
});
