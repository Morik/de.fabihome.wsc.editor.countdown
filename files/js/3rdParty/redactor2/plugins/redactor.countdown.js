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

	return {
		init: function() {
			var button = this.button.add('countdown', WCF.Language.get('wcf.message.cd'));
			this.button.setIcon(button, '<span class="icon icon16 fa-clock-o"></span>');
			this.button.addCallback(button, this.countdown.show);
		},

		show: function() {

			this.modal.addTemplate('countdown', this.countdown.getTemplate());
			this.modal.load('countdown', WCF.Language.get('wcf.message.cd'), 400);

			var button = this.modal.getActionButton();
			button.on('click', this.countdown.insert);

			this.modal.show();

			$('#countdown-time');
			$('#countdown-endMessage');
		},

		insert: function() {
			var value = $('#countdown-timeDatePicker').val();
			var date = value.replace(" ", "T");
			var endMessage = $('#countdown-endMessage').val();

			this.modal.close();

			this.insert.html('[countdown=' + date + ']' + endMessage + '[/countdown]');
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
						+ '<button id="redactor-modal-button-action">' + WCF.Language.get('wcf.message.cd.insert') + '</button>'
				+    '</dl>'
				+ '</fieldset>'
		}
	};
};
