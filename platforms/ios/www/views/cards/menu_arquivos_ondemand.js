var menu_arquivos_ondemand = `

<div class="ondemand-body">

  <div class="card menu-arquivos-ondemand" id='modulo-x'>
    
    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <div class="wrap-help-title">
          <i class="material-icons">help_outline</i>
          <p class="title-card">Duvidas</p>
        </div>

        <i class="abrir material-icons">add</i>
        <i class="fechar material-icons">remove</i>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">
        <p class="text-inner-corpo">Escreva aqui quais são suas dúvidas sobre a aula:</p>
        <div class="wrap-help-title">
           <input type="text" size="40">
           <i class="fas fa-paper-plane"></i>
         </div>
      </div>
      </li>
    </ul>
    </div>
           
<!--    <div class="accordion menu-arquivos-icons" id-aula='<%=id_aula%>'>Section 1</div>-->
<!--&lt;!&ndash;    <button class="accordion">Section 1</button>&ndash;&gt;-->
<!--    <div class="panel">-->
<!--      <p>Lorem ipsum...</p>-->
<!--    </div>-->
<!--           <ul class="card-content menu-arquivos-icons material-de-aula collapsible">-->
<!--           <li>-->
<!--           <div class='cabecalho collapsible-header' id-aula='<%=id_aula%>'>-->
<!--           <i class="material-icons">help_outline</i>-->
<!--           <p class="title-card">Duvidas</p>-->
<!--           <i class="abrir material-icons">add</i>-->
<!--           <i class="fechar material-icons">remove</i>-->
<!--           </div>-->
<!--           <div class="corpo collapsible-body">-->
<!--           <strong class="grey-text text-darken-1">Arquivos:</strong>-->
<!--           <input type="file" name="" id="upload-input" multiple>-->
<!--           <a class="hide" id="feedbacklink" href="x"></a>           -->
<!--           </div>-->
<!--           </li>-->
<!--           </ul>-->



<!--        <div class="card-content menu-arquivos-icons valign-wrapper">-->
<!--        <input class="hide" type="file" name="" id="upload-input" multiple>-->
<!--        <a class="hide" id="feedbacklink" href="x"></a>-->
<!--           <ul class="card-content menu-arquivos-icons collapsible">-->
<!--&lt;!&ndash;           <div class="card-content menu-arquivos-icons valign-wrapper">           &ndash;&gt;-->
<!--           <li>-->
<!--           <div class='cabecalho collapsible-header' id-aula='<%=id_aula%>'>-->
<!--           <i class="material-icons">help_outline</i>-->
<!--           <p class="title-card">Duvidas</p>-->
<!--           <i class="abrir material-icons">add</i>-->
<!--           <i class="fechar material-icons">remove</i>-->
<!--           </div>-->
<!--           <div class="corpo collapsible-body">-->
<!--           <strong class="grey-text text-darken-1">Arquivos</strong>-->
<!--           </div>-->
<!--           </li>-->
<!--&lt;!&ndash;           </div>&ndash;&gt;-->
<!--           </ul>-->
<!--           <div class='valign-wrapper flex' id-aula='<%=id_aula%>'> -->
<!--            <div class='valign-wrapper' id-aula='<%=id_aula%>' onclick='upload_atividade(this)'> -->
<!--            <i class="material-icons">help_outline</i>-->
<!--                <img src="image/icons/geral_upload.svg" alt="">-->
<!--            <p class="title-card">Duvidas</p>-->
<!--            <i class="abrir material-icons">add</i>-->
<!--            <i class="fechar material-icons">remove</i>-->
<!--            </div>-->
<!--        </div>-->
            
<!--        <% if (typeof arquivos != 'undefined' && arquivos.length > 0) { %>     -->
<!--            <ul class="material-de-aula semMargin collapsible z-depth-0">-->
<!--                <li>-->
<!--                    <div class="cabecalho collapsible-header flex jc-fe">-->
<!--                        <div class="flex">-->
<!--                            <span>Material de aula</span>-->
<!--                            <i class="alternadorCorpo abrir material-icons">keyboard_arrow_down</i>-->
<!--                            <i class="alternadorCorpo fechar material-icons">keyboard_arrow_up</i>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="corpo collapsible-body">-->
<!--                        <strong class="grey-text text-darken-1">Arquivos:</strong>-->
<!--                        <ul class="lista-de-anexos">-->
<!--                            <% arquivos.forEach(arquivo => { %>-->
<!--                                <li>-->
<!--                                    <a href="<%= arquivo.link %>" target="_blank" class="grey-text text-darken-2"><%= arquivo.descricao %></a>-->
<!--                                </li>-->
<!--                            <% }) %>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </li>-->
<!--            </ul>-->
<!--        <% } %>-->
  
  
  <div class="card menu-arquivos-ondemand" id='modulo-x'>
    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <i class="material-icons">playlist_add_check</i>
        <p class="title-card">Download do Material</p>
        <i class="abrir material-icons">add</i>
        <i class="fechar material-icons">remove</i>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">
        <p class="text-inner-corpo">Aula 01 - Material de Aula - Planejamento de Marketing_V4.pdf</p>
      </br>
        <p class="text-inner-corpo">Aula 01 - Atividade - Estratégia de Marketing.xlsx</p>    
      </div>
      </li>
    </ul>
    </div>         
<!--        <div class="card-content menu-arquivos-icons valign-wrapper">-->
<!--        <input class="hide" type="file" name="" id="upload-input" multiple>-->
<!--        <a class="hide" id="feedbacklink" href="x"></a>-->
<!--&lt;!&ndash;            <div class='col s6 valign-wrapper' id-aula='<%=id_aula%>' onclick='upload_atividade(this)'> &ndash;&gt;-->
<!--&lt;!&ndash;                <img src="image/icons/geral_upload.svg" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                Upload&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <div id='gabarito' class='valign-wrapper'>-->
<!--                <i class="material-icons">playlist_add_check</i>-->
<!--                <p class="title-card">Download do Material</p>-->
<!--                <i class="material-icons">add</i>-->
<!--            </div>-->
        
<!--        </div>-->
<!--        <% if (typeof arquivos != 'undefined' && arquivos.length > 0) { %>     -->
<!--            <ul class="material-de-aula semMargin collapsible z-depth-0">-->
<!--                <li>-->
<!--                    <div class="cabecalho collapsible-header flex jc-fe">-->
<!--                        <div class="flex">-->
<!--                            <span>Material de aula</span>-->
<!--                            <i class="alternadorCorpo abrir material-icons">keyboard_arrow_down</i>-->
<!--                            <i class="alternadorCorpo fechar material-icons">keyboard_arrow_up</i>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="corpo collapsible-body">-->
<!--                        <strong class="grey-text text-darken-1">Arquivos:</strong>-->
<!--                        <ul class="lista-de-anexos">-->
<!--                            <% arquivos.forEach(arquivo => { %>-->
<!--                                <li>-->
<!--                                    <a href="<%= arquivo.link %>" target="_blank" class="grey-text text-darken-2"><%= arquivo.descricao %></a>-->
<!--                                </li>-->
<!--                            <% }) %>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </li>-->
<!--            </ul>-->
<!--        <% } %>-->
        
  
  
  <div class="card menu-arquivos-ondemand" id='modulo-x'>

    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <i class="material-icons">cloud_queue</i>
        <p class="title-card">Upload da Atividade</p>
        <i class="abrir material-icons">add</i>
        <i class="fechar material-icons">remove</i>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">

        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4 class="title-modal">Bom Trabalho!</h4>
            <p>O upload da sua atividade foi realizado com sucesso!</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>        
      </div>
      </li>
    </ul>
      </div>             
<!--        <div class="card-content menu-arquivos-icons valign-wrapper">-->
<!--        <input class="hide" type="file" name="" id="upload-input" multiple>-->
<!--        <a class="hide" id="feedbacklink" href="x"></a>-->
<!--&lt;!&ndash;            <div class='col s6 valign-wrapper' id-aula='<%=id_aula%>' onclick='upload_atividade(this)'> &ndash;&gt;-->
<!--&lt;!&ndash;                <img src="image/icons/geral_upload.svg" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                Upload&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <div id='gabarito' class='valign-wrapper'>-->
<!--                <i class="material-icons">cloud_queue</i>-->
<!--                <p class="title-card">Upload da Atividade</p>-->
<!--                <i class="material-icons">add</i>-->
<!--            </div>-->
<!--        -->
<!--        </div>-->
<!--        <% if (typeof arquivos != 'undefined' && arquivos.length > 0) { %>     -->
<!--            <ul class="material-de-aula semMargin collapsible z-depth-0">-->
<!--                <li>-->
<!--                    <div class="cabecalho collapsible-header flex jc-fe">-->
<!--                        <div class="flex">-->
<!--                            <span>Material de aula</span>-->
<!--                            <i class="alternadorCorpo abrir material-icons">keyboard_arrow_down</i>-->
<!--                            <i class="alternadorCorpo fechar material-icons">keyboard_arrow_up</i>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="corpo collapsible-body">-->
<!--                        <strong class="grey-text text-darken-1">Arquivos:</strong>-->
<!--                        <ul class="lista-de-anexos">-->
<!--                            <% arquivos.forEach(arquivo => { %>-->
<!--                                <li>-->
<!--                                    <a href="<%= arquivo.link %>" target="_blank" class="grey-text text-darken-2"><%= arquivo.descricao %></a>-->
<!--                                </li>-->
<!--                            <% }) %>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </li>-->
<!--            </ul>-->
<!--        <% } %>-->
  
  <div class="card menu-arquivos-ondemand" id='modulo-x'>

    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <i class="material-icons">playlist_add_check</i>
        <p class="title-card">Gabarito da Atividade</p>
        <i class="abrir material-icons">add</i>
        <i class="fechar material-icons">remove</i>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">
        <strong class="grey-text text-darken-1">Arquivos:</strong>
        <input type="file" name="" id="upload-input" multiple>
        <a class="hide" id="feedbacklink" href="x"></a>   
        <!-- Modal Trigger -->
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>        
      </div>
      </li>
    </ul>
     </div>          
<!--        <div class="card-content menu-arquivos-icons valign-wrapper">-->
<!--        <input class="hide" type="file" name="" id="upload-input" multiple>-->
<!--        <a class="hide" id="feedbacklink" href="x"></a>-->
<!--&lt;!&ndash;            <div class='col s6 valign-wrapper' id-aula='<%=id_aula%>' onclick='upload_atividade(this)'> &ndash;&gt;-->
<!--&lt;!&ndash;                <img src="image/icons/geral_upload.svg" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                Upload&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <div id='gabarito' class='valign-wrapper'>-->
<!--                <i class="material-icons">playlist_add_check</i>-->
<!--                <p class="title-card">Gabarito da Atividade</p>-->
<!--                <i class="material-icons">add</i>-->
<!--            </div>-->
<!--        -->
<!--        </div>-->
<!--        <% if (typeof arquivos != 'undefined' && arquivos.length > 0) { %>     -->
<!--            <ul class="material-de-aula semMargin collapsible z-depth-0">-->
<!--                <li>-->
<!--                    <div class="cabecalho collapsible-header flex jc-fe">-->
<!--                        <div class="flex">-->
<!--                            <span>Material de aula</span>-->
<!--                            <i class="alternadorCorpo abrir material-icons">keyboard_arrow_down</i>-->
<!--                            <i class="alternadorCorpo fechar material-icons">keyboard_arrow_up</i>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="corpo collapsible-body">-->
<!--                        <strong class="grey-text text-darken-1">Arquivos:</strong>-->
<!--                        <ul class="lista-de-anexos">-->
<!--                            <% arquivos.forEach(arquivo => { %>-->
<!--                                <li>-->
<!--                                    <a href="<%= arquivo.link %>" target="_blank" class="grey-text text-darken-2"><%= arquivo.descricao %></a>-->
<!--                                </li>-->
<!--                            <% }) %>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </li>-->
<!--            </ul>-->
<!--        <% } %>-->
  
  <div class="card menu-arquivos-ondemand" id='modulo-x'>

    <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">
      <li>
      <div class='cabecalho collapsible-header valign-wrapper' id-aula='<%=id_aula%>'>
        <i class="material-icons">star_border</i>
        <p class="title-card">Avaliacao</p>
        <i class="abrir material-icons">add</i>
        <i class="fechar material-icons">remove</i>
      </div>
      <div class="corpo collapsible-body" id="collapsible-body">
        <strong class="grey-text text-darken-1">Arquivos:</strong>
        <input type="file" name="" id="upload-input" multiple>
        <a class="hide" id="feedbacklink" href="x"></a>   
        <!-- Modal Trigger -->
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>        
      </div>
      </li>
    </ul>
    </div>      
<!--          <ul class="card-content menu-arquivos-icons valign-wrapper material-de-aula collapsible">-->
<!--           <li>-->
<!--           <div class='cabecalho collapsible-header' id-aula='<%=id_aula%>'>-->
<!--           <i class="material-icons">star_border</i>-->
<!--           <p class="title-card">Avaliacao</p>-->
<!--           <i class="abrir material-icons">add</i>-->
<!--           <i class="fechar material-icons">remove</i>-->
<!--           </div>-->
<!--           <div class="corpo collapsible-body">-->
<!--           <strong class="grey-text text-darken-1">Arquivos:</strong>-->
<!--           <input type="file" name="" id="upload-input" multiple>-->
<!--           <a class="hide" id="feedbacklink" href="x"></a>-->
<!--           </div>-->
<!--           </li>-->
<!--           </ul>-->
<!--        <div class="card-content menu-arquivos-icons valign-wrapper">-->
<!--        <input class="hide" type="file" name="" id="upload-input" multiple>-->
<!--        <a class="hide" id="feedbacklink" href="x"></a>-->
<!--&lt;!&ndash;            <div class='col s6 valign-wrapper' id-aula='<%=id_aula%>' onclick='upload_atividade(this)'> &ndash;&gt;-->
<!--&lt;!&ndash;                <img src="image/icons/geral_upload.svg" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                Upload&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            <div id='gabarito' class='valign-wrapper'>-->
<!--                <i class="material-icons">star_border</i>-->
<!--                <p class="title-card">Avaliacao</p>-->
<!--                <i class="material-icons">add</i>-->
<!--            </div>-->
<!--        -->
<!--        </div>-->
<!--        <% if (typeof arquivos != 'undefined' && arquivos.length > 0) { %>     -->
<!--            <ul class="material-de-aula semMargin collapsible z-depth-0">-->
<!--                <li>-->
<!--                    <div class="cabecalho collapsible-header flex jc-fe">-->
<!--                        <div class="flex">-->
<!--                            <span>Material de aula</span>-->
<!--                            <i class="alternadorCorpo abrir material-icons">keyboard_arrow_down</i>-->
<!--                            <i class="alternadorCorpo fechar material-icons">keyboard_arrow_up</i>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="corpo collapsible-body">-->
<!--                        <strong class="grey-text text-darken-1">Arquivos:</strong>-->
<!--                        <ul class="lista-de-anexos">-->
<!--                            <% arquivos.forEach(arquivo => { %>-->
<!--                                <li>-->
<!--                                    <a href="<%= arquivo.link %>" target="_blank" class="grey-text text-darken-2"><%= arquivo.descricao %></a>-->
<!--                                </li>-->
<!--                            <% }) %>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </li>-->
<!--            </ul>-->
<!--        <% } %>-->

</div>
`




