import { ThemingProps } from '@chakra-ui/react'
import { polygonMumbai} from '@wagmi/chains'
import { Chain } from 'wagmi'

export const SITE_NAME = 'FE Vault'
export const SITE_DESCRIPTION = 'Deposit SHM and get Tokens'
export const SITE_URL = ''

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = { initialColorMode: THEME_INITIAL_COLOR }



export const INFURA_KEY = 'b842e61092284d098badb6f70cae2963'

export const shardeumSphinxDapps =  {
     id: 8081,
     name: "Shardeum Sphinx Dapps",
     network: "shmSphinx",
     nativeCurrency: {
         name: "SHARDEUM",
         symbol: "SHM",
         decimals: 18,
    },
    rpcUrls: {
         default: {
             http:  ["https://dapps.shardeum.org"],
        },
         public: {
             http:  ["https://dapps.shardeum.org"],
        }
    },
     blockExplorers: {
         default: {
             name: "Shardeum Explorer",
             url: "https://explorer-dapps.shardeum.org",
        },
    },
     testnet: true,
}as const satisfies Chain

export const NETWORKS = [shardeumSphinxDapps, polygonMumbai]
