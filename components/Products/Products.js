import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import Product from './Product';

const Products = ({search, setSearch}) => {
    // console.log(search)

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
      const fetchProducts = async () =>{
        try {
          const response = await fetch("https://fakestoreapi.com/products?limit=10");
          if(!response.ok) throw Error('It seems something wrong. please try again latter or contact our service centre.');
          const data = await response.json();
          setProducts(data);
        }catch (err){
           console.log(err)
        }finally{
            setIsLoading(false);
        }
      }
      fetchProducts()
    }, [])

    useEffect(() => {
        const filteredResults = products.filter(({title}) =>
          (title.toLowerCase()).includes(search.toLowerCase()));

          setSearch(filteredResults.reverse());
      }, [products, search])
    // console.log(products)
  return (
    <Flex paddingX="5rem" gap="2rem" flexDirection="row" flexWrap="wrap"  alignItems="center" justifyContent="space-around" >
    {isLoading && <Text marginTop="10rem" fontSize="3xl">Loading Items...</Text>}
    {!isLoading && products.map((product) =>
     <Product key={product.id} product={product} ></Product> 
    )}
    </Flex>
  )
}

export default Products