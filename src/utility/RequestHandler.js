import axios from 'axios';

export async function retrieveAddressData(asset, address, dateFrom, dateTo, threshold) {
    const post = {
        asset: asset,
        address: address,
        date_from: dateFrom,
        date_to: dateTo,
        threshold: threshold
    };

    // we have to have another request here for a token because of security concerns, but it's not required now
    // const headers = {
    //     'Authorization: Bearer <token>',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    //     'Access-Control-Allow-Headers': 'Content-Type'
    // };

    axios.post('http://localhost:8086/data/processing', post)
        .then(response => console.log(response))
        .catch(error => {
            console.error('There was an error!', error);
        });

    return address;
}