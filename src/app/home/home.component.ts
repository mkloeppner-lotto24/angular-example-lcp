import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsOrchestratorDirective } from '@lotto24-angular/imports-orchestrator'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImportsOrchestratorDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
