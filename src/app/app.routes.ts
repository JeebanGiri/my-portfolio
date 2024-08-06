import { RouterModule, Routes } from '@angular/router';
import { routes } from './shared/routes/routes';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [...routes];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
