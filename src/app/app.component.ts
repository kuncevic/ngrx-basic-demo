import { Observable } from 'rxjs/Observable';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ACTION from './constants';

@Component({
  selector: 'app-root',
  template: `
    <ngrx-store-log-monitor toggleCommand="ctrl-h" positionCommand="ctrl-m"></ngrx-store-log-monitor>
    <div class="content">
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <div></div>
        {{counter$ | async}} 
    </div>`,  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    counter$: Observable<number>;
    constructor(private store:Store<number>){
        this.counter$ = this.store.select('counter');
    }
    
    increment(){
      this.store.dispatch({type: ACTION.INCREMENT});
    }
    
    decrement(){
      this.store.dispatch({type: ACTION.DECREMENT});
    }
}
