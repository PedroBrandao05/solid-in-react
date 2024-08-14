import { CarCustomization } from '@/ui/solid/interface-segregation-principle/car-customization'
import { CarrouselAnimals } from '@/ui/solid/liskov-substitution-principle/carrousel'
import { Cart } from '@/ui/solid/open-closed-principle/cart'
import Form from '@/ui/solid/single-responsability-principle/form'

export default function Home() {
  return (
    <>
      {/* <Form /> */}
      {/* <Cart /> */}
      {/* <CarrouselAnimals /> */}
      <CarCustomization />
    </>
  )
}
