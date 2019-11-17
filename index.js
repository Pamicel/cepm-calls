const express = require('express');
const xml = require('xml');
const app = express();
const port = 1234;
const VoiceResponse = require('twilio').twiml.VoiceResponse;

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/twiml/expressions', (req, res) => {
    res.set('Content-Type', 'text/xml');
    const response = new VoiceResponse({ language: 'fr-FR' });
    response.say('Bonjour,');

// response.say('Vous êtes en connexion avec votre Centre Évaluatif Post-Mortem.');
// Cet appel est lié à votre immatière. Pour effectuer le calibrage entre votre immatière et la Grande Suite, nous vous invitons à écouter une courte série d'expressions erronées,
// <pause>
// - Il ne faut pas jeter mémé dans l'eau du bain
// <pause>
// - Quand le chien aboie tous les chats sont noirs
// <pause>
// - Qui casse un oeuf casse un boeuf
// <pause>
// - Il ne faut pas tenter le diable par la queue
// <pause>
// - On attire pas les mouches avec des abeilles
// <pause>
// - Qui sème le bon vent
// <pause>
// Le calibrage est désormais terminé, merci pour votre coopération, nous vous souhaitons une excellente traversée.
    const say = response.say({
        voice: 'Polly.Joanna'
    }, 'Hi');
    say.ssmlBreak({
        strength: 'x-weak',
        time: '100ms'
    });
    say.ssmlEmphasis({
        level: 'moderate'
    }, 'Words to emphasize');
    say.ssmlP('Words to speak');
    say.addText('aaaaaa')
    say.ssmlPhoneme({
        alphabet: 'x-sampa',
        ph: 'pɪˈkɑːn'
    }, 'Words to speak');
    say.addText('bbbbbbb')
    say.ssmlProsody({
        pitch: '-10%',
        rate: '85%',
        volume: '-6dB'
    }, 'Words to speak');
    say.ssmlS('Words to speak');
    say.ssmlSayAs({
        'interpret-as': 'spell-out'
    }, 'Words to speak');
    say.ssmlSub({
        alias: 'alias'
    }, 'Words to be substituted');
    say.ssmlW('Words to speak');
    res.send(response.toString());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));