$(window).ready(function () {

    $('.app-row-1').click(function () {
        $('.app-row-1').css('box-shadow','none')
        $('.info-site-container-1').css('display','block')
    });
    $('.app-row-2').click(function () {
        $('.app-row-2').css('box-shadow','none')
        $('.info-site-container-2').css('display','block')
    });
    $('.app-row-3').click(function () {
        $('.app-row-3').css('box-shadow','none')
        $('.info-site-container-3').css('display','block')
    });
    $('.app-row-4').click(function () {
        $('.app-row-4').css('box-shadow','none')
        $('.info-site-container-4').css('display','block')
    });


    $('.app-1').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(13 155 255)')
        $('.info-site-container-1').css('border-top','solid 2px rgb(13 155 255)')
        $('.info-site-top-1 img').attr('src','https://otorongo.club/static/votes/img/oto.png')
        $('.info-site-top-1 div').html('<h3>Otorongo Club</h3><p>Aquí encontrarás la lista de candidatos a las Elecciones Generales 2021. Los candidatos enviaron al JNE sus datos como, estudios, ingresos, bienes muebles, inmuebles, antecedentes etc.</p>')
        $('.info-site-bott-1 a').attr('href','https://otorongo.club')
    });
    $('.app-2').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(13 155 255)')
        $('.info-site-container-1').css('border-top','solid 2px rgb(13 155 255)')
        $('.info-site-top-1 img').attr('src','conoce-a-tu-candidato-header.png')
        $('.info-site-top-1 img').css('background-color','#000')
        $('.info-site-top-1 div').html('<h3>Conoce a tu candidato</h3><p>Elaborado por: Agárrate</p><p>Información sobre candidatos, noticias periodísticas, entrevistas.</p>')
        $('.info-site-bott-1 a').attr('href','https://conoceatucandidato.org.pe')
    });
    $('.app-3').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(13 155 255)')
        $('.info-site-container-1').css('border-top','solid 2px rgb(13 155 255)')
        $('.info-site-top-1 img').attr('src','https://decidebien.pe/img/logo.73a738ba.png')
        $('.info-site-top-1 div').html('<h3>Decide Bien</h3><p>Elaborado por: José Incio</p><p>Información de hoja de vida, estado de las candidaturas, rango de edad de cada partido, porcentaje de paridad, porcentaje de estudios, entre otros aspectos.</p>')
        $('.info-site-bott-1 a').attr('href','https://decidebien.pe/#/')
    });
    $('.app-4').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(13 155 255)')
        $('.info-site-container-1').css('border-top','solid 2px rgb(13 155 255)')
        $('.info-site-top-1 img').attr('src','https://elecciones2021.pe/wp-content/uploads/2020/09/logo-eleccionesb.png')
        $('.info-site-top-1 img').css('background-color','#fff')
        $('.info-site-top-1 div').html('<h3>Elecciones 2021</h3><p>Información sobre candidatos y partidos políticos, noticias periodísticas, compendio normativo.</p>')
        $('.info-site-bott-1 a').attr('href','https://elecciones2021.pe/')
    });

    $('.app-5').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(3 193 27)')
        $('.info-site-container-2').css('border-top','solid 2px rgb(3 193 27)')
        $('.info-site-top-2 img').attr('src','https://pbs.twimg.com/profile_images/1347384704828395527/iEf2oSNZ_400x400.jpg')
        $('.info-site-top-2 div').html('<h3>Ama Llulla</h3><p>Elaborado por: PNUD en colaboración de OjoPúblico, IDL-Reporteros, Ideeleradio, Útero.pe, LaMula.pe, El Búho, Sudaca, Convoca, El Filtro y una red de radioemisoras en ocho regiones de la zona andina y amazónica.</p><p>Fact checking:  expondrá las versiones falsas o imprecisas relacionadas con los comicios.</p>')
        $('.info-site-bott-2 a').attr('href','https://twitter.com/AmaLlulla_2021')
    });
    $('.app-6').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(3 193 27)')
        $('.info-site-container-2').css('border-top','solid 2px rgb(3 193 27)')
        $('.info-site-top-2 img').attr('src','https://upload.wikimedia.org/wikipedia/commons/3/36/RPP_logo.png')
        $('.info-site-top-2 div').html('<h3>El poder en tus manos</h3><p>Elaborado por: RPP</p><p>Información periodística, debates, aborda tópicos de los planes de campaña, entre otros.</p>')
        $('.info-site-bott-2 a').attr('href','https://rpp.pe/noticias/el-poder-en-tus-manos')
    });
    $('.app-7').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(3 193 27)')
        $('.info-site-container-2').css('border-top','solid 2px rgb(3 193 27)')
        $('.info-site-top-2 img').attr('src','https://s3.amazonaws.com/arc-authors/gruporepublica/e4c103de-bf89-457c-b5f0-9e6b0d4ff300.jpg')
        $('.info-site-top-2 div').html('<h3>Elige Bien Perú</h3><p>Elaborado por: La República</p><p>Noticias periodísticas, guia electoral, Fact checking, informes, opiniones, entre otros.</p>')
        $('.info-site-bott-2 a').attr('href','https://larepublica.pe/elecciones/')
    });
    $('.app-8').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(3 193 27)')
        $('.info-site-container-2').css('border-top','solid 2px rgb(3 193 27)')
        $('.info-site-top-2 img').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHk1a6PvKCCQVpx5_h7u35HctYCE91WFPCqg&usqp=CAU')
        $('.info-site-top-2 div').html('<h3>Tú decides</h3><p>Elaborado por: El Comercio</p><p>Noticias periodísticas, encuesta (Comercio Ipsos).</p>')
        $('.info-site-bott-2 a').attr('href','https://especiales.elcomercio.pe/?q=especiales/elecciones-2021-encuestas-ipsos-partidos-politicos-congreso-presidencia-tu-decides-nndd-ecvisual-ecpm/index.html')
    });
    $('.app-9').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(3 193 27)')
        $('.info-site-container-2').css('border-top','solid 2px rgb(3 193 27)')
        $('.info-site-top-2 img').attr('src','https://perudebate.org/wp-content/uploads/2019/12/logo01.jpg')
        $('.info-site-top-2 div').html('<h3>Perú Debate 2021</h3><p>Elaborado por: Seis instituciones de la academia y la sociedad civil: Centro de Investigación de la Universidad del Pacífico (CIUP), Consorcio de Investigación Económica y Social (CIES), la Escuela de Gobierno y Políticas Públicas PUCP (EGPP-PUCP), IDEA Internacional, el Instituto de Estudios Peruano (IEP) y la asociación civil Transparencia.</p><p>Debate en torno a los planes de gobierno.</p>')
        $('.info-site-bott-2 a').attr('href','https://perudebate.org/peru-debate-2021/')
    });
    $('.app-10').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(3 193 27)')
        $('.info-site-container-2').css('border-top','solid 2px rgb(3 193 27)')
        $('.info-site-top-2 img').attr('src','data:image/png;base64,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')
        $('.info-site-top-2 div').html('<h3>Voto informado</h3><p>Elaborado por: Jurado Nacional de Elecciones</p><p>Información sobre las agrupaciones políticas, y candidatos.</p>')
        $('.info-site-bott-2 a').attr('href','https://votoinformado.jne.gob.pe/voto')
    });

    $('.app-11').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s320x320/145487605_1559899094198897_1882885889977825335_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=6LWrJfAwrhEAX-WaS3f&tp=1&oh=e3cc5e75a299612921455b5b7d0ab1e9&oe=604341BB')
        $('.info-site-top-3 div').html('<h3>Observación y Educación (OE Perú)</h3><p>Hashtag: #VotoInformado</p><p>Información sobre candidatos presidenciales, proceso electoral.</p>')
        $('.info-site-bott-3 a').attr('href','https://www.instagram.com/oe.plataforma/')
    });
    $('.app-12').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://secureservercdn.net/192.169.221.188/0gh.f2b.myftpupload.com/wp-content/uploads/2020/05/cropped-69854099_2956173361066457_250982718953750528_n-1.png?time=1612337964')
        $('.info-site-top-3 div').html('<h3>@unapolitologa</h3><p>Hashtag: #Elecciones2021</p><p>Información sobre candidatos, el proceso electoral, entre otros.</p>')
        $('.info-site-bott-3 a').attr('href','https://unapolitologa.com')
    });
    $('.app-13').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s320x320/132202408_869515623851820_4085247422920293438_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=p7Tzv1CdeGsAX_xR95-&tp=1&oh=a0be3dbaf7feeae6b20f85f8ef5c784a&oe=6043E7A5')
        $('.info-site-top-3 div').html('<h3>Ahora ya lo sabes</h3><p>Hashtag: #Elecciones 2021, #VotoInformado</p><p>Información sobre candidatos, ejes temáticos que deben ser incorporados en planes de obierno, ideologías políticas, entre otros.</p>')
        $('.info-site-bott-3 a').attr('href','https://www.instagram.com/ahora_yls/?hl=es-la')
    });
    $('.app-14').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s320x320/142222948_805027820050625_901389979236761935_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=qT_8Re_fFbQAX_3HFJU&tp=1&oh=491be0345478ea6faafa9ccfec120095&oe=60448558')
        $('.info-site-top-3 div').html('<h3>Culturale.pe</h3><p>Hashtag: #Fdselectoral</p><p>Información electoral y sobre candidatos.</p>')
        $('.info-site-bott-3 a').attr('href','https://www.instagram.com/culturale.pe/?hl=es-la')
    });
    $('.app-15').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s320x320/143241309_1553740254824746_8278686932633160268_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=VZUC7gYxEIQAX_Gm9OI&tp=1&oh=047555178d2c38d183a7df95c3b88c28&oe=6042FF86')
        $('.info-site-top-3 div').html('<h3>Asociación Impulso Pais</h3><p>Hashtag: #AlertaElectoral2021</p><p>Información sobre el proceso electoral.</p>')
        $('.info-site-bott-3 a').attr('href','https://www.instagram.com/impulsopais/?hl=es-la')
    });
    $('.app-16').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s320x320/125363321_962556427601777_8196945384234289966_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=QwihJX-WVssAX8T71oh&tp=1&oh=ea616353eaad9b6d206e2d9e3705e566&oe=60443A85')
        $('.info-site-top-3 div').html('<h3>Independencia</h3><p>Hashtag: #Elecciones 2021</p><p>Información sobre candidatos, ideologías y el proceso electoral . Algunas infografias  se encuentran en aymara e inglés.</p>')
        $('.info-site-bott-3 a').attr('href','https://www.instagram.com/viva.independencia/')
    });
    $('.app-17').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://pbs.twimg.com/profile_images/1344475340203118592/J7IHwvQU_400x400.jpg')
        $('.info-site-top-3 div').html('<h3>Ilustración Política</h3><p>Hashtag: #Elecciones2021</p><p>Información sobre candidatos y noticias.</p>')
        $('.info-site-bott-3 a').attr('href','https://twitter.com/IlustracionP')
    });
    $('.app-18').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://pbs.twimg.com/profile_images/1349358342607613953/2eopHo_d_400x400.jpg')
        $('.info-site-top-3 div').html('<h3>Perspectiva Constitucional</h3><p>Hashtag: #ConocetuConsti</p><p>Información para candidatos y ciudadanos sobre temas básicos constitucionales.</p>')
        $('.info-site-bott-3 a').attr('href','https://twitter.com/perspectivapucp')
    });
    $('.app-19').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px #ff4e4e')
        $('.info-site-container-3').css('border-top','solid 2px #ff4e4e')
        $('.info-site-top-3 img').attr('src','https://scontent-lim1-1.cdninstagram.com/v/t51.2885-19/s320x320/125766472_3360785907292346_9065289895166237631_n.jpg?_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=RlChNFKRD4QAX-oWSB5&tp=1&oh=47e9b9f0c5e0429de137da2dbbf41ebb&oe=6045B1D3')
        $('.info-site-top-3 div').html('<h3>Bicentenario Consciente</h3><p>Hashtag: #VotoConsciente </p><p>Información del proceso electoral</p>')
        $('.info-site-bott-3 a').attr('href','https://votoinformado.jne.gob.pe/voto')
    });

    $('.app-20').click(function () {
        $(this).css('box-shadow','0px 0px 5px 2px rgb(204 189 8)')
        $('.info-site-container-1').css('border-top','solid 2px rgb(204 189 8)')

        $('.info-site-top-1 img').attr('src','https://uploads-ssl.webflow.com/5fbeb37ffcfa11c55d0d1ea2/5fc17600bd65e867587c52e4_200-logo-white-on-transparent.png')
        $('.info-site-top-1 img').css('background-color','#000')
        $('.info-site-top-1 div').html('<h3>200</h3><p>Red de Soporte: Laboratoria, Hiperderecho, Transparencia, Utecventures, QuantumTalent</p><p>Proyecto cuya finalidad es apoyar en el desarrollo de tecnologías ciudadanas de cara a las Elecciones Generales de 2021</p><p>Iniciativas seleccionadas: Proyecto Tip, Vota con orgullo, Memoria en Acción, Open Política, Populistrómetro, Prometeo, F de Femenino, Habla Facil, Agenda Ambiental Maqray, Ahora ya lo sabes, Conectar para Actuar, Congreso Transparente.</p>')
        $('.info-site-bott-1 a').attr('href','https://www.200.pe')
    });

    $('.creditos button').click(function () {
        $('.site').css('display','none');
        $('.reinicio').css('display','block');
            setTimeout("window.location.reload(true);", 2000);
    });
});