import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent
  ],
  providers: [
    MessageService
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    RouterLink,
    MatTableModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MatButtonModule,
    SpeedDialModule,
    MenuModule,
    SplitButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TooltipModule
  ]
})
export class ProdutoModule { }
