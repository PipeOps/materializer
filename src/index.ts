import EventTypes from './EventTypes';
import IPipeEvent from './PipeEvent';
import eventsReducer from './reducers/EventsReducer';

const events: IPipeEvent[] = [
	{ action: EventTypes.Create, timestamp: 1638251255857, aggregate: 'nft-catalog', aggregateId: 'abc123', payload: { title: 'Events NFT', owner: 'martin' } },
	{ action: EventTypes.Update, timestamp: 1638261255857, aggregate: 'nft-catalog', aggregateId: 'abc123', payload: { price: 1.5 } },
	{ action: EventTypes.Update, timestamp: 1638271255857, aggregate: 'nft-catalog', aggregateId: 'abc123', payload: { currency: 'eth' } },
	{ action: EventTypes.Update, timestamp: 1638281255857, aggregate: 'nft-catalog', aggregateId: 'abc123', payload: { comment: 'eth is money!' } },
];

const materializeObject = (events: IPipeEvent[]) => {
	const materialzied: any = events.reduce(eventsReducer);
	Object.keys(materialzied).forEach((key) => materialzied[key] === undefined && delete materialzied[key]);

	return materialzied;
};

console.log(materializeObject(events));
