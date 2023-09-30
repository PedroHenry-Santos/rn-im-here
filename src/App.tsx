import { StatusBar } from 'react-native'

import { Home } from '@/screens/home'

export function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <Home />
    </>
  )
}
