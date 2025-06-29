import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import { router } from './router/router.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Suspense fallback={<Suspense />}>
			<RouterProvider router={router} />
		</Suspense>
	</StrictMode>
);
