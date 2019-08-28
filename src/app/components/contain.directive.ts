import { Directive, Input, HostBinding, HostListener, TemplateRef, ViewContainerRef } from '@angular/core';
import { TabContainerDirective } from './tabContainer.directive';
@Directive({
    selector: '[contain]',
})
export class ContainDirective { 
    id:string; 
    @Input() set contain(id:string){
        this.id = id;
       
    }
    showContent(){
        this.viewContainer.createEmbeddedView(this.templateRef);
    }

    hiddenContent(){
        this.viewContainer.clear();

    }


    constructor(private templateRef:TemplateRef<any>, private viewContainer: ViewContainerRef){
       
    }

   
    
  



}