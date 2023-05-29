import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main-page/main.module';
import { AppMaterialModule } from '../app.material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainModule, AppMaterialModule],
})
export class PagesModule {}
