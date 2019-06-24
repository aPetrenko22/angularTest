import { HomeGuard } from './../../core/guards/home.guard';
import { DataComponent } from './pages/data/data.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextComponent } from './pages/text/text.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [HomeGuard],
    data: { animation: 'MainComponent' },
  },
  {
    path: 'data',
    component: DataComponent,
    canActivate: [HomeGuard],
    data: { animation: 'DataComponent' },
  },
  {
    path: 'text',
    component: TextComponent,
    canActivate: [HomeGuard],
    data: { animation: 'TextComponent' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
