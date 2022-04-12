/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = nextConfig
  

module.exports = {
    env: {
        'MYSQL_HOST': '127.0.0.1',
        'MYSQL_PORT':'3306',
        'MYSQL_DATABASE':'posts',
        'MYSQL_USER:':'root',
        'MYSQL_PASSWORD':'253741Thai',
    }
}