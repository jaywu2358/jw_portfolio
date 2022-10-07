import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: '9x0e6xm8',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skn0d3ys9dFeEozGu1auyjTpW5PB3gBl0MAHZQ63Hdfk7wqrmuDn51ySkO9WRtLNgo2YaqjyZ0niqFBp1nxNlj9ivXKvF37TlT6XcmZ9D1A3ptD1zGzIoJofQ4aAbkkNtRkT0ADRMTsPiKzxc0BRYsAlsStyAr3pMIKiTfxVVUurFOkiSi0I'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)