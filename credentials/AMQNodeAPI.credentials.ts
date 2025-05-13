import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AMQNodeAPI implements ICredentialType {
	name = 'AMQNodeAPI';
	displayName = 'AMQ Node API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'Hostname',
			name: 'hostname',
			type: 'string',
			placeholder: 'e.g. localhost',
			default: '',
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 5672,
		},
		{
			displayName: 'User',
			name: 'username',
			type: 'string',
			placeholder: 'e.g. guest',
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			placeholder: 'e.g. guest',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Transport Type',
			name: 'transportType',
			type: 'string',
			placeholder: 'e.g. tcp',
			default: '',
			hint: 'Optional transport type to use, either tcp or tls',
		},
	];
	authenticate = {
		type: 'generic',
		properties: {
			qs: {
				'api_key': '={{$credentials.apiKey}}'
			}
		},
	} as IAuthenticateGeneric;
}