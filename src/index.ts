enum EventTypes {
	Create,
	Update,
	Delete,
	Clone,
}

interface IPipeEvent {
	action: EventTypes;
	payload?: any;

	// Should have timestamp, authorId etc as well
	// timestamp: Date;
	// objectId: UUID;
	// authorId: UUID;
}

const eventReducer = (previousValue: IPipeEvent, currentValue: IPipeEvent) => {
	return Object.assign(previousValue?.payload || previousValue, currentValue.payload);
};

const events: IPipeEvent[] = [
	{ action: EventTypes.Create, payload: { title: 'Events NFT', owner: 'martin' } },
	{ action: EventTypes.Update, payload: { price: 1.5 } },
	{ action: EventTypes.Update, payload: { currency: 'eth' } },
	{ action: EventTypes.Update, payload: { comment: 'eth is money!' } },
];

const materializeObject = (events: IPipeEvent[]) => {
	const materialzied: any = events.reduce(eventReducer);
	Object.keys(materialzied).forEach((key) => materialzied[key] === undefined && delete materialzied[key]);

	return materialzied;
};

console.log(materializeObject(events));
