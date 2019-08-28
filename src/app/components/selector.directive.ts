import { Directive, Input, HostBinding, HostListener } from '@angular/core';
import { TabContainerDirective } from './tabContainer.directive';

@Directive({
    selector: '[selector]',
})
export class SelectorDirective { 

    constructor(private tabDirective:TabContainerDirective){
        tabDirective.addSelector(this);
    }

    @Input("selector") id:string;
    @Input("active") active:boolean = false;
    
    @HostBinding("class.active") get classActive(){
        return this.active;
    }

    @HostListener("click") onClick(){
        this.tabDirective.show(this.id);
    }


}