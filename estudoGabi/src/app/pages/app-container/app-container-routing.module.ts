
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppContainerComponent } from './app-container.component';
import { AuthGuard } from './../../core/guards/auth-guard';

const routes: Routes = [{ path: '', component: AppContainerComponent,
  children:[
    { path: ':id/home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard] },
    { path:'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule), canActivate:[AuthGuard] },
    { path: 'server-edit', loadChildren: () => import('../server-edit/server-edit.module').then(m => m.ServerEditModule), canActivate:[AuthGuard] },
    { path: 'items', loadChildren: () => import('../items/items.module').then(m => m.ItemsModule), canActivate:[AuthGuard]  },
    { path: 'jobs', loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsModule), canActivate:[AuthGuard]  },
    { path: 'avatar', loadChildren: () => import('../avatar/avatar.module').then(m => m.AvatarModule) },
    { path: 'expMachine', loadChildren: () => import('../exp-machine/exp-machine.module').then(m => m.ExpMachineModule), canActivate:[AuthGuard]  },
    { path: 'desease', loadChildren: () => import('../desease/desease.module').then(m => m.DeseaseModule), canActivate:[AuthGuard]  },
    { path: 'tabExp', loadChildren: () => import('../tab-exp/tab-exp.module').then(m => m.TabExpModule), canActivate:[AuthGuard]  }
  ]
}

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppContainerRoutingModule { }
