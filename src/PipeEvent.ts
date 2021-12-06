import EventTypes from './EventTypes';

export default interface IPipeEvent {
	timestamp: number;
	action: EventTypes;
	aggregate: string;
	aggregateId: string;
	payload?: any;
}
