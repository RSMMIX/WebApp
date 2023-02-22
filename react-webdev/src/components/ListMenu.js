import React from 'react'
import Card from './Card'

export default function ListMenu({data}) {
    return (
      data.map((item) =>{
          return <Card food={item}/> 
      })
    )
  }