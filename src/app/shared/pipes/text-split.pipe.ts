import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textsplit'
})

export class TextSplitPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let limitCount = args[0];
        var words = value.split(" ");
        return words.length > limitCount ? words.slice(0, limitCount).join(" ") + "..." : value;
    }
}