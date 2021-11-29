# Materializer

Materialize objects from stream of events ⚡

Turn a stream of events into an object, for example the array of events here:

```typescript
const events: IPipeEvent[] = [
	{ action: EventTypes.Create, payload: { title: 'Events NFT', owner: 'martin' } },
	{ action: EventTypes.Update, payload: { price: 1.5 } },
	{ action: EventTypes.Update, payload: { currency: 'eth' } },
	{ action: EventTypes.Update, payload: { comment: 'eth is money!' } },
];
```

Becomes a simple JSON object:

```JSON
{
	title: 'Events NFT',
	owner: 'martin',
	price: 1.5,
	currency: 'eth',
	comment: 'eth is money!'
}
```
