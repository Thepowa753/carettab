import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Core Imports
import { AppComponent } from './app.component';
import { Ng2ChromeStorageModule } from './_storage/storage.module';
import { Settings } from './_storage/settings';
import { SharedService, TranslateCut } from './_shared/shared.service';
import { WallpaperService } from './_shared/wallpaper.service';
import { PopupService } from './_shared/controls/popup.service';
import { PositionComponent } from './_shared/controls/position.component';
import { ToggleComponent } from './_shared/controls/toggle.component';
import { RangeComponent } from './_shared/controls/range.component';
import { SettingsToggleComponent } from './_shared/controls/settings-toggle.component';
import { LogoComponent } from './_shared/controls/logo.component';
import { PremiumLabelComponent } from './_shared/controls/premium-label.component';
import { PremiumModalComponent } from './_shared/modals/premium-modal.component';
import { IntroModalComponent } from './_shared/modals/intro-modal.component';
import { MostVisitedMenuComponent } from './tab/bookmarks/most-visited-menu.component';
import { WeatherService } from './tab/weather/weather.service';
import * as moment from 'moment-timezone';
import { SimpleModalModule, defaultSimpleModalOptions } from 'ngx-simple-modal';

// Options Imports
import { OptionsComponent } from './options/options.component';
import { OptionsBookmarksComponent } from './options/bookmarks/bookmarks.component';
import { OptionsDashboardComponent } from './options/dashboard/dashboard.component';
import { OptionsDateComponent } from './options/date/date.component';
import { OptionsDesignComponent } from './options/design/design.component';
import { OptionsExtraComponent } from './options/extra/extra.component';
import { OptionsMessageComponent } from './options/message/message.component';
import { OptionsNotepadComponent } from './options/notepad/notepad.component';
import { OptionsSearchComponent } from './options/search/search.component';
import { OptionsTimeComponent } from './options/time/time.component';
import { OptionsWeatherComponent } from './options/weather/weather.component';
import { TimezonePipe } from './options/time/timezone.pipe';
import { TimezoneService } from './options/time/timezone.service';

// Tab Imports
import { TabComponent } from './tab/tab.component';
import { TabBookmarksComponent } from './tab/bookmarks/bookmarks.component';
import { TabQuickLinksComponent } from './tab/bookmarks/quickLinks.component';
import { TabTimeComponent } from './tab/time/time.component';
import { TabDateComponent } from './tab/date/date.component';
import { TabMessageComponent } from './tab/message/message.component';
import { TabNotepadComponent } from './tab/notepad/notepad.component';
import { TabSearchComponent } from './tab/search/search.component';
import { TabWeatherComponent } from './tab/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    RangeComponent,
    PositionComponent,
    SettingsToggleComponent,
    LogoComponent,
    PremiumLabelComponent,
    PremiumModalComponent,
    IntroModalComponent,
    MostVisitedMenuComponent,
    TranslateCut,

    OptionsComponent,
    OptionsBookmarksComponent,
    OptionsDashboardComponent,
    OptionsDateComponent,
    OptionsDesignComponent,
    OptionsExtraComponent,
    OptionsMessageComponent,
    OptionsNotepadComponent,
    OptionsSearchComponent,
    OptionsTimeComponent,
    OptionsWeatherComponent,
    TimezonePipe,

    TabComponent,
    TabBookmarksComponent,
    TabQuickLinksComponent,
    TabTimeComponent,
    TabDateComponent,
    TabMessageComponent,
    TabNotepadComponent,
    TabSearchComponent,
    TabWeatherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Ng2ChromeStorageModule,
    SimpleModalModule.forRoot({container: document.body}, {
      animationDuration: 0,
      autoFocus: true,
      bodyClass: 'modal-open',
      closeOnClickOutside: true,
      closeOnEscape: true,
      wrapperClass: 'in',
      wrapperDefaultClasses: 'modal',
      draggable: false,
      draggableClass: 'draggable',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
  ],
  providers: [
    SharedService,
    WallpaperService,
    PopupService,
    TimezoneService,
    WeatherService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MostVisitedMenuComponent,
    PremiumModalComponent,
    IntroModalComponent
  ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
