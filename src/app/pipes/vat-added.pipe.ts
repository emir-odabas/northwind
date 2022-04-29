import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value + (value * rate / 100);
  }

}//rate =oran

//Pipe = elimizdeki veriyi görsel olarak daha farklı şekilde göstermek için kullanılır.
//Pipe lar "|" ile html de tanımlanıyor .Birden fazla paramtere eklemek istersek ":" kullanıyoruz