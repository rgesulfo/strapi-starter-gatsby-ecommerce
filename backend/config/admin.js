module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '983b66bafbe6399c80e3791ca6688229'),
  },
});
