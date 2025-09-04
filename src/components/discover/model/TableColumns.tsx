import { createColumnHelper } from '@tanstack/react-table';
import { Influencer } from '@/components/discover/model/types';
import React from 'react';
import { typoVariant } from '@/styles/typography.css';
import { vars } from '@/styles/theme.css';
import { addCommas, convertGenderToKorean } from '@/shared/lib/utils';
import { CoreTooltip } from '@featuring-corp/components';
import { IconHelpOutline } from '@featuring-corp/icons';
import { DESCRIPTIONS } from '@/shared/constant/descriptions';

const columnHelper = createColumnHelper<Influencer>();

export const TableColumns = [
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

			return <>{addCommas(data.follower)}</>;
		},
	}),
	columnHelper.accessor('real_follower', {
		header: '예상 유효 팔로워 수',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <>{addCommas(data.real_follower)}</>;
		},
	}),
	columnHelper.accessor('avg_reach', {
		header: '예상 평균 도달 수',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <>{addCommas(data.avg_reach)}</>;
		},
	}),
	columnHelper.accessor('avg_feed_like', {
		header: '평균 피드 좋아요 수',
		size: 220,
		cell: (info) => {
			const avg_feed_like = Math.floor(info.row.original.avg_feed_like);

			return (
				<div style={{ display: 'flex', gap: vars.global.spacing[150] }}>
					{avg_feed_like}
					{avg_feed_like === 0 && (
						<CoreTooltip eventType="hover" text={DESCRIPTIONS.DISCOVER_ZERO_TOOLTIP} placement="top-end" zIndex={20}>
							<IconHelpOutline fill={vars.semantic.color.icon.tertiary} />
						</CoreTooltip>
					)}
				</div>
			);
		},
	}),
	columnHelper.accessor('main_audience_gender', {
		header: '오디언스 성별',
		size: 220,
		cell: (info) => {
			const data = info.row.original;

			return <div>{convertGenderToKorean(data.main_audience_gender)}</div>;
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
