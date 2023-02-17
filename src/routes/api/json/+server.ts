import { json, error } from '@sveltejs/kit';
// import { getSessionFromStorage } from '@inrupt/solid-client-authn-node'

let num = 0;

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function GET(event) {
	await wait(2000);
	const data = {
		num: num++
	};
	return json(data, {
		headers: {
			//note learn more about cache-control
			// 'Cache-Control': 's-maxage=1, stale-while-revalidate=59',
			//stale-while is not supported in safari/opera (fallback needed?)
			'Cache-Control': 's-maxage=1, stale-while-revalidate=59'
		}
	});
}
