import { Component, inject, computed, Signal } from '@angular/core';
import { StoreService } from '../service/store.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aaa',
  standalone: true,
  imports: [RouterLink],
  providers: [StoreService],
  templateUrl: './aaa.component.html',
  styleUrl: './aaa.component.scss'
})
export class AaaComponent {
  storeService = inject(StoreService);
  bool = computed(() => this.storeService.bool());
  
  toggle() {
    this.storeService.store();
    console.log('this.bool', this.bool())
    // this.bool = computed(() => {
    //   const b = this.storeService.store()
    //   return b()
    // });
  }

}
