import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ColorDirective } from './user/Directives/color.directive';
import { UserNamesPipe } from './Pipes/user-names.pipe';
import { UserAgePipe } from './user/Pipes/user-age.pipe';
import { SquaresComponent } from './squares/squares.component';
import { ChangeSquareColorDirective } from './squares/Directives/change-square-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ColorDirective,
    UserNamesPipe,
    UserAgePipe,
    SquaresComponent,
    ChangeSquareColorDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
