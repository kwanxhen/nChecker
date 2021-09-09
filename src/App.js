import React, { useEffect, useState } from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
  theme,
} from '@chakra-ui/react';
import Header from './Header';
import Card from './Card';
import { getProjectsData } from './projectsDataGetter';
import { shortenHash } from './utils';
import { useDebounce } from 'use-debounce';

function App() {
  const [id, setId] = useState(8888);
  const dId = useDebounce(id, 600);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  let nId = dId[0] ? +dId[0] : 8888;

  const fetchProjectsData = async () => {
    setLoading(true);
    const data = await getProjectsData(nId);
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchProjectsData();
  }, [nId]);

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="L">
        <Header setId={setId} />
        <Box textAlign="center" fontSize="xl" pl={[0, 40]} pr={[0, 40]}>
          {!loading ? (
            <a
              href={`https://opensea.io/assets/0x05a46f1e545526fb803ff974c790acea34d1f2d6/${nId}`}
              target="_blank"
              rel="noreferrer"
            >
              <Heading>{data.numbers}</Heading>
            </a>
          ) : (
            <Spinner />
          )}
          {!loading && (
            <a
              href={`https://etherscan.com/address/${data.owner}`}
              target="_blank"
              rel="noreferrer"
            >
              <span style={{ fontSize: '15px' }}>
                Owner: {shortenHash(data.owner)}
              </span>
            </a>
          )}
          <SimpleGrid
            mt={[0, 10]}
            minChildWidth="300px"
            columns={[2, null, 3]}
            spacing="30px"
          >
            <Card
              id={nId}
              address={data.artForNAddress}
              image={data.artForNImage}
              owner={data.artForNOwner}
              project="Art For N"
            />
            <Card
              id={nId}
              address={data.runesAddress}
              image={data.runesImage}
              owner={data.runesOwner}
              project="Runes"
            />
            <Card
              id={nId}
              address={data.fractalsAddress}
              image={data.fractalsImage}
              owner={data.fractalsOwner}
              project="Friendly Fractals N"
            />
            <Card
              id={nId}
              address={data.flatNAddress}
              image={data.flatNImage}
              owner={data.flatNOwner}
              project="Flat-n"
            />
            <Card project="More N projects will be added soon..." />
          </SimpleGrid>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
