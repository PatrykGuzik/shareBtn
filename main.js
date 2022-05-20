
//stworzyć od 0 a nie modyfikować!!!!




function getShareBtnHTML() {
    return `
    <div id="fb-root"></div>
    <script>(function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
    <div class="fb-share-button" data-href="https://patrykguzik.github.io/shareBtn/" data-layout="button"
        data-size="large"><a target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpatrykguzik.github.io%2FshareBtn%2F&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore">Udostępnij</a>
    </div>
    `
}