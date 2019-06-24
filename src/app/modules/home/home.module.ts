import { MockDataHeaderTransform } from './../../core/pipes/MockDataHeaderTransform.pipe';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../core/core.module';
import { HeaderComponent } from './../../core/shared/header/header.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomepageRoutingModule } from './home-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ModalComponent } from './components/modal/modal.component';
import { DataComponent } from './pages/data/data.component';
import { TextComponent } from './pages/text/text.component';
import { TransformTextDirective } from 'src/app/core/directives/transformText.directive';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ModalComponent,
    DataComponent,
    MockDataHeaderTransform,
    TextComponent,
    TransformTextDirective,
  ],
  imports: [HomepageRoutingModule, CoreModule, FormsModule, CommonModule],
  entryComponents: [ModalComponent],
})
export class HomeModule {}
