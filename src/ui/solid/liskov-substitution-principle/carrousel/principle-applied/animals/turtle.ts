import { Animal } from './animal'

export class Turtle implements Animal {
  picture: string = '/tartaruga.png'

  emitSound(): void {
    alert('*sons de tartaruga*')
  }
}