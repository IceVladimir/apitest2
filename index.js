const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

app.get('/', (req, res) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
})

app.post('/', function(req, res) {


(async() => {
    await characterAI.authenticateWithToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDg5NTIzMzEyMzIwNzQzMzk3MTAiLCJhdWQiOlsiaHR0cHM6Ly9hdXRoMC5jaGFyYWN0ZXIuYWkvIiwiaHR0cHM6Ly9jaGFyYWN0ZXItYWkudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY4NDY5MDc5NCwiZXhwIjoxNjg3MjgyNzk0LCJhenAiOiJkeUQzZ0UyODFNcWdJU0c3RnVJWFloTDJXRWtucVp6diIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.Tpo2lITKmAhITYpWa_XSqr0-6jYL8tgyyIxtzKaTbzaFu-bL08J5UjzQRWos2aEfSNJtR25zuhIcog2ngt9Amoxf515g3LLALQwZFo08ocKgFBtJmBT7YlctOJ_tl7yU1BGvjErUt3ORkqs1CE7Q8rskcbDJnNrhs1BvljyfgLKQr1iT3WsD8F0xFUAc6VA2GIeJw-BTU4pclaVYWayxrb7VQ-7-Mr_fhmtcX8lb0hRjLumla3FGWFfBZVozsfD-O6X_Xheg7qjB27G3ekaI-wzLlbeyeraL0-rmpw2AsXGSfhK9Umwsv6V2XxyI2qJBFe9AQ-I5_I1Axua-0ePLnA");

    const characterId = "v3lyisRb7INyd5BUdUKEKS1-MUTBom9dY9qV9-2ioTE"

    const chat = await characterAI.createOrContinueChat(characterId);
    const response = await chat.sendAndAwaitResponse(req.body.msg, true);

  res.send({
    'Answer': response.text,
  });
})();

});

app.listen(process.env.PORT || 3000)