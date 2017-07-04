export class User {
	// General properties
	usertype: string;
	token: string;
	contact: {
		email: string,
		phone: number,
		firstname: string,
		lastname: string
	};
	accounts: {
		local: {[key: string]: string},
		facebook: {}
	};
	data: {
		createdAt: string,
		activeAt: string
	};

	// Admin properties
	actions?: [{
		admin: User,
		createdAt: string,
		message: string
	}];

	// Client properties

	// Trainer properties
	approved: boolean;
	profiles: [{
		sport: string,
		// locations: [{}],
		// packages: [{}],
		summary: string,
		credentials: {
			experience: number,
			school: string
		},
		services: {
			ages: Array<string>,
			positions: Array<string>,
			specialties: Array<string>
		}
	}];
	rating;
}
