import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = ({ setId }) => (
  <>
    <Flex p="5">
      <Box>
        <Text fontSize="xl">
          nChecker &nbsp;
          <span style={{ fontSize: '12px' }}>
            {' '}
            by{' '}
            <a
              href="https://twitter.com/0xManobi"
              target="_blank"
              rel="noreferrer"
            >
              0xManobi
            </a>
          </span>
          <br />
          <span style={{ fontSize: '12px' }}>
            Tip jar:{' '}
            <a
              href="https://etherscan.io/address/0x433a0ae24BfdF406b28CA720682C6E258c153C60"
              target="_blank"
              rel="noreferrer"
            >
              0x433a0ae24BfdF406b28CA720682C6E258c153C60
            </a>
          </span>
        </Text>
      </Box>
      <Spacer display={['none', 'block']} />
      <Box ml="-300px" display={['none', 'block']}>
        <InputGroup size="md">
          <InputLeftAddon>N #</InputLeftAddon>
          <Input
            type="number"
            placeholder="8888"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </InputGroup>
      </Box>
      <Spacer />
      <Box>
        <ColorModeSwitcher />
      </Box>
    </Flex>
    <Box mb="5" display={['', 'none']}>
      <InputGroup size="md">
        <InputLeftAddon>N #</InputLeftAddon>
        <Input
          type="number"
          placeholder="8888"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </InputGroup>
    </Box>
  </>
);
export default Header;
