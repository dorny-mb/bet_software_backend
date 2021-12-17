module.exports = ({ env }) => ({
  ...(env("AWS_ACCESS_KEY_ID") && {
    email: {
      provider: "amazon-ses",
      providerOptions: {
        key: env("AWS_ACCESS_KEY_ID"),
        secret: env("AWS_SECRET_ACCESS_KEY"),
        amazon: `https://email.${env("AWS_REGION")}.amazonaws.com`,
      },
      // optionally set default from & default reply to
      // settings: {
      //   defaultFrom: env("EMAIL_DEFAULT_FROM"),
      //   defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
      // },
    },
    upload: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET_NAME"),
        },
      },

    },
  }),
})
