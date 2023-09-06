import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideImportsOrchestration, withConcurrencyRelativeToDownlinkSpeed, withTimeout } from '@lotto24-angular/imports-orchestrator'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideImportsOrchestration({
      testimonial: 0,

    },
      withConcurrencyRelativeToDownlinkSpeed(2, 1),
    )
  ]
};
