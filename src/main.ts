import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import './mocks/all-mocks'; // TODO: Comment out for proper size

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
