import React from 'react'
import Navbar from './Components/Navbar'


export default function page() {
  
  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
    <Navbar/>
    <div className="fixed bottom-0 right-0 p-4">
      <p className="text-gray-400 text-xs opacity-50">
        Copyright &copy; 2025 Nimesh Lakshitha. All rights reserved.
      </p>
    </div>
  </div>
  )
}
