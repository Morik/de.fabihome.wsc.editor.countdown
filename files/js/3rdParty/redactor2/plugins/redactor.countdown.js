/**
 * Countdown Plugin for Redactor
 *
 * @author      Fabian
 * @copyright   2015 Creativeorange V.O.F.
 * @license     MIT
 */

if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.countdown = function() {
	"use strict";

	function getTimeZone() {
		var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
		return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
	}


	return {
		init: function() {
			var button = this.button.add('countdown', WCF.Language.get('wcf.message.cd'));
			this.button.addCallback(button, this.countdown.show);
		},

		show: function() {

			this.modal.addTemplate('countdown', this.countdown.getTemplate());
			this.modal.load('countdown', WCF.Language.get('wcf.message.cd'), 400);
			var $button = this.modal.getCancelButton();

			var button = this.modal.getActionButton();
			button.on('click', this.countdown.insert);

			this.modal.show();

			$('#countdown-time');
			$('#countdown-endMessage');
		},

		insert: function() {
			var value = $('#countdown-timeDatePicker').val();
			var arr = value.split(" ");
			var date = arr[0] + "T" + arr[1];
			var endMessage = $('#countdown-endMessage').val();

			this.modal.close();

			this.insert.html('[countdown=' + date + getTimeZone() +']' + endMessage + '[/countdown]');
		},

		getTemplate: function() {
			return String()
				+ '<fieldset id="redactor2-modal-countdown">'
				+ '<dl>'
				+ '<dt><label for="countdown-time" />' + WCF.Language.get('wcf.message.cd.datetime') + '</label></dt>'
				+ '<dd>'
				+ '<input type="datetime" id="countdown-time" name="countdown-time" value="" class="small" required="required"/>'
				+ '</dd>'
				+ '</dl>'
				+ '<dl>'
				+ '<dt><label for="countdown-endMessage" />' + WCF.Language.get('wcf.message.cd.message') + '</label></dt>'
				+ '<dd>'
				+ '<input type="text" id="countdown-endMessage" required="required"/>'
				+ '</dd>'
				+ '</dl>'
				+ '<dl>'
				+ '<button id="redactor-modal-button-action">Insert</button>'
				+ '<button id="redactor-modal-button-cancel">Cancel</button>'
				+ '</dl>'
				+ '</fieldset>'
		}
	};
};
