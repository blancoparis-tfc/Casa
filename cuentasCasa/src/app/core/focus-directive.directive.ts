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
        console.info(focusEmitter);
        this.focusEmitterSubscription = focusEmitter.subscribe(
            ((evento)=>{
                  evento.focus();
              }
             ).bind(this))
    }    
    constructor(@Inject(ElementRef) private element: ElementRef
                ,@Inject(ViewContainerRef) private componente:ViewContainerRef
                //,@Inject(ComponentRef) private componente:ComponentRef<any>
                ,private renderer: Renderer) {}
}
