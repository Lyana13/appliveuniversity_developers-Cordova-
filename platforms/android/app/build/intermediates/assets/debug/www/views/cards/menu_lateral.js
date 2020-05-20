var menu_lateral = `
    <ul id="slide-out" class="sidenav">
        <a href="#" class="sidenav-close">
            <i class="material-icons white-text" style="font-size: 35px;">keyboard_arrow_right</i>
        </a>
        <div class="user-view">
        <li class="sidenav-item">
            <% if (login.foto.indexOf('erro') >= 0) { %>
                <% login.foto = 'image/users/c.jpg' %>
            <% } %>

                <div class="sidenav-info">
                    <% var nome = get_data('geral').nome + ' ' + get_data('geral').sobrenome %>
                    <p><%- nome %></p>                
                    <!--<p><%- get_data('geral').login.email %></p>-->                    
                </div>

                <div class="circle user-pic" style="background-image: url(<%= login.foto%>);margin:0 auto">
                    <a href="#"></a>
                </div>
                <div class="settings-wrap">
                    <img class="settings" src="img/icons/settings.svg" alt="">
                </div>
                <span class="white-text user-email"><%=login.email%></span>
           
        </li>
         </div>
        <div class="">
            <li class="sidenav-item">
                <a onclick="back_to_main()">
                    <img src="img/icons/sydney-opera-house.svg" alt="">
                    <p style="color:#8E2694;font-weight:700;font-size:16px;">Home</p>
                </a>
            </li>            
            <li class="sidenav-item sidenav-element">
                <a onclick="go_to_perfil()">
                    <!-- <img src="img/icons/financeiro_cartao.svg" alt=""> -->
                    <!--<i class="material-icons prefix">person_outline</i>-->
                    <img src="img/icons/grupos_orientadorr.svg" alt="">
                    <p class="all">Meus Cursos</p>
                </a>
            </li>
            
            <% var tipo_aluno = get_data('tipo_aluno') %>    
            <% if(tipo_aluno == 'MBA'){%>

            <li class="sidenav-item sidenav-element" id="minha_turma">
                <a onclick="go_to_home_sales()">
                    <!-- <img src="img/icons/financeiro_cartao.svg" alt=""> -->
                    <!--<i class="material-icons prefix" >people_outline</i>-->
                    <img class="icon-sidebar" src="img/icons/icone_heart.svg" alt="">
                    <p class="all">Favoritos</p>
                </a>
            </li>

            <%}else{%>

            <%}%>

           
            <li class="sidenav-item sidenav-element">
                <a onclick="chama_central_notificacao()">              
                    <!--<i class="material-icons prefix">add_shopping_cart</i>-->
                     <img src="img/icons/notification.svg" alt="">
                    <p class="all">Notificações</p>
                </a>
            </li>

           
            <li class="sidenav-item sidenav-element" id="minha_turma">
                <a onclick="go_to_minhaturma()">
                    <!-- <img src="img/icons/financeiro_cartao.svg" alt=""> -->
                    <!--<i class="material-icons prefix" >people_outline</i>-->
                    <img class="icon-sidebar" src="img/icons/users.svg" alt="">
                    <p class="all">Minha Turma</p>
                </a>
            </li>
               

            <li class="sidenav-item sidenav-element">
                <a onclick="go_to_faq()">
                    <img src="img/icons/feed_comentarios_inativo.svg" alt="">
                    <p class="all">Me ajuda aí</p>
                </a>
            </li>
            <!--<li class="sidenav-item">
            <a onclick="">
                <img src="img/icons/feed_comentarios_inativo.svg" alt="">
                <input type="file" id="teste-book" onchange="chama_book(this)">
            </a>
            </li>-->

            <!--<li class="sidenav-item">
                 <a onclick="chama_certificados()"></a>
                <a class="multilevel"><i class="material-icons" style="color: #934684;">info_outline</i>Políticas</a>
                <ul class="sublevel d-none">
                    <li class="sidenav-item" style="transform: translateX(15%);" onclick="chama_politica_privacidade()"> Política de Privacidade  </li>
                    <li class="sidenav-item" style="transform: translateX(15%);" onclick="chama_termos_uso()"> Termos de Uso  </li>
                </ul>
            </li>-->
            
            <li class="sidenav-item bottom menu-redes left" style="bottom: 35px; border-top: 0px !important;">
                <div class="row center" style="width: 100%; margin-left: -4%; display: flex; align-items: center; justify-content: left;margin-bottom:12px;">
                <div class="">
                        <a href="https://web.facebook.com/liveuuniversity" target="_blank">
                            <img src="img/icons/face-icon.png" class="redes-icon">
                        </a>
                    </div>
                    <div class="redes-icon">
                        <a href="https://www.instagram.com/live_university" target="_blank">
                            <img src="img/icons/insta-icon.png" class="redes-icon">
                        </a>
                    </div>
                    <div class="redes-icon">
                        <a href="https://www.linkedin.com/school/liveuuniversity/" target="_blank">
                            <img src="img/icons/linnkedin-icon.png" class="redes-icon">
                        </a>
                    </div>
                </div>
            </li>

            <li class="sidenav-item bottom menu-politicas hide" style="bottom: 110px;">
                <a onclick="chama_politica_privacidade()" style="justify-content: flex-start !important;">
                Privacidade                
                </a>

                <a onclick="chama_termos_uso()">
                Uso                    
                </a>
                <span style="position: absolute; margin-top: -11%; margin-left: -2%; color: gray;">v.<%- get_data('versao')%></span>
            </li>

            <li class="sidenav-item bottom">
                <a onclick="exibe_politicas()" style="justify-content: flex-start !important;">
                Politicas                
                </a>

                <a onclick="reset_data()">
                    Sair
                    <img src="img/icons/logout.svg" alt="">
                </a>
            </li>
        </div>
    </ul>
`

$(function () {
    $('.multilevel').on('click', function () {
        $(this).next().toggleClass('d-none');
    });
})

function exibe_politicas() {
    var a = document.querySelector('.menu-politicas').classList.contains('hide')
    if (a) {
        $(".menu-politicas").removeClass("hide")
    } else {
        $(".menu-politicas").addClass("hide")
    }
}