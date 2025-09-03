export default function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
	return (
		<div>
			<h2>오류가 발생했습니다</h2>
			<p>{error.message}</p>
			<button onClick={resetErrorBoundary}>다시 시도</button>
		</div>
	);
}
