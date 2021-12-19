import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    FlexLayoutModule
  ],
  exports: [
    UiModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
