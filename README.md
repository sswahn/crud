# Dynamo

This library simplifies common DynamoDB CRUD operations, providing a seamless and intuitive experience.  

## Installation  
Install using npm.  
```bash
npm install @sswahn/dynamo
```

## Usage  

### Import
```javascript
import dynamo from '@sswahn/dynamo'
```

### Create
Add items to your DynamoDB table with ease. The library automatically handles data types, making it simple to persist JavaScript objects in DynamoDB.
```javascript
const response = await dynamo.create(data)
```  

### Read
Retrieve items from your DynamoDB table effortlessly. Optionally, set a limit for the scan to control the number of returned items.
```javascript
const response = await dynamo.read(limit)
```  

### Update
Seamlessly update attributes of existing items in your DynamoDB table. Specify the attributes to update and the key of the item to modify. 
```javascript
const response = await dynamo.update(data, key)
```

### Remove
Effortlessly delete items from your DynamoDB table. Provide the key of the item to remove.
```javascript
const response = await dynamo.remove(key)
```  

## License
Dynamo is [MIT Licensed](https://github.com/sswahn/dynamo/blob/main/LICENSE)
