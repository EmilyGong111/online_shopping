import { Flex, Image, Heading, Text } from "@chakra-ui/react";

const Product = ({product}) => {
  // console.log(props);
  // console.log(props.image);
  const prePrice = (product.price * 1.5).toFixed(2);
  return (
    <Flex flexDirection="column" gap="1em">
      <Image width="15rem" maxHeight="20rem" alt={product.title} src={product.image}></Image>
      <Heading width="15rem" as='h3' fontSize="xl">{product.title}</Heading>
      <Text fontSize="xl">
        <Text as='s'>{prePrice}</Text>
        {' '}
        {product.price}
      </Text>
    </Flex >
 
  )
}

export default Product