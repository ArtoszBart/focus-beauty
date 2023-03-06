import users from '@/db/users';

export async function POST(request) {
	const credentials = await request.json();
	const user = users.find((cred) => cred.email === credentials.email);

	if (user?.password === credentials.password)
		return new Response(null, {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	else
		return new Response(
			JSON.stringify({ message: 'Błędny login lub hasło' }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
}
