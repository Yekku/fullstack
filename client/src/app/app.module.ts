import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {TokenInterceptor} from './shared/classes/token.interceptor';
import {OverviewPageComponent} from './pages/overview-page/overview-page.component';
import {AnalyticsPageComponent} from './pages/analytics-page/analytics-page.component';
import {HistoryPageComponent} from './pages/history-page/history-page.component';
import {OrderPageComponent} from './pages/order-page/order-page.component';
import {CategoriesPageComponent} from './pages/categories-page/categories-page.component';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {CategoriesFormComponent} from './pages/categories-page/categories-form/categories-form.component';
import {PositionsFormComponent} from './pages/categories-page/categories-form/positions-form/positions-form.component';
import {OrderCategoriesComponent} from './pages/order-page/order-categories/order-categories.component';
import {OrderPositionsComponent} from './pages/order-page/order-positions/order-positions.component';
import {HistoryListComponent} from './pages/history-page/history-list/history-list.component';
import {HistoryFilterComponent} from './pages/history-page/history-filter/history-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewPageComponent,
    AnalyticsPageComponent,
    HistoryPageComponent,
    OrderPageComponent,
    CategoriesPageComponent,
    LoaderComponent,
    CategoriesFormComponent,
    PositionsFormComponent,
    OrderCategoriesComponent,
    OrderPositionsComponent,
    HistoryListComponent,
    HistoryFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
