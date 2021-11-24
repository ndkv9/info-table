export const mockData = {
  projects: {
    data: [
      {
        id: '01fa742c-b2d0-416a-9394-a0a5dc8bc13e',
        timestamp: new Date('2020/2/15').getTime(),
        diff: [
          {
            field: 'name',
            oldValue: 'Angrier Birds',
            newValue: 'Angry Birds 2',
          },
        ],
      },
      {
        id: '7ba38998-0247-4de9-a3d8-e20cf736e834',
        timestamp: new Date('2020/2/14').getTime(),
        diff: [
          { field: 'name', oldValue: 'Angry Birds', newValue: 'Angrier Birds' },
        ],
      },
      {
        id: 'c72d77f1-6e0b-473e-a600-7295d0822e54',
        timestamp: new Date('2020/2/16').getTime(),
        diff: [
          {
            field: 'name',
            oldValue: 'Angry Birds 2',
            newValue: 'Angry Birds 2: The sequel',
          },
        ],
      },
      {
        id: '90b9e1ad-7556-44f8-8278-c723824de782',
        timestamp: new Date('2020/2/17').getTime(),
        diff: [
          {
            field: 'name',
            oldValue: 'Angry Birds 2: The sequel',
            newValue: 'Angry Birds 2: The return of the birds',
          },
        ],
      },
      {
        id: 'fcd064f9-687e-4bd4-9c8f-93361610cc58',
        timestamp: new Date('2020/2/18').getTime(),
        diff: [
          {
            field: 'name',
            oldValue: 'Angry Birds 2: The return of the birds',
            newValue: 'Angry Birds 2',
          },
        ],
      },
    ],
    isLoading: false,
    isDESC: true,
    isError: false,
    isFetchedAll: false,
  },
}
