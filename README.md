# Indexed DB Search
This project is exploration of IndexedDB for locally storing data and using it's ability to index on any key, providing advantage in terms of processing and speed when applying any lower and/or upper bound on the key.


## How to play
- `git clone git@github.com:murtazazaidi/indexed-db-search.git`
- `cd indexed-db-search`
- `yarn`
- (optional) make any changes in configuration. `src/config/constants.js`
- `yarn start`


## IndexedDB
IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While Web Storage is useful for storing smaller amounts of data, it is less useful for storing larger amounts (~ 50MB, compare that to 5 MB of localStorage and 5 MB of sessionStorage) of structured data. IndexedDB provides a solution.
[Read More](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)


## What to expect
It's simple React based SPA which `generates` some mock data (record) which are then stored in IndexedDB and served from there for any subsequent calls.

User is able to see paginated data in the table and can search based on departure date. On search, application applies lower bound on `departureTime` key on which we previously added an index in IndexedDB. Applying lower bound results in all the records where departureTime is greater than the entered time.

Similary we can clear the filter by discarding the lower bound data and refetching the list from IndexedDB.

Redux is used only for a little cleaner state management. Pagination is also handled with Redux and a self written Pagination component. (Didn't use Ant Design Table's pagination options)


## What not to expect
This small project is created only to explore IndexedDB API and should not be used as reference for any implementation. It is not tuned for performance. Performance patterns depend on individual use case.


## Possible improvements for other use cases
- We can bring only paginated data from IndexedDB (using Cursors) rather than copying everything in memory or may be keeping it in the memory would prove to be more efficient.
- Integration with React can also be done using Higher Order Components. HOC will wrap the children and provide them data from IndexedDB asynchronously.
- IndexedDB can be provided as a Singleton with it's own interface.
