import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportedComponentReady } from '@lotto24-angular/imports-orchestrator';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements ImportedComponentReady {

  importedComponentReady(): Promise<void> | Observable<boolean> | Signal<boolean> {
    return interval(2000).pipe(take(1), map(() => true));
  }

}
