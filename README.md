

Version 0.0.1


# rating-bar
RatingBar is Ionic v2 component - it is a simple wrapper of `ion-button` to create rating with stars.

## Usage

* Get the file from dist folder and copy to your project.

* Import file to your app.module.ts and add to entryComponents, declarations.

```
import { RatingBar } from '../components/rating-bar/rating-bar';
@NgModule({
declarations: [
  ...,
  RatingBar
],
imports: [
  IonicModule.forRoot(MyApp)
],
bootstrap: [IonicApp],
entryComponents: [
  ...,
  RatingBar
],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
```
* add rating-bar tag to your html file and provide properties
```
<rating-bar [(rating)]="rating" [small]="small" [color]="color" [numberOfStars]="numberOfStars"></rating-bar>
```

```
public rating: number = 0;
public small: boolean = false;
public color: 'dark';
public numberOfStars: number = 5;

```

## Options(default)   

* rating: number        - this will preselect the stars depending on given value ( 0 )
* small: boolean        - wether to use small buttons or no                      ( false )
* color: string         - color variable of the stars                            ( 'secondary' )
* numberOfStars: number - how many stars there should be                         ( 5 )
* cssClass: string      - custom css class                                       ( none )

### To get the value of the rating use `[(rating)]="myVar"`


##Demo


![alt tag](https://github.com/ekhmoi/rating-bar/raw/master/demo/RatingBar.gif)
