import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * @name RatingBar
 * @description
 * RatingBar is Ionic v2 component - it is a simple wrapper of `ion-button` to create rating with stars.
 *
 * 
 *
 * @usage
 * *html - simply add the 'rating-bar' tag to your page and bind the properties.
 * ```
 * <rating-bar [(rating)]="rating" [small]="small" [color]="color" [numberOfStars]="numberOfStars" [cssClass]="''"></rating-bar>
 * ```
 * 
 * *javascript - import `RatingBar` from `rating-bar.ts` file into `app.module.ts,` add it to `entryComponents` and `declarations`.
 *  ```
 * import { RatingBar } from '../components/rating-bar/rating-bar';
 * 
 * @NgModule({
 * declarations: [
 *   ...,
 *   RatingBar
 * ],
 * imports: [
 *   IonicModule.forRoot(MyApp)
 * ],
 * bootstrap: [IonicApp],
 * entryComponents: [
 *   ...,
 *   RatingBar
 * ],
 *   providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
 * })
 * export class AppModule {}
 * ```
 *
 * @see {@link https://github.com/ekhmoi/rating-bar Rating-Bar}
 *
 */

@Component({ 
    selector: 'rating-bar',
    styles: ['div.rating-bar-wrapper { text-align: center; }'],
    template: `
      <div *ngIf="small" class="rating-bar-wrapper" [ngClass]="cssClass">
        <button small ion-button icon-only clear color="rating" (click)="onClickStar(star)" *ngFor="let star of stars">
            <ion-icon [name]="rating >= star ? 'star' : 'star-outline'" [color]="color"></ion-icon>
        </button>
      </div>
      <div *ngIf="!small" class="rating-bar-wrapper" [ngClass]="cssClass">
        <button ion-button icon-only clear color="rating" (click)="onClickStar(star)" *ngFor="let star of stars">
            <ion-icon [name]="rating >= star ? 'star' : 'star-outline'" [color]="color"></ion-icon>
        </button>
      </div>  
        `
})

export class RatingBar {
    public stars: Array<number> = [];

    constructor() {
        if(this.stars.length === 0) this.numberOfStars = 5;
    }

    @Input() set numberOfStars(num: number) {
        let starsList: Array<number> = [];
        for(let i = 1; i <= num; i++) {
            starsList.push(i);
        }
        this.stars = starsList;
    } 

    @Input() color: string = 'primary';
    @Input() small: boolean = false;
    @Input() cssClass: string;

    @Input()  rating: any = -1;
    @Output() ratingChange: any = new EventEmitter();              
    onClickStar(star) {
        this.rating = star;
        this.ratingChange.emit(star);
    }


}