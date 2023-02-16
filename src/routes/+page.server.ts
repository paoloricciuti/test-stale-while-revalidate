import { ServerLoad } from '@sveltejs/kit';
let num = 0;
export const load: ServerLoad = ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 's-maxage=10, stale-while-revalidate=15'
	});
	return {
		num: num++
	};
};
