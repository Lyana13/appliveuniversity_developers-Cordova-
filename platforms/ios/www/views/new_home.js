console.log("HERE")
var new_home_logado = `
    <div class="new-home <% if(is_logged_in) { %> new-home-logado <% } %>">
        <% if(is_logged_in) { %>
            <div id="new-home-nav"></div>
            <div class="row first">
                <div class="col s12" style="padding: 0">
                    <h3>Meus Projetos</h3>
                    <div class="container-scroll carousel-curso" id="meus-projetos"></div>
                </div>
            </div>
        <% } else { %>
            <div class="row top" id="nav-deslogado">
                <div class="col s6 left-align"><img class="logo" src="image/logo_cubo_live_university.svg" alt="logo"></div>
                <div class="col s6 right-align valign-wrapper"><button onclick="loading_main()">Login</button></div>
            </div>
        <% } %>

    <div class="row  <% if(!is_logged_in) { %> first <% } %>">
        <div class="col s12" style="padding: 0">
            <h3>Selecione sua área de atuação</h3>
            <div id="area" class="full-scroll-container">
                <button id_area="" class="solid scroll-item" onclick="new_home_filter(this)">TODOS</button>
                <button id_area="11" class="outline scroll-item" onclick="new_home_filter(this)">VENDAS</button>
                <button id_area="3" class="outline scroll-item" onclick="new_home_filter(this)">COMUNICAÇÃO</button>
                <button id_area="18" class="outline scroll-item" onclick="new_home_filter(this)">FINANÇEIRO</button>
                <button id_area="10, 21, 22, 23, 24, 25" class="outline scroll-item" onclick="new_home_filter(this)">TECNOLOGIA</button>
                <button id_area="9, 27" class="outline scroll-item" onclick="new_home_filter(this)">RH</button>
                <button id_area="6" class="outline scroll-item" onclick="new_home_filter(this)">MARKETING</button>
                <button id_area="4" class="outline scroll-item" onclick="new_home_filter(this)">FISCAL</button>
                <button id_area="2" class="outline scroll-item" onclick="new_home_filter(this)">COMPRAS</button>
                <button id_area="28" class="outline scroll-item" onclick="new_home_filter(this)">Projetos</button>
                <button id_area="2, 5, 26" class="outline scroll-item" onclick="new_home_filter(this)">Supply</button>
                <button id_area="20" class="outline scroll-item" onclick="new_home_filter(this)">Inteligência de Mercado</button>
            </div>
        </div>
    </div>
        <div class="carousel-filter">
            <div class="row">
                <div class="col s12" style="padding: 0">
                    <h3>Pós-Graduações</h3>
<!--                    <div class="carousel carousel-curso" id="pos-grad">-->
                    <div class="container-scroll carousel-curso" id="pos-grad">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12" style="padding: 0">
                    <h3>Destaques</h3>
                    <div class="container-scroll carousel-curso" id="destaques">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12" style="padding: 0">
                    <h3>Workshops</h3>
                    <div class="container-scroll carousel-curso" id="workshops">
                    </div>
                </div>
            </div>
        </div>
    </div>
    
`

var new_home_item_v = `
    <% for(const curso of cursos) { %>
        <% if(curso.id_tipo_projeto == 'ondemand') { %>
            <div class="curso-item carousel-item" id-grupo="<%= curso.id_grupo %>" id-projeto="<%= curso.id_projeto %>" onclick="load_curso_ondemand(this)">
                <div class="card curso curso-medio" id='curso-<%= curso.id_projeto %>' style="background-image: url('image/fundo_card_mba.svg')">
                    <div class="titulo">
                        <%= curso.grupo %>
                    </div>
                    <div class="live-mark"></div>
                </div>
            </div>
        <% } else if (curso.id_tipo_projeto == 1 || curso.id_tipo_projeto == 23){ %>
            <div class="curso-item carousel-item" onclick="go_to_meus_eventos(<%= curso.id_projeto%>)">
                <div class="card curso curso-medio" id='curso-<%= curso.id_projeto %>' style="background-image: url('image/fundo_card_mba.svg')">
                    <div class="titulo">
                        <%= curso.grupo %>
                    </div>
                    <div class="live-mark"></div>
                </div>
            </div>
        <% } else if (curso.id_tipo_projeto == 16){%>
            <div class="curso-item carousel-item" id-grupo="<%= curso.id_grupo%>" id-tipo="<%= curso.id_tipo_projeto%>" onclick="load_main_aulas(this)">
                <div class="card curso curso-medio" id='curso-<%= curso.id_grupo %>' style="background-image: url('image/fundo_card_mba.svg')">

                    <div class="titulo">
                        <%= curso.grupo %>
                    </div>
                    <div class="live-mark"></div>
                </div>
            </div>
        <% } else { %>
            <div class="curso-item carousel-item" id-grupo="<%= curso.id_grupo%>" id-tipo="<%= curso.id_tipo_projeto%>" onclick="load_main_aulas(this)">
                <div class="card curso curso-medio" id='curso-<%= curso.id_grupo %>' style="background-image: url('image/fundo_card_mba.svg')">
                    <div class="titulo">
                        <%= curso.grupo %>
                    </div>
                    <div class="live-mark"></div>
                </div>
            </div>
        <% } %>
    <% } %>
    <h3 style='display: none' class='area-vazia'>Não cursos para essa área</h3>
`

var new_home_sales_v = ` 
<% for(const curso of cursos) { %>
    <div class="curso-item curso-sale carousel-item" id-projeto="<%= curso.id_projeto %>" data-area="<%= curso.desc_area %>" data-fav="<%= curso.favorito %>"  data-id_area="<%= curso.id_area %>">
        <div class="card curso curso-medio" id-projeto="<%= curso.id_projeto%>" tipo="<%= Number(is_logged_in) %>" onclick="open_home_sale(this)" style="background-image: url('image/fundo_card_pos_graduacao.svg')">
            <div class="live-mark"></div>
            <div class="titulo">
                <%- titleize(curso.nome_projeto) %>
            </div>
        </div>
    </div>
<% } %>
<h3 style='display: none' class='area-vazia'>Não cursos para essa área</h3>
`

var new_home_nav = `
    <div class="row">
        <div class="col s6 left-align"><img class="logo" src="image/logo_cubo_live_university.svg" alt="logo"></div>
        <div class="col s6 right-align valign-wrapper btn-wrapper-menu">
            <a href="#" class="notification-icon" onclick="chama_central_notificacao()">
                <i class="material-icons inbox">inbox</i>
            </a>
            <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large">
                <i class="material-icons menu">menu</i>
            </a>
        </div>
    </div>
`


function slide_left(){
    $(".menu-btn-burger").click(function() {
    $(".menu-btn-burger").addClass('test');
});
}

var cursos_home;

function load_new_home_logado(){
    document.querySelector('.maine-change').innerHTML = ejs.render(new_home_logado, {is_logged_in: true});
    require_loader('open');
    $.post(server + '/get_cursos_home', { id: get_data('geral').id })
        .done((data) => {
            console.log("chaeck1",data);
             cursos_home = data;
              console.log("dadada_logado" ,cursos_home);
            //render_courses_carousels([]);
            const cursos = data.meus_projetos;
            console.log(cursos);
            const cursosPorData = cursos.sort((a, b) => {
                if (a.id_projeto && b.id_projeto) {
                    if (Date.parse(a.id_projeto) > Date.parse(b.id_projeto)) {
                        return -1;
                    } else {
                        return 1;
                    }
                } else {
                    return 0;
                }
            })
            const cursosComMBAsPrimeiro = cursosPorData.sort((a, b) => {
                if (a.grupo.startsWith('MBA')) {
                    return -1;
                } else if (b.grupo.startsWith('MBA')) {
                    return 1;
                } else {
                    return 0;
                }
            });
            document.querySelector('#meus-projetos').innerHTML  = ejs.render(new_home_item_v, { cursos: cursosComMBAsPrimeiro });
            initialize_meus_projetos_carousel();
            render_courses_carousels([]);

            $(function() {
                //caches a jQuery object containing the header element
                var nav = $("#new-home-nav");
                $(window).scroll(() => {
                    var scroll = $(window).scrollTop();
                    if (scroll >= 50) {
                        nav.addClass('border-shadow');
                    } else {
                        nav.removeClass("border-shadow");
                    }
                });
            });

            require_loader('close');
            }).fail(function (b) {
                require_loader('close');
                console.log({ b })
            })
}

function initialize_courses_carousel() {
    if ($('.carousel-curso').length > 0) {
        if ($('#pos-grad .carousel-item').length > 0) {
            $('#pos-grad .area-vazia').css('display', 'none');
        } else {
            $('#pos-grad .area-vazia').css('display', 'block');
        }

        if ($('#workshops .carousel-item').length > 0) {
            $('#workshops .area-vazia').css('display', 'none');
        } else {
            $('#workshops .area-vazia').css('display', 'block');
        }

        if ($('#destaques .carousel-item').length > 0) {
            $('#destaques .area-vazia').css('display', 'none');
        } else {
            $('#destaques .area-vazia').css('display', 'block');
        }
    }
}

function initialize_meus_projetos_carousel(){
    if ($('#meus-projetos .carousel-item').length > 0) {
        $('#meus-projetos .area-vazia').css('display', 'none');
    } else {
        $('#meus-projetos .area-vazia').css('display', 'block');
    }
}

function new_home_load() {
    $.post(server + '/get_cursos_home', { id: 0 })
        .done((data) => {
            cursos_home = data;
            console.log("dadada" ,cursos_home);
            render_courses_carousels([]);
            $(function() {
                //caches a jQuery object containing the header element
                var nav = $("#nav-deslogado");
                $(window).scroll(() => {
                    var scroll = $(window).scrollTop();
                    if (scroll >= 50) {
                        nav.addClass('border-shadow');
                    } else {
                        nav.removeClass("border-shadow");
                    }
                });
            });
        }).fail(function (b) {
            // console.log({ b })
        })
    }

function render_courses_carousels(id_area) {
    var is_logged_in = get_data('geral') != null;
    const { portifolio: { pos, destaques, workshop } } = cursos_home;
    console.log("render_courses_carousel-POS", pos);
    render_courses_carousel('#pos-grad', pos, id_area, is_logged_in)
    render_courses_carousel('#destaques', destaques, id_area, is_logged_in)
    render_courses_carousel('#workshops', workshop, id_area, is_logged_in)
    initialize_courses_carousel()
}

function render_courses_carousel(selector, courses, id_area_filter, is_logged_in) {
    console.log("render_courses_carousel-HOME", courses);
    if (id_area_filter.length > 0) {
        courses = courses.filter(course => {
            const id_area_course = course.id_area.split(",");
            return id_area_filter.some(num => id_area_course.includes(num));
        })
    }
    console.log("is_logged_inis_logged_in", is_logged_in);
    document.querySelector(selector).innerHTML  = ejs.render(new_home_sales_v, { cursos: courses, is_logged_in: is_logged_in });

    // console.log(" ejs.render(new_home_item_v, { cursos: courses })",  ejs.render(new_home_item_v, { cursos: courses }));
}

function new_home_filter(pressedButton) {
    console.log("new_home-LOGADO.js");
//    require_loader('open');
//    const text = e;
    const idAreaButton = pressedButton.getAttribute("id_area").split(',').filter(e => e != "").map(e => e.trim());
    render_courses_carousels(idAreaButton);
    document.querySelectorAll('#area button').forEach(el => el.className = 'outline scroll-item');
    pressedButton.className = 'solid scroll-item';



    //initialize_courses_carousel();
//    require_loader('close');
}
