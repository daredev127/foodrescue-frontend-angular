import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  CardModule,
  GridModule,
  NavModule,
  UtilitiesModule,
  TabsModule,
  TableModule,
  ButtonModule,
  ModalModule,
  FormModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { DonationsComponent } from './donations.component';

// Theme Routing
import { DonationsRoutingModule } from './donations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DonationsRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    TableModule,
    ButtonModule,
    ModalModule,
    FormModule,
    FormsModule,
  ],
  declarations: [
    DonationsComponent,
  ],
})
export class DonationsModule {}
