import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/shared/layout/layout';
import Dashboard from '../pages/dashboard/dashboard.page';

const History = lazy(() => import('../pages/history/history.page'));
const Card = lazy(() => import('../pages/cards/cards.page'));

export const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/history',
				element: <History />,
			},
			{
				path: '/cards',
				element: <Card />,
			},
		],
	},
]);
