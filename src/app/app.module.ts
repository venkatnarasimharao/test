import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { routing } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './common/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ng6-toastr-notifications';
// socket 
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url : environment.apiUrl, options: {}};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    CommonModule,
    SharedModule,
    FormsModule,
    HttpModule,
    ToastrModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
