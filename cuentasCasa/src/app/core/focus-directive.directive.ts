import { Directive, EventEmitter, Input, ElementRef, Inject, Renderer,ViewContainerRef,ComponentRef } from '@angular/core';
/**
 * Esta directiva espera que el componente tenga un metodo focus 
 */
@Directive({
  selector: '[focus]'
})
export class FocusDirectiveDirective {

    private focusEmitterSubscription;   
    // Now we expect EventEmitter as binded value
    @Input('focus')
    set focus(focusEmitter: EventEmitter<any> ) {
        if(this.focusEmitterSubscription) {
            this.focusEmitterSubscription.unsubscribe();
        }
        this.focusEmitterSubscription = focusEmitter.subscribe(
            ((evento)=>{
                  evento.focus();
              }
             ).bind(this))
    }    
    constructor( ) {}
}
