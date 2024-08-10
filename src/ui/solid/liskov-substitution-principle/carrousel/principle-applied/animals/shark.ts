import { Animal } from './animal'

export class Shark implements Animal {
  picture: string = '/tubarao.png'

  emitSound(): void {
    alert('*tum dum tum dum tum dum tum dum*')
  }
}