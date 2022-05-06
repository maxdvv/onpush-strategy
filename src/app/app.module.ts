import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayInputComponent } from './components/display-input/display-input.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetectChangesComponent } from './components/users-detect-changes/users-detect-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayInputComponent,
    UsersComponent,
    UsersDetectChangesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
