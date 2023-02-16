import { ServerLoad } from '@sveltejs/kit';
let num = 0;
export const load: ServerLoad = ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=60, stale-while-revalidate=15'
	});
	return {
		num: num++
	};
};
