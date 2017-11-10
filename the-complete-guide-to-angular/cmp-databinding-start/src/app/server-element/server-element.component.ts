import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild, ContentChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // This will make the server-element.component.css rules global
})
export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  // To access a Local Reference to a DOM Element from the template
  @ViewChild('heading') header: ElementRef;

  // To access a Local Reference to a DOM Element from a projected ng-content (client Element Body)
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('ServerElementComponent.constructor called!');
  }

  ngOnInit() {
    console.log('ServerElementComponent.ngOnInit called!');
    console.log('[ngOnInit] Heading Content: ' + this.header.nativeElement.textContent);
    console.log('[ngOnInit] paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ServerElementComponent.ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ServerElementComponent.ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ServerElementComponent.ngAfterContentInit called!');
    console.log('[ngAfterContentInit] paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ServerElementComponent.ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ServerElementComponent.ngAfterViewInit called!');
    console.log('[ngAfterViewInit] Heading Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ServerElementComponent.ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ServerElementComponent.ngOnDestroy caleed!');
  }

}
