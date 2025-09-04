import { createColumnHelper } from '@tanstack/react-table';
import { Influencer } from '@/components/discover/model/types';
import React from 'react';
import { typoVariant } from '@/styles/typography.css';
import { vars } from '@/styles/theme.css';
import { sprinkles } from '@/styles/sprinkles.css';

const columnHelper = createColumnHelper<Influencer>();

export const tableColumns = [
	columnHelper.accessor('username', {
		header: '계정',
		size: 330,
		cell: (info) => {
			const data = info.row.original;
			return (
				<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
					<img
						src={data.profile_img_link}
						alt={data.username}
						style={{
							width: '32px',
							height: '32px',
							borderRadius: '50%',
							objectFit: 'cover',
						}}
					/>
					<div>
						<div className={`${typoVariant.body[2]})}`}>{data.full_name}</div>
						<div className={typoVariant.caption[1]} style={{ color: vars.semantic.color.text[3] }}>
							{data.username}
						</div>
					</div>
				</div>
			);
		},
	}),
	columnHelper.accessor('follower', {
		header: '팔로워 수',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <>{data.follower}</>;
		},
	}),
	columnHelper.accessor('real_follower', {
		header: '예상 유효 팔로워 수',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <>{data.real_follower}</>;
		},
	}),
	columnHelper.accessor('avg_reach', {
		header: '예상 평균 도달 수',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <>{data.avg_reach}</>;
		},
	}),
	columnHelper.accessor('avg_feed_like', {
		header: '평균 피드 좋아요 수',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <>{data.avg_feed_like}</>;
		},
	}),
	columnHelper.accessor('main_audience_gender', {
		header: '오디언스 성별',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <div>{data.main_audience_gender}</div>;
		},
	}),
	columnHelper.accessor('main_audience_age_range', {
		header: '오디언스 나이',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <div>{data.main_audience_age_range} 세</div>;
		},
	}),
];
