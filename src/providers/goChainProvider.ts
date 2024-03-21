import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const goChainProvider = {
    name: 'Go Chain',
    provider: 'goChainProvider',
    url: 'https://gochain.io/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider
