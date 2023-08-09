const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'niranjan-raju007',
        mongodb_password: 'ka05mt2024',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-site'
      }
    }
  }

  return {
    env: {
      mongodb_username: 'niranjan-raju007',
      mongodb_password: 'ka05mt2024',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-site'
    }
  }
}