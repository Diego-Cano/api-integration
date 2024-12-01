const { Client } = require('@notionhq/client');
require('dotenv').config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function listDatabases() {
    const response = await notion.search({
        filter: { property: 'object', value: 'database' },
    });
    console.log('Accessible Databases:', response.results);
}

listDatabases();


const databaseId = '13e92d12-a631-801e-85f5-decf2ee1f8ec'; // Replace with your actual database_id

async function getDatabase() {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
        });
        console.log(response);
    } catch (error) {
        console.error('Error fetching Notion database:', error.body);
    }
}

getDatabase();





