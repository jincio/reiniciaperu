$(window).ready(function () {

    var appUnoFoto = 'https://pbs.twimg.com/profile_images/1347384704828395527/iEf2oSNZ_400x400.jpg'
    var appDosFoto = 'https://otorongo.club/static/votes/img/oto.png'
    var appTresFoto = 'https://decidebien.pe/img/logo.73a738ba.png'
    var appCuatroFoto = 'https://pbs.twimg.com/profile_images/1347384704828395527/iEf2oSNZ_400x400.jpg'

    var appUnoLink = 'https://twitter.com/AmaLlulla_2021'
    var appDosLink = 'https://otorongo.club'
    var appTresLink = 'https://decidebien.pe/#/'
    var appCuatroLink = 'https://twitter.com/AmaLlulla_2021'

    $('.app').click(function () {
        $('.app').css('box-shadow','none')
        $('.info-site-container').css('display','block')
    });
    $('.app-1').click(function () {
        $(this).css('box-shadow','0px 0px 10px 5px #40ff3a')
        $('.info-site-container').css('border-top','solid 2px #40ff3a')
        $('button').hover(
            function() {
            $('button').css('border','solid 2px #40ff3a')
            },function() {
                $('button').css('border','none')
            }
        );
        $('.info-site-top img').attr('src',appUnoFoto)
        $('.info-site-top div').html('<h3>Ama Llulla</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget molestie justo. Sed lobortis dolor sed quam dignissim, sit amet pulvinar purus sodales. Morbi lacinia ex vitae odio lobortis, eget scelerisque lorem auctor.</p>')
        $('.info-site-bott a').attr('href',appUnoLink)
    });
    $('.app-2').click(function () {
        $(this).css('box-shadow','0px 0px 10px 5px #3090ff')
        $('.info-site-container').css('border-top','solid 2px #3090ff')
        $('button').hover(
            function() {
            $('button').css('border','solid 2px #3090ff')
            },function() {
                $('button').css('border','none')
            }
        );
        $('.info-site-top img').attr('src',appDosFoto)
        $('.info-site-top div').html('<h3>Otorongo Club</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget molestie justo. Sed lobortis dolor sed quam dignissim, sit amet pulvinar purus sodales. Morbi lacinia ex vitae odio lobortis, eget scelerisque lorem auctor.</p>')
        $('.info-site-bott a').attr('href',appDosLink)
    });
    $('.app-3').click(function () {
        $(this).css('box-shadow','0px 0px 10px 5px #ff4e4e')
        $('.info-site-container').css('border-top','solid 2px #ff4e4e')
        $('button').hover(
            function() {
            $('button').css('border','solid 2px #ff4e4e')
            },function() {
                $('button').css('border','none')
            }
        )
        $('.info-site-top img').attr('src',appTresFoto)
        $('.info-site-top div').html('<h3>Decide Bien</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget molestie justo. Sed lobortis dolor sed quam dignissim, sit amet pulvinar purus sodales. Morbi lacinia ex vitae odio lobortis, eget scelerisque lorem auctor.</p>')
        $('.info-site-bott a').attr('href',appTresLink)
    });
    $('.app-4').click(function () {
        $(this).css('box-shadow','0px 0px 10px 5px #ebff33')
        $('.info-site-container').css('border-top','solid 2px #ebff33')
        $('button').hover(
            function() {
            $('button').css('border','solid 2px #ebff33')
            },function() {
                $('button').css('border','none')
            }
        )
        $('.info-site-top img').attr('src',appCuatroFoto)
        $('.info-site-top div').html('<h3>Ama Llulla</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget molestie justo. Sed lobortis dolor sed quam dignissim, sit amet pulvinar purus sodales. Morbi lacinia ex vitae odio lobortis, eget scelerisque lorem auctor.</p>')
        $('.info-site-bott a').attr('href',appCuatroLink)
    });
});