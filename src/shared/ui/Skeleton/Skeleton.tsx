import { clsx } from 'clsx';
import * as styles from '@/shared/ui/Skeleton/skeleton.css';
import { ComponentProps } from 'react';

export default function Skeleton({ className, ...props }: ComponentProps<'div'>) {
	return <div className={clsx(styles.baseSkeleton, className)} {...props} />;
}
