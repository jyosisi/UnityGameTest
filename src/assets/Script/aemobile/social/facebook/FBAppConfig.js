(function () {

    'use strict';

    window.FBAppConfig = [
        { name: "Gin Rummy", appid: '413056522753643', apptoken: '413056522753643|vVScYBTOmg9QjJbHqCXQ2EGg5EU', reg: /^apps\-413056522753643.*/ },
        { name: "Gin Rummy - Test1", appid: '551366172269840', apptoken: '551366172269840|0695x-LbzjfgdbP8TI18cSeo8tw', reg: /^apps\-551366172269840.*/ },
    ];
    window.FBAppId = FBAppConfig[1].appid;
    window.FBAppToken = FBAppConfig[1].apptoken;
    window.isInstantGame = false;

    window.needDisableEffect = window.isInstantGame && !(cc._renderContext instanceof WebGLRenderingContext)
    // window.needDisableEffect = true

    window.FBHost = "https://graph.facebook.com/v6.0/"
    window.FBTestID = '410631389275246';
    window.FBTestToken = 'EAAZAxVeRuhawBAIoYAGqyfI4ZCuqebggWZBPOX2YrGs9JJ1BVgOEZAMMq4f9wEXzreXgcHjgkxehQAZCXIhJ2BZAvPLJXTFgotcNkPBfKRb4XzfVt4bdktpZAqZC0qIZC4IiPGNpx2HQBEJ08USojsiVp70otFMZB7Fncr9vwMBU9kR11KNiThDhtHSZBA0h4zKg9MZD';

    if (!cc.sys.isBrowser) {
        return;
    }

    window.fbAsyncInit = function () {
        cc.log('---------------------------- Facebook Init Finish -----------------------');
        FB.init({
            appId: FBAppId,
            xfbml: true,
            version: 'v6.0'
        });
        FB.AppEvents.logPageView();
        if (window.onInitFinish) {
            window.onInitFinish();
        }
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
})();
