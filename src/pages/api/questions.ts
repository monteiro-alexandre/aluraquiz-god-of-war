import { NextApiRequest, NextApiResponse } from 'next';

import questions from '../../data/questions.json';

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
): any {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  );

  response.status(200).json(questions);
}
