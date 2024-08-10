import { Animal } from './animal'

export class Chicken implements Animal {
  picture: string = '/galinha.png'

  emitSound(): void {
    alert('*có.*')
  }
}