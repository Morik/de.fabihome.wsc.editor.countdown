{if $__wcf->session->getPermission('user.message.canViewCountdown')}
<script data-relocate="true">
    /* JS by SitePoint
     @ http://codepen.io/SitePoint/
     */
    (function() {
        function getTimeRemaining(endtime) {
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
        }

        function initializeClock(id, endtime, message) {
            var clock = document.getElementById('countdown-{$countdownID}');
            var daysSpan = clock.querySelector('.day');
            var hoursSpan = clock.querySelector('.hour');
            var minutesSpan = clock.querySelector('.minute');
            var secondsSpan = clock.querySelector('.second');

            function updateClock() {
                var t = getTimeRemaining(endtime);

                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                    document.getElementById('countdown-{$countdownID}').innerHTML = message;
                }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        var deadline = '{$datetime}';
        initializeClock('countdown-{$countdownID}', deadline, '{if $content}{$content}{else}{lang}wcf.message.cd.end{/lang}{/if}');
    })();
</script>

<div id="countdown-{$countdownID}" class="countdown">
    <div>
        <span class="day"></span>
        <div class="time">{lang}wcf.message.cd.days{/lang}</div>
    </div>
    <div>
        <span class="hour"></span>
        <div class="time">{lang}wcf.message.cd.hours{/lang}</div>
    </div>
    <div>
        <span class="minute"></span>
        <div class="time">{lang}wcf.message.cd.minutes{/lang}</div>
    </div>
    <div>
        <span class="second"></span>
        <div class="time">{lang}wcf.message.cd.seconds{/lang}</div>
    </div>
</div>
{/if}