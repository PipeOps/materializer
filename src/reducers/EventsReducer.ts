import IPipeEvent from '../PipeEvent';

export default function eventsReducer(previousValue: IPipeEvent, currentValue: IPipeEvent) {
	return Object.assign(previousValue?.payload || previousValue, currentValue.payload);
}
