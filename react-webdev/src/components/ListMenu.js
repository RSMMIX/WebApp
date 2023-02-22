import React from 'react'
import Card from './Card'

export default function ListMenu({ListMenu}) {
    return (
      ListMenu.map((item) =>{
          return <Card key={item.id} food={item}/> 
      })
    )
  }