import { ethers } from 'ethers';
import { Contract, Provider } from '@thinkanddev/ethcall';

const erc721Abi = [
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'address', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenSVG',
    outputs: [{ internalType: 'address', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
];

const nAbi = [
  ...[
    'getFirst',
    'getSecond',
    'getThird',
    'getFourth',
    'getFifth',
    'getSixth',
    'getSeventh',
    'getEight',
  ].map((name) => ({
    name,
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  })),

  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
];
const nAddress = '0x05a46f1E545526FB803FF974C790aCeA34D1f2D6';
const nContract = new Contract(nAddress, nAbi);

const artForNAddress = '0xB2Ee306F1C8D314341b7C335014473aa8C2D5D71';
const artForNContract = new Contract(artForNAddress, erc721Abi);

const runesAddress = '0xacf003f215ed77113e1aa52d5d9ce3075b874356';
const runesContract = new Contract(runesAddress, erc721Abi);

const fractalsAddress = '0xe5b8877036bc6e1933ad90d252b8e97d66e0d7e4';
const fractalsContract = new Contract(fractalsAddress, erc721Abi);

const flatNAddress = '0x02f38388e5fc3df147bd080766d5c6affba831f8';
const flatNContract = new Contract(flatNAddress, erc721Abi);

export const getProjectsData = async (id) => {
  const provider = new Provider();
  await provider.init(ethers.getDefaultProvider(), 1);

  const [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eight,

    owner,

    artForNOwner,

    runesOwner,
    runesTokenSVG,

    fractalsOwner,
    fractalsTokenURI,

    flatNOwner,
    flatNTokenURI,
  ] = await provider.tryAll([
    nContract.getFirst(id),
    nContract.getSecond(id),
    nContract.getThird(id),
    nContract.getFourth(id),
    nContract.getFifth(id),
    nContract.getSixth(id),
    nContract.getSeventh(id),
    nContract.getEight(id),

    nContract.ownerOf(id),

    artForNContract.ownerOf(id),

    runesContract.ownerOf(id),
    runesContract.tokenSVG(id),

    fractalsContract.ownerOf(id),
    fractalsContract.tokenURI(id),

    flatNContract.ownerOf(id),
    flatNContract.tokenURI(id),
  ]);

  return {
    numbers:
      first.toString() +
      ' ' +
      second.toString() +
      ' ' +
      third.toString() +
      ' ' +
      fourth.toString() +
      ' ' +
      fifth.toString() +
      ' ' +
      sixth.toString() +
      ' ' +
      seventh.toString() +
      ' ' +
      eight.toString(),

    owner,

    artForNAddress,
    artForNOwner,
    artForNImage: `https://gateway.pinata.cloud/ipfs/QmQGVDe5GTGyKX2vcjyARemLYChimxfXvaptSTkDBQk26H/${id}.png`,

    runesAddress,
    runesOwner,
    runesImage: runesTokenSVG
      ? 'data:image/svg+xml;base64,' + btoa(runesTokenSVG)
      : '',

    fractalsAddress,
    fractalsOwner,
    fractalsImage: fractalsTokenURI
      ? JSON.parse(
          decodeURIComponent(fractalsTokenURI).replace(
            'data:application/json;charset=utf-8,',
            '',
          ),
        ).image
      : '',

    flatNAddress,
    flatNOwner,
    flatNImage: flatNTokenURI,
  };
};
