import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CrudeModule } from './crude/crude.module';
@NgModule({
  imports: [
    AppModule,
    ServerModule,CrudeModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
