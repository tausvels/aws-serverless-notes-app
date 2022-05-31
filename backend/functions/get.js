import dynamodb from "../util/dynamodb";
import handler from "../util/handler";

export const main = handler(async (event) => {

  const params = {
    TableName: process.env.TABLE_NAME,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    Key: {
      userId: '123',
      noteId: event.pathParameters.id
    },
  };

  const result = await dynamodb.get(params);
  if (!result) {
    throw new Error('Item not found')
  }
  return result.Item

});