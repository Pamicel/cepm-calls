import os
from twilio.rest import Client

account_sid = os.environ["TWILIO_SID"]
auth_token = os.environ["TWILIO_AUTH"]

client = Client(account_sid, auth_token)

call = client.calls.create(
    to=os.environ["MY_PHONE_NUMBER"],
    from_=os.environ["UK_PHONE_NUMBER"],
    url="http://demo.twilio.com/docs/voice.xml"
)

print(call.sid)