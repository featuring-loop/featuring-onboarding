import { DiscoverRequestDTO, DiscoverResponseData } from '../model/types'
import { httpMethod } from '@/shared/config/httpMethod';
import { buildDiscoverUrl } from '@/shared/constant/apis';

export const getDiscover = async (params?: DiscoverRequestDTO) => {
  const response = await httpMethod<DiscoverResponseData>(buildDiscoverUrl(params), 'GET')

  if (!response || 'error' in response) {
    throw new Error(response?.error || '인플루언서 정보들을 탐색하지 못했습니다.')
  }

  return response
}
