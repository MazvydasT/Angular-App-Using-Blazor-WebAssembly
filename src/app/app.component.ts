import { Component } from '@angular/core';

declare var Blazor: any;
declare var DotNet: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersToSumArray = [
    [1, 2, 3],
    [1.1, 2.2, 3.3],
    [-2.2, -1, 0, 1, 2.2]
  ];

  resultFromDotNet = Blazor.start().then(() =>
    Promise.all(
      this.numbersToSumArray.map(numbersArray =>
        DotNet.invokeMethodAsync('BlazorAppToBeUsedWithinAngular', 'Sum', numbersArray)
      )
    )
  );
}
