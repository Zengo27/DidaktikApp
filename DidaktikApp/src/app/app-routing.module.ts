import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'leku-informazioa/:lekua',
    loadChildren: () => import('./leku-informazioa/leku-informazioa.module').then( m => m.LekuInformazioaPageModule)
  },
  {
    path: 'bukatu',
    loadChildren: () => import('./bukatu/bukatu.module').then( m => m.BukatuPageModule)
  },
  {
    path: 'lotzeko-jokua',
    loadChildren: () => import('./lotzeko-jokua/lotzeko-jokua.module').then( m => m.LotzekoJokuaPageModule)
  },
  {
    path: 'igeldo-argazkiak',
    loadChildren: () => import('./igeldo-argazkiak/igeldo-argazkiak.module').then( m => m.IgeldoArgazkiakPageModule)
  },
  {
    path: 'joku-informazioa',
    loadChildren: () => import('./joku-informazioa/joku-informazioa.module').then( m => m.JokuInformazioaPageModule)
  },
  {
    path: 'joku-informazioa:lekua',
    loadChildren: () => import('./joku-informazioa/joku-informazioa.module').then( m => m.JokuInformazioaPageModule)
  },
  {
    path: 'katedrala-jolasa',
    loadChildren: () => import('./katedrala-jolasa/katedrala-jolasa.module').then( m => m.KatedralaJolasaPageModule)
  },
  {
    path: 'puzzlea',
    loadChildren: () => import('./puzzlea/puzzlea.module').then( m => m.PuzzleaPageModule)
  },
  {
    path: 'danborrada-jolasa',
    loadChildren: () => import('./danborrada-jolasa/danborrada-jolasa.module').then( m => m.DanborradaJolasaPageModule)
  },
  {
    path: 'letra-sopa-jokua',
    loadChildren: () => import('./letra-sopa-jokua/letra-sopa-jokua.module').then( m => m.LetraSopaJokuaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'leku-informazioa/:lekua',
    loadChildren: () => import('./leku-informazioa/leku-informazioa.module').then( m => m.LekuInformazioaPageModule)
  },
  {
    path: 'bukatu',
    loadChildren: () => import('./bukatu/bukatu.module').then( m => m.BukatuPageModule)
  },
  {
    path: 'lotzeko-jokua',
    loadChildren: () => import('./lotzeko-jokua/lotzeko-jokua.module').then( m => m.LotzekoJokuaPageModule)
  },
  {
    path: 'igeldo-argazkiak',
    loadChildren: () => import('./igeldo-argazkiak/igeldo-argazkiak.module').then( m => m.IgeldoArgazkiakPageModule)
  },
  {
    path: 'joku-informazioa',
    loadChildren: () => import('./joku-informazioa/joku-informazioa.module').then( m => m.JokuInformazioaPageModule)
  },
  {
    path: 'joku-informazioa:lekua',
    loadChildren: () => import('./joku-informazioa/joku-informazioa.module').then( m => m.JokuInformazioaPageModule)
  },
  {
    path: 'katedrala-jolasa',
    loadChildren: () => import('./katedrala-jolasa/katedrala-jolasa.module').then( m => m.KatedralaJolasaPageModule)
  },
  {
    path: 'puzzlea',
    loadChildren: () => import('./puzzlea/puzzlea.module').then( m => m.PuzzleaPageModule)
  },
  {
    path: 'danborrada-jolasa',
    loadChildren: () => import('./danborrada-jolasa/danborrada-jolasa.module').then( m => m.DanborradaJolasaPageModule)
  },
  {
    path: 'haizearenorrazia-jokua',
    loadChildren: () => import('./haizearenorrazia-jokua/haizearenorrazia-jokua.module').then( m => m.HaizearenorraziaJokuaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
