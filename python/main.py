import sentry_sdk
from jokes_server import app

sentry_sdk.init(
    dsn="<YOUR DSN GOES HERE>",
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    traces_sample_rate=1.0,
    # Set profiles_sample_rate to 1.0 to profile 100%
    # of sampled transactions.
    # We recommend adjusting this value in production.
    profiles_sample_rate=1.0,
)

if __name__ == '__main__':
    app.run(debug=True)