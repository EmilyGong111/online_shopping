import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'
import { Flex, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import {BsSearch} from 'react-icons/bs'
import { useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState('')
  const handleChange = (event) => setSearch(event.target.value)
  console.log(search)
  return (
    <Flex width="100vw" flexDirection="column" alignItems="center">
      <Banner />
      <InputGroup maxWidth="50rem" marginY="5rem">
        <InputLeftElement
          pointerEvents='none'
        >
          {<BsSearch color='gray.300' />}
          </InputLeftElement>
        <Input placeholder='Search products' onChange={handleChange}/>
      </InputGroup>
      <p>{search}</p>
      <Products search={search} setSearch={setSearch}/>
    </Flex>
  )
}
