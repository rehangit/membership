'use strict';
const db = require('./db');
const Membership = require('./models/membership')

module.exports.getMembership = async (event, context) => {
  await db();

  const membership = await Membership.findById(event.pathParameters.id);
  return {
    statusCode: 200,
    body: JSON.stringify(membership),
  };
};


module.exports.createMembership = async (event, context) => {
  await db();

//  console.log(event);
  try {
    const membership = await Membership.create(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(membership),
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      message: err.message,
    }
  }
};
