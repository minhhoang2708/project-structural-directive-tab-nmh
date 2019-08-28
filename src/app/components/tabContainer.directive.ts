import { Directive, Input, HostBinding, HostListener, ContentChildren, QueryList, AfterContentChecked } from '@angular/core';
import { SelectorDirective } from './selector.directive';
import { ContainDirective } from './contain.directive';

@Directive({
    selector: '[tabContainer]'
})
export class TabContainerDirective implements AfterContentChecked {

    selectors: SelectorDirective[] = [];
    idCurrent: string = '';
    @ContentChildren(ContainDirective) contains: QueryList<ContainDirective>;



    addSelector(selector: SelectorDirective) {
        this.selectors.push(selector);
    }
    // addContain(contain: ContainDirective) {
    //     this.contains.push(contain);
    // }


    ngAfterContentChecked(): void {
        this.selectors.forEach((selector, index) => {
            if (selector.active == true) this.idCurrent = selector.id;
        })
        this.show(this.idCurrent);
        
    }

    show(id: string) {
        this.selectors.forEach((selector, index) => {
            // if(selector.id === id){
            //     this.selectors[index].active = true;
            // }else{
            //     this.selectors[index].active = false;
            // }
            selector.active = (selector.id === id);
        })
        // this.contains._results.map((contain)=>{
        //     if(contain.id == id) contain.show();
        //     else contain.h
        // })
        this.contains.forEach((contain) => {
            contain.hiddenContent();
            if (contain.id == id) contain.showContent();
        })
    }

}