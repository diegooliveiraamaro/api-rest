import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

async function accessSecret() {
    const client = new SecretManagerServiceClient();

    const secretName = 'projects/35220706239/secrets/Teste_Acesso_DB/versions/1';

    const [version] = await client.accessSecretVersion({
        name: secretName,
    });

    const payload = version.payload.data.toString('utf8');

    console.log(`Payload: ${payload}`);
}

accessSecret().catch('teste erro secret');
