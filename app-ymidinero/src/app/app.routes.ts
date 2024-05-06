import { Routes } from '@angular/router';
import { LoaderComponent } from './shared/loader/loader.component';
import { HomeComponent } from './modules/income-expenses/home/home.component';
import { BudgetComponent } from './modules/income-expenses/budget/budget.component';


export const routes: Routes = [
  {
    path: '',
    component: LoaderComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'presupuesto',
    component: BudgetComponent,
  },
];
