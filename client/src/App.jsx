import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Index from './pages/Index'
import { RouteIndex } from './helpers/RouteName'


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />} >
          <Route index element={<Index />} />

          </Route>
          </Routes>
    </BrowserRouter>

  )
}


export default App