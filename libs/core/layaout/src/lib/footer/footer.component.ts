import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'nx-ratenow-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() customTemplate!: TemplateRef<any>;
}
