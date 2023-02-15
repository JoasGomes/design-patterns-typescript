import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlVolume } from './remote-control/remove-control-with-volume';

export function clientCode(
  abstration: RemoteControl | RemoteControlVolume,
): void {
  abstration.togglePower();

  // type guard
  if (!('volumeUp' in abstration)) return;

  abstration.volumeUp();
  abstration.volumeUp();
  abstration.volumeDown();
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlVolume(tv);
clientCode(tvRemoteControl);
