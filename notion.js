const { Client } = require('@notionhq/client');
require('dotenv').config();

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

async function fetchDatabase() {
    try {
        const response = await notion.databases.query({ database_id: databaseId });
        console.log('Database fetched successfully:', response);
    } catch (error) {
        console.error('Error fetching Notion database:', error.body);
    }
}

console.log("Database ID:", databaseId);
console.log("Notion API Token:", process.env.NOTION_API_TOKEN);

fetchDatabase();
