// Angular
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Routing
import { AppRoutingModule } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync()
  ]
};
