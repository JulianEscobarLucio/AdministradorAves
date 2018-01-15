import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

//componentes
import { AveAddComponent } from './components/ave-add.component'
import { AveListComponent } from './components/ave-lista.component'
import { AveEditComponent } from './components/ave-edit.component'
// import { ErrorComponent } from './components/error.component'


const appRoutes: Routes = [
   {path:'', component: AveAddComponent},
   {path:'crear-aves', component: AveAddComponent},
   {path:'listar-aves', component: AveListComponent},
   {path:'editar-ave/:id', component: AveEditComponent}
//    {path:'**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);