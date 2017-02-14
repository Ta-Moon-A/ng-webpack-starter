import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, field?: any, val?: any): any {
        if (!value.length) {
            return false;
        }

        let results = [];

        value.forEach(item => {
            if (item[field] === val) {
                results.push(item);
            }
        });

        return results;
    }
}