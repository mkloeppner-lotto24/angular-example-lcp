import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideImportsOrchestration, withSuspendWhileRouting, withConcurrencyRelativeToDownlinkSpeed, withTimeout } from '@lotto24-angular/imports-orchestrator'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideImportsOrchestration({
      testimonial: 0,
      text: 1,
      battery: 2
    },
      withConcurrencyRelativeToDownlinkSpeed(2, 1),
      withSuspendWhileRouting(),
    )
  ]
};
