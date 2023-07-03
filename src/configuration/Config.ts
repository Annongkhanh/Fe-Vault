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
export const NETWORKS = [shardeumSphinxDapps, polygonMumbai]

declare const shardeumSphinxDapps: {
    readonly id: 8081;
    readonly name: "Shardeum Sphinx Dapps";
    readonly network: "shmSphinx";
    readonly nativeCurrency: {
        readonly name: "SHARDEUM";
        readonly symbol: "SHM";
        readonly decimals: 18;
    };
    readonly rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://dapps.shardeum.org"];
        };
        readonly public: {
            readonly http: readonly ["https://dapps.shardeum.org"];
        };
    };
    readonly blockExplorers: {
        readonly default: {
            readonly name: "Shardeum Explorer";
            readonly url: "https://explorer-dapps.shardeum.org";
        };
    };
    readonly testnet: true;
};