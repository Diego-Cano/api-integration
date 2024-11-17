const axios = require('axios');
require('dotenv').config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function fetchGitHubUser() {
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });
    console.log('GitHub User:', response.data);
  } catch (error) {
    console.error('Error fetching GitHub user:', error.response?.data || error.message);
  }
}

fetchGitHubUser();
