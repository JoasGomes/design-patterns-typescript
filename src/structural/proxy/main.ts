import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('joas', 'joasvitor');
  console.log('levará 2 segundos');
  console.log(await user.getAddresses());
}

clientCode();
