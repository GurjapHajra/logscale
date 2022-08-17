import React from 'react'
import Header from './components/Header'
import Presets from './components/Presets'
import Scale from './components/Scale'
import UserIn from './components/UserIn'
import Storage from './components/Storage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Title from './components/Title'

const App = () => {

  const queryClient = new QueryClient();
  
  return (
    <div>
    <QueryClientProvider client={queryClient}>
      <Header/>
      <Title/>
      <Scale/>
      <Presets/>
      <UserIn/>
      <Storage/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
    </div>
  )
}

export default App