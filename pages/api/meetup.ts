import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb';

export default async function Handler (req: NextApiRequest, res: NextApiResponse) {
  // if (req.method === 'GET') {
  //   return res.status(200).json({ name: 'This is some returned value from your dear api handler' })
  // }
  
  if (req.method === 'GET') {
    const data = {
      id: "meetup01",
      title: "Awesome Meetup",
      image:
        "https://wkassets-production.s3.ap-east-1.amazonaws.com/styles/field_hero_images/s3/wkcda-tower.jpg?h=d23e7ba4&itok=IHyTkUbu",
      address: "Hong Kong",
      description: "An awesome meetup in October",
    };

    const client = await MongoClient.connect('mongodb+srv://admin:7piUoEtgZFfnDQmR@meetup-nextjs.cxokd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    const db = client.db();

    const meetupCollections = db.collection('meetups');

    const result = await meetupCollections.insertOne(data);

    console.log(result);

    client.close();
    return res.status(200).json(result)
  }
}