enum EventTypes {
	Create,
	Update,
	Delete,
	Clone,
}

interface IPipeEvent {
	timestamp: number;
	action: EventTypes;
	aggregate: string;
	aggregateId: string;
	payload?: any;
}

const eventReducer = (previousValue: IPipeEvent, currentValue: IPipeEvent) => {
	return Object.assign(previousValue?.payload || previousValue, currentValue.payload);
};

const events: IPipeEvent[] = [
	{ action: EventTypes.Create, timestamp: 1638251255857, aggregate: 'nft-catalog', aggregateId: 'abc123', payload: { title: 'Events NFT', owner: 'martin' } },
	{ action: EventTypes.Update, timestamp: 1638261255857, aggregate: 'nft-catalog', aggregateId: 'abc123', payload: { price: 1.5 } },
	{ action: EventTypes.Update, timestamp: 1638271255857, aggregate: 'nft-catalog', aggregateId: 'abc123', payload: { currency: 'eth' } },
	{ action: EventTypes.Update, timestamp: 1638281255857, aggregate: 'nft-catalog', aggregateId: 'abc123', payload: { comment: 'eth is money!' } },
];

const materializeObject = (events: IPipeEvent[]) => {
	const materialzied: any = events.reduce(eventReducer);
	Object.keys(materialzied).forEach((key) => materialzied[key] === undefined && delete materialzied[key]);

	return materialzied;
};

console.log(materializeObject(events));
