import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { shortenHash } from './utils';
import placeholder from './placeholder.png';

const Card = ({ image, owner, project, address, id }) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <a
          href={`https://opensea.io/assets/${address}/${id}`}
          target="_blank"
          rel="noreferrer"
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
              fallbackSrc={placeholder}
            />
          </Box>
        </a>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {project}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'}>
            {owner ? (
              <a
                href={`https://etherscan.io/address/${owner}`}
                target="_blank"
                rel="noreferrer"
              >
                Owner: {shortenHash(owner)}
              </a>
            ) : id ? (
              <>
                UNMINTED:{' '}
                <a
                  href={`https://etherscan.io/address/${address}#writeContract`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mint here
                </a>
              </>
            ) : (
              ''
            )}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};
export default Card;
