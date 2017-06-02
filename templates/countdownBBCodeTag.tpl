{if $__wcf->session->getPermission('user.message.canViewCountdown')}
	{if !$__countdownInit|isset}
		{assign var='__countdownInit' value='1'}
		<script data-relocate="true">
			require(['FabiHome/Countdown'], function (Countdown) {
				Countdown.init();
			});
		</script>
	{/if}
	
	<div id="countdown{$countdownID}" class="countdown" data-deadline="{$datetime}">
		<div class="countdownMessage" style="display:none;">
			<!-- META_CODE_INNER_CONTENT -->
		</div>
		<div class="countdownClock">
			<div>
				<span class="countdownDay"></span>
				<div class="countdownTime">{lang}wcf.message.cd.days{/lang}</div>
			</div>
			<div>
				<span class="countdownHour"></span>
				<div class="countdownTime">{lang}wcf.message.cd.hours{/lang}</div>
			</div>
			<div>
				<span class="countdownMinute"></span>
				<div class="countdownTime">{lang}wcf.message.cd.minutes{/lang}</div>
			</div>
			<div>
				<span class="countdownSecond"></span>
				<div class="countdownTime">{lang}wcf.message.cd.seconds{/lang}</div>
			</div>
		</div>
	</div>
{/if}