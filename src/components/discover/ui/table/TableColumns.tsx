import { createColumnHelper } from '@tanstack/react-table';
import { Influencer } from '@/components/discover/model/types';
import React from 'react';
import { typoVariant } from '@/styles/typography.css';
import { vars } from '@/styles/theme.css';
import { addCommas, convertGenderToKorean } from '@/shared/lib/utils';
import { CoreTooltip } from '@featuring-corp/components';
import { IconHelpOutline } from '@featuring-corp/icons';
import { DESCRIPTIONS } from '@/shared/constant/descriptions';
import HeaderCellWrapper from './HeaderCellWrapper';
import BodyCellWrapper from './BodyCellWrapper';
import { flex } from '@/styles/recipe.css';

const columnHelper = createColumnHelper<Influencer>();

export function createTableColumns(sortConfig?: {
	currentSortBy?: string;
	currentOrder?: 'asc' | 'desc';
	onSort?: (sortBy: string) => void;
}) {
	return [
		columnHelper.accessor('username', {
			header: () => <HeaderCellWrapper title="계정" isFirstColumn={true} />,
			size: 330,
			cell: (info) => {
				const data = info.row.original;
				return (
					<BodyCellWrapper isFirstColumn={true}>
						<div className={flex({ align: 'center', gap: 'spacing-200' })}>
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
								<div className={typoVariant.body[2]}>{data.full_name}</div>
								<div className={typoVariant.caption[1]} style={{ color: vars.semantic.color.text[3] }}>
									{data.username}
								</div>
							</div>
						</div>
					</BodyCellWrapper>
				);
			},
		}),
		columnHelper.accessor('follower', {
			header: () => (
				<HeaderCellWrapper
					title="팔로워 수"
					sortable={true}
					sortBy="follower"
					currentSortBy={sortConfig?.currentSortBy}
					currentOrder={sortConfig?.currentOrder}
					onSort={sortConfig?.onSort}
				/>
			),
			size: 220,
			cell: (info) => {
				const data = info.row.original;
				return (
					<BodyCellWrapper>
						<span className={typoVariant.body[2]}>{addCommas(data.follower)}</span>
					</BodyCellWrapper>
				);
			},
		}),
		columnHelper.accessor('real_follower', {
			header: () => (
				<HeaderCellWrapper
					title="예상 유효 팔로워 수"
					sortable={true}
					sortBy="real_follower"
					currentSortBy={sortConfig?.currentSortBy}
					currentOrder={sortConfig?.currentOrder}
					onSort={sortConfig?.onSort}
				/>
			),
			size: 220,
			cell: (info) => {
				const data = info.row.original;
				return (
					<BodyCellWrapper>
						<span className={typoVariant.body[2]}>{addCommas(data.real_follower)}</span>
					</BodyCellWrapper>
				);
			},
		}),
		columnHelper.accessor('avg_reach', {
			header: () => (
				<HeaderCellWrapper
					title="예상 평균 도달 수"
					sortable={true}
					sortBy="avg_reach"
					currentSortBy={sortConfig?.currentSortBy}
					currentOrder={sortConfig?.currentOrder}
					onSort={sortConfig?.onSort}
				/>
			),
			size: 220,
			cell: (info) => {
				const data = info.row.original;
				return (
					<BodyCellWrapper>
						<span className={typoVariant.body[2]}>{addCommas(data.avg_reach)}</span>
					</BodyCellWrapper>
				);
			},
		}),
		columnHelper.accessor('avg_feed_like', {
			header: () => (
				<HeaderCellWrapper
					title="평균 피드 좋아요 수"
					sortable={true}
					sortBy="avg_feed_like"
					currentSortBy={sortConfig?.currentSortBy}
					currentOrder={sortConfig?.currentOrder}
					onSort={sortConfig?.onSort}
				/>
			),
			size: 220,
			cell: (info) => {
				const avg_feed_like = Math.floor(info.row.original.avg_feed_like);
				return (
					<BodyCellWrapper>
						<div className={flex({ align: 'center', gap: 'spacing-100' })}>
							<span className={typoVariant.body[2]}>{addCommas(avg_feed_like)}</span>
							{avg_feed_like === 0 && (
								<CoreTooltip
									eventType="hover"
									text={DESCRIPTIONS.DISCOVER_ZERO_TOOLTIP}
									placement="top-end"
									zIndex={20}
								>
									<IconHelpOutline fill={vars.semantic.color.icon.tertiary} />
								</CoreTooltip>
							)}
						</div>
					</BodyCellWrapper>
				);
			},
		}),
		columnHelper.accessor('main_audience_gender', {
			header: () => <HeaderCellWrapper title="오디언스 성별" />,
			size: 220,
			cell: (info) => {
				const data = info.row.original;
				return (
					<BodyCellWrapper>
						<span className={typoVariant.body[2]}>{convertGenderToKorean(data.main_audience_gender)}</span>
					</BodyCellWrapper>
				);
			},
		}),
		columnHelper.accessor('main_audience_age_range', {
			header: () => <HeaderCellWrapper title="오디언스 나이" />,
			size: 220,
			cell: (info) => {
				const data = info.row.original;
				return (
					<BodyCellWrapper>
						<span className={typoVariant.body[2]}>{data.main_audience_age_range} 세</span>
					</BodyCellWrapper>
				);
			},
		}),
	];
}
