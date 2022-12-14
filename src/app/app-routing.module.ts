import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioPageModule),
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./pages/alert/alert.module').then((m) => m.AlertPageModule),
  },
  {
    path: 'action-sheet',
    loadChildren: () =>
      import('./pages/action-sheet/action-sheet.module').then(
        (m) => m.ActionSheetPageModule
      ),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./pages/avatar/avatar.module').then((m) => m.AvatarPageModule),
  },
  {
    path: 'photo',
    loadChildren: () =>
      import('./pages/photo/photo.module').then((m) => m.PhotoPageModule),
  },

  {
    path: 'button',
    loadChildren: () =>
      import('./pages/button/button.module').then((m) => m.ButtonPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./pages/card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./pages/checkbox/checkbox.module').then(
        (m) => m.CheckboxPageModule
      ),
  },
  {
    path: 'time',
    loadChildren: () =>
      import('./pages/time/time.module').then((m) => m.TimePageModule),
  },
  {
    path: 'BtnPopOver',
    loadChildren: () =>
      import('./pages/buttons-pop/buttons-pop.module').then(
        (m) => m.ButtonsPopPageModule
      ),
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./pages/grid/grid.module').then((m) => m.GridPageModule),
  },
  {
    path: 'scroll',
    loadChildren: () =>
      import('./pages/scroll-infinito/scroll-infinito.module').then(
        (m) => m.ScrollInfinitoPageModule
      ),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./pages/input/input.module').then((m) => m.InputPageModule),
  },
  {
    path: 'lista-json',
    loadChildren: () =>
      import('./pages/lista-json/lista-json.module').then(
        (m) => m.ListaJSONPageModule
      ),
  },
  {
    path: 'lista-reorder',
    loadChildren: () =>
      import('./pages/lista-reorder/lista-reorder.module').then(
        (m) => m.ListaReorderPageModule
      ),
  },
  {
    path: 'rick-morty',
    loadChildren: () =>
      import('./pages/rick-morty/rick-morty.module').then(
        (m) => m.RickMortyPageModule
      ),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesPageModule),
  },
  {
    path: 'movies/:id',
    loadChildren: () =>
      import('./pages/movies-detalles/movies-detalles.module').then(
        (m) => m.MoviesDetallesPageModule
      ),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./pages/modal/modal.module').then((m) => m.ModalPageModule),
  },
  {
    path: 'scanner',
    loadChildren: () =>
      import('./pages/scanner/scanner.module').then((m) => m.ScannerPageModule),
  },
  {
    path: 'scanner-history',
    loadChildren: () =>
      import('./pages/scanner-history/scanner-history.module').then(
        (m) => m.ScannerHistoryPageModule
      ),
  },

  {
    path: 'pop-over',
    loadChildren: () =>
      import('./pages/pop-over/pop-over.module').then(
        (m) => m.PopOverPageModule
      ),
  },
  {
    path: 'git-hub',
    loadChildren: () =>
      import('./pages/git-hub/git-hub.module').then((m) => m.GitHubPageModule),
  },
  {
    path: 'mapa-geo',
    loadChildren: () =>
      import('./pages/mapa-geo/mapa-geo.module').then(
        (m) => m.MapaGeoPageModule
      ),
  },
  {
    path: 'rango-progress',
    loadChildren: () =>
      import('./pages/rango-progress/rango-progress.module').then(
        (m) => m.RangoProgressPageModule
      ),
  },
  {
    path: 'refresh',
    loadChildren: () =>
      import('./pages/refresh/refresh.module').then((m) => m.RefreshPageModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'desplazables',
    loadChildren: () => import('./pages/desplazables/desplazables.module').then( m => m.DesplazablesPageModule)
  },
  {
    path: 'deslizante-slize',
    loadChildren: () => import('./pages/deslizante-slize/deslizante-slize.module').then( m => m.DeslizanteSlizePageModule)
  },
  {
    path: 'deslizante-slide2',
    loadChildren: () => import('./pages/deslizante-slide2/deslizante-slide2.module').then( m => m.DeslizanteSlide2PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
