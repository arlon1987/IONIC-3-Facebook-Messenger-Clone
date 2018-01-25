import { Pipe, PipeTransform } from '@angular/core';
/*
 * Description here
*/
@Pipe({name: 'timesince'})
export class TimeSince implements PipeTransform {
  transform(date: number): string {
      let x = new Date();
      var seconds = Math.floor((x as any - date) / 1000);

      var interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
          return interval + " years";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
          return interval + " months";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
          return interval + " days";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
          return interval + " hrs";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
          return interval + " mins";
      }
      return Math.floor(seconds) + " secs";
  }
}