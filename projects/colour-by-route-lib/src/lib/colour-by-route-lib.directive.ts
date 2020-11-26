
import { Directive, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
    selector: '[colour-by-route]',
})

export class ColurByRouteDirective {
    element: any;
    constructor(elr: ElementRef, private router: Router,) {

        this.element = elr.nativeElement;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.element.style.background = this.toRGB(event['url']==='/'?'/home':event['url']);
            }
        });
    }

    private toRGB = function (route: string) {
        var hash = 0;
        if (route.length === 0) return hash;
        for (var i = 0; i < route.length; i++) {
            hash = route.charCodeAt(i) + ((hash << 5) - hash);
            hash = hash & hash;
        }
        var rgb = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 255;
            rgb[i] = value;
        }
        return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }

}