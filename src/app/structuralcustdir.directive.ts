import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adminPanel]'
})
export class StructuralcustdirDirective {

  @Input() adminPanel:string=""

  admin:string[] = ["Scott", "Smith", "Robert", "Mark"]
  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }

  ngOnChanges()
  {
    if(this.admin.includes(this.adminPanel) == true)
    {
      // show ---  add the dom element
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
      // hide---  removes the dom element
      this.viewContainer.clear();
    }
  }
}
