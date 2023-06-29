import { ThemingProps } from '@chakra-ui/react'
import { shardeumSphinx, polygonMumbai} from '@wagmi/chains'

export const SITE_NAME = 'Solidity Vault'
export const SITE_DESCRIPTION = 'Deposit SHM and get BTK'
export const SITE_URL = ''

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = { initialColorMode: THEME_INITIAL_COLOR }



export const INFURA_KEY = 'b842e61092284d098badb6f70cae2963'
export const NETWORKS = [shardeumSphinx, polygonMumbai]