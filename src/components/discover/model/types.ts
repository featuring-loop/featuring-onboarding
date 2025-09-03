export type Gender = 'F' | 'M';
export type AgeRange = '18-24' | '25-34' | '35-44';
export type SortBy = 'follower' | 'real_follower' | 'avg_feed_like' | 'avg_reach' | 'real_engagement';
export type Order = 'asc' | 'desc';

export interface DiscoverResponse {
	total: number;
	page: number;
	pageSize: number;
	data: Influencer[];
}

export interface Influencer {
	pk: string; // 인플루언서 고유 ID
	username: string; // 인플루언서 username
	full_name: string; // 인플루언서 full name
	account_link: string; // 인플루언서 계정 링크
	profile_img_link: string; // 프로필 이미지 링크
	follower: number; // 팔로워 수
	real_follower: number; // 실제 팔로워 수
	avg_feed_like: number; // 평균 피드 좋아요 수
	avg_reach: number; // 평균 도달 수
	real_engagement: number; // 실제 참여율
	main_audience_gender: Gender; // 주요 오디언스 성별
	main_audience_age_range: AgeRange; // 주요 연령대
	is_verified: boolean; // 메타 인증 여부
}

export interface ErrorResponse {
	error: string;
}

export type DiscoverResponseData = DiscoverResponse | ErrorResponse;

export interface DiscoverRequestDTO {
	page?: number; // default: 1
	page_size?: number; // default: 20
	min_follower?: number;
	max_follower?: number;
	username?: string;
	min_avg_feed_like?: number;
	max_avg_feed_like?: number;
	min_real_engagement?: number;
	max_real_engagement?: number;
	main_audience_gender?: Gender;
	main_audience_age_range?: AgeRange;
	is_verified?: boolean;
	sort_by?: SortBy;
	order?: Order;
}
