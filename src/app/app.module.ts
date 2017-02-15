import '../styles/headings.css';
import '../styles/styles.scss';
import { AboutComponent } from './about';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { AppState, InternalStateType } from './app.service';
import { BgInputComponent } from './bg-Input';
import { ENV_PROVIDERS } from './environment';
import { HomeComponent } from './home';
import { HomeService } from './home/home.Service';
import { ReactiveFormComponent } from './reactive-form';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { TextSplitPipe } from './shared/pipes/text-split.pipe';
import { SimpleFormComponent } from './simple-form';
import { ApplicationRef, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import {RedizationDirective} from './shared/directives/redization.directive'
/*
 * Platform and Environment providers/directives/pipes
 */
// App is our top level component


// Application wide providers
const APP_PROVIDERS = [
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BgInputComponent,
    SimpleFormComponent,
    ReactiveFormComponent,
    TextSplitPipe,
    FilterPipe,
    RedizationDirective
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    HomeService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
