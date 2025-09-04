import { sprinkles } from '@/styles/sprinkles.css';
import { DESCRIPTIONS } from '@/shared/constant/descriptions';
import { IconHelpFilled } from '@featuring-corp/icons';
import { vars } from '@/styles/theme.css';
import { CoreStatusBadge, CoreTooltip } from '@featuring-corp/components';
import { typoVariant } from '@/styles/typography.css';
import { flex } from '@/styles/recipe.css';

function DiscoverResultSection() {
	return (
		<section
			className={`${sprinkles({ paddingX: 'spacing-1000', paddingY: 'spacing-300' })} ${flex({ align: 'center', gap: 'spacing-100' })}`}
			style={{ borderBottom: `1px solid ${vars.semantic.color.border.default}` }}
		>
			<h2 className={typoVariant.heading[2]}>
				총{' '}
				<span className={typoVariant.body[2]} style={{ fontWeight: vars.global.typography.fontWeight.bold }}>
					2,251,843 명
				</span>
				의 인플루언서를 찾았습니다.
			</h2>
			<CoreTooltip eventType="hover" text={DESCRIPTIONS.DISCOVER_RESULT_TOOLTIP} placement="top-center" zIndex={20}>
				<IconHelpFilled fill={vars.semantic.color.icon.tertiary} />
			</CoreTooltip>
			<CoreStatusBadge
				leadingElement={{
					dot: true,
				}}
				type="tint"
				text="필터 설정 전"
				status="default"
			/>
		</section>
	);
}

export default DiscoverResultSection;
