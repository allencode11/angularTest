import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent {
  isDisplay: boolean = false;

  constructor(modalService: ModalService) {
    modalService.display.subscribe(response => this.isDisplay = response);
  }

  closeModal(): void {
    this.isDisplay = false;
  }
}
