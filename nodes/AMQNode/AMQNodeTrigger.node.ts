import {
	INodeType,
	INodeTypeDescription,
	ITriggerFunctions
} from 'n8n-workflow';

export class AMQNodeTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'AMQ Node Trigger',
		name: 'AMQNodeTrigger',
		icon: 'file:amq.png',
		group: ['trigger'],
		version: 1,
		description: 'Triggers for AMQP',
		defaults: {
			name: 'AMQ Node Trigger',
		},
		credentials: [
			{
				name: 'AMQNodeAPI',
				required: true,
			}
		],
		inputs: [],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Topic',
				name: 'topic',
				type: 'string',
				required: true,
				default: '',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				required: true,
				default: '',
			},
			{
				displayName: 'Selector',
				name: 'selector',
				type: 'string',
				required: true,
				default: '',
			},
			{
				displayName: 'Number Of Workers',
				name: 'workersNumber',
				type: 'number',
				required: true,
				default: '',
			},
		],
	};

	async trigger(this: ITriggerFunctions) {

		const topic = this.getNodeParameter('topic', 0) as string;
		const name = this.getNodeParameter('name', 0) as string;
		const selector = this.getNodeParameter('selector', 0) as string;
		const workersNumber = this.getNodeParameter('workersNumber', 0) as number;

		// Simulate connecting to AMQP or similar logic
		console.log(`Subscribed to topic: ${topic} with option: ${name}`);

		// Start listening to external events here (e.g. AMQP connection)
		// For now, we simulate an incoming message
		const emit = () => {
			this.emit([[
				{
					json: {
						message: 'Fake message',
						topic,
						name,
						selector,
						workersNumber
					},
				},
			]]);
		};

		// Simulate a periodic trigger (for example purposes)
		const interval = setInterval(emit, 4000);

		return {
			closeFunction: async () => {
				clearInterval(interval);
			},
		};
	}
}
