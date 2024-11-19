const messages = {
	en: {
		translations: {
			signup: {
				title: "Sign up",
				toasts: {
					success: "User created successfully! Please login!",
					fail: "Error creating user. Check the reported data.",
				},
				form: {
					name: "Company name",
					email: "Email",
					phone: "Phone with (DDD)",
					plan: "Plan",
					password: "Password",
				},
				formErrors: {
					name: {
						required: "Company name is required",
						short: "Name too short",
						long: "Name too long",
					},
					password: {
						short: "Password too short",
						long: "Password too long",
					},
					email: {
						required: "Email is required",
						invalid: "Invalid email",
					},
				},
				buttons: {
					submit: "Register",
					login: "Already have an account? Log in!",
				},
				plan: {
					attendant: "Attendant",
					whatsapp: "WhatsApp",
					queues: "Queues",
				},
			},
			login: {
				title: "Login",
				form: {
					email: "Email",
					password: "Password",
				},
				buttons: {
					submit: "Enter",
					register: "Don't have an account? Register!",
				},
			},
			resetPassword: {
				title: "Reset Password",
				toasts: {
					emailSent: "Email sent successfully!",
					emailNotFound: "Email not found!",
					passwordUpdated: "Password updated successfully!",
				},
				formErrors: {
					email: {
						required: "Email is required",
						invalid: "Invalid email",
					},
					newPassword: {
						required: "New password is required",
						matches:
							"Your password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.",
					},
					confirmPassword: {
						required: "Password confirmation is required",
						matches: "Passwords do not match",
					},
				},
				form: {
					email: "Email",
					verificationCode: "Verification code",
					newPassword: "New password",
					confirmPassword: "Confirm new password",
				},
				buttons: {
					submitEmail: "Send email",
					submitPassword: "Reset password",
					back: "Don't have an account? Register!",
				},
			},
			dashboard: {
				toasts: {
					selectFilterError: "Set the filter",
					userChartError: "Error getting conversation information",
					dateChartError: "Error getting conversation information",
				},
				filters: {
					initialDate: "Initial Date",
					finalDate: "Final Date",
					filterType: {
						title: "Filter Type",
						options: {
							perDate: "Filter by Date",
							perPeriod: "Filter by Period",
						},
						helper: "Select the desired filter type",
					},
				},
				periodSelect: {
					title: "Period",
					options: {
						none: "None selected",
						last3: "Last 3 days",
						last7: "Last 7 days",
						last15: "Last 15 days",
						last30: "Last 30 days",
						last60: "Last 60 days",
						last90: "Last 90 days",
					},
					helper: "Select the desired period",
				},
				counters: {
					inTalk: "In conversation",
					waiting: "Waiting",
					finished: "Finished",
					newContacts: "New contacts",
					averageTalkTime: "Average Talk Time",
					averageWaitTime: "Average Wait Time",
				},
				buttons: {
					filter: "Filter",
				},
				onlineTable: {
					ratingLabel: "1 - Unsatisfied, 2 - Satisfied, 3 - Very Satisfied",
					name: "Name",
					ratings: "Ratings",
					avgSupportTime: "Average Support Time",
					status: "Status (Current)",
				},
				charts: {
					user: {
						label: "Conversation Chart",
						title: "Total Conversations by Users",
						start: "Start",
						end: "End",
						filter: "Filter",
					},
					date: {
						label: "Conversation Chart",
						title: "Total",
						start: "Start",
						end: "End",
						filter: "Filter",
					},
				},
			},
			auth: {
				toasts: {
					success: "Login successfully!",
				},
			},
			connections: {
				title: "Connections",
				toasts: {
					deleted: "WhatsApp connection deleted sucessfully!",
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage: "Are you sure? It cannot be reverted.",
					disconnectTitle: "Disconnect",
					disconnectMessage: "Are you sure? You'll need to read QR Code again.",
				},
				buttons: {
					add: "Add WhatsApp",
					disconnect: "Disconnect",
					tryAgain: "Try Again",
					qrcode: "QR CODE",
					newQr: "New QR CODE",
					connecting: "Connectiing",
				},
				toolTips: {
					disconnected: {
						title: "Failed to start WhatsApp session",
						content:
							"Make sure your cell phone is connected to the internet and try again, or request a new QR Code",
					},
					qrcode: {
						title: "Waiting for QR Code read",
						content:
							"Click on 'QR CODE' button and read the QR Code with your cell phone to start session",
					},
					connected: {
						title: "Connection established",
					},
					timeout: {
						title: "Connection with cell phone has been lost",
						content:
							"Make sure your cell phone is connected to the internet and WhatsApp is open, or click on 'Disconnect' button to get a new QRcode",
					},
				},
				table: {
					name: "Name",
					status: "Status",
					lastUpdate: "Last Update",
					default: "Default",
					actions: "Actions",
					session: "Session",
				},
			},
			whatsappModal: {
				title: {
					add: "Add WhatsApp",
					edit: "Edit WhatsApp",
				},
				form: {
					name: "Name",
					default: "Default",
				},
				buttons: {
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel",
				},
				success: "WhatsApp saved successfully.",
			},
			qrCode: {
				message: "Read QrCode to start the session",
			},
			contacts: {
				title: "Contacts",
				toasts: {
					deleted: "Contact deleted sucessfully!",
				},
				searchPlaceholder: "Search ...",
				confirmationModal: {
					deleteTitle: "Delete",
					importTitlte: "Import contacts",
					deleteMessage:
						"Are you sure you want to delete this contact? All related tickets will be lost.",
					importMessage: "Do you want to import all contacts from the phone?",
				},
				buttons: {
					import: "Import Contacts",
					add: "Add Contact",
				},
				table: {
					name: "Name",
					whatsapp: "WhatsApp",
					email: "Email",
					actions: "Actions",
				},
			},
			contactModal: {
				title: {
					add: "Add contact",
					edit: "Edit contact",
				},
				form: {
					mainInfo: "Contact details",
					extraInfo: "Additional information",
					name: "Name",
					number: "Whatsapp number",
					email: "Email",
					extraName: "Field name",
					extraValue: "Value",
				},
				buttons: {
					addExtraInfo: "Add information",
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel",
				},
				success: "Contact saved successfully.",
			},
			queueModal: {
				title: {
					add: "Add queue",
					edit: "Edit queue",
				},
				form: {
					name: "Name",
					color: "Color",
					greetingMessage: "Greeting Message",
				},
				buttons: {
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel",
				},
			},
			userModal: {
				title: {
					add: "Add user",
					edit: "Edit user",
				},
				form: {
					name: "Name",
					email: "Email",
					password: "Password",
					profile: "Profile",
				},
				buttons: {
					okAdd: "Add",
					okEdit: "Save",
					cancel: "Cancel",
				},
				success: "User saved successfully.",
			},
			chat: {
				noTicketMessage: "Select a ticket to start chatting.",
			},
			ticketsManager: {
				buttons: {
					newTicket: "New",
				},
			},
			ticketsQueueSelect: {
				placeholder: "Queues",
			},
			tickets: {
				toasts: {
					deleted: "The ticket you were on has been deleted.",
				},
				notification: {
					message: "Message from",
				},
				tabs: {
					open: { title: "Inbox" },
					closed: { title: "Resolved" },
					search: { title: "Search" },
				},
				search: {
					placeholder: "Search tickets and messages.",
				},
				buttons: {
					showAll: "All",
				},
			},
			transferTicketModal: {
				title: "Transfer Ticket",
				fieldLabel: "Type to search for users",
				noOptions: "No user found with this name",
				buttons: {
					ok: "Transfer",
					cancel: "Cancel",
				},
			},
			ticketsList: {
				pendingHeader: "Queue",
				assignedHeader: "Working on",
				noTicketsTitle: "Nothing here!",
				noTicketsMessage: "No tickets found with this status or search term.",
				buttons: {
					accept: "Accept",
				},
			},
			newTicketModal: {
				title: "Create Ticket",
				fieldLabel: "Type to search for a contact",
				add: "Add",
				buttons: {
					ok: "Save",
					cancel: "Cancel",
				},
			},
			mainDrawer: {
				listItems: {
					dashboard: "Dashboard",
					connections: "Connections",
					tickets: "Tickets",
					contacts: "Contacts",
					queues: "Queues",
					administration: "Administration",
					users: "Users",
					settings: "Settings",
				},
				appBar: {
					user: {
						profile: "Profile",
						logout: "Logout",
					},
				},
			},
			notifications: {
				noTickets: "No notifications.",
			},
			queues: {
				title: "Queues",
				table: {
					name: "Name",
					color: "Color",
					greeting: "Greeting message",
					actions: "Actions",
				},
				buttons: {
					add: "Add queue",
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage:
						"Are you sure? It cannot be reverted! Tickets in this queue will still exist, but will not have any queues assigned.",
				},
			},
			queueSelect: {
				inputLabel: "Queues",
			},
			users: {
				title: "Users",
				table: {
					name: "Name",
					email: "Email",
					profile: "Profile",
					actions: "Actions",
				},
				buttons: {
					add: "Add user",
				},
				toasts: {
					deleted: "User deleted sucessfully.",
				},
				confirmationModal: {
					deleteTitle: "Delete",
					deleteMessage:
						"All user data will be lost. Users' open tickets will be moved to queue.",
				},
			},
			settings: {
				success: "Settings saved successfully.",
				title: "Settings",
				settings: {
					userCreation: {
						name: "User creation",
						options: {
							enabled: "Enabled",
							disabled: "Disabled",
						},
					},
				},
			},
			messagesList: {
				header: {
					assignedTo: "Assigned to:",
					buttons: {
						return: "Return",
						resolve: "Resolve",
						reopen: "Reopen",
						accept: "Accept",
					},
				},
			},
			messagesInput: {
				placeholderOpen: "Type a message",
				placeholderClosed: "Reopen or accept this ticket to send a message.",
				signMessage: "Sign",
			},
			contactDrawer: {
				header: "Contact details",
				buttons: {
					edit: "Edit contact",
				},
				extraInfo: "Other information",
			},
			ticketOptionsMenu: {
				delete: "Delete",
				transfer: "Transfer",
				confirmationModal: {
					title: "Delete ticket #",
					titleFrom: "from contact ",
					message: "Attention! All ticket's related messages will be lost.",
				},
				buttons: {
					delete: "Delete",
					cancel: "Cancel",
				},
			},
			confirmationModal: {
				buttons: {
					confirm: "Ok",
					cancel: "Cancel",
				},
			},
			messageOptionsMenu: {
				delete: "Delete",
				reply: "Reply",
				confirmationModal: {
					title: "Delete message?",
					message: "This action cannot be reverted.",
				},
			},
			backendErrors: {
				ERR_INTERNAL_SERVER_ERROR: "An unexpected error has occurred. Please try again later",
				ERR_NO_OTHER_WHATSAPP:
					"There must be at lest one default WhatsApp connection.",
				ERR_NO_DEF_WAPP_FOUND:
					"No default WhatsApp found. Check connections page.",
				ERR_WAPP_NOT_INITIALIZED:
					"This WhatsApp session is not initialized. Check connections page.",
				ERR_WAPP_CHECK_CONTACT:
					"Could not check WhatsApp contact. Check connections page.",
				ERR_WAPP_INVALID_CONTACT: "This is not a valid whatsapp number.",
				ERR_WAPP_DOWNLOAD_MEDIA:
					"Could not download media from WhatsApp. Check connections page.",
				ERR_INVALID_CREDENTIALS: "Authentication error. Please try again.",
				ERR_USER_DONT_EXISTS: "User does not exist.",
				ERR_SENDING_WAPP_MSG:
					"Error sending WhatsApp message. Check connections page.",
				ERR_DELETE_WAPP_MSG: "Couldn't delete message from WhatsApp.",
				ERR_OTHER_OPEN_TICKET:
					"There's already an open ticket for this contact.",
				ERR_SESSION_EXPIRED: "Session expired. Please login.",
				ERR_USER_CREATION_DISABLED:
					"User creation was disabled by administrator.",
				ERR_NO_PERMISSION: "You don't have permission to access this resource.",
				ERR_DUPLICATED_CONTACT: "A contact with this number already exists.",
				ERR_NO_SETTING_FOUND: "No setting found with this ID.",
				ERR_NO_CONTACT_FOUND: "No contact found with this ID.",
				ERR_NO_TICKET_FOUND: "No ticket found with this ID.",
				ERR_NO_USER_FOUND: "No user found with this ID.",
				ERR_NO_WAPP_FOUND: "No WhatsApp found with this ID.",
				ERR_CREATING_MESSAGE: "Error while creating message on database.",
				ERR_CREATING_TICKET: "Error while creating ticket on database.",
				ERR_FETCH_WAPP_MSG:
					"Error fetching the message in WhtasApp, maybe it is too old.",
				ERR_QUEUE_COLOR_ALREADY_EXISTS:
					"This color is already in use, pick another one.",
				ERR_WAPP_GREETING_REQUIRED:
					"Greeting message is required if there is more than one queue.",
			},
		},
	},
};

export { messages };
